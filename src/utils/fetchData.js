import axios from 'axios';

export const fetchData = async (email) => {
  const response = await axios.get(`https://bsby.siglab.co.id/api/test-programmer?email=${email}`);
  return response.data.results;
};
