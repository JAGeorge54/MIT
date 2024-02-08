1. Fetch Data
React – Get Data
As you’ve seen in the course video, React allows you to fetch data from a remote source using useEffect and display it in a list on the web page. You can also add pagination to display the results in multiple pages.
Now, it’s time to practice getting data from the MIT Hacker News remote data source. In the first step of this activity you’ll add code that fetches the Hacker News data, as well as add new styles to the list of articles. Then, in the second step, you’ll add client-side pagination to display data on multiple pages.
The starter code for this activity is provided in the fetchData.jsx file.
In the first step of this activity, your task is to implement the fetchData method inside the useDataApi component, allowing it to get data from a remote source.
The fetchData async method dispatches the following actions:
FETCH_INIT: This is dispatched when fetchData is called
FETCH_SUCCESS: This is dispatched when the axios call is successful
FETCH_FAILURE: This is dispatched when the axios call has failed
Note: These actions can be found in the dataFetchReducer reducer.
Make use of the bootstrap list-group and list-group-item classes to style the list of articles returned by the data source. For reference, the formatting should match the following:
Note: This activity does not include the search feature shown in the course video and screenshot.
screenshot
Note: We are using useEffect so that our API call only runs when the component mounts (first render), and not also when the component re-renders.
Note: The didCancel boolean is for us to use in case of the component unmounts before the API call resolves (completes). We can prevent the state from being updated.

2. Paginate Data
React – Pagination
Now it’s time to add pagination. The result should look like the following:
pagination.PNG
Your task in this step is to implement the Pagination component that renders a list of buttons representing the number of available pages.
The Pagination component has the following destructured props (these are already set):
items: This is an array containing all articles
pageSize: This is the desired page size representing the number of articles per page
onPageChange: This is the event that is triggered when a page is selected
To implement the Pagination component, complete the following:
If there is one item or less, the component should return null
Calculate the number of pages based on the pageSize and items.length variables
Create a variable named pages using the range function, the range function should use the data from the previous step. This should result in an array of numbers that represents the number of pages
Use the pages array to create a new array called list. list should be an array of buttons. The button should have the following properties:
The className should be page-item
A key
A onClick event
The Pagination component should return the list of all buttons inside an unordered list (<ul></ul>). The unordered list should also be wrapped within a <nav> tag
Note: Use the following to have access the <Button> component: const { Button } = ReactBootstrap;