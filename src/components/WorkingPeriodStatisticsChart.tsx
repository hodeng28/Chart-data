import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import useCustomLineForDoughnut from '../hooks/useCustomLineForDoughnut';

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Chart2DataProps {
  chartData: Chart2Data;
}

const WorkingPeriodStatisticsChart = ({ chartData }: Chart2DataProps) => {
  const values = Object.values(chartData);

  const colors = ['#1EDA00', '#FAFF00', '#F90', '#FF2128', '#9E048E'];

  const getCustomLine = useCustomLineForDoughnut;

  const periods = [
    '0~5년차',
    '6~10년차',
    '11~15년차',
    '16~20년차',
    '20년차 이상'
  ];

  const data = {
    labels: periods,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: colors,
        cutout: '60%'
      }
    ]
  };

  const options = {
    radius: '50%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 24,
          usePointStyle: true,
          pointStyle: 'circle',
          pointStyleWidth: 10,
          boxHeight: 7,
          font: {
            size: 13
          }
        }
      },
      title: {
        display: true,
        text: '근속 연수',
        font: {
          size: 16,
          weight: 'bold'
        },
        color: '#fff'
      }
    }
  };

  const labelsPlugin = {
    id: 'labelsPlugin',
    afterDatasetsDraw: getCustomLine
  };

  return (
    <Wrapper>
      <Doughnut data={data} options={options} plugins={[labelsPlugin]} />
    </Wrapper>
  );
};

export default WorkingPeriodStatisticsChart;

const Wrapper = styled.div`
  width: 400px;
  margin: 100px auto 0;
`;
