import React from "react";
import AppClientRouter from "./AppClientRouter.jsx";
import { Amplify } from 'aws-amplify';
import config from './amplifyconfiguration.json';
Amplify.configure(config);


function App() {
  return (<AppClientRouter />)
}

export default App;