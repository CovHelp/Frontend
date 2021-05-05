import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import Organization from "./pages/Organization/Organization";
import GiveHelp from "./pages/GiveHelp/GiveHelp";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import NewPost from "./pages/Newpost/NewPost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Filtersidebar from "./components/sidebarFilter/Filtersidebar";
import Chat from "./components/chat/Chat";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="app_body">
        <Filtersidebar/>
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
            <Login />
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
        </Switch>
        <Chat/>
       
      </div>
    </div>
  );
};

export default App;
