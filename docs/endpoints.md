# Endpoint Documentation

## /app/
Responds "200 OK"

This is the home endpoint that welcomes the user to the app and instructs them on how to get started.

### Response body
> `curl http://localhost:8080/app/`  

> `{"message": "The API Works! Welcome to gift wish list! To get started, go to /app/register endpoint. (200)"}`


## /app/register/
Responds "200 OK"

The `register` endpoint exists only to redirect users to the correct endpoint for registering a new account. The frontend user interface is not yet implemented, but eventually, we would want only one `register` endpoint that creates an account with the information received through the GUI.

### Response body
> `curl http://localhost:8080/app/register/`
  
> `{"message": "Welcome to the register page! To create an account, you must add your username/password to the url body like so: localhost:8080/app/register/yourUsername/yourPassword/. (200)"}`


## /app/register/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and creates a new user in the database. If the username is already taken, the account will not be persisted to the database.

### Response body
> `curl http://localhost:8080/app/register/example_user/12345/`  

> `{"message": "Created user: example_user: 12345 (200)"}`


## /app/viewProfile/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user information will be displayed. This includes the username, password, and list of gifts for that user.

### Response body
> `curl http://localhost:8080/app/viewProfile/example_user/12345/`
  
> `{"Gifts" : [{"gifts": "iPhone"}, {"gifts": "Laptop"}], "message": "Successfully viewing profile (200)"}`


## /app/deleteProfile/:username/:password/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user is removed from the database.

### Response body
> `curl http://localhost:8080/app/deleteProfile/example_user/12345/`
  
> `{"message": "Successful username/password. Your account is deleted. (200)"}`


## /app/updateProfile/:username/:password/:newpassword'
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the user's information is altered so that the password is updated to be the newpassword. Currently, the ability to update the user's username is not yet implemented.

### Response body
> `curl http://localhost:8080/app/updateProfile/example_user/12345/54321`
  
> `{"message": "Successful username/password. Your password has been updated. (200)"}`


## /app/addGift/:username/:password/:gifts/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the specified gift is added to the user's list of wishes in the database.

### Response body
> `curl http://localhost:8080/app/addGift/example_user/12345/iPhone/`
  
> `{"message": "Successfully added iPhone for example_user (200)"}`


## /app/deleteGift/:username/:password/:gifts/
Responds "200 OK"

This endpoint takes the username and password encoded in the URL and checks if the user exists. If it exists, the specified gift is removed from the user's list of wishes in the database.

### Response body
> `curl http://localhost:8080/app/deleteGift/example_user/12345/iPhone/`
  
> `{"message": "Successfully deleted wish for example_user (200)"}`


## /app/generateCode/:username/:password/
*Not yet implemented*

This endpoint has not been implemented yet, but the goal is that it will generate a code which can be shared with friends. This code can be used by friends to view the user's wish list and have ideas for possible gifts to get.
