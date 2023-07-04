```mermaid
sequenceDiagram
  participant browser
  participant server

  Note right of browser: The browser creates a new note, adds it to the note list and redraws the notes.

  browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
  activate server
  deactivate server
```

