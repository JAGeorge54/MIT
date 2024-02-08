part 1
As you’ve seen in the course video, you can create a Tic-tac-toe game using React. In this activity, you’ll add improvements to this game.
Your task in this activity is to do the following:
Part 1
Display the next player to play (Player X or Player O). This should show which player’s turn it is. It should be updated every time a player selects a square
Update the color of the mark based on the player’s turn. “X” should be red, and “O” should be white.
At the end, the game board should look like the following:
1.PNG
It’s time to start with Step 1. The text showing the player in turn (Next Play: Player X) should be displayed below the board and should be contained within an <h1></h1> tag and have the id turn.
Notes:
You need to make sure the text exactly matches the screenshot above. Otherwise, the task won’t be validated
The starter code includes helpful comments to guide you through this activity
Hint:
Start by identifying which component’s state should be responsible for saving the game information related to which player should play next

 Part 2
Now, in Part 2, you’ll change the color of the mark based on the player’s turn. “X” should be red, and “O” should be white.
Part 2
The styles.css file includes the css classes you’ll need to accomplish this task:
.red: Apply this class to the “X” player
.white: Apply this class to the “O” player
Hint: You’ll want use conditional logic via a ternary operator to set the className value. Learn more about the ternary operator here.
Refer to the screenshot in Part 1 for what the final result should look like.