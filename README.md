INFR3120 Portfolio Website Documentation:
This document provides a detailed overview of the design, development, and validation process for my personal portfolio web application built using Node.js, Express, and EJS.
Student: Shariq Abdul-Wahid
Course: INFR3120 – Web and Scripting Programming

**1. Project Access**
You can view the live site and the source code here:
Live Render Site: https://portfolio1-e3mp.onrender.com
GitHub Repository: https://github.com/shariqabdulwahid-stack/Portfolio1

**2. Responsive Design and Structure**
This site is fully responsive using Bootstrap 4.1’s grid system and utility classes. I used col-md-4 mb-4, col-md-6 mb-4, etc. to manage layout and spacing across devices. These classes were referenced from the official Bootstrap documentation:

Source: https://getbootstrap.com/docs/4.1/layout/grid/

The layout adapts seamlessly to mobile, tablet, and desktop screens using container-fluid rows and column breakpoints. Cards and buttons are styled with consistent spacing and alignment using Bootstrap’s shadow-sm, btn-outline-primary, and h-100 classes.

**3. Advanced Styling and Layout**
Custom styles are defined in public/Content/app.css to complement Bootstrap:
Body Styling: Light background for readability
body { margin: 0; font: 14px "Lucida Grande", Helvetica, Arial, sans-serif; background-color: #f8f9fa; } 
Main Content Padding:
main { padding: 50px 20px 80px; } 
Link Styling:
a { color: #00B7FF; text-decoration: none; } a:hover { text-decoration: underline; } 
Footer Positioning:
footer .navbar { position: relative; bottom: 0; width: 100%; }
These styles ensure consistent spacing, readability, and visual polish across all views.

**4. External Code Usage**
All development code is original or adapted from class demos. External libraries used include:
Bootstrap: Responsive layout, grid system, buttons, spacing
https://getbootstrap.com/docs/4.1/layout/grid/
Font Awesome: Used for navigation and social link
https://fontawesome.com/
jQuery: DOM manipulation and Bootstrap JS dependencies
https://jquery.com/
Morgan: HTTP request logging middleware
https://www.npmjs.com/package/morgan
Cookie-parser: Middleware for parsing cookies
https://www.npmjs.com/package/cookie-parser
All external code is manually integrated, fully understood, and commented where necessary.


**5. Pages and Files Included**
I organized the project using the following files and directories:
server.js
Entry point that creates and starts the HTTP server

app.js
Configures Express middleware, routes, and error handling

routes/index.js
Handles routing for home, about, projects, and contact pages

routes/users.js
Placeholder route for future user features

views/index.ejs
Homepage with welcome message and overview cards

views/about.ejs
Personal bio, experience, education, and skills

views/projects.ejs
Academic project showcase

views/contact.ejs
Contact form (non-functional placeholder)

views/error.ejs
Custom error page for 404 responses

views/partials/
Header, footer, and navigation bar partials

public/Content/app.css
Custom CSS styles

public/Script/app.js
Frontend IIFE for initialization

public/Asset/images/ME.jpg
Personal image used in About page
