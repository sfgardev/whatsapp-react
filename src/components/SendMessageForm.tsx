import { useRef } from "react";
import styles from "./SendMessageForm.module.css";

type SendMessageFormProps = {
  onSendMessage: (value: string) => void;
};

const SendMessageForm = ({ onSendMessage }: SendMessageFormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const sendMessageHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      onSendMessage(inputRef.current.value);
      inputRef.current.value = "";
    }
  };

  return (
    <form onSubmit={sendMessageHandler} className={styles.sendMessageForm}>
      <input ref={inputRef} type="text" placeholder="Enter message..." />
      <button>Send</button>
    </form>
  );
};
export default SendMessageForm;
