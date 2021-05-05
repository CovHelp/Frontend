import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Organization from "./pages/Organization/Organization";
import GiveHelp from "./pages/GiveHelp/GiveHelp";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import NewPost from "./pages/Newpost/index";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
=======
import Filtersidebar from "./components/sidebarFilter/Filtersidebar";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Filtersidebar/>
      <div className="app_body">
        <Switch>
          <Route exact path="/">
            <NeedHelp />
          </Route>
          <Route path="/help">
            <GiveHelp />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/organization">
            <Organization />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
