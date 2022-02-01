import React from "react";
import { MessageProps } from "../../services/messaging";
import "./styles.css";

export const Message: React.FC<MessageProps> = ({ message, user }) => {
  return (
    <div
      className={`message ${
        user === localStorage.getItem("id") && "myMessage"
      }`}
    >
      <p
        style={{
          background: user === localStorage.getItem("id") ? "#014686" : "#474747",
        }}
      >
        {message}
      </p>
    </div>
  );
};
