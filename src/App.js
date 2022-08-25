/* 
App - is a root component. The main and most imporant
Other created components will be nested inside of it.
Components in React - is just a JS functions
*/
import ExpenseItem from "./components/ExpenseItems";

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
        Now we need to paste data inside of these components. Naming is crucial! */}
        <ExpenseItem
          title={data[0].title}
          date={data[0].date}
          amount={data[0].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={data[1].title}
          date={data[1].date}
          amount={data[1].amount}
        ></ExpenseItem>
        <ExpenseItem
          title={data[2].title}
          date={data[2].date}
          amount={data[2].amount}
        ></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
