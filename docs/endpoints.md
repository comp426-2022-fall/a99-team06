# Endpoint

## /app/
Responds "200 OK"
### Response body
> `curl http://localhost:8080/app/`  

> `{"message": <TODO: fill in message>}`

## /app/register/
Responds "200 OK"

The `register` endpoint exists only to redirect users to the correct endpoint for registering a new account. The frontend user interface is not yet implemented, but eventually, we would want only one `register` endpoint where the the user can enter their information through the GUI.

### Response body
`curl http://localhost:8080/app/register/`  
`{"message": <TODO: fill in message>}`

