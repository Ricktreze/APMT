import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FormEnvolvimento from './FormEnvolvimento';
// import TableAssociado from './TableAssociado';
import './Envolvimento.css';
// import { Button, Col, Form, Row } from 'react-bootstrap';

function Envolvimento({showModal, setShowModal}) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);
    // const [associado, setAssociado] = useState(null);
    // const [associadoDe, setAssociadoDe] = useState(0);
    // const [associadoAte, setAssociadoAte] = useState(50);
    // const [executaConsultaAssociado, setExecutaConsultaAssociado] = useState(0);
    // const [indiceAssociado, setIndiceAssociado] = useState(0);
    // const [nomeAssociado, setNomeAssociado] = useState("");
    // const [handleSearchControl, setHandleSearchControl] = useState(false)

    const fechaModal = () =>{
    setShowModal(false)
  }

  return(

    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>
    
        <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal() }>
          <Modal.Title className='modalTitulo' >Cadastro de Envolvimento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='envolvimento'>
            <div className='divPesquisa'>

            </div>
            <div className='divCadastros'>
            <FormEnvolvimento />
            </div>
          </div>
         
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Envolvimento;