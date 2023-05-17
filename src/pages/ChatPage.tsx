import { useState } from "react";
import ActiveChat from "../components/ActiveChat";
import Chats from "../components/Chats";

import AddContactForm from "../components/AddContactForm";
import Modal from "../components/Modal";
import { convertPhoneNumberToChatId } from "../utils";
import styles from "./ChatPage.module.css";

const ChatPage = () => {
  const [chatId, setChatId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const selectChatHandler = (chatId: string) => {
    setChatId(chatId);
  };

  const openModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  const addContactHandler = (phoneNumber: string) => {
    const chatId = convertPhoneNumberToChatId(phoneNumber);
    setChatId(chatId);
    closeModalHandler();
  };

  return (
    <div className={styles.chatPage}>
      <Chats
        chatId={chatId}
        onSelectChat={selectChatHandler}
        onOpenModal={openModalHandler}
      />
      <ActiveChat chatId={chatId} />
      {isOpen && (
        <Modal onCloseModal={closeModalHandler}>
          <AddContactForm onAdd={addContactHandler} />
        </Modal>
      )}
    </div>
  );
};
export default ChatPage;
