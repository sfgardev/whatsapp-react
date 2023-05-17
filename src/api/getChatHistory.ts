import { ChatHistory } from "../types";
import { BASE_API_URL } from "./const";

type GetChatHistoryResponse = ChatHistory[];

export const getChatHistory = async (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string
): Promise<GetChatHistoryResponse | undefined> => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/waInstance${idInstance}/getChatHistory/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, count: 100 }),
      }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
