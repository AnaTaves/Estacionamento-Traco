import styled from "styled-components";

import { Link } from "react-router-dom";

const purple = "#650f8a";

export const CheckInContainer = styled.main`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 40px;
  margin-left: 34%;
  margin-bottom: 20px;
  h3 {
    color: ${purple};
    margin-bottom: 10px;
  }
  @media (max-width: 768px) {
    margin-left: -1%;
    overflow-x: auto;
  }
`;

export const RowContainer = styled.tr`
  background-color: #afedec;
`;

export const ItemContainer = styled.td`
  padding: 10px;
`;

export const HeaderContainer = styled.th`
  color: ${purple};
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

export const InsertCheckIn = styled.section`
  margin-top: 10px;
  display: flex;
  align-items: center;

  select {
    margin-right: 30px;
  }
`;

export const CheckInButton = styled.button`
  background-color: ${purple};
  padding: 10px;
  border-radius: 10px;
  border: none;
  color: #ffff;
`;

export const LinkContainer = styled(Link)`
  color: ${purple};
  text-decoration: none;
  font-weight: 800;
  margin-left: 30px;
`;
