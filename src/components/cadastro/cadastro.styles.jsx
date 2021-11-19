import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5rem;
`;

export const FormContainer = styled.fieldset`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
`;

export const Section = styled.section`
  margin: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;

  input {
    border: 1px solid #000000;

    &:focus {
      outline: none;
    }
  }
`;

export const Mandatory = styled.span`
  font-weight: 700;
  color: red;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const Erro = styled.h4`
  color: #ff0000;
  text-align: center;
  margin: 5px;
`;
