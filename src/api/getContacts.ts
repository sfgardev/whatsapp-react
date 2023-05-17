import { ChatContact } from "../types";
import { BASE_API_URL } from "./const";

type GetContactsResponse = ChatContact[];

export const getContacts = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<GetContactsResponse | undefined> => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/waInstance${idInstance}/getContacts/${apiTokenInstance}`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
