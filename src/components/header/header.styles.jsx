import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: #8a25a5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 10px 10px;
  box-shadow: rgb(0 0 0 / 40%) 0 9px 19px;
  height: 8vh;
  margin-bottom: 5rem;
  @media (max-width: 768px) {
    height: 46vh;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImgContainer = styled.img`
  max-width: 65px;
  width: 15vw;
`;

export const LinkContainer = styled.div`
  display: inline-flex;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #ffff;
  font-weight: bold;
  padding: 20px;
`;
