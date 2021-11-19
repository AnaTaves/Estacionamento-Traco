import styled from "styled-components";

export const Container = styled.footer`
  background-color: #260259;
  display: flex;
  flex-direction: column;
  color: #ffff;
  margin-top: auto;
`;

export const FooterColumn = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px;

  a {
    text-decoration: none;
    color: #ffff;
  }
`;

export const Img = styled.img`
  width: 100px;

  @media (max-width: 768px) {
    width: 50px;
  }
`;

export const FooterCopyRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  a {
    text-decoration: none;
    color: #ffff;
  }
`;
