import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useSumData from '../hooks/useSumData';
import months from '../consts/constants';
import { theme } from '../theme/theme';

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
  const { colors } = theme;

  const sumData = useSumData(A, B);

  const data = {
    labels: months,
    datasets: [
      {
        label: 'A',
        data: A,
        backgroundColor: `${colors.primary}`
      },
      {
        label: 'B',
        data: B,
        backgroundColor: `${colors.secondary}`
      },
      {
        label: 'Total',
        data: sumData,
        backgroundColor: `${colors.tertiary}`
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      },
      y: {
        max: 100,
        ticks: {
          stepSize: 20
        }
      }
    }
  };

  return (
    <>
      <Bar data={data} options={options} />
    </>
  );
};

export default MonthlyStatistics;
