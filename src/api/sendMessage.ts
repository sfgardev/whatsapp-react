import { BASE_API_URL } from "./const";

type SendMessageResponse = {
  invokeStatus: {
    method: string;
    used: number;
    total: number;
    status: string;
  };
};

export const sendMessage = async (
  idInstance: string,
  apiTokenInstance: string,
  chatId: string,
  message: string
): Promise<SendMessageResponse | undefined> => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`,
      {
        method: "POST",
        body: JSON.stringify({ chatId, message }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
