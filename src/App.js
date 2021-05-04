import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { GoogleLogin } from "react-google-login";

function App() {
  const successCallback = (data) => {
    console.log(data);
  };
  const failureCallback = (error) => {
    console.log(error);
    console.log("thius is google response");
  };
  return (
    <div className="App">
      <div className="header">
        <Navbar />
      </div>
      <div className="app_body">
        <Switch>
          <Route exact path="/">
            <h1>we need help</h1>
            <GoogleLogin
              clientId="1027672846288-1cplsl3m6pl2p3ngjn1k1msqr07s4at7.apps.googleusercontent.com"
              buttonText="Continue with google"
              uxMode="popup"
              redirectUri="https://mechaadii.web.app"
              onSuccess={successCallback}
              onFailure={failureCallback}
              cookiePolicy={"single_host_origin"}
            />
          </Route>
          <Route path="/helps">
            <h1>we are giving help</h1>
          </Route>
          <Route path="/organization">
            <h1>We are the organizations</h1>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
