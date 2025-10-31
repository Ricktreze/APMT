import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormAssociado from './FormAssociado';
import TableAssociado from './TableAssociado';
import './Associado.css';
import { Button, Col, Form, Row } from 'react-bootstrap';


function Associado({showModal, setShowModal}) {
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [associado, setAssociado] = useState(null);
  const [associadoDe, setAssociadoDe] = useState(150);
  const [associadoAte, setAssociadoAte] = useState(160);
  const [executaConsultaAssociado, setExecutaConsultaAssociado] = useState(0);
  const [indiceAssociado, setIndiceAssociado] = useState(0);
  const [nomeAssociado, setNomeAssociado] = useState("");
  const [handleSearchControl, setHandleSearchControl] = useState(false)
  // var handleSearchControl = false

  const fechaModal = () =>{
    setShowModal(false)
  }
  const atualizaHandleSearchControl = (operac) => {
    setHandleSearchControl(operac)
   
  }

  const handleSearch = (event) => {
    setNomeAssociado(event.target.value)
    atualizaHandleSearchControl(true)
    setExecutaConsultaAssociado(executaConsultaAssociado + 1)
    if(event.target.value === ""){
      atualizaHandleSearchControl(false)
      setAssociadoAte(100)
    }
  }

  const atualizaAssociado = (result) => {
    setAssociado(result);
  }

  useEffect(() => {

    function consultaAssociado() {
      let url = ""
      console.log("handleSearchControl ",handleSearchControl)
      if (!handleSearchControl) {
        url = `https://eddieapmtbackend-bxfuxyemj-ricktrezes-projects.vercel.app/:4011/api/associados?codAssociadoDe=${associadoDe}&&codAssociadoAte=${associadoAte}&&nomeAssociado=${nomeAssociado}`
      } else {
        url = `https://eddieapmtbackend-bxfuxyemj-ricktrezes-projects.vercel.app/:4011/api/associados?nomeAssociado=${nomeAssociado}`
      }
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          atualizaAssociado(result);
        })
        .catch((error) => console.error("Erro ao buscar card", error));
    }
    consultaAssociado()

  }, [handleSearchControl, executaConsultaAssociado]);

 
  return (
    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>
    
        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal() }>
          <Modal.Title className='modalTitulo' >Cadastro de Associados</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {associado &&
            <div className='associado'>
              <div className='divForm'>
                <FormAssociado className='form'
                  associado={associado}
                  indiceAssociado={indiceAssociado}
                  executaConsultaAssociado={executaConsultaAssociado}
                  setExecutaConsultaAssociado={setExecutaConsultaAssociado}
                />
              </div>
              <div className="divContPesquisaTable">
              <div className='pesquisa'>

                  <Form.Control
                    type="text"
                    placeholder="Pesquisa (código ou nome)"
                    className=" mr-sm-2"
                    value={nomeAssociado}
                    onChange={handleSearch}
                  />

                </div>

              <div className='divTable'>                
                <TableAssociado className='table'
                  associado={associado}
                  setAssociado={setAssociado}
                  setIndiceAssociado={setIndiceAssociado}
                />                
              </div>
             
              </div>
            </div>
          }


        </Modal.Body>
      </Modal>
    </>
  );
}

export default Associado;