//5. determines if transation is valid or not
const ATMDeposit = ({ onChange, isDeposit, isValid }) => {
  const choice = ["Deposit", "Withdrawal"];
  return (
    <label className="label huge">
      <h3> {choice[Number(!isDeposit)]} </h3>
      <input id="number-input" type="number" width="200" onChange={onChange}></input>
      <input id="submit-input" type="submit" width="200" disabled={!isValid} value="Submit"></input>
    </label>
  );
};

//1. Entry Point
const Account = () => {
  const [deposit, setDeposit] = React.useState(0); 
  const [totalState, setTotalState] = React.useState(0);
  const [isDeposit, setIsdeposit] = React.useState(true);
  const [atmMode, setAtmMode] = React.useState("");
  const [validTransaction, setValidTransaction] = React.useState(false);

  let status = `Account Balance $ ${totalState}`;
  console.log(`Account Rendered with isDeposit: ${isDeposit}`);
  
  //2. handles the inputs for the deposits and withdrawls
  const handleChange = (event) => {
    console.log(Number(event.target.value));
    if (Number(event.target.value) <= 0) {
      return setValidTransaction(false);
    }
    if (atmMode === "Withdrawal" && Number(event.target.value) > totalState) {
      setValidTransaction(false)
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(event.target.value));
  };
  
  //3. Updates account 
  const handleSubmit = (event) => {
    let newTotal = isDeposit ? totalState + deposit : totalState - deposit;
    setTotalState(newTotal);
    setValidTransaction(false);
    event.preventDefault();
  };

  //4. faciltates change between deposit and withdrawl in the DOM
  const handleModeSelect = (event) => {
    setAtmMode(event.target.value);
    setValidTransaction(false);
    if (event.target.value === 'Deposit') {
      setIsdeposit(true);
    }else {
      setIsdeposit(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div id="machine-body">
      <h2 id="total">{status}</h2>
      <label>Please select an option from below to continue </label>
      <select onChange={(e) => handleModeSelect(e)}name="mode" id="mode-select">
        <option id="no-selection" value=""></option>
        <option id="deposit-selection" value="Deposit">Select fot Deposit</option>
        <option id="withdrawal-selection" value="Withdrawal">Select for Withdrawal</option>
      </select>
      {atmMode ? (
      <ATMDeposit 
        onChange={handleChange} 
        isDeposit={isDeposit} 
        isValid={validTransaction}
        ></ATMDeposit>
      ) : ""}
      </div>
    </form>
  );
};
// Start Here
ReactDOM.render(<Account />, document.getElementById("root"));
