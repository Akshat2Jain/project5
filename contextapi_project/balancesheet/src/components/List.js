import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Item from "./Item";
const List = () => {
  const { transactions } = useContext(GlobalContext);
  // console.log(Context);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Item key={transactions.id} transactions={transactions} />
        ))}
      </ul>
    </>
  );
};

export default List;
