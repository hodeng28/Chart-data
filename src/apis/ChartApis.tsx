import axios from 'axios';

const BASE_URL = process.env.REACT_APP_CHARTS;

export const fetchChart1Data = async () => {
  const response = await axios.get<Chart1Data>(`${BASE_URL}/chart1`);

  return response.data;
};

export const fetchChart2Data = async () => {
  const response = await axios.get<Chart2Data>(`${BASE_URL}/chart2`);

  return response.data;
};
