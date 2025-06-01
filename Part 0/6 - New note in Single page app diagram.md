```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User enters a node

    browser->>browser: Add note to local notes array
    browser->>browser: Call redrawNotes() to update the DOM

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created (confirmation)
    deactivate server

    Note right of browser: Page is not reloaded<br>DOM updated by JavaScript
