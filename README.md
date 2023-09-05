# Mojoboxx_assignment

This is a basic Cab booking App.

# Code Structure

frontend -> Client (ReactJs)
Backend  -> Server (NodeJs)

# Steps to access application

1. Setup a Mysql database in local and update the Db connection details in Db.js file inside server

2. Create db and tables using sql queries :

        USE mydb; -- Use the database you created

        CREATE TABLE cab_schedule (
        id INT AUTO_INCREMENT PRIMARY KEY,
        pickup_location VARCHAR(255) NOT NULL,
        drop_location VARCHAR(255) NOT NULL,
        date DATE NOT NULL,
        time TIME NOT NULL
        );

        CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE KEY
        );

3. Install the the dependencies inside client and server by doing following steps :

    go inside client and do npm install
    go inside server and do npm install

4. Start the frontend server using npm start and Backend server using node server.js by going inside the directories as did in step 3.

5. Access the app on localhost:3000.
