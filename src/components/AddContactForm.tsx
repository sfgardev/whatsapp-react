import { useState } from "react";
import styles from "./AddContactForm.module.css";

type AddContactFormProps = {
  onAdd: (chatId: string) => void;
};

const AddContactForm = ({ onAdd }: AddContactFormProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const changePhoneNumberHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (Number.isNaN(+value)) return;
    setPhoneNumber(value);
  };

  return (
    <form onSubmit={() => onAdd(phoneNumber)} className={styles.addContactForm}>
      <div>
        <label htmlFor="phone">Phone number</label>
        <input
          onChange={changePhoneNumberHandler}
          value={phoneNumber}
          id="phone"
          type="text"
          placeholder="e.g. 79221234567"
          maxLength={11}
          minLength={11}
        />
      </div>
      <button>Add</button>
    </form>
  );
};
export default AddContactForm;
