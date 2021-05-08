import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import "./index.css";

export default function Feedback() {
  const [loading, setLoading] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(true);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await axios.post(
        "https://discord.com/api/webhooks/840677384897429514/riVatO5tVC2v-c1bEQXnF249qh7GJoZ4BcpNf6p2XUcGgVNwVB-0BnadOmN0omlMOVhY",
        { content: inputVal.trim() }
      );
      setLoading(false);
      alert("Your feedback is received!");
    } catch (e) {}
    setLoading(false);
    setIsMessageSent(true);
    setInputVal("");
  };

  useEffect(() => {
    if (inputVal.trim().length > 0) {
      setIsActive(true);
    } else setIsActive(false);
  }, [inputVal]);

  return (
    <div className="feedback-form">
      <Textarea
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        placeholder="Please type your message"
      />
      <Button
        isDisabled={!isActive}
        loadingText="Submitting"
        isLoading={loading}
        onClick={handleSubmit}
        color="white"
        width="100%"
        bg={"blue.500"}
      >
        Send
      </Button>
    </div>
  );
}
