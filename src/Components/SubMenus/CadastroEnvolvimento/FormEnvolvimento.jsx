import { Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import "./FormEnvolvimento.css";

function FormEnvolvimento() {
  return (
    <>
      <div className="dadosE1">
        <div className="subE1">
          <div className="grupoE1">
            <label className="label-grupoE1">Grupo</label>
          </div>
          <Form.Label sm="2" className="form1-grupoE1">
            <Col sm="25">
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Label>
          <Form.Label sm="2" className="form2-grupoE1">
            <Col sm="25">
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Label>
        </div>
        <div className="sub2E1">
          <div className="subgrupoE1">
            <label className="label-subgrupoE1">Subgrupo</label>
          </div>
          <Form.Label sm="2" className="form1-subgrupoE1">
            <Col sm="25">
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Label>
          <Form.Label sm="2" className="form2-subgrupoE1">
            <Col sm="25">
              <Form.Control type="text" size="sm" />
            </Col>
          </Form.Label>
          <Form.Label sm="2" className="codTotvs-subgrupoE1">
            Código Totvs
          </Form.Label>
          <Col sm="25" className="codTotvs">
            <Form.Control type="text" size="sm" />
          </Col>

          <Form.Label sm="2" className="mail-subgrupoE1">
            E-mail
          </Form.Label>
          <Col sm="25" className="mail">
            <Form.Control type="text" size="sm" />
          </Col>
        </div>
      </div>

      <div className="dadosE2">
        <div className="subE2">
          <div className="envolvimentoE1">
            <label className="label-envolvimentoE1">Envolvimento</label>
          </div>
          <div className="associoadoTab">
            <Tabs
              defaultActiveKey="associado"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="associado" title="Associado">
                <div>
                  <div className="sub2E2">
                    <div className="associadoSub2E2">
                      <label className="label-associadoSub2E2">Associado</label>
                    </div>
                    <Button
                      variant="outline-dark"
                      className="btnBuscaCod"
                      size="sm"
                      // disabled={isDisabled}
                    >
                      <i className="bi bi-binoculars"></i>
                    </Button>
                    <Form.Label sm="2" className="associadoTab-cod">
                      Código:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-nome">
                      Nome:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-abrev">
                      Abreviatura:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-end">
                      Endereço:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-bairro">
                      Bairro:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-cid">
                      Cidade:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-cep">
                      CEP:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-uf">
                      UF:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-pais">
                      País:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-carne">
                      Emissão Carnê:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-fone1">
                      Fone Residencial:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-fone2">
                      Fone Comercial:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-cel">
                      Celular:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <Form.Label sm="2" className="associadoTab-mail">
                      E-Mail:
                      <Col sm="25">
                        <Form.Control type="text" size="sm" />
                      </Col>
                    </Form.Label>
                    <div className="sub3E2">
                      <label>Situação do envolvimento:</label>
                      <div key="default-radio" className="mb-3 radio-sitEnv">
                        <Form.Check // prettier-ignore
                          type="radio"
                          id="default-radio"
                          name="Situacao"
                          label="Ativo"
                          value="Ativo"
                          // checked={selectedValue === "Feminino"}
                          // disabled={isDisabled}
                        />
                        <Form.Check // prettier-ignore
                          type="radio"
                          id="default-radio"
                          name="Situacao"
                          label="Não"
                          value="Não"
                          // checked={selectedValue === "Masculino"}
                          // disabled={isDisabled}
                        />
                      </div>
                      <Form.Label>Desde:</Form.Label>
                      <Form.Control
                        className="form-sitEnv"
                        type="date"
                        size="sm"
                        name="dtNascimento"
                        // disabled={isDisabled}
                        // value={dtNascimento.substring(0, 10)}
                        // onChange={fieldChange}
                      />
                    </div>
                  </div>
                </div>
              </Tab>
              <Tab eventKey="parcela" title="Gerar Parcela" disabled></Tab>
            </Tabs>
          </div>

          <div className="infosEnv">
            <div className="tipoEnvolv">
              <div className="sub4E2">
                <div className="associadoSub2E2">
                  <label className="label-associadoSub2E2">
                    Tipo de Envolvimento
                  </label>
                </div>
                <div key="default-radio" className="mb-3 radio-tipoEnv">
                  <Form.Check // prettier-ignore
                    type="radio"
                    id="default-radio"
                    name="Tipo"
                    label="Contribuição"
                    value="Contribuição"
                    // checked={selectedValue === "Feminino"}
                    // disabled={isDisabled}
                  />
                  <Form.Check // prettier-ignore
                    type="radio"
                    id="default-radio"
                    name="Tipo"
                    label="Oração"
                    value="Oração"
                    // checked={selectedValue === "Masculino"}
                    // disabled={isDisabled}
                  />
                </div>
                <Form.Label>
                  Data:
                  <Form.Control
                    className="data-tipoEnv"
                    type="date"
                    size="sm"
                    name="dtTipoEnv"
                    // disabled={isDisabled}
                    // value={dtNascimento.substring(0, 10)}
                    // onChange={fieldChange}
                  />
                </Form.Label>
              </div>
            </div>

            <div className="parcelasEnv">
              <div className="sub5E2">
                <div className="associadoSub2E2">
                  <label className="label-associadoSub2E2">Parcelas</label>
                </div>
                <Form.Label sm="2" className="parcelas-tipo">
                  Tipo:
                  <Form.Select size="sm">
                    <option value="1">Boleto Bancário</option>
                    <option value="2">Dinheiro</option>
                    <option value="3">Cheque</option>
                    <option value="4">Cartão Crédito</option>
                    <option value="5">Depósito</option>
                    <option value="6">Débito em Conta</option>
                    <option value="7">Transferência On-line</option>
                    <option value="8">TED Bancária</option>
                    <option value="9">Boleto Site</option>
                    <option value="10">Cartão Site</option>
                    <option value="11">Pix</option>
                    <option value="12">Pix Site</option>
                    <option value="13">Oferta Folha Repa</option>
                    <option value="14">Projeto Missionário</option>
                    <option value="15">Outros</option>
                  </Form.Select>
                </Form.Label>
                <Form.Label sm="2" className="valor-parcelaEnv">
                  Valor:
                  <Col sm="25">
                    <Form.Control type="text" size="sm" />
                  </Col>
                </Form.Label>
                <Form.Label sm="2" className="quant-parcelaEnv">
                  Qtde.:
                  <Col sm="25">
                    <Form.Control type="text" size="sm" />
                  </Col>
                </Form.Label>
              </div>
            </div>

            <div className="avisadoEnv">
              <div className="sub6E2">
                <div className="associadoSub2E2">
                  <label className="label-associadoSub2E2">Avisado</label>
                </div>
                <div key="default-radio" className="mb-3 radio-avisoEnv">
                  <Form.Check // prettier-ignore
                    type="radio"
                    id="default-radio"
                    name="Aviso"
                    label="Sim"
                    value="Sim"
                    // checked={selectedValue === "Feminino"}
                    // disabled={isDisabled}
                  />
                  <Form.Check // prettier-ignore
                    type="radio"
                    id="default-radio"
                    name="Aviso"
                    label="Não"
                    value="Não"
                    // checked={selectedValue === "Masculino"}
                    // disabled={isDisabled}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="assinaturaEnv">
            <div className="sub7E2">
              <div className="associadoSub2E2">
                <label className="label-associadoSub2E2">Assinatura</label>
              </div>
              <div className="datasAssinatura">
                <div className="dataFormat">
                  <Form.Label>Início:</Form.Label>
                  <Form.Control
                    className="data-inicioAss"
                    type="date"
                    size="sm"
                    name="dtTipoEnv"
                    // disabled={isDisabled}
                    // value={dtNascimento.substring(0, 10)}
                    // onChange={fieldChange}
                  />
                </div>
                <div className="dataFormat">
                  <Form.Label>Fim:</Form.Label>
                  <Form.Control
                    className="data-fimAss"
                    type="date"
                    size="sm"
                    name="dtTipoEnv"
                    // disabled={isDisabled}
                    // value={dtNascimento.substring(0, 10)}
                    // onChange={fieldChange}
                  />
                </div>
                <div className="dataFormat">
                  <Form.Label>Renovação:</Form.Label>
                  <Form.Control
                    className="data-renovAss"
                    type="date"
                    size="sm"
                    name="dtTipoEnv"
                    // disabled={isDisabled}
                    // value={dtNascimento.substring(0, 10)}
                    // onChange={fieldChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="editE">
        <Button
          className="incluirBtn"
          variant="outline-primary"
          // onClick={incluiAssociado}
        >
          {/* {incluiAltera} */}
          <i class="bi bi-person-plus"></i>
        </Button>
        <Button className="editarBtn" variant="outline-warning">
          Alterar
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          className="excluirBtn"
          variant="outline-danger"
          // onClick={() => {
          //   let resposta = confirm(
          //     "Deseja realmente seguir com a deleção do Associado"
          //   );

          //   if (resposta) {
          //     atualizaSetDeletar(codAssociado);
          //   } else {
          //     console.log("Ação cancelada");
          //   }
          // }}
        >
          Excluir
          <i className="bi bi-trash3"></i>
        </Button>
      </div>
    </>
  );
}

export default FormEnvolvimento;
