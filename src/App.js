/* 
App - is a root component. The main and most imporant
Other created components will be nested inside of it.
Components in React - is just a JS functions
*/
import ExpenseItem from "./components/ExpenseItems";

function App() {
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
        {/* We created our first component and just pasted it here like this. Cool */}
        <ExpenseItem></ExpenseItem>
      </div>
    </div>
  );
}

export default App;
