import { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownButton,
  DropdownItem,
  ListGroup,
  NavDropdown,
} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./MenuLateral.css";
import BotaoMenu from "./BotaoMenu";

import Associado from "../SubMenus/CadastroAssociado/Associado";
import Missionario from "../SubMenus/CadastroMissionario/Missionario";
import Envolvimento from "../SubMenus/CadastroEnvolvimento/Envolvimento";

function MenuLateral({ nomeMenu, setNomeMenu }) {
  const [show, setShow] = useState(false);
  const [subCadastro, setSubCadastro] = useState(false);
  const [subConsulta, setSubConsulta] = useState(false);
  const [subRelatorios, setSubRelatorios] = useState(false);
  const [subContas, setSubContas] = useState(false);
  const [subAcessorios, setSubAcessorios] = useState(false);
  const [subRegras, setSubRegras] = useState(false);
  const [subAjuda, setSubAjuda] = useState(false);
  const [nomeSubMenu, setNomeSubMenu] = useState("");
  const [showModal, setShowModal] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const chamaComponente = (subMenu) => {
    setNomeSubMenu(subMenu);
    setShowModal(true)
  };

  const auxNomeMenu = (nome) => {
    setNomeMenu(nome);
    if (nome === "CADASTRO") {
      setSubCadastro(!subCadastro);
    } else if (nome === "CONSULTA") {
      setSubConsulta(!setSubConsulta);
    } else if (nome === "RELATÓRIOS") {
      setSubRelatorios(!setSubRelatorios);
    } else if (nome === "CONTAS") {
      setSubContas(!setSubContas);
    } else if (nome === "ACESSÓRIOS") {
      setSubAcessorios(!setSubAcessorios);
    } else if (nome === "REGRAS") {
      setSubRegras(!setSubRegras);
    } else if (nome === "AJUDA") {
      setSubAjuda(!setSubAjuda);
    }
  };

  return (
    <>
      <BotaoMenu handleShow={handleShow} />

      <Offcanvas className="offCanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item
              className="listGroup1"
              action
              onClick={() => {
                auxNomeMenu("CADASTRO");
              }}
            >
              <NavDropdown
                id="dropdown-button-drop-end"
                title="Cadastro"
                key="end"
                drop="centered"
                variant="secundary"
              >
                <div className="lista">
                  <Dropdown.Item
                    eventKey="1"
                    onClick={() => {
                      chamaComponente("ASSOCIADO");
                    }}
                  >
                    Associado
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="2"
                    onClick={() => {
                      chamaComponente("MISSIONARIO");
                    }}
                  >
                    Missionário
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="3"
                    onClick={() => {
                      chamaComponente("ENVOLVIMENTO");
                    }}
                  >
                    Envolvimento
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="4"
                    onClick={() => {
                      chamaComponente("POSICAO");
                    }}
                  >
                    Posição Financeira
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="5"
                    onClick={() => {
                      chamaComponente("MANUTENCAO");
                    }}
                  >
                    Manutenção Contribuição
                  </Dropdown.Item>
                </div>
              </NavDropdown>
            </ListGroup.Item>

            {/* {subCadastro &&        
          <div className='lista'>
            <Dropdown.Item eventKey="1" action onClick={()=>{alert("Associado")}} >Associado</Dropdown.Item>
            <Dropdown.Item eventKey="2" action onClick={()=>{alert("Missinários")}}  >Missionário</Dropdown.Item>
            <Dropdown.Item eventKey="3">Envolvimento</Dropdown.Item>
            <Dropdown.Item eventKey="4">Posição Financeira</Dropdown.Item>
            <Dropdown.Item eventKey="4">Manutenção Contribuição</Dropdown.Item>
          </div>
          } */}
            <ListGroup.Item className="listGroup2" action>
              Consulta
            </ListGroup.Item>
            <ListGroup.Item className="listGroup3" action>
              Relatórios
            </ListGroup.Item>
            <ListGroup.Item className="listGroup4" action>
              Contas a Pagar
            </ListGroup.Item>
            <ListGroup.Item className="listGroup5" action>
              Acessórios
            </ListGroup.Item>
            <ListGroup.Item className="listGroup6" action>
              Regras de Acesso
            </ListGroup.Item>
            <ListGroup.Item className="listGroup7" action>
              Ajuda
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>

      {nomeSubMenu === "ASSOCIADO" && (
        <Associado showModal={showModal} setShowModal={setShowModal} />
      )
    
      }

      {nomeSubMenu === "MISSIONARIO" && (
        <Missionario showModal={showModal} setShowModal={setShowModal} />
      )
    
      }

      {nomeSubMenu === "ENVOLVIMENTO" && (
        <Envolvimento showModal={showModal} setShowModal={setShowModal} />
      )
    
      }

      
    </>
  );
    
}

export default MenuLateral;
