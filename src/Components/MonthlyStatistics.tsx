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
import { theme } from "../theme/theme";

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

const MonthlyStatistics = ({ chartData }: Chart1DataProps) => {
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
        backgroundColor: `${theme.colors.primary}`,
      },
      {
        label: "B",
        data: B,
        backgroundColor: `${theme.colors.secondary}`,
      },
      {
        label: "Total",
        data: sumData,
        backgroundColor: `${theme.colors.tertiary}`,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          stepSize: 20,
        },
        categorySpacing: 100,
      },
      y: {
        grid: {
          color: "rgba(255, 255, 255, 0.05))",
        },
        max: 100,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default MonthlyStatistics;
