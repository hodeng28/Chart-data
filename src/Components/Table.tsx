import styled from "styled-components";
import months from "../consts/constants";
import { theme } from "../theme/theme";

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
            <th>Total</th>
          </tr>
        </StyledTHead>
        <StyledTBody>
          <tr>
            <StyledTdA>A</StyledTdA>
            {A.map((data, index: number) => (
              <td key={index}>{data}</td>
            ))}
            <StyledTotalA>{calculateSum(A)}</StyledTotalA>
          </tr>
          <tr>
            <StyledTdB>B</StyledTdB>
            {B.map((data, index: number) => (
              <td key={index}>{data}</td>
            ))}
            <StyledTotalB>{calculateSum(B)}</StyledTotalB>
          </tr>
          <tr>
            <StyledTdTotal>Total</StyledTdTotal>
            {sumData.map((data: number) => (
              <td key={data}>{data}</td>
            ))}
            <StyledTotal>{calculateSum(sumData)}</StyledTotal>
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

  & tr {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  & td {
    padding: 12px;
  }
`;

const StyledTHead = styled.thead`
  color: grey;

  & > tr > th {
    padding-bottom: 12px;

    &:first-child {
      width: 160px;
    }

    &:last-child {
      width: 120px;
    }

    &:not(:first-child):not(:last-child) {
      width: 65px;
    }
  }
`;

const StyledTBody = styled.tbody`
  color: white;
  text-align: center;
`;

const StyledTdA = styled.td`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    width: 10px;
    height: 10px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="%231EDA00"/></svg>');
  }
`;

const StyledTdB = styled.td`
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 12px;
    width: 10px;
    height: 10px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="%231EDA00"/></svg>');
  }
`;

const StyledTdTotal = styled.td`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none"><circle cx="5" cy="5" r="5" fill="%231EDA00"/></svg>');
  }
`;

const StyledTotalA = styled.td`
  color: ${theme.colors.primary};
`;

const StyledTotalB = styled.td`
  color: ${theme.colors.secondary};
`;

const StyledTotal = styled.td`
  color: ${theme.colors.tertiary};
`;
