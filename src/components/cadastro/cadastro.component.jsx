import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

import TipoVeiculo from "../tipoVeiculo/tipoVeiculo.component";
import * as S from "./cadastro.styles";

const Cadastro = () => {
  const [erro, setErro] = useState(false);

  const onSubmit = async (values) => {
    try {
      const user = await axios.post(
        "https://estacionamento-traco.herokuapp.com/api/vehicles",
        values
      );
      if (user.status === 200) {
        alert("Cadastro efetuado com sucesso!");
      }
    } catch (err) {
      setErro(true);
    }
  };

  const schema = yup.object().shape({
    owner: yup.string().required("Nome é obrigatório!"),
    model: yup.string().required("Modelo é obrigatório!"),
    label: yup.string().required("Placa é obrigatório!")
  });

  const initialValues = {
    owner: "",
    model: "",
    type: "",
    label: "",
    observation: ""
  };
  return (
    <S.Container>
      <h1>Cadastro Clientes</h1>
      <S.FormContainer>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={schema}
        >
          {({ errors }) => (
            <Form>
              <S.Section>
                <label>Nome do Cliente: </label>
                <Field name="owner" type="text" placeholder="Nome Completo" />
                {errors.owner && <S.Mandatory>{errors.owner}</S.Mandatory>}
              </S.Section>

              <S.Section>
                <label>Modelo: </label>
                <Field name="model" type="text" placeholder="Modelo" />
                {errors.model && <S.Mandatory>{errors.model}</S.Mandatory>}
              </S.Section>

              <S.Section>
                <label>Tipo: </label>
                <Field name="type" as="select">
                  <TipoVeiculo />
                </Field>
              </S.Section>

              <S.Section>
                <label>Placa: </label>
                <Field name="label" type="text" placeholder="Placa" />
                {errors.label && <S.Mandatory>{errors.label}</S.Mandatory>}
              </S.Section>

              <S.Section>
                <label>Observações: </label>
                <Field
                  name="observation"
                  type="text"
                  placeholder="Observações"
                />
              </S.Section>

              <S.ButtonContainer>
                <Link to="/">
                  <button id="cancelar" type="button">
                    Voltar
                  </button>
                </Link>
                <button type="submit">Salvar</button>
              </S.ButtonContainer>
            </Form>
          )}
        </Formik>
      </S.FormContainer>
      {erro && <S.Erro>Ocorreu um erro. Tente novamente</S.Erro>}
    </S.Container>
  );
};

export default Cadastro;
