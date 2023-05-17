import { useContext, useState } from "react";
import styles from "./LoginForm.module.css";
import { AuthContext } from "../context/AuthContext";
import { UserData } from "../types";

// type Props = {};
const LoginForm = () => {
  const [formData, setFormData] = useState<UserData>({
    idInstance: "",
    apiTokenInstance: "",
  });

  const { isLoading, login } = useContext(AuthContext);

  const isValid = formData.idInstance && formData.apiTokenInstance;

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { idInstance, apiTokenInstance } = formData;
    login(idInstance, apiTokenInstance);
  };

  return (
    <form onSubmit={submitHandler} className={styles.loginForm}>
      <input
        onChange={changeHandler}
        type="text"
        name="idInstance"
        placeholder="IdInstance"
      />
      <input
        onChange={changeHandler}
        type="text"
        name="apiTokenInstance"
        placeholder="ApiTokenInstance"
      />
      <button type="submit" disabled={!isValid || isLoading}>
        Login
      </button>
    </form>
  );
};
export default LoginForm;
