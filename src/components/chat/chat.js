import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import React, { useEffect, useState } from "react";
import "./chat.css";

import socketClient from "socket.io-client";
import { fetchAllChannels } from "../../api/channel";
import { useSelector } from "react-redux";
import { Divider } from "@chakra-ui/layout";

export const Chat = () => {
  const SERVER = "http://127.0.0.1:3001";
  //   var socket = socketClient(SERVER);
  const [msg, setMsg] = useState();
  const [channelName, setChannelName] = useState("CHANNEL1");
  const userStore = useSelector((store) => store.userStore);
  const [allChannels, setAllChannels] = useState([]);

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


  const handleJoinChannel = (channelID) => {
      console.log(channelID)
  }
  const handleSend = () => {
    // socket.emit("send-message", { channel: channelName, msg: msg }, (ack) => {
    //   console.log("acknowledged");
    // });
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
                      <div className="meta-info">
                        {channel.postType === 0 ? (
                          <div className="need-help-chip"> Need Help </div>
                        ) : (
                          <div className="provide-help-chip">
                            {" "}
                            Provide Help{" "}
                          </div>
                        )}
                        <p>{new Date(channel.updatedAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="recent-chat-item">
                    <img src={channel.user1.profile_pic} />
                    <div>
                      <h5>{channel.user1.firstName}</h5>
                      <div className="meta-info">
                        {channel.postType === 0 ? (
                          <div className="need-help-chip"> Need Help </div>
                        ) : (
                          <div className="provide-help-chip">
                            {" "}
                            Provide Help{" "}
                          </div>
                        )}
                        <p>{new Date(channel.updatedAt).toLocaleString()}</p>
                      </div>
                    </div>
                  </div>
                )}
                <Divider />
              </div>
            ))}
        </div>
        <div className="chat-container">
          <Input
            onChange={(e) => setChannelName(e.target.value)}
            placeholder="Channel name"
          />

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
