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
liegen würden. Dasselbe gilt für einige der `*Layout`-Module.
Ich habe die Struktur hier so gewählt, damit wir mit einem (fast) leeren `app`-Verzeichnis starten und Schritt-für-Schritt
die Anwendung entwickeln können, gleichzeitig aber schon etwas fertiges Material haben.

### Die Komponenten

Während des Workshops bauen wir Schritt-für-Schritt eine Anwendung. Du kannst dabei fertige Komponenten benutzen,
die du unterhalb von `src/components` findest und die auch im Storybook "dokumentiert" sind.

Du musst diese Komponenten aber nicht zwingend verwenden. Du kannst in den Übungen auch gerne eigene Komponenten
in deinem eigenen Zuschnitt entwickeln. Vielleicht fällt dir ja auch ein ganz anderes Design ein :-).

### Styling

Der Workspace ist mit Tailwind konfiguriert, d.h. du kannst in deinem Code problemlos Tailwind CSS verwenden.

Wenn du kein Tailwind verwenden möchtest, kannst du die `globales.css`-Datei leeren und dein eigenes CSS schreiben.
Next.js unterstützt u.a.:

- globales CSS (https://nextjs.org/docs/app/getting-started/css#global-css)
- CSS Modules (https://nextjs.org/docs/app/getting-started/css#css-modules)
