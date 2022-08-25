// 1 - created component just by creating a function
// All custom components must be in Capital letters (ExpenseItem) in order to React to detect them
/* 

*/
// Adding CSS
import "./ExpenseItem.css";

// props - is a parameter that hold all the values we recieve in component
// name we recive from App.js must match!!!
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  return (
    /* here we have className instead of just class (like in html)*/
    <div className="expense-item">
      <div className="expense-item__description">
        {" "}
        <div className="expense-item__date">
          {" "}
          <div>{day}</div>
          <div>{month}</div>
          <div>{year}</div>
        </div>
        <h2 className="expense-item__title">{props.title}</h2>
      </div>

      <div className="expense-item__price">{props.amount}$</div>
    </div>
  );
}

// 2 - Congrats now u need to export it and import
// it in App.js which is root component for app
export default ExpenseItem;
