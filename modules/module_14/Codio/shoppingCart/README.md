1. React - Shopping Cart
Shopping Cart
Now that you have watch a simple shopping cart be built, you’re going to create a similar shopping cart for a clothing store.
Remember: If you find yourself having difficulties with this assignment, you can always go back and watch the “Shopping Cart With Multiple Lists” video.
In this activity, you will be creating a simple shopping cart. The shopping cart component contains two sections:
Stock: This is a list of the available products that can be added to your cart. Products are displayed as buttons in the following format: product: available stock (example: Jeans:2)
Shopping Cart: This is a list of products that have been added to the cart
Users can click any product in the Stock list, and if that product is in stock, it will be added to the cart.
The starter code for this activity is in the shop.jsx file. This file includes comments to guide you through this activity. Here’s a description of what the starting code does:
The array availableItems contains all available products at the start of the program. The products are represented in an object with two properties: product which is the name of the product and inStock which is a number indicating how many of this product is in stock
availableItemsButtons is an array of buttons that display each available item
The main component is called ShoppingCart. It displays all items in the availableItemsButtons and the Cart component
Users can select any product from availableItemsButtons and add it to the Cart
The Cart component displays all items that were added to the shopping cart
Your task is to do the following:
Visually, the desired state of this application is having a row of buttons that display the available stock and another row of buttons that display what items are in your cart. You click the buttons of available stock to add the items to your cart.
Inside the ShoppingCart component, define the state for stock and cart using React.useState()
stock should be initialized with availableItems
Define setStock and setCart to update the state for stock and cart respectively
The moveToCart function is triggered every time a product is clicked
Inside the moveToCart function, do the following:
Define the variable product to represent the product name
Define the variable numInStock to represent the number of items in stock for a specific product
Write logic for if numInStock is zero then return. Otherwise, find the product that was selected using the stock.filter function and decrement the stock for that product
Use setStock to update the stock state and setCart to update the cart state
Note: Make sure you add a few items to the shopping cart before checking this task for completion
Hints:
Make use of the filter and map functions to find elements in an array
Remember that the innerHtml property contains all elements within a specific HTML tag
Make sure to update the state properly using the spread operator