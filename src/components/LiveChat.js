import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(30) + "JS",
        })
      );
    }, 500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="rounded-lg bg-gray-100 h-[500px] p-2 border border-black overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage key={index} name={c.name} message={c.message} />
        ))}
      </div>
      <form
        className="w-full my-2 p-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("On form submit", liveMessage);
          dispatch(
            addMessage({
              name: "Arijit Dutt",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-96 p-2"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-100 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
