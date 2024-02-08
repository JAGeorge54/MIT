1. onClick Elements
Adding onClick To Elements
Now that you’ve gotten a bit more familiar with JSX, you can now do a small activity related to adding onClick handlers to JSX elements. The point of this activity is to demonstrate that you can add onClick to basically anything; it doesn’t have to be a <button> tag or anything else that normally handles click events.
Different HTML elements have different built-in features, but this activity will show you that any element can be treated in any way as long as you know what properties you want it to have and how you want to treat it in your application. An example of this is where you want a <div> tag to be treated as a button instead of using an actual <button> element. This could be done because you want this pseudo-button to have a different style from the other buttons in your app or there is some aspect of the <button> element that you do not want in your implementation.
Your task in this application will be to add an onClick listener for every child element of the <div>, where className="container-div". There should be eight elements.
Note that all eight elements are one of four HTML element types (div, span, button, and link). First, they are shown with no styling and then, repeated with simple styling to make them appear to interact like a button would
An example of an element with an onClick handler within JSX is shown below:
<div onClick={(e) => this.handleClick(e)}>click me!</div>
For each of the eight elements with IDs, you need to add that same click handler and pass the event to the handleClick.
Once you have done this, you should be able to click any one of the 8 elements and see an alert which tells you the element id that you clicked.
Hint:
Review the different HTML elements and their unique characteristics at this link link