import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import months from "../consts/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface Chart1DataProps {
  chartData: Chart1Data;
}

const Chart = ({ chartData }: Chart1DataProps) => {
  const { A, B } = chartData;

  const sumData = A.reduce((acc: any, value: number, index: number) => {
    acc.push(value + B[index]);
    return acc;
  }, []);

  const data = {
    labels: months,
    datasets: [
      {
        label: "A",
        data: A,
        backgroundColor: "#1EDA00",
        borderWidth: 8,
      },
      {
        label: "B",
        data: B,
        backgroundColor: "#FAFF00",
        borderWidth: 8,
      },
      {
        label: "total",
        data: sumData,
        backgroundColor: "#66B6FF",
        borderWidth: 8,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default Chart;
