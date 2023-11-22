import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Chart2DataProps {
  chartData: Chart2Data;
}

const WorkingPeriodStatistics = ({ chartData }: Chart2DataProps) => {
  const values = Object.values(chartData);

  const periods = [
    "0~5년차",
    "6~10년차",
    "11~15년차",
    "16~20년차",
    "20년차 이상",
  ];

  const data = {
    labels: periods,
    datasets: [
      {
        data: values,
        backgroundColor: ["#1EDA00", "#FAFF00", "#F90", "#FF2128", "#9E048E"],
        borderColor: ["#1EDA00", "#FAFF00", "#F90", "#FF2128", "#9E048E"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          boxWidth: 10,
          font: {
            size: 13,
          },
        },
      },
      pieceLabel: {
        render: "label",
        fontColor: "#000",
        position: "outside",
        segment: true,
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
    <Wrapper>
      <Doughnut data={data} options={options} />
    </Wrapper>
  );
};

export default WorkingPeriodStatistics;

const Wrapper = styled.div`
  width: 360px;
  margin: 100px auto 0;
`;
