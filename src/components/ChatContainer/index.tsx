import React from "react";
import { MessageProps } from "../../services/messaging";
import { Message } from "../Message";
import "./styles.css";

type ChatContainerProps = React.HTMLAttributes<HTMLDivElement>  & {
  messages: MessageProps[];
};

export const ChatContainer: React.FC<ChatContainerProps> = ({
  messages,
  ...rest
}) => {
  return (
    <div className="chatContainer" {...rest}>
      {messages.map((message, index) => (
        <Message key={index} {...message} />
      ))}
    </div>
  );
};
