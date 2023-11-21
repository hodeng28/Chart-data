import "./App.css";
import styled from "styled-components";
import MonthlyStatistics from "./Components/MonthlyStatistics";
import Table from "./Components/Table";
import WorkingPeriodStatistics from "./Components/WorkingPeriodStatistics";
import { useQuery } from "react-query";
import { fetchChart1Data, fetchChart2Data } from "./Api/ChartApi";

const App = () => {
  const {
    data: chart1Data,
    isLoading: isLoadingChart1,
    isError: isErrorChart1,
  } = useQuery("chart1", fetchChart1Data);

  const {
    data: chart2Data,
    isLoading: isLoadingChart2,
    isError: isErrorChart2,
  } = useQuery("chart2", fetchChart2Data);

  const isLoading = isLoadingChart1 || isLoadingChart2;
  const isError = isErrorChart1 || isErrorChart2;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error loading data</p>;
  }

  return (
    <div className="App">
      <Wrapper>
        {chart1Data && (
          <>
            <Table chartData={chart1Data} />
            <MonthlyStatistics chartData={chart1Data} />
          </>
        )}
        {chart2Data && <WorkingPeriodStatistics chartData={chart2Data} />}
      </Wrapper>
    </div>
  );
};

export default App;

const Wrapper = styled.main`
  margin: 0 auto;
  padding: 32px;
`;
