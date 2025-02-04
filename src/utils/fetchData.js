import axios from "axios";
import { typeReference } from "./typeReference";

export const fetchData = async (email) => {
  try {
    const response = await axios.get(`https://bsby.siglab.co.id/api/test-programmer?email=${email}1`);
    const data = response.data;

    const mappedData = data.map((item) => ({
      ...item,
      type: typeReference[item.type] || item.type,
    }));

    return mappedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
