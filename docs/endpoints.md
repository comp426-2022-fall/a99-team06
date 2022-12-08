# Endpoint

## /app/
Responds "200 OK"
### Response body
> `curl http://localhost:8080/app/`  

> `{"message": <TODO: fill in message>}`

## /app/register/
Responds "200 OK"

The `register` endpoint exists only to redirect users to the correct endpoint for registering a new account. The frontend user interface is not yet implemented, but eventually, we would want only one `register` endpoint that creates an account with the information received through the GUI.

### Response body
> `curl http://localhost:8080/app/register/`
  
> `{"message": <TODO: fill in message>}`

## /app/register/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and creates a new user in the database. If the username is already taken, the account will not be persisted to the database.

### Response body
> `curl http://localhost:8080/app/register/example_user/12345/`  

> `{"message": <TODO: fill in message for user=example_user and password=12345>}`

## /app/viewProfile/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the list of gifts for that user will be returned.

### Response body
> `curl http://localhost:8080/app/viewProfile/example_user/12345/`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`
