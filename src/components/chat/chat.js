import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useEffect, useState, useRef } from "react";
import "./chat.css";
import { MessageBox } from "react-chat-elements";
import 'react-chat-elements/dist/main.css';

import socketClient from "socket.io-client";
import { fetchAllChannels } from "../../api/channel";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/layout";
import { createBatcher } from "framer-motion";

export const Chat = () => {
  const SERVER = "https://apis.covhelp.online";
  var socket = socketClient(SERVER);
  const [msg, setMsg] = useState();
  const userStore = useSelector((store) => store.userStore);
  const [allChannels, setAllChannels] = useState([]);
  const [joinedChannel, setJoinedChannel] = useState(0);
  const [messages, setMessages] = useState([]);
  
  const msgList = useRef()

  const handleFetchAllChannels = async () => {
    if (userStore.token && userStore.token.token) {
        console.log("Requesing")

      const res = await fetchAllChannels({ token: userStore.token.token });
      setAllChannels(res);
      console.log("All channels", res);
    }else{
        console.log("Error?")
    }
  };
  useEffect(() => {
    console.log("Fetching channels")
    handleFetchAllChannels();
    socket.on("connection", (v) => {});
  }, [userStore]);

  useEffect(() => {
      socket.close();
      socket.open()
  }, [joinedChannel]);

  socket.on("on-init", (msg) => {
    try {
      setMessages(msg);
    } catch (e) {
      console.log(e);
    }
  });

  socket.on("on-message", (msg) => {
    try {
      setMessages((msgs) => [...msgs, msg]);
    } catch (e) {
      console.log(e);
    }
  });

  useEffect(() => {
   // var win = document.getElementById('chatList')
    msgList.current.scrollTop = ( msgList.current.scrollHeight -  msgList.current.clientHeight) + 10
  }, [messages]);

  const handleJoinChannel = (channelID) => {
    if (joinedChannel != 0) {
      socket.emit("channel-leave", joinedChannel);
    }
    socket.emit("channel-join", channelID, (v) => console.log(v));
    setJoinedChannel(channelID);
  };
  const handleSend = () => {
    if (userStore.token && userStore.token.token) {
      socket.emit(
        "send-message",
        {
          channel: joinedChannel,
          msgData: {
            text: msg,
            user: userStore.user.id,
          },
        },
        (ack) => {
          console.log("acknowledged");
        }
      );
      setMsg("");
      msgList.current.scroll({ top: msgList.current.scrollHeight, behavior: 'smooth' });
    }
  };
  return (
    <div className="chat">
      <div className="chat-wrapper">
        <div className="recent-chats">
          {allChannels.length > 0 &&
            allChannels.map((channel, index) => (
              <div key={index} onClick={() => handleJoinChannel(channel.id)}>
                {channel.user1.email === userStore.user.email ? (
                  <div className="recent-chat-item">
                    <img src={channel.user2.profile_pic} />
                    <div>
                      <h5>{channel.user2.firstName}</h5>
                      <span className="date-field">
                        {new Date(channel.updatedAt).toLocaleString()}
                      </span>
                      <div className="meta-info">
                        {channel.postType === 0 ? (
                          <div className="need-help-chip"> Need Help </div>
                        ) : (
                          <div className="provide-help-chip">
                            {" "}
                            Provide Help{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="recent-chat-item">
                    <img src={channel.user1.profile_pic} />
                    <div>
                      <h5>{channel.user1.firstName}</h5>
                      <span className="date-field">
                        {new Date(channel.updatedAt).toLocaleString()}
                      </span>
                      <div className="meta-info">
                        {channel.postType === 0 ? (
                          <div className="need-help-chip"> Need Help </div>
                        ) : (
                          <div className="provide-help-chip">
                            {" "}
                            Provide Help{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <Divider />
              </div>
            ))}
        </div>
        <div className="chat-container">
          <div className="chat-list" ref={msgList}>
            {messages.length > 0 &&
              messages.map((msg) => (
                <MessageBox
                  position={msg.sender.id == userStore.user.id ? "right" : "left"}
                  text={msg.message}
                />
              ))}
          </div>
          <div className="chat-container-inputbox">
            <Input
            value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Type your message"
            />
            <Button onClick={handleSend} bg="blue.500" color="white">
              Send
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
