/* 
App - is a root component. The main and most imporant
Other created components will be nested inside of it.
Components in React - is just a JS functions
*/
import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
  // Data to paste into components
  const data = [
    {
      id: "el1",
      title: "Audi A6",
      date: new Date(2022, 2, 21),
      amount: 34000,
    },

    {
      id: "el2",
      title: "iPhone 11",
      date: new Date(2022, 2, 11),
      amount: 520,
    },

    {
      id: "el3",
      title: "Laptop",
      date: new Date(2022, 2, 23),
      amount: 14200,
    },
  ];

  // this is what is will be rendered
  return (
    /* 
    The thing is that we just tell React that we need this component on our page
    And then React creates it by using JS methods behind the scenes
    */
    <div>
      <div className="application">
        {" "}
        <h2>Let's get started!</h2>
        <p>The random text</p>
        {/* We created our first component and just pasted it here like this. Cool 
        Now we need to paste data inside of these components. Naming is crucial! 
        Items will be used inside of Expenses component so do the same naming */}
        <Expenses items={data}></Expenses>
      </div>
    </div>
  );
}

export default App;
