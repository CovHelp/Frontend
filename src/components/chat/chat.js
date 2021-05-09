import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useEffect, useState } from "react";
import "./chat.css";

import socketClient from "socket.io-client";
import { fetchAllChannels } from "../../api/channel";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/layout";
import { createBatcher } from "framer-motion";

export const Chat = () => {
  const SERVER = "http://127.0.0.1:3001";
  var socket = socketClient(SERVER);
  const [msg, setMsg] = useState();
  const userStore = useSelector((store) => store.userStore);
  const [allChannels, setAllChannels] = useState([]);
  const [joinedChannel, setJoinedChannel] = useState(0);
  const [messages, setMessages] = useState([]);

  const handleFetchAllChannels = async () => {
    if (userStore.token && userStore.token.token) {
      const res = await fetchAllChannels({ token: userStore.token.token });
      setAllChannels(res);
      console.log("All channels", res);
    }
  };
  useEffect(() => {
    handleFetchAllChannels();
    socket.on("connection", (v) => {});
  }, []);

  useEffect(() => {}, [joinedChannel]);

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
    console.log(messages);
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
                        {/* <p>{new Date(channel.updatedAt).toLocaleString()}</p> */}
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
          <div>
            {messages.length > 0 &&
              messages.map((msg) => <div>{msg.message}</div>)}
          </div>
          <div className="chat-container-inputbox">
            <Input
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
