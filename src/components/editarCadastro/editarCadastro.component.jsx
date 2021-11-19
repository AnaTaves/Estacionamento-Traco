import React, { useState, useEffect } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import TipoVeiculo from "../tipoVeiculo/tipoVeiculo.component";
import * as S from "./editarCadastro.styles";

const EditarCadastro = () => {
  const [erro, setErro] = useState(false);
  const [id, setID] = useState(null);
  const [owner, setOwner] = useState("");
  const [model, setModel] = useState("");
  const [label, setLabel] = useState("");
  const [type, setType] = useState("");
  const [observation, setObservation] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("id"));
    setOwner(localStorage.getItem("owner"));
    setModel(localStorage.getItem("model"));
    setLabel(localStorage.getItem("label"));
    setType(localStorage.getItem("type"));
    setObservation(localStorage.getItem("observation"));
  }, []);

  const onSubmit = async () => {
    try {
      const user = await axios.put(
        `https://estacionamento-traco.herokuapp.com/api/vehicles/${id}`,
        {
          owner,
          model,
          label,
          type,
          observation
        }
      );
      if (user.status === 200) {
        alert("Atualização do cadastro efetuada com sucesso!");
      }
    } catch (err) {
      setErro(true);
    }
  };

  const initialValues = {
    owner: { owner },
    model: { model },
    type: { type },
    label: { label },
    observation: { observation }
  };

  return (
    <S.Container>
      <h1>Editar Cadastro Cliente</h1>
      <S.FormContainer>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          enableReinitialize
        >
          {({ errors }) => (
            <Form>
              <S.Section>
                <label>Nome do Cliente: </label>
                <Field
                  name="nome"
                  type="text"
                  placeholder="Nome Completo"
                  value={owner}
                  onChange={(e) => setOwner(e.target.value)}
                />
              </S.Section>

              <S.Section>
                <label>Modelo: </label>
                <Field
                  name="modelo"
                  type="text"
                  placeholder="Modelo"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                />
              </S.Section>

              <S.Section>
                <label>Tipo: </label>
                <Field
                  name="tipo"
                  as="select"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                >
                  <TipoVeiculo />
                </Field>
              </S.Section>

              <S.Section>
                <label>Placa: </label>
                <Field
                  name="placa"
                  type="text"
                  placeholder="Placa"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                />
              </S.Section>

              <S.Section>
                <label>Observações: </label>
                <Field
                  name=" observacoes"
                  type="text"
                  placeholder="Observações"
                  value={observation}
                  onChange={(e) => setObservation(e.target.value)}
                />
              </S.Section>

              <S.ButtonContainer>
                <Link to="/clientes">
                  <button id="cancelar" type="button">
                    Cancelar
                  </button>
                </Link>
                <button type="submit">Salvar</button>
              </S.ButtonContainer>
              {erro && <S.Erro>Ocorreu um erro. Tente novamente</S.Erro>}
            </Form>
          )}
        </Formik>
      </S.FormContainer>
    </S.Container>
  );
};

export default EditarCadastro;
