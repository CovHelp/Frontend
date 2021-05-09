import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useEffect, useState } from "react";
import "./chat.css";

import socketClient from "socket.io-client";

export const Chat = () => {
  const SERVER = "http://127.0.0.1:3001";
  var socket = socketClient(SERVER);
  const [msg, setMsg] = useState()
  const [channelName, setChannelName] = useState('CHANNEL1')


  useEffect(() => {
    socket.on("connection", (v) => {
      socket.emit("channel-join", channelName, (ack) => {
        console.log("acknowledged");
      });
      socket.on('on-message', msgs => console.log(msgs));
    });
  }, []);
  const handleSend = () => {
    socket.emit("send-message", {channel: channelName, msg: msg}, (ack) => {
      console.log("acknowledged");
    });
  };
  return (
    <div className="chat">
      <div className="chat-wrapper">
        <div className="recent-chats"></div>
        <div className="chat-container">
        <Input onChange={e=>setChannelName(e.target.value)} placeholder="Channel name" />

          <div className="chat-container-inputbox">
            <Input onChange={e=>setMsg(e.target.value)} placeholder="Type your message" />
            <Button onClick={handleSend} bg="blue.500" color="white">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
