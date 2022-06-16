import React, {useContext}from "react";
import { GlobalContext } from "../context/GlobalState";

const Item = ({transactions}) => {
  const sign = transactions.amount<0 ? "-" : "+";
  const {deleteTransactions}=useContext(GlobalContext);
  return (
    <>
      <li className={transactions.amount<0 ? "minus" : "plus"}>
        {transactions.text} <span>{sign}₹{Math.abs(transactions.amount)}</span>
        <button onClick={()=>deleteTransactions(transactions.id)} className="delete-btn">x</button>
      </li>
    </>
  );
};

export default Item;
