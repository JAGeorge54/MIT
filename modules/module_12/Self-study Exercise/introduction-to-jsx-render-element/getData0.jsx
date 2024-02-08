// const App = () => {
//   let product = { name: 'Pear', cost: 2, inStock: 7 };
// let {name, inStock} = product;
// let item = {name, inStock};
//   const handler = () => alert(`Name : ${item.name} Instock: ${item.inStock}`);
//   return <button onClick={handler}>Click Me</button>;
// };

// //Destructure an object

// //---------------
// ReactDOM.render(<App />, document.getElementById("root"));

//======================================

const App = () => {
  
  const handler = () => alert(`hello`);
  return <MyButton onClick = {handler}> </MyButton>
};
const MyButton = (props) => {
  return <button onClick={props.onClick}> Click Me </button>;
}

//Destructure an object

//---------------
ReactDOM.render(<App />, document.getElementById("root"));