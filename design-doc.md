# Design Document

Client:
- HTML
- CSS
- JavaScript

Server:
- Spring boot web framework (Java)
- H2 Database (emedded SQL database)

## UI
Simplistic UI, as the focus is on backend development.

![UI Design](/ui-design.png)

## Data Model

For convenience the app will use H2 database (Java embedded SQL database), meaning the data will be lost on shutdown. Eventually I want to implement basic authentication/authorisation.

The app will be client side rendered, with the backend just providing a REST API for data.

![ERD](/ERD.png)

## API Contracts

<pre>
Request
  URI: /lists
  HTTP Verb: GET
  Body: None

Response:
  Type: JSON
  Status:
    200 OK if resource is found
    404 NOT FOUND if resource isn't found
  Example:
  GET /lists

  {
    "lists": [
      {
        "id": 5,
        "position": 0,
        "title" : "Morning checklist",
        "user_id": 101
      },
      {
        "id": 11,
        "position": 1,
        "title" : "Supermarket",
        "user_id": 43
      }
    ]
  }
</pre>

<pre>
Request
  URI: /lists/{id}
  HTTP VERB: GET
  Body: None

Response
  Type: JSON
  Status:
    200 OK if resource is found
    404 NOT FOUND if resource isn't found
  Example:

  GET /lists/11

  {
    "list": [
      {
        "id": 5,
        "position": 0,
        "content": "1x tin cat food",
        "complete": true,
        "todo_list_id": 11
      },
      {
        "id": 88,
        "position": 1,
        "content": "2x 500g Butter",
        "complete": false,
        "todo_list_id": 11
      }
    ]
  }
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
