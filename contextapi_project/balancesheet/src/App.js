import React from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Expenses from "./components/Expenses";
import List from "./components/List";
import Transactions from "./components/Transactions";
import "./App.css"
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <Expenses/>
        <List/>
        <Transactions/>
      </div>
    </GlobalProvider>
  );
};

export default App;
