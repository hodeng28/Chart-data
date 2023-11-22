import axios from "axios";

export const fetchChart1Data = async () => {
  const response = await axios.get<Chart1Data>("http://localhost:3001/chart1");

  return response.data;
};

export const fetchChart2Data = async () => {
  const response = await axios.get<Chart2Data>("http://localhost:3001/chart2");

  return response.data;
};
