import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import styles from "./Header.module.css";

type HeaderProps = {
  onOpenModal: () => void;
};

const Header = ({ onOpenModal }: HeaderProps) => {
  const { logout } = useContext(AuthContext);

  return (
    <header className={styles.header}>
      <svg
        onClick={onOpenModal}
        className={styles.newChat}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        width={32}
        height={32}
        fill="#54656f"
      >
        <title>New message</title>
        <path d="M56,0H8A8,8,0,0,0,0,8V61.33a2.68,2.68,0,0,0,1.55,2.43A2.75,2.75,0,0,0,2.67,64a2.67,2.67,0,0,0,1.73-.64L20.07,49.93A8,8,0,0,1,25.28,48H56a8,8,0,0,0,8-8V8A8,8,0,0,0,56,0Zm2.67,40A2.68,2.68,0,0,1,56,42.67H25.28a13.36,13.36,0,0,0-8.68,3.21L5.33,55.54V8A2.68,2.68,0,0,1,8,5.33H56A2.68,2.68,0,0,1,58.67,8Z" />
        <path d="M45.33,15.69H18.67a2.67,2.67,0,1,0,0,5.33H45.33a2.67,2.67,0,1,0,0-5.33Z" />
        <path d="M45.33,26.36H18.67a2.67,2.67,0,1,0,0,5.33H45.33a2.67,2.67,0,1,0,0-5.33Z" />
      </svg>

      <svg
        onClick={logout}
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.logout}
      >
        <title>Logout</title>
        <path
          d="M21 12L13 12"
          stroke="#54656f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 15L20.913 12.087V12.087C20.961 12.039 20.961 11.961 20.913 11.913V11.913L18 9"
          stroke="#54656f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 5V4.5V4.5C16 3.67157 15.3284 3 14.5 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H14.5C15.3284 21 16 20.3284 16 19.5V19.5V19"
          stroke="#54656f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </header>
  );
};
export default Header;
