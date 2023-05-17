import { useContext, useEffect, useState } from "react";
import { getContacts } from "../api/getContacts";
import { AuthContext } from "../context/AuthContext";
import { ChatContact } from "../types";
import styles from "./Chats.module.css";
import Contact from "./Contact";
import Header from "./Header";

type ChatsProps = {
  chatId: string | null;
  onSelectChat: (chatId: string) => void;
  onOpenModal: () => void;
};

const Chats = ({ chatId, onSelectChat, onOpenModal }: ChatsProps) => {
  const [contacts, setContacts] = useState<ChatContact[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    userData: { apiTokenInstance, idInstance },
  } = useContext(AuthContext);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      const contacts = await getContacts(idInstance, apiTokenInstance);
      if (contacts) {
        setContacts(contacts);
      }
      setIsLoading(false);
    };
    fetchContacts();
  }, [apiTokenInstance, idInstance]);

  if (isLoading) {
    return <p style={{ minWidth: "280px" }}>Loading...</p>;
  }

  return (
    <div className={styles.wrapper}>
      <Header onOpenModal={onOpenModal} />
      <ul className={styles.chatList}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            chatId={chatId}
            onSelectChat={onSelectChat}
            {...contact}
          />
        ))}
      </ul>
    </div>
  );
};

export default Chats;
