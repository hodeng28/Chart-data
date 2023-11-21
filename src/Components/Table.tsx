import styled from "styled-components";
import months from "../consts/constants";

interface Chart1DataProps {
  chartData: Chart1Data;
}

const Table = ({ chartData }: Chart1DataProps) => {
  const { A, B } = chartData;

  const sumData: number[] = A.reduce(
    (acc: any, value: number, index: number) => {
      acc.push(value + B[index]);
      return acc;
    },
    []
  );

  const calculateSum = (array: number[]): number => {
    return array.reduce((acc, val) => acc + val, 0);
  };

  return (
    <>
      <StyledTable>
        <StyledTHead>
          <tr>
            <th>구분</th>
            {months.map((month) => (
              <th key={month}>{month}</th>
            ))}
            <th>합계</th>
          </tr>
        </StyledTHead>
        <StyledTBody>
          <tr>
            <td>A</td>
            {A.map((data, index: number) => (
              <td key={index}>{data}</td>
            ))}
            <td>{calculateSum(A)}</td>
          </tr>
          <tr>
            <td>B</td>
            {B.map((data, index: number) => (
              <td key={index}>{data}</td>
            ))}
            <td>{calculateSum(B)}</td>
          </tr>
          <tr>
            <td>total</td>
            {sumData.map((data: number) => (
              <td key={data}>{data}</td>
            ))}
            <td>{calculateSum(sumData)}</td>
          </tr>
        </StyledTBody>
      </StyledTable>
    </>
  );
};

export default Table;

const StyledTable = styled.table`
  width: 100%;
  margin-bottom: 32px;
  color: red;
`;

const StyledTHead = styled.thead`
  color: grey;
`;

const StyledTBody = styled.tbody`
  color: white;
`;
