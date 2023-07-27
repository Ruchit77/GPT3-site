import React from "react";
import ReactDOM from "react-dom"; // this will allow us to hook our application to index.html in the public folder

import App from "./App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root")); // importing the app element to render inside of the div with id of 'root'
