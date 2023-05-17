import { useCallback, useContext, useEffect, useRef, useState } from "react";
import styles from "./ActiveChat.module.css";
import { ChatHistory } from "../types";
import { getChatHistory } from "../api/getChatHistory";
import { AuthContext } from "../context/AuthContext";
import SendMessageForm from "./SendMessageForm";
import { sendMessage } from "../api/sendMessage";
import { toReversed } from "../utils";
import { useInterval } from "../hooks/useInterval";

type ActiveChatProps = {
  chatId: string | null;
};

const ActiveChat = ({ chatId }: ActiveChatProps) => {
  const [messages, setMessages] = useState<ChatHistory[]>([]);

  const bottomRef = useRef<HTMLDivElement>(null);

  const {
    userData: { apiTokenInstance, idInstance },
  } = useContext(AuthContext);

  const fetchChatHistory = useCallback(async () => {
    if (!chatId) return;
    const chatHistory = await getChatHistory(
      idInstance,
      apiTokenInstance,
      chatId
    );
    if (Array.isArray(chatHistory)) {
      setMessages(chatHistory);
    }
  }, [idInstance, apiTokenInstance, chatId]);

  useInterval(fetchChatHistory, 1000);

  useEffect(() => {
    fetchChatHistory();
  }, [fetchChatHistory]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView();
  }, [messages]);

  const onSendMessage = async (value: string) => {
    if (!chatId) return;
    await sendMessage(idInstance, apiTokenInstance, chatId, value);
  };

  if (!chatId) {
    return <h2>Please select chat or start a new one</h2>;
  }

  return (
    <div className={styles.activeChat}>
      <ul>
        {toReversed(messages).map((message) => (
          <li
            key={message.idMessage}
            className={
              message.type === "outgoing" ? styles.outgoing : styles.incoming
            }
          >
            {message.textMessage}
          </li>
        ))}
        <div ref={bottomRef} />
      </ul>
      <SendMessageForm onSendMessage={onSendMessage} />
    </div>
  );
};
export default ActiveChat;
