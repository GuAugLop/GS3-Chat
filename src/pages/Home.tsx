import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Home.css";

import { MessageProps, MessagingService } from "../services/messaging";
import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";

const Home: React.FC = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const SnapShot = async () => {
    return await MessagingService.snapShot(setMessages);
  };

  const setId = () => {
    const id = localStorage.getItem("id");
    if (!id) {
      localStorage.setItem("id", Date.now().toString());
    }
  };

  useEffect(() => {
    SnapShot();
    setId();
  }, []);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Chat</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="Container">
        <div className="wrapper">
          <ChatContainer
            messages={messages.sort((a: MessageProps, b: MessageProps) =>
              a.time < b.time ? -1 : 1
            )}
          />
          <Input
            setValue={setMessage}
            value={message}
            cb={(e: any) => {
              e.preventDefault();
              if (message.trim()) {
                setMessage("");
                MessagingService.newMessage("tal", message);
              }
            }}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
