import { typeReference } from "./typeReference";

export const transformData = (data) => {
  return data.map((item) => ({
    ...item,
    type: typeReference[item.type] || "Unknown",
    status: item.status === 1 ? "Approved" : "Unapproved",
    attachment: item.attachment === 1 ? "Ada" : "Tidak Ada",
    discountMessage:
      item.discount > 1_000_000
        ? "Approval Needed"
        : item.discount > 0
        ? "Discount Applied"
        : "No Discount",
  }));
};
