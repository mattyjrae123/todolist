# Design Document

## API Contracts

Request
  URI: /
  HTTP Verb: GET
  Body: None

Response:
  Type: HTML
  Status:
    200 OK if resource is found
    404 NOT FOUND if resource is not found
  Example:
  &lt;!DOCTYPE html>
  &lt;html>
    &lt;head>
      &lt;script src="index.js">&lt;/script>
    &lt;/head>
    &lt;body>
    &lt;h1>Hello, World!&lt;/h1>
    &lt;/body>
  &lt;/html>

## Data Model

For convenience the app will use H2 database (Java embedded SQL database), meaning the data will be lost on shutdown.

![ERD](/ERD.png)