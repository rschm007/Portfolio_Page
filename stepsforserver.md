INSTALL DEPENDENCIES
    pug
    express
    path

DELETE REDUNDANT STRING LITERALS IN script.js
    The HTML pages have been built with the pug files so we no longer need the template strings

in script.js, DELETE ALL REDUNDANT nav addClass lines
    we are no longer using a grid system so we no longer need to add seperate col spans for each nav element

in script.js, DELETE addClasses and pageContent parameters in pageRender function
    since we are now using html routes we no longer need to add these parameters within the function

CREATE SERVER.JS file
    requires htmlRoutes

SET HTML ROUTES
    routes for all html files contained in here

in INCLUDES/NAV, set anchor tags such that when a user clicks on a link, it redirects them to the url in a new tab.

in script.js, SOMEHOW SET BTN_NAV LOGIC SO THAT THEY PULL NEW HTML RENDERS