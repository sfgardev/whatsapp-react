import { BASE_API_URL } from "./const";

type StateInstance = "authorized" | "unauthorized";

type GetStateInstanceResponse = {
  stateInstance: StateInstance;
};

export const getStateInstance = async (
  idInstance: string,
  apiTokenInstance: string
): Promise<GetStateInstanceResponse | undefined> => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`
    );
    return await response.json();
  } catch (err) {
    console.error(err);
  }
};
