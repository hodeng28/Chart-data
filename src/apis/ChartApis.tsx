import axios from 'axios';

const BASE_URL = process.env.REACT_APP_CHARTS;

export const fetchChart1Data = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.chart1;
};

export const fetchChart2Data = async () => {
  const response = await axios.get(`${BASE_URL}`);

  return response.data.chart2;
};
