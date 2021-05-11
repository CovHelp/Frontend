import { Divider } from "@chakra-ui/layout";
import React from "react";
import Feedback from "./Feedback";
import "./index.css";
import Infocard from "./Infocard.js";

export default function index() {
  return (
    <div className="info-sidebar">
      <div>
        <h1>Tips</h1>
        <Infocard
          title="WASH. YOUR. HANDS"
          body="Wash your hands with soap and water regularly"
        />
        <Infocard
          title="Cover a cough or sneeze"
          body="Cover your cough or sneeze with your sleeve or disposable tissue"
        />
        <Infocard
          title="Don't Touch"
          body="Avoid touching eyes, nose or mouth with unwashed hands."
        />
        <Infocard
          title="Keep your distance"
          body="Avoid close contact with people who are sick."
        />

        <Divider/>
        <div style={{height: 20}}/>
        <h1>Feedback</h1>
        <p>Your feedback is important to us!</p>

        <Feedback/>
      </div>
    </div>
  );
}
