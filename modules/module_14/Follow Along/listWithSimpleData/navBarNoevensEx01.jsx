// Ex 1 - remove all even numbers from the NavBar
// then make a Button for each instead of an <li>
function NavBar(props) {
  const list = props.menuItems
  const {Button} = ReactBootstrap;
    
    const updatedList = list.filter((number, index) => {
      if ((number % 2 > 0)) {
        return <Button key={index.toString()}>{number}</Button>;
      }
  })

  return <ul>{updatedList}</ul>;
  }
  const numbers = [1, 2, 3, 4, 5];
  ReactDOM.render(
    <NavBar menuItems={numbers} />,
    document.getElementById("root")
  );
  