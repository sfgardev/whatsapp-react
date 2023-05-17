export type UserData = {
  idInstance: string;
  apiTokenInstance: string;
};

export type ChatContact = {
  id: string;
  name: string;
  type: string;
};

export type ChatHistory = {
  type: string;
  idMessage: string;
  timestamp: number;
  typeMessage: string;
  chatId: string;
  textMessage: string;
  senderId: string;
  senderName: string;
};

