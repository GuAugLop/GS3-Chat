import { IonIcon } from "@ionic/react";
import React from "react";
import "./styles.css";

import { send } from "ionicons/icons";

export const Input: React.FC<{
  cb: any;
  setValue: (value: string) => void;
  value: string;
}> = ({ cb, setValue, value }) => {
  return (
    <form className="form" onSubmit={cb}>
      <input
        className="input"
        onChange={({ target }) => setValue(target.value)}
        value={value}
      />
      <button type="submit">
        <IonIcon style={{ color: "#fff" }} icon={send} />
      </button>
    </form>
  );
};
