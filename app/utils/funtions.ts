import { descriptionTextLimit } from "./constants";

export const truncateText = (text: string, limit: number = 100) => {
  if (text.length < limit) return text;
  return text.substring(0, limit) + "...";
};
