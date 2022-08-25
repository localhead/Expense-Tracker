// 1 - created component just by creating a function
// All custom components must be in Capital letters (ExpenseItem) in order to React to detect them
/* 

*/
// Adding CSS
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

// props - is a parameter that hold all the values we recieve in component
// name we recive from App.js must match!!!
function ExpenseItem(props) {
  return (
    /* here we have className instead of just class (like in html)*/
    <div className="expense-item">
      <div className="expense-item__description">
        {" "}
        {/* Making Date a different component */}
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2 className="expense-item__title">{props.title}</h2>
      </div>
      <div className="expense-item__price">{props.amount}$</div>
    </div>
  );
}

// 2 - Congrats now u need to export it and import
// it in App.js which is root component for app
export default ExpenseItem;
