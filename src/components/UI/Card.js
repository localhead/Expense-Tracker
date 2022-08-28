import "./Card.css";

/* 
Custom component for Expenses item

*/
function Card(props) {
  const classes = "card " + props.className;
  /* props.children - is a predefined React name for such cases
  Card now holds each of ExpenseItem we create */
  return <div className={classes}>{props.children}</div>;
}

export default Card;
