const Hello = props => {
    let color = props.action();
    return <h1 style = {{backgroundColor: color}}>hello {props.name} </h1>;
};
const getRandomColor = () => {
    const palet = ['red', 'green', 'blue'];
    let color = palet[Math.floor(Math.random() * 3)];
    console.log(color);
    return color;
};




ReactDOM.render(
<Hello action = {getRandomColor} name = 'Lisa' />, document.getElementById('root'));
