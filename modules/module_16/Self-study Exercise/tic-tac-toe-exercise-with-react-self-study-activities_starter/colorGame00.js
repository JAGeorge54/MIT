const Square = ({ id, player, newState }) => {
  const[color, setColor] = React.useState('green')
  const[status, setStatus] = React.useState(null);
  const XorO = ['o', 'x'];

  const palet = ['red', 'blue', 'green'];
  const getRandomColor = () => palet[Math.floor(Math.random() * 3)];
 
React.useEffect(() => {
  console.log(`Render ${id}`);
  return () => console.log(`Unmounting Square ${id}`);
})

  return (
    <button 
      onClick={e => {
        let col = getRandomColor();
        setColor(col)
        let nextplayer = newState(id);
        setStatus(nextplayer);
        e.target.style.background = col;
      }}
    >
      <h1>{XorO[status]}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  // set state here
  const [state, setState] = React.useState(Array(9).fill(null));

  let status = `Player ${player}`;
  let winner = checkWinner(state);
  if(winner != null) status = `Player ${winner} wins`

  //define newState function
  const newState = idOfSquare => {
    let thePlayer = player;
    state[idOfSquare] = player;
    setState(state);
    let nextplayer = (player + 1) % 2;
    setPlayer(nextplayer);
    return thePlayer;
  }

  function renderSquare(i) {
    return <Square id={i} player={player} newState={newState}></Square>;
  }

  return (
    <div className="game-board">
      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="grid-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="grid-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div id="info">
        <button >Show/Hide</button>
        <button >Re-render</button>
        <h1>{ status} {player}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
