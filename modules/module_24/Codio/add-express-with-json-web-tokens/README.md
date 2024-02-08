1. Adding Express Routes with JWT Implementation
In this activity, you’ll build off of the JSON Web Token example in the videos by adding Express routes. Please review the “JSON Web Token Authentication Exercise” video before completing this activity, as it provides helpful guidance that you will need to complete this assignment.
In this activity, you will add and change a few routes so that admin users can delete books from the books array by title.
Please review the following notes before you get started. You will need to:
Use curl commands within the Terminal window interactions in this activity.
You can open new terminal windows from Tools->Terminal in the toolbar on the top of your screen.
Use Postman to test the routes, just as you saw in the “JSON Web Token Authentication Exercise” video.
Step 1
Add a default (the base route will be path '/'), un-authenticated route for the books express server. You can run the server by running the command node books.js. Reload the browser tab to see the results.
Add a block for your express server on the base route that does not require the use of the authenticateJWT function that will always return the response:
You need to authenticate in order to access functionality of this book server.
It should look something like this:
unauth.png
Step 2
Start up the auth.js server in another terminal by running node auth.js. Next, generate a JWT for an admin user as the new route will only be available for admin users.
In a third terminal in your workspace (do not use the ones running your books or auth server), run the following command to get back an admin access token:
curl --location --request POST 'localhost:3000/login' \
--header 'Content-Type: application/json' \
--data-raw '{"username": "john", "password":"password123admin"}'
Your response will look something like this:
loginResponse.png
You will need to copy your own accessToken(highlighted in the screenshot) to continue this activity.
Now, take that accessToken and use it in other curl commands that will allow you to interact with the books server. As a test, you can use the following command to get all books. Be sure to replace the text after Bearer with your own copied accessToken.
curl --location --request GET 'localhost:4000/books' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTYyNzU0MTMsImV4cCI6MTYxNjI4MjYxM30.x5ECpZlhNmySo_vlEXARqIQYlTAx5j28o1Qv8I0FsJA'
If your response looks something like the following image (you should get the list of books rather than “403” or “Forbidden”), then you are ready to proceed to step 3. You have now authenticated yourself and shown that you can query all the books using the /books route.
booksResponse.png
Step 3
Now it’s time to add a route that is accessible for admins only.
First, add a route with the path /books/remove.
This route should require authentication and authorization in which it restricts access to admins only.
The route should take a request body, that is an object that contains a property title with the value being the title of the book. For example:
{ "title": "Things Fall Apart" }
Configure the route with the following requirements if authentication fails:
If JWT is not presented in the Authorization header, return an HTTP status of 403
If the JWT is not valid, return an HTTP status of 403
If the user is not an admin, return an HTTP status of 403
Configure the route with the following requirements if authentication and authorization succeeds:
Use the title in the request body to find the book in the books array and remove it.
Return a response with the following text:
books with name: [insert the book title removed here] removed successfully
An example curl command that would work for this route and remove books with the title Things Fall Apart would be like the following:
curl --location --request POST 'localhost:4000/books/remove' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG4iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2MTYyNzU0MTMsImV4cCI6MTYxNjI4MjYxM30.x5ECpZlhNmySo_vlEXARqIQYlTAx5j28o1Qv8I0FsJA' \
--header 'Content-Type: application/json' \
--data-raw '{"title": "Things Fall Apart"}'
Note that you will need to replace the accessToken with your own, as with other curl commands, when you want to test this out.
After the two routes (the one that doesn’t require authentication for the books server and the one that allows admin users to delete books by title) have been added and are working according to the instructions, you are all done with this activity.
Hints:
Feel free to use Postman (as shown in the videos) to help you construct your own curl statements for this activity. Just remember that they have to be run from a terminal in the Codio workspace rather than from your own machine.
If you do not complete this activity in one sitting, you may need to re-authenticate and generate a new accessToken. Remember that you would need to use the new accessKey in all curl commands.
Removing items from arrays can be very easy with Array splice()