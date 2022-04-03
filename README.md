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
