/* this is the first file that REact executes */
import ReactDOM from "react-dom";

import "./index.css";
// App - is a component... keep that in mind
import App from "./App";

/* here we tell: pls react render this thing called App in "root" in html */
/* 
This all does not look like a regular JS syntax cuz its not
It called JSX - special syntax by React team for React
*/

/* 
Imerative approach - is the way u would create app by using JS. 
thats when you give precise and clear instructions.
In react the approach is different
*/
ReactDOM.render(<App />, document.getElementById("root"));
