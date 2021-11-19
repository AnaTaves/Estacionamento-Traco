import styled from "styled-components";

const purple = "#650f8a";

export const Container = styled.main`
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 10px;
  margin-left: 45%;
  margin-bottom: 20px;
  text-align: center;
  @media (max-width: 768px) {
    margin-left: 35%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 10px;
`;

export const Table = styled.table`
  margin: 0 auto;
`;

export const HeaderContainer = styled.th`
  padding: 5px;
`;

export const TimeContainer = styled.div`
  margin-top: 10px;
  p {
    margin-top: 5px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;

  input {
    margin-top: 5px;
    text-align: center;
  }
`;

export const Button = styled.button`
  background-color: ${purple};
  border-radius: 50px;
  border: none;
  padding: 10px;
  color: #fff;
  &:hover {
    cursor: pointer;
  }
`;
