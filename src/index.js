import React from "react";
import ReactDom from "react-dom";
//Components
import Home from "./pages/Home/Home.jsx"

const container = document.getElementById('App');

ReactDom.render(<Home />, container);
