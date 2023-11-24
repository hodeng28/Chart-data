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
import useSumArray from '../hooks/useSumArray';
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

  const sumData = useSumArray(A, B);

  const data = {
    labels: months,
    datasets: [
      {
        label: 'A',
        data: A,
        backgroundColor: `${colors.primary}`,
        borderWidth: 1,
        barThickness: 8
      },
      {
        label: 'B',
        data: B,
        backgroundColor: `${colors.secondary}`,
        borderWidth: 1,
        barThickness: 8
      },
      {
        label: 'Total',
        data: sumData,
        backgroundColor: `${colors.tertiary}`,
        borderWidth: 1,
        barThickness: 8
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
      <Bar style={{ display: 'block' }} data={data} options={options} />
    </>
  );
};

export default MonthlyStatistics;
