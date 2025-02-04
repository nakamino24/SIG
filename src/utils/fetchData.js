import axios from "axios";
import { transformData } from "../utils/transformData";

export const fetchData = async (email) => {
  try {
    const response = await axios.get(`https://bsby.siglab.co.id/api/test-programmer?email=${email}`);
    const transformedData = transformData(response.data.results); 
    return transformedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
