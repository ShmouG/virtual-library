# React Contact List

## About this app

This app uses React, Create-react-app and Auth0 to authenticate users. It's a phone list that stores user input into the MongoDB. 

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
yarn install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
yarn start
```

If you have MongoDB installed on you computer and want to run the database:

```
Mongod
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

This app is deployed on Heroku. Check it out: https://vast-badlands-48861.herokuapp.com/
