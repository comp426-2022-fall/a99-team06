
## gift-wish-list


## Summary 
Our final project was an app that allowed users to create their own accounts and keep a list of gifts that they would like to get for the Holidays! To use the app, users would react with endpoints at their local hosts that connected to a database to keep track of which user wants which gifts.

COMP426 final project template boilerplate.
All your code and documentation goes here.
Change this text to be a brief description of your final project.
Put the name of your project in the header above.
You will change everything below to be the main technical documentation, as outlined below.

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
    #This adds a cookie to my gift list!#

#8. Fuller detail of endpoints is in the /docs/ folder.

#9. Several users can be created with their own usernames and passwords and gift wish lifts. If the username/password combination doesn't match, a request won't be able to see that user's gift wish list. Users are encouraged to play around with what gifts they want and think creatively.

Other steps that you will need to take after your team has accepted the assignment:

1. Choose a license and update the LICENSE file accordingly. 
2. Edit this README.md file and use it as the main location of your technical documentation with links out to information contained under `/docs/`.
3. Create a `/docs/` directory for more elaborate documentation of your API, planning notes, etc.
4. Make sure that all of your team members have access to the repository as administrators.
5. Create a project under the **Projects** tab. Use this to manage your planning. Create a To-do list, etc. Explore the tools available and user them to manage your project.
7. Assign team roles and include a listing of those roles in this README.md file or in another file under `/docs/`.
8. Then put your entire development workflow in this repository.
9. Use **Pull requests** to propose changes and incorporate them into your code from various team members. 
10. Use **Issues** to identify and track bugs and also to communicate about various aspects of the project.

## Team mangement

Plan to meet with your team ASAP.
Talk through identifying roles within your team.

Try to figure out what each of you are good at/enjoy doing and try to work out roles that incorporate that.

Some basic roles you will want to consider:

1. A review manager - someone to review pull requests and merge or reject them and manage the related discussions
2. A plan manager - someone to keep an eye on the overall plan and keep the project tab/to-do list up to date
3. A documentation manager - someone to keep the documentation in order and identify what is missing and needs to be documented
4. A release manager - someone to manage the packaging and release process for your prototype package
5. A project manager - someone keeping track of all the moving parts and make sure that everything that needs to happen is happening.
5. Roles for team members to take charge or different parts of the project. Possible roles:
    1. Front end lead
    2. Back end lead
    3. Database lead
    4. Design lead
    5. Etc.

You will notice that there are more roles than people in your group.
That is because you will all be doing a hybrid job of managing a thing while working on other things.

## Assignment instructions

And that is about all you need to get started.

Good skill and be creative!
