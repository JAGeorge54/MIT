function App(props) {
  const [clicks, setClicks] = React.useState([]);
  console.log(`clicks: ${clicks}`);
  alert(`Rendering NavBar`);
    const list = props.menuItems;
    const { Button } = ReactBootstrap;

    const handleClick = e => {
      console.log(`clicked on: ${e.target.innerHTML}`);
        setClicks([...clicks, e.target.innerHTML]);
    };

    const updatedList = list.map((number, index) => {
        return <Button onClick={handleClick} key={index}>{number}</Button>;
    })

    return <ul>{updatedList}</ul>;
  }
  
  const numbers = [1, 2, 3, 4, 5];

  ReactDOM.render(
    <App menuItems={numbers}/>,
    document.getElementById("root")
  );