1. Web Page Routing
In a traditional website, navigation between pages requires a complete refresh of the page. Every time you select on a link to a page, the website contacts the server to get you to that page. This process takes a few seconds and makes for a frustrating user experience.
Modern websites, like the ones built using React, have a different approach to navigation between pages. They use routing to reduce subsequent page load times. A router loads all the website’s content on the initial load so it doesn’t need to make requests to the server each time users request new content. The router then dynamically displays the correct content onto the page based on the URL’s pathname. Because the page content is stored in memory instead of on the server, page swap times become virtually unnoticeable to users, making way for a much better user experience.
Your task in this activity is to create a navigation bar using Bootstrap and add routing to allow navigation between different pages.
The navigation bar should include the following links:
Signin: Should display the contents of the signin.html page. This link should have an id of signin_link
Mission: Should display the contents of the mission.html page. This link should have an id of mission_link
About: Should display the contents of the about.html page. This link should have an id of about_link
The navigation bar should look like the following:
Capture_1.PNG
You should add your code to the index.html and routing.js files. These files include helpful comments.
Note: You can find the documentation for Bootstrap Navbar here