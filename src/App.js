import React, { useEffect, useState } from "react";

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
import InfoBar from "./components/InfoBar";
import { Chat } from "./components/chat/chat";
import AboutUs from "./pages/About/AboutUs";
import firebase from "firebase";
import covfire from "./covFire";
import { useSelector } from "react-redux";
import { updateDeviceToken } from "./api/user";

const App = () => {
  var messaging = null;
  const userStore = useSelector((store) => store.userStore);

  // console.log(userStore);

  useEffect(() => {
    try {
      if (firebase.messaging.isSupported()) {
        messaging = firebase.messaging();
        
        try{
        messaging.getToken().then(async (v) => {
          if (userStore.token && userStore.token.token) {
            // console.log("User is logged in, updating device token");
            try {
              await updateDeviceToken({
                deviceToken: v,
                authToken: userStore.token.token,
              });
            } catch (e) {}
          }
        }).catch(e=>{});
        messaging.onMessage(async (event) => {
          // console.log(event);
        }).catch(e=>{});
      }catch(e){}
      }
    } catch (e) {}
  }, [userStore]);

  const [isSidebarVisibile, setSidebarVisible] = useState(false);
  const handleSidebarEvent = (visibility) => {
    setSidebarVisible(visibility);
  };
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
            <Route path="/post-detail/:id">
              <PostDetails />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="*" exact={true} component={NotFound} />
          </Switch>

          <InfoBar />
        </div>
        <BottomNav />
      </div>
    </div>
  );
};

export default App;
