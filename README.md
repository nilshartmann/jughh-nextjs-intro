## Backend starten

Das Backend (mit der GraphQL API) ist nicht Teil dieses Workspaces. Ihr könnt es per Docker starten.

- Achtung! Das Backend horcht auf **Port `20080`**. Dieser Port muss bei euch frei sein!
- Zum Starten des Backends folgende Docker Befehle ausführen. 
  - Das könnt ihr vom Terminal aus machen und aus jedem beliebigen Verzeichnis (muss nicht im Repository ausgeführt werden)
- ```bash
  docker pull ghcr.io/nilshartmann/ecolify-backend:latest 
  docker run --rm -p 20080:20080 ghcr.io/nilshartmann/ecolify-backend:latest
  ```
- Wenn das Backend gestartet ist, solltet ihr eine Meldung `Started GraphqlServiceApplication in XXX seconds` im Logfile auf der Konsole finden
- Ihr könnt das Backend jederzeit mit `Ctrl+C` beenden und mit den oben genannten Docker Kommandos wieder starten
  - Das Backend enthält keine DB o.ä.
- Um sicherzustellen, dass ihr (bzw. der Frontend-Prozess) euch mit dem Backend verbinden könnt, öffnet bitte einmal euren Browser mit der URL http://localhost:20080
- Wenn sich dort der GraphQL Explorer "GraphiQL" öffnet, sollte alles funktionieren
  - Ihr könnt zum Testen zusätzlich einen einfachen GraphQL Query in GraphiQL ausführen, dazu in das linke Textfeld folgenden Query eingeben: `query { hello }` und auf den Ausführen Button (Pfeil in der Mitte oben) klicken
  - Als Antwort sollte auf der rechten Seite die GraphQL Antwort erscheinen (`"hello": "world"}`)