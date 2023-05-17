import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <ChatPage /> : <LoginPage />;
}

export default App;
