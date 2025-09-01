# Design Document

## UI



## Data Model

For convenience the app will use H2 database (Java embedded SQL database), meaning the data will be lost on shutdown. Eventually I want to implement basic authentication/authorisation.

![ERD](/ERD.png)

## API Contracts

<pre>
Request
  URI: /
  HTTP Verb: GET
  Body: None

Response:
  Type: HTML
  Status:
    200 OK if resource is found
    404 NOT FOUND if resource isn't found
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
</pre>

<pre>
Request
  URI:
  HTTP VERB:
  Body:

Response
  Type:
  Status:
  Example:
</pre>
