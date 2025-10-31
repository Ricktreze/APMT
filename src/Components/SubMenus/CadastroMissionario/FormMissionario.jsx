import { Button, Col, Form, Tab, Tabs } from "react-bootstrap";
import "./FormMissionario.css";

function FormMissionario() {
  return (
    <>
      <Tabs
        defaultActiveKey="missionario"
        id="uncontrolled-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="missionario" title="Missionário">
          <div className="dadosM1">
            <Form.Label sm="2" className="label-codM">
              Cód.:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={atualizaCampo("CodAssociado")}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>

            <Form.Label sm="2" className="label-nomeM">
              Nome:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label className="label-casamentoM">
              Casamento:
              <Form.Control
                type="date"
                size="sm"
                // disabled={isDisabled} value={associado[indiceAssociado].DtCasamento.substring(0,10) }
              />
            </Form.Label>
          </div>
          <div className="dadosM2">
            <Form.Label sm="2" className="label-sexoM">
              Sexo:
              <Form.Select size="sm">
                <option value="1">F</option>
                <option value="2">M</option>
              </Form.Select>
            </Form.Label>
            <Form.Label sm="2" className="label-nacionalidadeM">
              Nacionalidade:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
            <Form.Label className="label-nascimentoM">
              Nascimento:
              <Form.Control
                type="date"
                size="sm"
                // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
              />
            </Form.Label>
            <Form.Label sm="2" className="label-idadeM">
              Idade:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={atualizaCampo("CodAssociado")}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
          </div>
          <div className="dadosM3">
            <div>
              <label className="documentacaoM">Documentação</label>
            </div>
            <div className="subM3">
              <Form.Label sm="2" className="label-cpfM">
                CPF:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-rgM">
                RG:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-eleitorM">
                Título de Eleitor:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-cnhM">
                CNH:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-ctpsM">
                CTPS/Série:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-passaporteM">
                Passaporte:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-inssM">
                Inscr. INSS:
                <Col sm="25">
                  <Form.Control type="text" size="sm" />
                </Col>
              </Form.Label>
              <Form.Label className="label-nascimentoM">
                Declaração IRRF:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
            </div>
          </div>
          <div className="dadosM4">
            <Form.Label sm="2" className="label-saudeM">
              Plano de Saúde:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-aposentadoriaM">
              Plano de Aposentadoria:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-seguroM">
              Seguro de Vida:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
          </div>
          <div className="dadosM5">
            <div className="subM5">
              <Form.Label sm="2" className="label-cepM">
                CEP:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Cep}
                    //   disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              {/* <Button
                variant="outline-dark"
                className="btnBuscaM"
                size="sm"
                // disabled={isDisabled}
              >
                <i className="bi bi-binoculars"></i>
              </Button> */}
            </div>
            <Form.Label sm="2" className="label-enderecoM">
              Endereço:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Endereco}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-bairroM">
              Bairro:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Bairro}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-cidadeM">
              Cidade:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-ufM">
              UF:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].UF}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
          </div>
          <div className="dadosM6">
            <Form.Label sm="2" className="label-foneM">
              Fone:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="label-mailM">
              E-Mail:
              <Col sm="25">
                <Form.Control type="text" size="sm" />
              </Col>
            </Form.Label>
          </div>
        </Tab>
        <Tab eventKey="ministerio" title="Ministério">
          <div className="dadosM7">
            <Form.Label className="label-filiacaoM">
              Filiação APMT:
              <Form.Control
                type="date"
                size="sm"
                // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
              />
            </Form.Label>
            <div className="subM7">
              <div>
                <label className="situacaoM">Situação</label>
              </div>
              <div key="default-radio" className="mb-3 radio-situacaoM">
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
              <Form.Label className="label-finalM">
                Data Final:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
            </div>
          </div>
          <div className="dadosM8">
            <div className="subM8">
              <div className="parceriaM">
                <label className="label-parceriaM">Parceria/Igreja</label>
              </div>
              <Form.Label sm="2" className="parceria-nomeM">
                Nome:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-enderecoM">
                Endereço:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-bairroM">
                Bairro:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-cidadeM">
                Cidade:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-cepM">
                CEP:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-ufM">
                UF:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-foneM">
                Fone:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="parceria-mailM">
                E-Mail:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
            </div>
          </div>
          <div className="dadosM9">
            <div className="subM9">
              <div className="presbiterioM">
                <label className="label-presbiterioM">Presbitério</label>
              </div>
              <Form.Label sm="2" className="presbiterio-nomeM">
                Nome:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-secretarioM">
                Secretário:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-enderecoM">
                Endereço:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-bairroM">
                Bairro:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-cidadeM">
                Cidade:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-cepM">
                CEP:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-ufM">
                UF:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-foneM">
                Fone:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="presbiterio-mailM">
                E-Mail:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
            </div>
          </div>
        </Tab>
        <Tab eventKey="formacao" title="Formação">
          <div className="dadosM10">
            <Form.Label sm="2" className="formacao-seminarioM">
              Seminário:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-especialidadeM">
              Especialidade:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-formacaoM">
              Formação:
              <Form.Select size="sm">
                <option value="1">Analfabeto</option>
                <option value="2">Prim. Incompleto</option>
                <option value="3">Prim. Completo</option>
                <option value="4">Gina. Incompleto</option>
                <option value="5">Gina. Completo</option>
                <option value="6">Coleg. Incompleto</option>
                <option value="7">Coleg. Completo</option>
                <option value="8">Super. Incompleto</option>
                <option value="9">Super. Completo</option>
              </Form.Select>
            </Form.Label>
            <Form.Label sm="2" className="formacao-cursosM">
              Outros Cursos:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-idiomasM">
              Idiomas:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-transculturalM">
              Curso Transcultural:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
          </div>
          <div className="dadosM11">
            <div className="subM11">
              <div className="batismoM">
                <label className="label-batismoM">Batismo</label>
              </div>
              <Form.Label className="dataBatismoM">
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label sm="2" className="igrejaBatismoM">
                Igreja:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
            </div>
            <div className="subM11">
              <div className="profissaoFeM">
                <label className="label-profissaoFeM">Profissão de Fé</label>
              </div>
              <Form.Label className="dataProfissaoFeM">
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label sm="2" className="igrejaProfissaoFeM">
                Igreja:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
            </div>
            <Form.Label sm="2" className="formacao-repasseM">
              Repasse Sustento (Banco, Agência e Conta):
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-paisServM">
              País onde serve:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-emergenciaM">
              Emergência:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="formacao-obsM">
              Observação:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
          </div>
        </Tab>
        <Tab eventKey="dadosF" title="Dados Família">
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={4} />
          </Form.Group>
          <div className="dadosM12">
            <Form.Label sm="2" className="familia-lacoM">
              Laço:
              <Form.Select size="sm">
                <option value="1">C</option>
                <option value="2">F</option>
              </Form.Select>
            </Form.Label>
            <Form.Label sm="2" className="familia-nomeM">
              Nome:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label className="familia-nascimentoM">
              Nascimento:
              <Form.Control
                type="date"
                size="sm"
                // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
              />
            </Form.Label>
            <Form.Label sm="2" className="familia-sexoM">
              Sexo:
              <Form.Select size="sm">
                <option value="1">F</option>
                <option value="2">M</option>
              </Form.Select>
            </Form.Label>
            <Form.Label sm="2" className="familia-nacionalidadeM">
              Nacionalidade:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-idadeM">
              Idade:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>

            <Form.Label sm="2" className="familia-cpfM">
              CPF:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-rgM">
              RG:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-eleitorM">
              Título de Eleitor:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-cnhM">
              CNH:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-ctpsM">
              CTPS/Série:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-passaporteM">
              Passaporte:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-inssM">
              Inscr. INSS:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-saudeM">
              Plano de Saúde:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-aposentadoriaM">
              Plano de Aposentadoria:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-seguroM">
              Seguro de Vida:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-seminarioM">
              Seminário:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-especialidadeM">
              Especialidade:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-formacaoM">
              Formação:
              <Form.Select size="sm">
                <option value="1">Analfabeto</option>
                <option value="2">Prim. Incompleto</option>
                <option value="3">Prim. Completo</option>
                <option value="4">Gina. Incompleto</option>
                <option value="5">Gina. Completo</option>
                <option value="6">Coleg. Incompleto</option>
                <option value="7">Coleg. Completo</option>
                <option value="8">Super. Incompleto</option>
                <option value="9">Super. Completo</option>
              </Form.Select>
            </Form.Label>
            <Form.Label sm="2" className="familia-cursosM">
              Outros Cursos:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-idiomasM">
              Idiomas:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-obsM">
              Observação:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
            <Form.Label sm="2" className="familia-mailM">
              E-Mail:
              <Col sm="25">
                <Form.Control
                  type="text"
                  size="sm"
                  // value={associado[indiceAssociado].Nome}
                  // disabled={isDisabled}
                />
              </Col>
            </Form.Label>
          </div>
        </Tab>
        <Tab eventKey="outros" title="Outros">
          <div className="dadosM13">
            <div className="subM13">
              <div className="outros-requisitosM">
                <label className="label-requisitosM">
                  Requisitos Preenchidos - Missionário
                </label>
              </div>
              <Form.Label className="outros-orientacaoM">
                Semana de Orientação:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-cfmM">
                CFM:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-ctmM">
                CTM:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-testemunhoM">
                Carta Testemunho:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-perfilM">
                Perfil Psicológico:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-apresentacaoM">
                Carta Apresentação:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-projetoM">
                Projeto Missionário:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-curriculoM">
                Currículo Vitae:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
            </div>
            <div className="subM13">
              <div className="outros-requisitosM">
                <label className="label-requisitosM">
                  Requisitos Preenchidos - Cônjuge
                </label>
              </div>
              <Form.Label className="outros-orientacaoM">
                Semana de Orientação:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-cfmM">
                CFM:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-ctmM">
                CTM:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-testemunhoM">
                Carta Testemunho:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-perfilM">
                Perfil Psicológico:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-apresentacaoM">
                Carta Apresentação:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-projetoM">
                Projeto Missionário:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
              <Form.Label className="outros-curriculoM">
                Currículo Vitae:
                <Form.Control
                  type="date"
                  size="sm"
                  // disabled={isDisabled} value={associado[indiceAssociado].DtNascimento.substring(0,10)}
                />
              </Form.Label>
            </div>
            <div className="subM13">
              <div className="outros-familiarM">
                <label className="label-familiarM">Contato Familiar</label>
              </div>
              <Form.Label sm="2" className="familiar-nomeM">
                Nome:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <label className="familiar-enderecoM">
                Cep/Endereço/Bairro/Cidade/UF/Telefone/e-mail
              </label>
              <div className="subM13Cep">
                <Form.Label sm="2" className="familiar-cepM">
                  CEP:
                  <Col sm="25">
                    <Form.Control
                      type="text"
                      size="sm"
                      // value={associado[indiceAssociado].Cep}
                      //   disabled={isDisabled}
                    />
                  </Col>
                </Form.Label>
                {/* <Button
                  variant="outline-dark"
                  className="btnBuscaM"
                  size="sm"
                  // disabled={isDisabled}
                >
                  <i className="bi bi-binoculars"></i>
                </Button> */}
              </div>
              <Form.Label sm="2" className="familiar-endM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="familiar-bairroM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="familiar-cidadeM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="familiar-ufM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="familiar-telM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="familiar-emailM">
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    // value={associado[indiceAssociado].Nome}
                    // disabled={isDisabled}
                  />
                </Col>
              </Form.Label>
            </div>
          </div>
        </Tab>
      </Tabs>
      
      <div className="editM">
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

export default FormMissionario;
