import React from "react";
import classes from './App.module.css'
import {Button} from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom'
import LoginForm from "./components/LoginForm/LoginForm";


function App() {
  return (
    <div className={ classes.mainApp }>
      <Navbar/>
      <Route exact path={ '/registration' } render={ () => {
        return <LoginForm/>
      }}/>
    </div>
  );
}

export default App;
