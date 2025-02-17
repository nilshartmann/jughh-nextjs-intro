# Next.js Workshop

> Um sicherzustellen, dass während des Workshops alles funktioniert, möchte ich dich bitten, die Packages zu installieren und das (noch leere) Frontend einmal zu starten.

# IDE

- Für den Workshop ist egal, welche IDE du verwendest, aber ich würde empfehlen, keine neue IDE auszuprobieren, sondern die IDE zu verwenden, die du ohnehin schon verwendest.
- Wenn du noch keine IDE (für die JavaScript-Entwicklung) verwendest, würde ich Webstorm, IntelliJ oder PHPStorm empfehlen (je nachdem, welche Programmiersprache du sonst noch verwendest). Diese IDEs gibt es jeweils in einer Eveluationsversion, die du für den Workshop verwenden kannst. Sie bringen von Haus aus alles mit, was du für den Workshop benötigst. Du brauchst also keine Plug-ins etc. zu installieren.
  - Du kannst das geklonte Repository-Verzeichnis (s.u.) einfach mit `File -> Open` öffnen.

## TypeScript in Webstorm / IntelliJ

- Seit Ende 2023 gibt es eine neue ["TypeScript Engine"](https://blog.jetbrains.com/webstorm/2023/12/try-the-future-typescript-engine-with-the-webstorm-next-program/) in IntelliJ und Webstorm, die per default aber _ausgeschaltet_ ist
- Meiner Erfahrung nach funktioniert der TS Support aber besser, wenn sie _eingeschaltet_ ist. Das Verhalten damit wird wohl auch näher an dem Verhalten von VS Code sein, da IntelliJ nun den "offiziellen" Language Server verwendet und nicht die eigene Implementierung.
- Daher würde ich dir raten, die neue Engine einzuschalten.
  - Dazu musst du in den IntelliJ Settings unter `Languages & Frameworks` -> `TypeScript` die Option `Use types from server` _aktivieren_
    - Mehr dazu: https://www.jetbrains.com/help/idea/typescript-support.html#ws_verify_typescript_across_project

## Node.JS + Package Manager

- Der Workspace ist mit Node.js in Version 22.14 (TLS-Version) getestet. Ich gehe davon aus, dass neuere Node.JS-Versionen auch funktionieren sollten.
- Die Packages werden mit [pnpm](https://pnpm.io/) installiert
- Wenn du kein pnpm hast, kannst du entweder:
  - pnpm mit "corepack" installieren. Corepack ist in Node.js integriert: https://pnpm.io/installation#using-corepack
  - die Pakete mit npm installieren. Das sollte in der Regel auch genauso funktionieren.

# Einrichten und Starten

## Klonen des Repositories

- Bitte klone das Repository von Github:
  - ```bash
    git clone https://github.com/nextjsreactgraphql/react-intro.git
    ```

## Installation der Packages

- Installiere im Root-Verzeichnis des Repositories die Packages:
  - ```bash
    pnpm install
    ```

## Starten des Frontends

- Im Root-Verzeichnis bitte das Frontend starten.
- Achtung: das Frontend läuft auf Port **20000**. Dieser Port muss also frei sein.
- ```bash
  pnpm dev
  ```
- Mit **npm**: `npm run dev`
- Wenn das Frontend gestartet ist, kannst du im Browser http://localhost:20000 öffnen
- Es sollte ein "Hello World"-Message angezeigt werden

## Backend starten (per Docker)

Das Backend (mit der GraphQL API) ist nicht Teil dieses Workspaces. Du kannst es mit Docker starten.

- Achtung! Das Backend horcht auf **Port `20080`**. Dieser Port muss bei dir frei sein!
- Zum Starten des Backends folgende Docker Kommandos in einem Terminal ausführen.
  - (Das geht aus jedem beliebigen Verzeichnis und muss nicht im Repository ausgeführt werden)
- ```bash
  docker pull ghcr.io/nilshartmann/ecolify-backend:latest
  docker run --rm -p 20080:20080 ghcr.io/nilshartmann/ecolify-backend:latest
  ```
- Wenn das Backend gestartet ist, solltest du eine Meldung `Started GraphqlServiceApplication in XXX seconds` im Logfile auf der Konsole finden
- Du kannst das Backend jederzeit mit `Ctrl+C` beenden und mit den oben genannten Docker Kommandos wieder starten
  - Das Backend enthält keine DB o.ä.
- Um sicherzustellen, dass das Backend auch erreichbar ist, bitte einmal die URL http://localhost:20080 im Browser öffnen.
- Wenn sich dort der GraphQL Explorer ["GraphiQL"](https://github.com/graphql/graphiql/tree/main/packages/graphiql#readme) öffnet, sollte alles funktionieren
  - Um ganz, ganz sicherzustellen, dass alles funktioniert, kannst du zusätzlich einen einfachen GraphQL Query in GraphiQL ausführen
  - Dazu in das linke Textfeld folgenden Query eingeben: `query { hello }` und auf den "Ausführen" Button (Pfeil in der Mitte oben) klicken
  - Als Antwort sollte auf der rechten Seite die GraphQL Antwort erscheinen (`{"hello": "world"}`)

## Geschafft!

Wenn das alles läuft, bist du startklar für den Workshop 🥳. Wenn du Fragen oder Probleme hast, melde dich gerne bei mir.

## Hintergrund: GraphQL

Diese Next.js-Anwendung verwendet GraphQL, um ihre Daten von einem Backend zu lesen.

Für unseren Workshop sind alle GraphQL Abfragen bereits fertig. Bei Interesse findest du sie im Verzeichnis `src/queries`. Dort gibt es auch ein Modul (`queries.ts`), das Funktionen exportiert, mit dem die Queries ausgeführt werden können.

Diese "Architektur" ist den Workshop-Anforderungen geschuldet. In einer "echten" Anwendung wäre es wahrscheinlich, dass man die GraphQL-Abfragen nicht zentralisiert, sondern näher an den verwendenden Komponenten ablegt ("Co-Location").

Um für die GraphQL Abfragen TypeScript-Typen zu generieren, wird ein [GraphQL Code Generator](https://the-guild.dev/graphql/codegen) verwendet. Die generierten Typen sind eingecheckt (`src/_generated-graphql-types.ts`), so dass du den Generator normalerweise nicht selbst ausführen musst.

Wenn du aber zum ausprobieren weitere GraphQL Queries schreiben oder bestehende verändern möchtest, musst du nach deinen Änderungen die Typen erneut generieren. Dazu musst du das Script `graphql:codegen` aus der `package.json`-Datei ausführen. Alternativ kannst du auch `graphql:codegen:watch` ausführen. Dann wird ein Prozess gestartet, der weiter läuft und automatisch die Typen neugeneriert, sobald du Änderungen in `.graphql`-Dateien machst.

Wichtig 1: je nach IDE kann es einen Moment dauern, bis IDE die aktualisierte Datei (`src/_generated-graphql-types.ts`) neu einliest und die Typen erkennt. In IntelliJ kann man das neu einlesen zum Beispiel mit "Reload from Disc" manuell ausführen.

Wichtig 2: wenn du den Generator ausführst, greift dieser auf das GraphQL Backend zu. Das heisst, dass das Backend gestartet sein muss.

### Plug-ins für GraphQL

Wenn du mit Anwendungen mit GraphQL entwickelst, empfehle ich folgende Plug-ins (für unseren Workshop _nicht_ notwendig):

- Für IntelliJ, WebStorm: https://plugins.jetbrains.com/plugin/8097-graphql
- Für VS Code: https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql

Das Repository enthält eine Konfigurationsdatei `graphql.config.yml`, die sowohl für IntelliJ/WebStorm als auch für VS Code funktionieren sollte. Sofern das Backend läuft, solltest du dann direkt aus der IDE GraphQL Queries ausführen können. Außerdem hilft dir die IDE beim Formulieren von Queries mit Code Completion basierend auf dem GraphQL Schema des Backends.
