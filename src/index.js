import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import './index.css'

import App from "./App";



// ReactDOM.render(<App/>, document.getElementById('root'));

const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(<App/>);