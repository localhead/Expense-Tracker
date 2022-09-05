/* 
App - is a root component. The main and most imporant
Other created components will be nested inside of it.
Components in React - is just a JS functions
*/
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpanse from "./components/NewExpense/NewExpense";

// Data to paste into components
const dataINIT = [
  {
    id: "el1",
    title: "Audi A6",
    date: new Date(2022, 2, 21),
    amount: 12400,
  },

  {
    id: "el2",
    title: "iPhone 11",
    date: new Date(2022, 3, 11),
    amount: 1520,
  },

  {
    id: "el3",
    title: "Laptop",
    date: new Date(2022, 8, 23),
    amount: 2200,
  },

  {
    id: "el4",
    title: "House",
    date: new Date(2022, 4, 23),
    amount: 18200,
  },
];

function App() {
  /* Lets use useState in order to add new data to dataINIT so we cound see chages on screen */
  const [data, setData] = useState(dataINIT);

  /* function in which we will save data from NewExpense, which had Saved data from ExpenseForm */
  const dataNewExpenseArrived = (formData) => {
    /* if wee will just add new obj to data array - react wont update the picture. So we need to useState */
    setData((prevData) => {
      return [formData, ...prevData];
    });
  };

  console.log(data);
  // this is what is will be rendered
  return (
    /* 
    The thing is that we just tell React that we need this component on our page
    And then React creates it by using JS methods behind the scenes
    */
    <div>
      <div className="application">
        {" "}
        <NewExpanse onAddExpense={dataNewExpenseArrived}></NewExpanse>
        {/* We created our first component and just pasted it here like this. Cool 
        Now we need to paste data inside of these components. Naming is crucial! 
        Items will be used inside of Expenses component so do the same naming */}
        <Expenses items={data} />
      </div>
    </div>
  );
}

export default App;
