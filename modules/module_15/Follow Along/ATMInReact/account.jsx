const ATMDeposit = ({onChange, isDeposit}) => {
  const choice = ['Deposit', 'Cash Back'];
  return (
    <label className="label huge">
      <h3>{choice[Number(!isDeposit)]}</h3>
      <input type="number" onChange={onChange}></input>
      {/* <input type="submit" value='submit'></input> */}
    </label>
  );
};

const Account = () => {
  const [deposit, setDeposit] = React.useState(0);
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsDeposit] = React.useState(true);
  let status = `Account Balance $ ${totalState}`;
  const handleChange = event => {
    console.log(`handleChange ${event.target.value}`);
    setDeposit(Number(event.target.value));
  };
  const handleSubmit = (event) => {
    let newTotal;
    if (!isDeposit) {
      if (deposit > totalState) {
        alert('Insufficient Funds');
        newTotal = totalState;
      } else {
        newTotal = totalState - deposit;
      }
      
    } else {
      newTotal = totalState + deposit;
    }
    setTotalState(newTotal);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2 id="total">{status}</h2>
      <button onClick={()=>setIsDeposit(true)} >Deposit</button>
      <button onClick={()=>setIsDeposit(false)} >Cash Back</button>
      <ATMDeposit onChange={handleChange} isDeposit={isDeposit}></ATMDeposit>
    </form>
  );
};
// ========================================
ReactDOM.render(<Account />, document.getElementById("root"));
