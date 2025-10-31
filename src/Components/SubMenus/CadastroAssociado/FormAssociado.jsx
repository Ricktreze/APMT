import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import "./FormAssociado.css";

function FormAssociado({
  associado,
  indiceAssociado,
  executaConsultaAssociado,
  setExecutaConsultaAssociado,
}) {
  try {
    if (!associado[indiceAssociado].Abreviatura) { return }
  } catch {
    return
  }

  // const [codAssociado, setCodAssociado] = useState(0);
  const [bacupAssociado, setBacupAssociado] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  // const [emissaoCarne, setEmissaoCarne] = useState(null);
  const [selectedPessoa, setSelectedPessoa] = useState(null);
  // const [situacao, setSituacao] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);

  const [abreviatura, setAbreviatura] = useState(associado[indiceAssociado].Abreviatura)
  const [bairro, setBairro] = useState(associado[indiceAssociado].Bairro)
  const [cargo, setCargo] = useState(associado[indiceAssociado].Cargo)
  const [celular, setCelular] = useState(associado[indiceAssociado].Celular)
  const [cep, setCep] = useState(associado[indiceAssociado].Cep)
  const [cpf, setCpf] = useState(associado[indiceAssociado].Cpf)
  const [codAssociado, setCodAssociado] = useState(associado[indiceAssociado].CodAssociado)
  const [conjuge, setConjuge] = useState(associado[indiceAssociado].Conjuge)
  const [denominacao, setDenominacao] = useState(associado[indiceAssociado].Denominacao)
  const [dtInclusao, setDtInclusao] = useState(associado[indiceAssociado].DtInclusao)
  const [dtNascimento, setDtNascimento] = useState(associado[indiceAssociado].DtNascimento)
  const [dtCasamento, setDtCasamento] = useState(associado[indiceAssociado].DtCasamento)
  const [eMail, setEMail] = useState(associado[indiceAssociado].EMail)
  const [emissaoCarne, setEmissaoCarne] = useState(associado[indiceAssociado].EmissaoCarne)
  const [endereco, setEndereco] = useState(associado[indiceAssociado].Endereco)
  const [foneRes, setFoneRes] = useState(associado[indiceAssociado].FoneRes)
  const [nome, setNome] = useState(associado[indiceAssociado].Nome)
  const [pais, setPais] = useState(associado[indiceAssociado].Pais)
  const [pessoa, setPessoa] = useState(associado[indiceAssociado].Pessoa)
  const [profissao, setProfissao] = useState(associado[indiceAssociado].Profissao)
  const [sexo, setSexo] = useState(associado[indiceAssociado].Sexo)
  const [situacao, setSituacao] = useState(associado[indiceAssociado].Situacao)
  const [uf, setUf] = useState(associado[indiceAssociado].UF)
  const [cidade, setCidade] = useState(associado[indiceAssociado].Cidade)
  const [foneCom, setFoneCom] = useState(associado[indiceAssociado].FoneCom)
  const [complemento, setComplemento] = useState(associado[indiceAssociado].Complemento)
  const [obs, setObs] = useState(associado[indiceAssociado].Obs)
  const [clicado, setClicado] = useState(false)
  const [contador, setContador] = useState(1)
  const [executaDelete, setExecutaDelete] = useState(0)
  const [incluiSalvar, setIncluiSalvar] = useState(0)
  const [excluirCancelar, setExcluirCancelar] = useState(0)
  const [opcaoPessoa, setOpcaoPessoa] = useState("CPF")
  const [executaPost, setExecutaPost] = useState(0)

  const [objAssociado, setObjAssociado] = useState(null)

  useEffect(() => {
    const changeSexo = () => {
      if (sexo === "F") {
        setSelectedValue("Feminino");
      } else if (sexo === "M") {
        setSelectedValue("Masculino");
      }
      if (emissaoCarne.charAt(0).toUpperCase() === "S") {
        setEmissaoCarne("S");
      } else if (emissaoCarne.charAt(0).toUpperCase() === "N") {
        setEmissaoCarne("N");
      }
      if (situacao.charAt(0).toUpperCase() === "A") {
        setSituacao("A");
      } else {
        setSituacao("N");
      }
      if (pessoa === "F") {
        setSelectedPessoa("F")
      } else if (pessoa === "J") {
        setSelectedPessoa("J")
      }
    };
    changeSexo();
    if (isDisabled) {
      setAbreviatura(associado[indiceAssociado].Abreviatura)
      setBairro(associado[indiceAssociado].Bairro)
      setCargo(associado[indiceAssociado].Cargo)
      setCelular(associado[indiceAssociado].Celular)
      setCep(associado[indiceAssociado].Cep)
      setCpf(associado[indiceAssociado].Cpf)
      setCodAssociado(associado[indiceAssociado].CodAssociado)
      setConjuge(associado[indiceAssociado].Conjuge)
      setDenominacao(associado[indiceAssociado].Denominacao)
      setDtInclusao(associado[indiceAssociado].DtInclusao)
      setDtNascimento(associado[indiceAssociado].DtNascimento)
      setDtCasamento(associado[indiceAssociado].DtCasamento)
      setEMail(associado[indiceAssociado].EMail)
      setEmissaoCarne(associado[indiceAssociado].EmissaoCarne)
      setEndereco(associado[indiceAssociado].Endereco)
      setFoneRes(associado[indiceAssociado].FoneRes)
      setNome(associado[indiceAssociado].Nome)
      setPais(associado[indiceAssociado].Pais)
      setPessoa(associado[indiceAssociado].Pessoa)
      setProfissao(associado[indiceAssociado].Profissao)
      setSexo(associado[indiceAssociado].Sexo)
      setSituacao(associado[indiceAssociado].Situacao)
      setUf(associado[indiceAssociado].UF)
      setCidade(associado[indiceAssociado].Cidade)
      setFoneCom(associado[indiceAssociado].FoneCom)
      setComplemento(associado[indiceAssociado].Complemento)
      setObs(associado[indiceAssociado].Obs)
      setContador(2)
      setIncluiSalvar("Incluir")
      setExcluirCancelar("Excluir")
    } else {
      setAbreviatura("")
      setBairro("")
      setCargo("")
      setCelular("")
      setCep("")
      setCpf("")
      setCodAssociado("")
      setConjuge("")
      setDenominacao("")
      setDtInclusao("")
      setDtNascimento("")
      setDtCasamento("")
      setEMail("")
      setEmissaoCarne("")
      setEndereco("")
      setFoneRes("")
      setNome("")
      setPais("")
      setPessoa("")
      setProfissao("")
      setSexo("")
      setSituacao("")
      setUf("")
      setCidade("")
      setFoneCom("")
      setComplemento("")
      setObs("")
      setIncluiSalvar("Salvar")
      setExcluirCancelar("Cancelar")
    }
  }, [indiceAssociado, associado, contador, isDisabled]);

  useEffect(() => {
    async function deleteAssociado() {
      try {
        const response = await axios.delete(
          `http://localhost:4011/api/associados?codAssociado=${codAssociado}`
        );
        atualizaexecutaConsultaAssociado();
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
    if (executaDelete > 0) {
      deleteAssociado();
    }

  }, [executaDelete]);


  useEffect(() => {
    async function buscaCep() {
      try {
        const response = await axios.get(
          `https://viacep.com.br/ws/${cep}/json`
        );
        // console.log('Associado deletado com sucesso', response.data);
        response && atualizEndereco(response.data);
      } catch (error) {
        console.error("Erro ao buscar CEP:", error);
        setEndereco("")
        setBairro("")
        setCidade("")
        setUf("")
        setPais("")
      }
    }
    buscaCep()

  }, [cep]);

  const atualizEndereco = (responseEndereco) => {
    console.log(responseEndereco.logradouro)
    setEndereco(responseEndereco.logradouro)
    setBairro(responseEndereco.bairro)
    setCidade(responseEndereco.localidade)
    setUf(responseEndereco.uf)
    setPais("Brasil")
    setComplemento(responseEndereco.complemento)
  }

  const validaCpf = (strCPF) => {
    var Soma = 0
    var Resto
    var i

    var strCPF = String(cpf).replace(/[^\d]/g, '')

    if (strCPF.length !== 11)
      return false

    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
    ].indexOf(strCPF) !== -1)
      return false

    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
      Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
      return false

    Soma = 0

    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
      Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
      return false

    return true
  }
  const atualizaSetDeletar = (codAssociado) => {
    if (bacupAssociado != codAssociado) {
      setBacupAssociado(codAssociado);
      setExecutaDelete(executaDelete + 1);
    }
  };
  const atualizaexecutaConsultaAssociado = () => {
    setExecutaConsultaAssociado(executaConsultaAssociado + 1);
  };

  const alteraExecutaPost = () => {

    setExecutaPost(executaPost + 1)
  }

  const incluiAssociado = () => {

    setIsDisabled(!isDisabled);

    if (incluiSalvar === "Salvar") {
      setObjAssociado( {
        "Nome": nome,
        "Cpf": cpf,
        "Pessoa": pessoa,
        "DtInclusao": dtInclusao,
        "Situacao": situacao,
        "DtNascimento": dtNascimento,
        "DtCasamento": dtCasamento,
        "Sexo": sexo,
        "Conjuge": conjuge,
        "Abreviatura": abreviatura,
        "Endereco": endereco,
        "Bairro": bairro,
        "Cidade": cidade,
        "UF": uf,
        "Cep": cep,
        "Pais": pais,
        "FoneRes": foneRes,
        "FoneCom": foneCom,
        "Celular": celular,
        "EMail": eMail,
        "Profissao": profissao,
        // "Igreja": Igreja,
        "Complemento": complemento,
        "Cargo": cargo,
        "Denominacao": denominacao,
        "EmissaoCarne": emissaoCarne,
        "Obs": obs
      })


      alteraExecutaPost()


    }

  }

  useEffect(() => {

    async function postAssociado(objAssociado) {
      console.log("executaPost", objAssociado)
      try {
        const response = await axios.post("http://localhost:4011/api/associados", objAssociado);
        // atualizaexecutaConsultaAssociado();
        alert("Missionário incluído com sucesso!")
      } catch (error) {
        alert("Erro de inclusão. Erro: " + error)
        console.error("Error deleting item:", error);
      }
    }
    objAssociado&&postAssociado(objAssociado);
   
  }, [objAssociado]);
  const validaCnpj = (cnpj) => {
    // Remove caracteres não numéricos
    cnpj = cnpj.replace(/[^\d]+/g, '');

    // Verifica se a sequência de dígitos é igual a 13 digitos [4]
    if (cnpj.length != 14) {
      return false; // CNPJ inválido
    }

    // Elimina CNPJs invalidos com todos os dízitos iguais [4]
    if (/^(\d)\1{13}$/.test(cnpj)) {
      return false; // CNPJ inválido
    }

    // Calcula os dízitos verificadores [4]
    let tamanho = cnpj.length - 2;
    let numeros = cnpj.substring(0, tamanho);
    let digitos = cnpj.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0)) {
      return false; // Primeiro dízito verificador inválido
    }

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;

    for (let i = tamanho; i >= 1; i--) {
      soma += parseInt(numeros.charAt(tamanho - i)) * pos--;
      if (pos < 2) {
        pos = 9;
      }
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1)) {
      return false; // Segundo dízito verificador inválido
    }

    return true; // CNPJ válido
  }


  const vldField = (e) => {
    var elementoNome = document.getElementsByClassName(e.target.className);

    if (e.target.value === '') { elementoNome[0].focus() }

  }
  const vldFieldCpfCnpj = (e) => {
    var elementoNome = document.getElementsByClassName(e.target.className);

    if (e.target.value === '') { elementoNome[0].focus() }
    if (opcaoPessoa === "CPF") {

      if (!validaCpf(e.target.classList[0])) {
        elementoNome[0].focus()
      }
    } else if (opcaoPessoa === "CNPJ") {

      if (!validaCnpj(e.target.value)) {
        elementoNome[0].focus()
      }
    }


  }

  const fieldChange = (e) => {

    eval(`set${e.target.name.charAt(0).toUpperCase() + e.target.name.slice(1)}(e.target.value)`)
  }

  const atualizaOpcao = (e) => {

    setOpcaoPessoa(e.target.value)
  }

  return (
    <>
      {associado.length > 0 && indiceAssociado <= associado.length && (
        <Form className="formA">
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <div className="dadosA1">
              <Form.Label sm="2" className="label-codA">
                Cód.:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={codAssociado}
                    disabled={isDisabled}
                  />
                </Col>
              </Form.Label>

              <Form.Label sm="2" className="label-nomeA">
                Nome:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={nome}
                    disabled={isDisabled}
                    onBlur={vldField}
                    onChange={fieldChange}
                    placeholder="Obrigatório"
                    className="nome"
                    name="nome"
                  />
                </Col>
              </Form.Label>

              <Form.Label sm="2" size="sm" className="label-docA">
                <Form.Select size="sm" className="select" disabled={isDisabled} onChange={atualizaOpcao}>

                  <option defaultValue="1" size="sm" selected={selectedPessoa === "F"} >
                    CPF
                  </option>
                  <option size="sm" selected={selectedPessoa === "J"} onChange={atualizaOpcao}>
                    CNPJ
                  </option>
                </Form.Select>
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={cpf}
                    className="cpf"
                    disabled={isDisabled}
                    onBlur={vldFieldCpfCnpj}
                    onChange={fieldChange}
                    placeholder="Obrigatório"
                    name="cpf"
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA2">
              <div key="default-radio" className="mb-3 radio-sexoA">
                <Form.Label column sm="2">
                  Sexo
                </Form.Label>
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="SelectedValue"
                  label="Feminino"
                  value="Feminino"
                  checked={selectedValue === "Feminino"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="SelectedValue"
                  label="Masculino"
                  value="Masculino"
                  checked={selectedValue === "Masculino"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
              </div>
              <div key="default-radio1" className="mb-3 radio-carneA">
                <Form.Label column sm="2" className="label-carne">
                  Emissão Carnê
                </Form.Label>
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="EmissaoCarne"
                  label="Sim"
                  value="Sim"
                  checked={emissaoCarne.charAt(0).toUpperCase() === "S"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="EmissaoCarne"
                  label="Não"
                  value="Não"
                  checked={emissaoCarne.charAt(0).toUpperCase() === "N"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
              </div>
              <div key="default-radio2" className="mb-3 radio-situacaoA">
                <Form.Label column sm="2" className="label-situacao">
                  Situação
                </Form.Label>
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="Situacao"
                  label="Ativo"
                  value="Ativo"
                  checked={situacao.charAt(0).toUpperCase() === "A"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
                <Form.Check // prettier-ignore
                  type="radio"
                  id="default-radio"
                  name="Situacao"
                  label="Não"
                  value="Não"
                  checked={situacao.charAt(0).toUpperCase() === "N"}
                  disabled={isDisabled}
                  onChange={fieldChange}
                />
              </div>

            </div>
            <div className="dadosA3">
              <Form.Label>
                Nascimento:
                <Form.Control
                  type="date"
                  size="sm"
                  name="dtNascimento"
                  disabled={isDisabled}
                  value={dtNascimento.substring(0, 10)}
                  onChange={fieldChange}
                />

              </Form.Label>
              <Form.Label>
                Casamento:
                <Form.Control
                  type="date"
                  size="sm"
                  name="dtCasamento"
                  disabled={isDisabled}
                  value={dtCasamento.substring(0, 10)}
                  onChange={fieldChange}
                />
              </Form.Label>
              <Form.Label>
                Data Inclusão:
                <Form.Control
                  type="date"
                  size="sm"
                  disabled={isDisabled}
                  name="dtInclusao"
                  value={dtInclusao.substring(0, 10)}
                  onChange={fieldChange}
                />
              </Form.Label>
              <Form.Label sm="2" className="label-profissaoA">
                Profissão:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    name="profissao"
                    value={profissao}
                    disabled={isDisabled}
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA4">
              <Form.Label sm="2" className="label-conjugeA">
                Cônjuge:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={conjuge}
                    disabled={isDisabled}
                    name="conjuge"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-abreviaturaA">
                Abreviatura:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={abreviatura}
                    disabled={isDisabled}
                    name="abreviatura"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA5">
              <div className="subA5">
                <Form.Label sm="2" className="label-cepA">
                  CEP:
                  <Col sm="25">
                    <Form.Control
                      type="text"
                      size="sm"
                      value={cep}
                      name="cep"
                      disabled={isDisabled}
                      onChange={fieldChange}
                    />
                  </Col>
                </Form.Label>
                {/* <Button
                  variant="outline-dark"
                  className="btnBuscaA"
                  size="sm"
                  disabled={isDisabled}
                >
                  <i className="bi bi-binoculars"></i>
                </Button> */}
              </div>
              <Form.Label sm="2" className="label-enderecoA">
                Endereço:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={endereco}
                    disabled={isDisabled}
                    name="endereco"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA6">
              <Form.Label sm="2" className="label-bairroA">
                Bairro:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={bairro}
                    disabled={isDisabled}
                    name="bairro"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-cidadeA">
                Cidade:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={cidade}
                    disabled={isDisabled}
                    name="cidade"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-ufA">
                UF:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={uf}
                    disabled={isDisabled}
                    name="uf"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA7">
              <Form.Label sm="2" className="label-paisA">
                País:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={pais}
                    disabled={isDisabled}
                    name="pais"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-fone1A">
                Fone Residencial:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={foneRes}
                    disabled={isDisabled}
                    name="foneRes"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-fone2A">
                Fone Comercial:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={foneCom}
                    disabled={isDisabled}
                    name="foneCom"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-celA">
                Celular:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={celular}
                    disabled={isDisabled}
                    name="celular"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA8">
              <Form.Label sm="2" className="label-mailA">
                E-Mail:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={eMail}
                    disabled={isDisabled}
                    name="eMail"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <div>
                <Button
                  size="sm"
                  variant="outline-dark"
                  className="btnContatosA"
                  disabled={isDisabled}
                >
                  Verifica Contatos
                </Button>
              </div>
            </div>

            <div className="dadosA9">
              <Form.Label sm="2" className="label-igrejaA">
                Igreja:
                <Form.Select size="sm" disabled={isDisabled}>
                  <option value="1">IP</option>
                  <option value="2">Cong.</option>
                  <option value="3">Presb.</option>
                  <option value="4">Outros</option>
                </Form.Select>
              </Form.Label>
              <Form.Label sm="2" className="label-compA">
                Complemento:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={complemento}
                    disabled={isDisabled}
                    name="complemento"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-denomA">
                Denominação:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={denominacao}
                    disabled={isDisabled}
                    name="denominacao"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
              <Form.Label sm="2" className="label-cargoA">
                Cargo:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={cargo}
                    disabled={isDisabled}
                    name="cargo"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>

            <div className="dadosA10">
              <Form.Label sm="2" className="label-obsA">
                Observação:
                <Col sm="25">
                  <Form.Control
                    type="text"
                    size="sm"
                    value={obs}
                    disabled={isDisabled}
                    name="obs"
                    onChange={fieldChange}
                  />
                </Col>
              </Form.Label>
            </div>
          </Form.Group>

          <div className="editA">
            <Button className="incluirBtn" variant="outline-primary" onClick={incluiAssociado}>
              {incluiSalvar}
              <i class="bi bi-person-plus"></i>
            </Button>

           { isDisabled ? <Button className="editarBtn" variant="outline-warning">
              Alterar
              <i className="bi bi-pencil-square"></i>
            </Button> :
             <Button className="editarBtn" variant="outline-warning" disabled>
              Alterar
              <i className="bi bi-pencil-square"></i>
            </Button>}
            
            {/* {  isDisabled && 
                <Button className="editarBtn" variant="outline-warning">
              Alterar
              <i className="bi bi-pencil-square"></i>
            </Button>
                !isDisabled &&
                <Button className="editarBtn" variant="outline-warning" disabled>
              Alterar
              <i className="bi bi-pencil-square"></i>
            </Button>
} */}
            
            <Button
              className="excluirBtn"
              variant="outline-danger"
              onClick={() => {
              if(excluirCancelar === "Excluir"){
                let resposta = confirm(
                  "Deseja realmente seguir com a deleção do Associado"
                );
                  if (resposta) {
                   atualizaSetDeletar(codAssociado);
                   } else {
                  console.log("Ação cancelada");
                }
              } else {
                setIsDisabled(true)
              }
              }}
            >
              {excluirCancelar}
              <i className="bi bi-trash3"></i>
            </Button>
            {/* <Button className="cancelarBtn" variant="outline-danger" disabled>
              Cancelar
              <i class="bi bi-arrow-counterclockwise"></i>
            </Button> */}
            <Button className="mailBtn" variant="outline-warning">
              E-mail
              <i class="bi bi-envelope-at"></i>
            </Button>
            <Button className="selecaoBtn" variant="outline-success">
              Seleção
              <i class="bi bi-recycle"></i>
            </Button>
          </div>
        </Form>
      )}
    </>
  );
}

export default FormAssociado;
