import { db } from "../config/firebase";
import { collection, getDocs, addDoc, onSnapshot } from "firebase/firestore";

export type MessageProps = {
  user: string;
  time: number;
  message: string;
};

export const MessagingService = {
  getMessages: async () => {
    try {
      const messages = await getDocs(collection(db, "messages"));
      messages.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().user}`);
      });
    } catch (err) {
      console.log(err);
    }
  },
  newMessage: async (user: string, message: string) => {
    try {
      addDoc(collection(db, "messages"), {
        user: localStorage.getItem("id"),
        message,
        time: Date.now(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  },
  snapShot: async (setMessages: (value: any) => void) => {
    return onSnapshot(collection(db, "messages"), (doc) => {
      setMessages([]);
      doc.forEach((a) => setMessages((old: any) => [...old, a.data()]));
    });
  },
};
