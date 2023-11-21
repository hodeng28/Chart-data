import "./App.css";
import Chart from "./Components/Chart";
import Table from "./Components/Table";
import Chart2 from "./Components/Chart2";
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
      {chart1Data && (
        <>
          <Table chartData={chart1Data} />
          <Chart chartData={chart1Data} />
        </>
      )}
      {chart2Data && <Chart2 chartData={chart2Data} />}
    </div>
  );
};

export default App;
