import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BottomNav, Navbar } from "./components/navbar";
import Organization from "./pages/Organization/Organization";
import GiveHelp from "./pages/GiveHelp/GiveHelp";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import NewPost from "./pages/Newpost/NewPost";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Filtersidebar from "./components/sidebarFilter/Filtersidebar";
import NotFound from "./pages/NotFound/NotFound";
import PostDetails from "./pages/PostDetails/PostDetails";
import Profile from "./components/profile/Profile";
import ProfileSetting from "./components/profile/ProfileSetting";
import InfoBar from './components/InfoBar'
// import Chat from "./components/chat/Chat";

const App = () => {
  const [isSidebarVisibile, setSidebarVisible] = useState(false);
  const handleSidebarEvent = (visibility) => {
    setSidebarVisible(visibility);
  }
  return (
    <div className="App">
      <div className="main-wrapper">
        <div>
          <Navbar sideBarEvent={handleSidebarEvent} />
        </div>
        <div className="app_body">
          <Filtersidebar visibility={isSidebarVisibile} />
          <Switch>
            <Route exact path="/">
              <NeedHelp />
            </Route>
            <Route path="/help">
              <NeedHelp />
            </Route>
            <Route path="/provide-help">
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
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/settings">
              <ProfileSetting />
            </Route>
            <Route path="/post-feed">
              <PostDetails />
            </Route>
            <Route path='*' exact={true} component={NotFound} />
          </Switch>

          <InfoBar/>
        </div>
        <BottomNav />

      </div>
    </div>
  );
};

export default App;
