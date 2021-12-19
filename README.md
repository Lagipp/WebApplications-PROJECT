# WebApplications-PROJECT

This is the final project for the course CT30A3203 Web Applications.
The objective of the project was to mimic the likelihood of [StackOverflow](https://stackoverflow.com/), a popular blog-type website where one can create their own posts and comment under 
existing ones made by other users.


<br />


## Technology choices:

The frontend of the App was created with React and the backend with Node.js/Express.js. These were used during the course, and felt the most comfortable for me to use.

Most of the code was written by following along the course's lectures for weeks 9, 10 and 11. These 
weeks covered the React basics, React-router-dom and combining backend with frontend respectively.

The database used is MongoDB, which was also the one introduced during the course exercises.


<br />


## Installation:

After cloning the repository to your desired folder (using ```git clone link_to_repository```), navigate to the 'root-folder', called 'webapp-PROJECT':
```
$ cd .\webapp-PROJECT\
```
From here you can install the required dependencies with the command 'npm install'.
```
$ npm install
```
After all the dependencies have finished installing, you can start the application. The frontend can be started with 'npm run dev:client' and the backend 
with 'npm run dev:server'. Type these 2 commands into different terminals in e.g. Visual Studio Code.

terminal 1:  `$ cd .\webapp-PROJECT\`  followed by  ```$ npm run dev:client```

terminal 2:  `$ cd .\webapp-PROJECT\`  followed by  ```$ npm run dev:server```


You also need to have MongoDB installed. The link can be [found here](https://www.mongodb.com/try/download/community)

The server side is running in port :5000 and the client in port :3000

To use the app, open up two tabs in your browser with the URLs; ```localhost:5000``` for the server and ```localhost:3000``` for the client.


<br />


## User manual: 

After launching the app, you can't really do anything without registering a user first. Move into the register page and input username and password. Both of these 
have to be at least 3 characters long. There is no feedback to know that the registration was succesful, but the user has been inserted into the database if the 
values are long enough.

Next you can try logging in with the credentials you just created. Move into the login page and input the same username and password as in the registration part. 
You should get a confirmation that the login was succesful. If you want to logout, just refresh the webpage when in the home page view.

After logging in, you can now create a new post and comment under existing posts. Creating a new post happens by clicking the Post-tab in the navigation bar or the 
link on the bottom of the home page.

After creating a post, you can return to the home page to see the post you just created. You can now click the post's content-text to move into it's post-page.

In the post-page, you can add comments in the box below the post. The comment should show up right after you're done clicking the submit button.

If you are logged out, but there are existing posts, you can click on the posts and see the post-page alongside the post's comments, but you can't make a new post 
or comment on any other post before logging in.


<br />


## List of features: 

Basic features: 25 points

Utilization of React: 5 points

alongside these, a deduction of points by turning in the assignment late
