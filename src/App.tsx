import styled from 'styled-components';
import MonthlyStatisticsChart from './components/MonthlyStatisticsChart';
import MonthlyStatisticsTable from './components/MonthlyStatisticsTable';
import WorkingPeriodStatisticsChart from './components/WorkingPeriodStatisticsChart';
import { useQuery } from 'react-query';
import { fetchChart1Data, fetchChart2Data } from './apis/ChartApis';
import WorkingPeriodStatisticsHalfDoughnut from './components/WorkingPeriodStatisticsHalfDoughnut';

const App = () => {
  const {
    data: chart1Data,
    isLoading: isLoadingChart1,
    isError: isErrorChart1
  } = useQuery('chart1', fetchChart1Data);

  const {
    data: chart2Data,
    isLoading: isLoadingChart2,
    isError: isErrorChart2
  } = useQuery('chart2', fetchChart2Data);

  const isLoading = isLoadingChart1 || isLoadingChart2;
  const isError = isErrorChart1 || isErrorChart2;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <Contaner>
      <ChartWrapper>
        {chart1Data && (
          <>
            <MonthlyStatisticsTable chartData={chart1Data} />
            <MonthlyStatisticsChart chartData={chart1Data} />
          </>
        )}
        {chart2Data && (
          <>
            <WorkingPeriodStatisticsChart chartData={chart2Data} />
            <WorkingPeriodStatisticsHalfDoughnut chartData={chart2Data} />
          </>
        )}
      </ChartWrapper>
    </Contaner>
  );
};

export default App;

const Contaner = styled.div`
  width: 1280px;
  margin: 0 auto;
  text-align: center;
  background: #080920;
`;

const ChartWrapper = styled.main`
  margin: 0 auto;
  padding: 32px;
`;
