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

## Flow
- Backend always the source of truth
- MVC pattern
- Model: Server
- View: HTML
- Controller: JS
  - Controller calls APIs, sends data to View to generate HTML
  - Bind view methods (e.g. button onClick events) to relevant controller method

  - View -> Controller -> Server -> Controller -> View

- Onload
  - GET /lists to get lists to display in "My Lists"
  - GET /lists/{id} to get list contents to display of list in first position
  - If error, display error message and ask user to refresh page

- List onclick
  - GET /lists/{id} to get list contents to display
  - If error, display error message and ask user to refresh page

- New List button onclick
  - Show modal form to add a new list
  - Modal onclick
    - POST /lists/id to create new list
    - If error, display error message and ask user to refresh page
    - If no error, create 

## Questions
- How to keep back end and front end in sync?
  - Constantly request backend for all the data again after each change on the front end (after add/delete list, add/delete todo etc)?
    - Should always keep front end in sync, useful for simultaneous account access on multiple machines.
    - But lots more requests to handle on backend. More cost/resources to process.
  - Assume if the POST and DELETE requests to the backend aren't causing errors, then the front and back end are in sync (only GETting all the data on page load)?
    - Less requests for backend to process. Fine if running locally.
    - But simultaneous account access on on multiple machines could cause sync issues.


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
