import { createContext, useReducer } from "react";
import { currentDate } from "../util/formatting.js";

// pending to update data in indexedDB
// import {
//   addIncome,
//   // getAllMovements,
//   // getSearchMovements,
//   // removeMovements,
//   // removeAllMovements,
// } from "../util/indexedDB.js";

export const BalanceContext = createContext({
  income: [],
  expenses: [],
  totalBalance: 0,
  totalIncome: 0,
  totalExpenses: 0,
  addMovement: () => {},
  removeMovement: () => {},
  // initialBalance: () => {},
});

function balanceReducer(state, action) {
  if (action.type === "ADD_MOV") {
    // If it's an income

    if (action.payload.amount > 0) {
      const updatedMovs = [
        ...state.income,
        {
          id: Number(Date.now().toString().slice(-4)),
          date: currentDate,
          ...action.payload,
        },
      ];

      const updatedTotalIncome = state.totalIncome + action.payload.amount;
      const updatedTotalBalance = updatedTotalIncome - state.totalExpenses;

      // Store each entry in IndexedDB
      // updatedMovs.forEach(async (item) => {
      //   await addIncome(item);
      // });

      // Find why not this working
      // const updatedIncome = state.income.push(updatedMov);

      return {
        ...state,
        income: updatedMovs,
        totalIncome: updatedTotalIncome,
        totalBalance: updatedTotalBalance,
      };
    } else {
      const updatedMovs = [
        ...state.expenses,
        {
          id: Number(Date.now().toString().slice(-4)),
          date: currentDate,
          ...action.payload,
        },
      ];

      const updatedTotalExpenses = state.totalExpenses - action.payload.amount;
      const updatedTotalBalance = state.totalIncome - updatedTotalExpenses;

      // Store each entry in IndexedDB
      // updatedMovs.forEach(async (item) => {
      //   await addExpense(item);
      // });

      // if(state.Balance >= 0){
      //   const updatedTotalBalance =
      // }

      return {
        ...state,
        expenses: updatedMovs,
        totalExpenses: updatedTotalExpenses,
        totalBalance: updatedTotalBalance,
      };
    }
  }

  if (action.type === "REMOVE_MOV") {
    // if id is not specified - null

    if (action.payload.movId === null) {
      return {
        ...state,
        totalBalance: state.totalIncome,
        expenses: [],
        totalExpenses: 0,
      };
    } else {

      // Pending fatch id removing logic
      // remove by id
      const existingMovIndex = state.expenses.findIndex(mov => mov.id === action.payload.movId);

      
    }
    // const existingMov = state.expense
  }
  return state;
}

export default function balanceContextProvider({ children }) {
  const [balanceState, balanceDispatch] = useReducer(balanceReducer, {
    income: [],
    expenses: [],
    totalBalance: 0,
    totalIncome: 0,
    totalExpenses: 0,
  });

  function handleAddMovement(type, title, amount) {
    balanceDispatch({
      type: "ADD_MOV",
      payload: {
        title,
        amount: Number(type + amount),
      },
    });
  }

  // this provide remove by id and remove all without passing id.
  function handleRemoveMovement(movId) {
    // dispatch(action);
    balanceDispatch({
      type: "REMOVE_MOV",
      payload: {
        movId,
      },
    });
  }

  function initialBalance() {
    // initial App loading....
    addMovement();
    try {
    } catch (error) {}
  }

  //   fucntion handleSearchMovement(title){
  //     balanceDispatch({
  //         type: "SEARCH_MOV",
  //         payload: {
  //           title,
  //         },
  //       });
  //   }

  const ctxValue = {
    income: balanceState.income,
    expenses: balanceState.expenses,
    totalIncome: balanceState.totalIncome,
    totalExpenses: balanceState.totalExpenses,
    totalBalance: balanceState.totalBalance,
    addMovement: handleAddMovement,
    removeMovement: handleRemoveMovement,
    // searchMovement: handleSearchMovement,
  };

  return (
    <BalanceContext.Provider value={ctxValue}>
      {children}
    </BalanceContext.Provider>
  );
}
