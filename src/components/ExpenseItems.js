// 1 - created component just by creating a function
// All custom components must be in Capital letters in order to React to detect them
/* 

*/
// Adding CSS
import "./ExpenseItem.css";

function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "iPhone 13 Pro";
  const expenseAmount = 294.64;

  return (
    /* here we have className instead of just class */
    <div className="expense-item">
      <div className="expense-item__description">
        {" "}
        <div className="expense-item__date">{expenseDate.toDateString()}</div>
        <h2 className="expense-item__title">{expenseTitle}</h2>
      </div>

      <div className="expense-item__price">{expenseAmount}$</div>
    </div>
  );
}

// 2 - Congrats now u need to export it and import
// it in App.js which is root component for app
export default ExpenseItem;
