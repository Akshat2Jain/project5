import React, {useState,useContext} from "react";
import { GlobalContext } from "../context/GlobalState";

const Transactions = () => {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const {addTransactions}=useContext(GlobalContext);
    const submit=(e)=>{
      e.preventDefault();
      const newTransaction={
         id:Math.floor(Math.random()*1000000),
         text,
         amount: +amount
      }
      addTransactions(newTransaction);

    }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default Transactions;
