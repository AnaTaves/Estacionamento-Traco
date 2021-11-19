import styled from "styled-components";

export const Container = styled.main`
  display: inline-block;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 30px;
  margin-left: 40%;
  text-align: center;
  margin-bottom: 250px;
  @media (max-width: 768px) {
    width: 62vw;
    margin-left: 6%;
    margin-bottom: 80px;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 10px;
`;
