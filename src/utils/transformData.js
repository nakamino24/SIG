import { typeReference } from "./typeReference";

export const transformData = (data) => {
  return data.map((item) => ({
    ...item,
    type: typeReference[item.type] || "Unknown",
  }));
};
