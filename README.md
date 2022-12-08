
## gift-wish-list


## Summary 
Our final project was an app that allowed users to create their own accounts and keep a list of gifts that they would like to get for the Holidays! To use the app, users would react with endpoints at their local hosts that connected to a database to keep track of which user wants which gifts.

## First steps
We have assembled a simple setup to-do list to help you get started using our app.

#1. Clone this repository to your local machine

#2. Locate the folder on your local machine in the terminal and then run **npm install**. This will install all of the required dependencies for the app to work.
    *The dependencies for this app are:
        1. Express (back-end endpoints)
        2. better-sqlite3 (database)
        3. Morgan (logging)
        4. fs (writing the logging to a file)
#3. Now that you have installed all the required dependencies, it's time to run the app! To do so, please type out npm run.

#4. After completing the last step, there should be a line printed out to your terminal saying "App is live on 8080". This is great! The app is now live.

#5. To use the app, navigate to http://localhost:8080/app/.

#6. Now to register an account, you must go to http://localhost:8080/app/register/ and put your username and password in the url information. For example, if I wanted to register an account with username of 'zach' and password of '123' I would enter the following link: http://localhost:8080/app/register/zach/123/

#7. An important note to make here is every request made to this app dealing with users requires an authentication to be done. After completing the last step, there is now an account with username 'zach' and password '123'. To add a gift to an account I would enter the following link:
http://localhost:8080/app/addGift/zach/123/cookies.
    **This adds a cookie to my gift list!**
<img width="999" alt="Screen Shot 2022-12-07 at 8 01 20 PM" src="https://user-images.githubusercontent.com/69776292/206330933-8158d45c-44db-46ed-ac81-feaf54bc5637.png">
This is an example of zach's gift wish list for the holidays. His username is 'zach', his password is '123' and he wants 5 items.


#8. Fuller detail of endpoints is in the /docs/ folder.

#9. Several users can be created with their own usernames and passwords and gift wish lifts. If the username/password combination doesn't match, a request won't be able to see that user's gift wish list. Users are encouraged to play around with what gifts they want and think creatively.
