// We are using Node.js, Express, and MongoDB.

To initiate the project, start with the below cmd line:

npm init -y // This will create a new package.json with the required details for the project.

// dependencies

npm i express mongoose ejs

express -> It is for our server.
mongoose -> It is for our the DB.
ejs -> It is for the different views.

// dev dependencies

npm i --save-dev nodemon

nodemon -> It is used to hot reload the webpage whenever we make changes to the script.

Also, once nodemon is initiated, we need to add the startup script in the package.json(server.js) file.

To start this, run the cmd line - "npm run devStart".


Procedure:

1. We create a server.js file to setup a view engine and initiate nodemon.
2. Create views Folder to handle all the ejs views. Start with index.ejs
3. Create a routes Folder to handle all the routes within the application.
4. Within the routes, create a file named articles.js where we can export the router variable to other parts of the folder within the application. We can use require('./routes/articles') in the server.js to use it.
5. res.render('index', {text: "Hello"}); --> Passing an object to the index.ejs or HTML page to handle new articles.
6. In the server.js, we use <%= VARIABLE %> to declare a variable and call it wherever needed.
7. Check this link: https://www.npmjs.com/package/ejs for more details on how can we initiate a script or function within ejs.
8. Update the routes for New Article button, create a new view called as new.ejs.
