import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Chart2DataProps {
  chartData: Chart2Data;
}

const Chart2 = ({ chartData }: Chart2DataProps) => {
  const values = Object.values(chartData);

  const months = [
    "0~5년차",
    "6~10년차",
    "11~15년차",
    "16~20년차",
    "20년차 이상",
  ];

  const data = {
    labels: months,
    datasets: [
      {
        data: values,
        backgroundColor: ["#1EDA00", "#FAFF00", "#F90", "#FF2128", "#9E048E"],
        borderColor: ["#1EDA00", "#FAFF00", "#F90", "#FF2128", "#9E048E"],
      },
    ],
  };

  const options = {
    responsive: false,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "근속 연수",
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#fff",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} />
    </>
  );
};

export default Chart2;

// const StyledDounuts = styled.div`
//   width: 100%;
// `;
