1. Adding Styles to An Existing CRUD
Adding Styling to a Functional CRUD
Through this week’s videos, you have seen a CRUD application being built and what a finished product could look like. Now you can practice using specific CSS fields to have a polished application. Styling can help users of your functional applications understand how to use it intuitively and effectively. In this activity, you can do exactly that by taking this Timestamped Checklist Application to its final stage by adding styling.
Consider this, when using a new application, how do you know what parts are interactive and what parts are for viewing? This is accomplished by certain styling patterns and cues. For example when hovering over an element that can be clicked, generally the cursor will be a pointer instead of the default arrow cursor.
For instance, this button as a pointer cursor.
Hello World
In this activity, you will turn the Task Tracker Application which is already functional from this un-styled version:
unstyled.png
to something styled like this version:
styled.png
Task instructions
Follow the steps below to link your styles.css file to your application and add styling to your elements.
First you need to link the style sheet in your index.html file. To do so, add the following line in the <head> element:
<link rel="stylesheet" href="styles.css" />
To verify Step 1 was completed successfully, we will make a change to the CSS that will make part of our application’s background a light grey color. Start by opening the file styles.css and locating the selector #root.
Note: This selector selects any elements with an id of the root. This element already exists in your document. React renders inside this element.
Now set the background-color to lightgrey and refresh your browser within NextTech. You should now see a light grey background around your Task elements and input field.
Open planner.jsx and locate the className on the element that holds each Task item. Hint: It’s the only className in the planner code. Take note of the class name used with the className. This class name is what you will define in styles.css. When defining styles with a class name in CCS, it is called a class selector.
An example of such a class selector would be
.className {
  background-color: red;
}
Add the following styles to class selector block you created:
Add a background-color of beige
Add a border of 1px solid black
Add padding of 5px
Add margin of 10px 0
Note: For fields like padding and margin you can use short-hand or long-hand to specify a common padding style across all sides of the element, or be more specific if needed by using padding-top and other sides respectively. See more about how to do this here.
Because clicking on a Task items removes it from the list, meaning they interactive elements, they should have styling that shows that. So you will add a hover effect so when a user places their mouse on the Task item, the Task item’s appearance changes.
To create a hover block with the same selector you used in the last step, you will need to add the following after the class name.
.className:hover {
}
Note: be sure to replace className with the selector for your Task elements as above
Inside this block, you will
Add a cursor value as pointer
Set the opacity to 0.7
The cursor field will give you the pointer cursor effect, such as the one you saw in the example button. The opacity will make the entire div slightly change color to further emphasize that it is clickable.
It should look like this in the final product.
Note that the cursor doesn’t show in screenshot but opacity is shown.
opacity.png
Next you will add some styling to your input field. You can define the two blocks exactly like the following:
input {
}

input:hover {
}
The first block you will add a background-color of lightblue and a padding of 2px.
The second block set thebackground-color to lightcyan on hover as the input field already has its own cursor effect built in.
Now for the finishing touches. Do you see one difference between what is the browser and the screenshot of the final product? There appears to be no gap between the last item in the task list and the input field for a completed task. To make yours look like the screenshot, you need to add another selector for your task element which will be followed by the :last-of-type pseudo-class.
Read more on pseudo-classes here.
It should look something like this (again replacing className with your task-element selector):
.className:last-of-type {
}
Finally, add a margin of 0.
Note: that if you have a value other than 0, you need to provide units such as px, %, or rem, but 0 is the same no matter the units so it’s not required in most fields.
You should be done now. The final result should look very close, even if not the same, to the screenshot above showing the final product. In case it doesn’t, re-trace your way through these steps to try and find out what is missing.
Hint: You don’t need to nest any CSS blocks for this activity; simply define all blocks at the top level in the styles.css file as the instructions describe.