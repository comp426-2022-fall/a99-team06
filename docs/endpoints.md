# Endpoint Documentation

## /app/
Responds "200 OK"

This is the home endpoint that welcomes the user to the app and instructs them on how to get started.

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

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user information will be displayed. This includes the username, password, and list of gifts for that user.

### Response body
> `curl http://localhost:8080/app/viewProfile/example_user/12345/`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`


## /app/deleteProfile/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user is removed from the database.

### Response body
> `curl http://localhost:8080/app/deleteProfile/example_user/12345/`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`


## /app/updateProfile/:username/:password/:newpassword'
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user's information is altered so that the password is updated to be the newpassword.

### Response body
> `curl http://localhost:8080/app/updateProfile/example_user/12345/54321`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`


## /app/addGift/:username/:password/:gifts/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the specified gift is added to the user's list of wishes in the database.

### Response body
> `curl http://localhost:8080/app/addGift/example_user/12345/iPhone/`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`


## /app/deleteGift/:username/:password/:gifts/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the specified gift is removed from the user's list of wishes in the database.

### Response body
> `curl http://localhost:8080/app/deleteGift/example_user/12345/iPhone/`
  
> `{"message": <TODO: fill in message for user=example_user and password=12345>}`
