# Next.js Workshop

> Um sicherzustellen, dass während des Workshops alles funktioniert, möchte ich dich bitten, die Packages zu installieren und das (noch leere) Frontend einmal zu starten.
>
> Das ist insbesondere wichtig, da wir Probleme mit fehlenden Zugriffsrechten, VPN-Einstellungen, Proxies, Firewalls, etc. während des Workshops nicht lösen können.

# Benötigte Tools

- IDE (s.u.)
- Git (zum Klonen des Repositories)
- **Docker** ("nur" zum Starten des Backends, wir machen ansonsten nichts mit Docker)
- **Node.JS**
  - Der Workspace ist mit Node.js in Version 22.14 (TLS-Version) getestet. Ich gehe davon aus, dass neuere Node.JS-Versionen auch funktionieren sollten.
- **Package Manager**
  - Die Packages im Workspace sind mit mit [pnpm](https://pnpm.io/) installiert
  * Wenn du kein pnpm hast, kannst du entweder:
    - pnpm mit "corepack" installieren. Corepack ist in Node.js integriert: https://pnpm.io/installation#using-corepack
    - oder die Pakete mit npm installieren. Das sollte in der Regel auch genauso funktionieren.
  - Ich verwende pnpm, weil es performanter als npm ist und ich das Kommandozeileninterface (CLI) einfacher finde als bei npm.

## Internet-Zugriff

- Bitte führe die folgenden Schritte der Installationsanleitung aus, falls es Probleme mit der Internetzugriff bzw. Zuriffseinschränkungen beim installieren kommt
  - Insbesondere bei Firmen-Laptops gilt:
    - Manchmal sind die Zugänge zu GitHub, npm oder Docker Registry gesperrt (VPN, Firewall,etc.) oder es fehlen Zugriffsrechte zur Installation
    - Denk auch daran, dass sich VPN, Firewall, Proxy etc. außerhalb deiner Firma möglicherweise anders verhalten. Es ist also sinnvoll zu prüfen, ob der Workspace auch außerhalb der Firma funktioniert.
- Wenn der Workspace bei dir korrekt eingerichtet ist, ist es nicht zwingend erforderlich, dass du während des Workshops Zugriff auf Git(hub), die Docker Registry oder die NPM Registry hast.
- Falls wir allerdings während des Workshops unvorhergesehen Updates machen wollen (zum Beispiel um andere Bibliotheken zu installieren), ist es natürlich hilfreich, dass der Zugriff auch während des Workshops funktioniert.

## IDE

- Für den Workshop ist es egal, welche IDE du verwendest.
- Ich empfehle aber, keine neue IDE während des Workshops auszuprobieren, sondern die IDE zu verwenden, die du ohnehin schon verwendest.
- Wenn du noch keine IDE (für die JavaScript-Entwicklung) verwendest, würde ich WebStorm empfehlen (je nachdem, welche Programmiersprache du sonst noch verwendest auch IntelliJ IDEA oder PhpStorm).
  - Diese IDEs gibt es jeweils in einer Testversion, die du für den Workshop verwenden kannst. Sie bringen von Haus aus alles mit, was du für den Workshop benötigst. Du brauchst also keine Plug-ins etc. zu installieren.
    - Du kannst das geklonte Repository-Verzeichnis (s.u.) darin mit `File -> Open` öffnen.

## TypeScript in Webstorm / IntelliJ

- Seit Ende 2023 gibt es eine neue ["TypeScript Engine"](https://blog.jetbrains.com/webstorm/2023/12/try-the-future-typescript-engine-with-the-webstorm-next-program/) in IntelliJ und Webstorm, die per default aber _ausgeschaltet_ ist
- Meiner Erfahrung nach funktioniert der TS Support aber besser, wenn sie _eingeschaltet_ ist. Das Verhalten damit wird wohl auch näher an dem Verhalten von VS Code sein, da IntelliJ nun den "offiziellen" Language Server verwendet und nicht die eigene Implementierung.
- Daher würde ich dir raten, die neue Engine einzuschalten.
  - Dazu musst du in den IntelliJ Settings unter `Languages & Frameworks` -> `TypeScript` die Option `Use types from server` _aktivieren_
    - Mehr dazu: https://www.jetbrains.com/help/idea/typescript-support.html#ws_verify_typescript_across_project

# Einrichten und Starten des Workspaces

## Klonen des Repositories

- Bitte klone das Repository von Github:
  - ```bash
    git clone https://github.com/nextjsreactgraphql/nextjs-intro.git
    ```

## Installation der Packages

- Installiere im Root-Verzeichnis des Repositories die Packages:
  - ```bash
    pnpm install
    ```

## Starten des Frontends

- Im Root-Verzeichnis bitte das Frontend starten.
- Achtung: das Frontend läuft auf Port **20000**. Dieser Port muss also bei dir frei sein.
- ```bash
  pnpm dev
  ```
- Mit **npm**: `npm run dev`
- Wenn das Frontend gestartet ist, kannst du im Browser http://localhost:20000 öffnen
- Es sollte die Ausgabe "Hello Next.js Workshop"-Message angezeigt werden

## Backend starten (per Docker)

Das Backend (mit der GraphQL API) ist nicht Teil dieses Workspaces. Du kannst es mit Docker starten.

- Achtung! Das Backend horcht auf **Port `20080`**. Dieser Port muss bei dir frei sein!
- Zum Starten des Backends folgende Docker Kommandos in einem Terminal ausführen.
  - (Das geht aus jedem beliebigen Verzeichnis und muss nicht im Repository ausgeführt werden)
- ```bash
  docker run --pull always --rm -p 20080:20080 ghcr.io/nilshartmann/ecolify-backend:latest
  ```
- Wenn das Backend gestartet ist, solltest du eine Meldung `Started GraphqlServiceApplication in XXX seconds` im Logfile auf der Konsole finden
  - Während des Workshops bitte das Backend laufen lassen und nicht beenden.
  - Ansonsten kannst du das Backend jederzeit mit `Ctrl+C` _beenden_ und mit den oben genannten Docker Kommandos _erneut starten_
    - Das Backend enthält keine DB o.ä, Starten und Stoppen ist also jederzeit problemlos möglich.
- Um sicherzustellen, dass das Backend auch erreichbar ist, bitte einmal die URL http://localhost:20080 im Browser öffnen.
- Wenn sich dort der GraphQL Explorer ["GraphiQL"](https://github.com/graphql/graphiql/tree/main/packages/graphiql#readme) öffnet, sollte alles funktionieren
  - Um ganz, ganz sicherzustellen, dass alles funktioniert, kannst du zusätzlich einen einfachen GraphQL Query in GraphiQL ausführen
  - Dazu in das linke Textfeld folgenden Query eingeben: `query { hello }` und auf den "Ausführen" Button (Pfeil in der Mitte oben) klicken
  - Als Antwort sollte auf der rechten Seite die GraphQL Antwort erscheinen (`{"hello": "world"}`)

> **Hintergrund: Das `docker run`-Kommando**
>
> Wir verwenden Docker "nur" um das Backend damit zu starten. Für den Workshop brauchst du keine Docker Kenntnisse. Wenn man so will, ist Docker im Workshop ein "Implementierungsdetail", denn aus Anwendungssicht ist nur relevant, dass es dort die GraphQL API gibt, die auf Port 20080 läuft. Hintergrund ist, dass das Backend in Java geschrieben ist, und mit Docker kannst du das fertig gebaute Backend starten, ohne selbst Java etc. installieren und ausführen zu müssen.
>
> Das Kommando `docker run` lädt das Image mit dem fertigen Backend auf deinen Computer und startet es. Das Image trägt den Namen `ghcr.io/nilshartmann/ecolify-backend:latest`, wobei `ghcr.io` bedeutet, dass das Image von der GitHub Container Registry bezogen werden sollen und das `latest` ist eine Art Versions- oder Releasenummer.
>
> - Mit `--pull always` wird ausgedrückt, dass das run-Kommando vor dem Starten der Anwendung in der Docker Reguistry nachschauen soll, ob es eine neuere Version des Images gibt und diese ggf. runter lädt
> - Der Parameter `--rm` bedeutet, dass das Image (genauer der Container) nach der Ausführung wieder gelöscht wird
> - Die `-p`-Angabe gibt an, über welchen Port der Container erreichbar sein soll (in diesem Fall überflüssig, weil der Default-Port verwendet wird. Aber wenn auf deinem Computer der Port 20080 belegt wäre, könnest du z.B. mit der Angabe `-p 20081:20080` das Backend auf Port `20081` starten).
>   - Achtung! Wenn du den Port änderst, müssen auch in der Next.js-Anwendung Anpassungen vorgenommen werden. Sprich mich in diesem Fall bitte an. Das einfachste ist es, wenn Port 20080 bei dir funktioniert.

## ESLint Regeln anpassen

In der ESLint-Konfiguration sind einige Regeln für das Importieren von Modulen eingeschaltet, die während der Entwicklung bzw. während der Übungen irritieren und stören können, insbesondere wenn du kein ESLint-Plug-in für deine IDE verwendest.

Du kannst diese Regeln bei Bedarf abschalten, in dem du in der Datei `eslint.config.mjs` die Konstante `enableImportRules` auf `false` setzt.

## Geschafft!

Wenn das alles läuft, bist du startklar für den Workshop 🥳. Wenn du Fragen oder Probleme hast, melde dich gerne bei mir.

- Weitere Informationen zur Struktur des Workspaces findest du bei Interesse in [`WORKSPACE.md`](./WORKSPACE.md) im Root-Verzeichnis.
