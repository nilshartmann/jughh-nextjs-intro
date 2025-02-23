# Der Übungsworkspace

Hier findest du einige Informationen über den Übungsworkspace.

## Verzeichnis- und Komponentenstruktur im Workspace

### Das app-Verzeichnis

Das `app`-Verzeichnis mit den Routen kann sich in einer Next.js-Anwendung an zwei Stellen befinden: direkt im
Root-Verzeichnis des Projektes oder - wie in diesem Workspace - unterhalb des `src`-Verzeichnisses. Den Ort legt
man beim Anlegen eines neuen Projektes fest. Viele Projekte verwenden `app` direkt auf Top-Level-Ebene (das ist
auch der Default). Für unseren Workshop-Workspace habe ich mich aber für das `src`-Verzeichnis entschieden.
Meiner Meinung nach hat man immer Komponenten und andere JavaScript-Module die nicht so eindeutig in ein Routen-Verzeichnis
gehören.

### Die Verzeichnisstruktur

Die Verzeichnisstruktur hier im Workspace ist **keine Vorlage** für andere Projekte, sie ist nicht optimal.
Im Verzeichnis `src/components` finden sich diverse Komponenten, insbesondere unterhalb von `articlepage` und
`articlelistpage` und `landingpage`, die normalerweise im `app`-Verzeichnis direkt bei den entsprechenden Routen
liegen würden. Dasselbe gilt für einige der `*Layout`-Module. Bei einger großen Anwendung würde man außerdem wahrscheinlich kein zentrales `queries`-Modul (`src/queries/queries.ts`) haben, sondern die Queries auf mehrere, fachlich geschnittene, Module aufteilen
Ich habe die Struktur hier so gewählt, damit wir mit einem (fast) leeren `app`-Verzeichnis starten und Schritt-für-Schritt
die Anwendung entwickeln können, gleichzeitig aber schon etwas fertiges Material haben.

### Die Komponenten

Während des Workshops bauen wir Schritt-für-Schritt eine Anwendung. Du kannst dabei fertige Komponenten benutzen,
die du unterhalb von `src/components` findest und die auch im Storybook "dokumentiert" sind.

Du musst diese Komponenten aber nicht zwingend verwenden. Du kannst in den Übungen auch gerne eigene Komponenten
in deinem eigenen Zuschnitt entwickeln. Vielleicht fällt dir ja auch ein ganz anderes Design ein :-).

**Storybook**

- Wenn du es benötigst, kannst duz Storybook mit `pnpm storybook` starten. Storybook läuft dann auf http://localhost:6006

### Styling

Der Workspace ist mit Tailwind konfiguriert, d.h. du kannst in deinem Code problemlos Tailwind CSS verwenden.

Wenn du kein Tailwind verwenden möchtest, kannst du die `globales.css`-Datei leeren und dein eigenes CSS schreiben.
Next.js unterstützt u.a.:

- globales CSS (https://nextjs.org/docs/app/getting-started/css#global-css)
- CSS Modules (https://nextjs.org/docs/app/getting-started/css#css-modules)

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
