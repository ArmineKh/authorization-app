# Name
Simple authorization app in React 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Description

In application is displaying the following pages:
/ - home
/login - login and password entry page
/news - news page
/profile - a page unavailable without authorization

On the site, in the header implemented the links:
To the main (/)
News (/news)
Profile (/profile)

If the user clicks on the “profile” page and he is not “authorized” - throwed on the /login page

The login form (/login) accepts fake data:
username: admin
password: 12345

If other data is entered, the following messages are displayed:
"The username or password you entered is incorrect"

If the correct data is entered, then redirect to the /profile page.

User authorization information stored in localStorage, with generating fake token. The database not implemented.

News (/news) page contains the listing of sample news taken from json file. Each news consist of image, title, description and next Fibonacci number near the title, where there checked if the Fibonacci number of news article is a Prime Number, also implimated frontend search with filtering.
