/* eslint-disable @typescript-eslint/no-explicit-any */

const useCustomLine = () => {
  const getCustomLine = (chart: any) => {
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

        const label = chart.data.labels[index];
        const data = dataset.data[index];

        const getPercentagesFromArray = (data: number[]) => {
          const total = data.reduce((sum, value) => sum + value, 0);

          const percentages = data.map((value) =>
            Math.round((value / total) * 100)
          );

          const remainingPercentage =
            100 - percentages.reduce((sum, value) => sum + value, 0);
          percentages[percentages.length - 1] += remainingPercentage;

          return percentages;
        };

        const dataPercentages = getPercentagesFromArray(dataset.data)[index];

        const lineX = x >= halfWidth ? x + 30 : x - 30;
        const lineY = y >= halfHeight ? y + 30 : y - 30;
        const extraLine = x >= halfWidth ? 20 : -20;

        ctx.beginPath();
        ctx.moveTo(x, y);
        // todo: 텍스트 영역이 겹쳐 임의로 조건 추가, 텍스트가 겹치는 경우도 고려해서 line 설정해야함
        if (dataPercentages >= 10) {
          ctx.lineTo(lineX, lineY);
          ctx.lineTo(lineX + extraLine, lineY);
        } else {
          ctx.lineTo(lineX - 20, lineY - 20);
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.80)';
        ctx.stroke();

        const lineHeight = 13;
        const textPosition = x >= halfWidth ? 'left' : 'right';
        const whiteSpaceLineToText = x >= halfWidth ? 7 : -7;
        const text = `${label}\n${data}명\n${dataPercentages}%`;
        const linesBreak = text.split('\n');

        ctx.textAlign = textPosition;
        ctx.textBaseline = 'middle';
        ctx.fillStyle = '#fff';

        linesBreak.forEach((line, index) => {
          if (dataPercentages >= 10) {
            ctx.fillText(
              line,
              lineX + extraLine + whiteSpaceLineToText,
              lineY + index * lineHeight
            );
          } else {
            ctx.fillText(
              line,
              lineX - 20 + whiteSpaceLineToText,
              lineY - 20 + index * lineHeight
            );
          }
        });

        const addCircleToLine = (
          ctx: CanvasRenderingContext2D,
          x: number,
          y: number
        ) => {
          ctx.beginPath();
          ctx.arc(x, y, 3, 0, 2 * Math.PI);
          ctx.fillStyle = '#fff';
          ctx.fill();
          ctx.stroke();
        };

        addCircleToLine(ctx, x, y);

        if (dataPercentages >= 10) {
          addCircleToLine(ctx, lineX + extraLine, lineY);
        } else {
          addCircleToLine(ctx, lineX - 20, lineY - 20);
        }
      });
    });
  };

  return getCustomLine;
};

export default useCustomLine;
