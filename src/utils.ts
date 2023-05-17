export const convertPhoneNumberToChatId = (phoneNumber: string) =>
  phoneNumber + "@c.us";

export const toReversed = <T>(array: T[]) => {
  const copiedArray = [...array];
  return copiedArray.reverse();
};
