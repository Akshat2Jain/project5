import React, { createContext, useReducer } from "react";
import AppReducer from "../context/AppReducer";

// Intial state

const initialState = {
  transactions: [],
};

// creating the context

export const GlobalContext = createContext(initialState);


// Creating the provider

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions

function deleteTransactions(id){
  dispatch({
    type:"Delete",
    payload:id,
  });
}
  function addTransactions(transactions){
    dispatch({
      type:"Add",
      payload:transactions,
    });
  }


return(<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransactions,
    addTransactions,
}}>
    {children}
</GlobalContext.Provider>)
};
