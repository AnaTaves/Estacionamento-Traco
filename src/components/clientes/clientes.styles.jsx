import styled from "styled-components";

export const ListContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;

  h1 {
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    overflow-x: auto;
  }
`;

export const TableContainer = styled.table`
  padding: 10px;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #000000;

  &:nth-child(odd) {
    background-color: #941bb5;
  }
`;

export const TableItem = styled.td`
  padding: 15px;
  text-align: center;
`;

export const IconContainer = styled.div`
  img {
    margin-left: 10px;
    &:hover {
      cursor: pointer;
    }
  }
`;
