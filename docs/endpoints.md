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

The `register` endpoint redirects users to this endpoint and instructs them on how to use it. This endpoint works by receiving the username and password information as URL-encoded data and creates a new user in the database.

### Response body
> `curl http://localhost:8080/app/register/:username/:password/`  
> `{"message": <TODO: fill in message>}`
