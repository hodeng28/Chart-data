import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface Chart2DataProps {
  chartData: Chart2Data;
}

const WorkingPeriodStatistics = ({ chartData }: Chart2DataProps) => {
  const values = Object.values(chartData);

  const colors = ["#1EDA00", "#FAFF00", "#F90", "#FF2128", "#9E048E"];

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
        backgroundColor: colors,
        borderColor: colors,
        cutout: "60%",
      },
    ],
  };

  const labelsPlugin = {
    id: "labelsPlugin",
    afterDatasetsDraw: (chart: any) => {
      const ctx = chart.ctx;
      const { width, height } = chart;

      chart.data.datasets.forEach((dataset: any, datasetIndex: number) => {
        const meta = chart.getDatasetMeta(datasetIndex);

        meta.data.forEach((element: any, index: number) => {
          const model = element;
          const { x, y } = model.tooltipPosition();

          if (dataset.data[index] === 0) {
            return;
          }

          const halfWidth = width / 2;
          const halfHeight = height / 2;
          const extraLine = x >= halfWidth ? 20 : -20;

          const lineX = x >= halfWidth ? x + 30 : x - 30;
          const lineY = y >= halfHeight ? y + 30 : y - 30;

          const label = chart.data.labels[index];
          const data = dataset.data[index];

          const textPosition = x >= halfWidth ? "left" : "right";

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(lineX, lineY);
          ctx.lineTo(lineX + extraLine, lineY);
          ctx.strokeStyle = "rgba(255, 255, 255, 0.80)";
          ctx.stroke();

          const text = `${data}명\n${label}\n${30}%`;
          const lines = text.split("\n");
          const lineHeight = 13;
          ctx.textAlign = textPosition;
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
          lines.forEach((line, index) => {
            ctx.fillText(line, lineX + extraLine, lineY + index * lineHeight);
          });
        });
      });
    },
  };

  const options = {
    layout: {
      padding: 30,
    },
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
      <Doughnut data={data} options={options} plugins={[labelsPlugin]} />
    </Wrapper>
  );
};

export default WorkingPeriodStatistics;

const Wrapper = styled.div`
  width: 350px;
  margin: 100px auto 0;
`;
