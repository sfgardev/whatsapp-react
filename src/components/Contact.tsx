import { ChatContact } from "../types";

interface ContactProps extends ChatContact {
  chatId: string | null;
  onSelectChat: (chatId: string) => void;
}

const Contact = ({ chatId, id, name, onSelectChat }: ContactProps) => {
  const activeStyles = {
    backgroundColor: "#cac3c3",
  };

  return (
    <li
      style={chatId === id ? activeStyles : undefined}
      onClick={() => onSelectChat(id)}
    >
      {name}
    </li>
  );
};
export default Contact;
