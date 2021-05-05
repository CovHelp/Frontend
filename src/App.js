import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Organization from "./pages/Organization/Organization";
import GiveHelp from "./pages/GiveHelp/GiveHelp";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import NewPost from "./pages/Newpost/index";
import Filtersidebar from "./components/sidebarFilter/Filtersidebar";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Filtersidebar/>
      <div className="app_body">
        <Switch>
          <Route exact path="/">
            <GiveHelp />
          </Route>
          <Route path="/help">
            <NeedHelp />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
          <Route path="/organization">
            <Organization />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default App;
