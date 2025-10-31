import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import './Missionario.css';
import { Button, Col, Form, ModalBody, Row } from 'react-bootstrap';
import FormMissionario from './FormMissionario';

function Missionario({showModal, setShowModal}) {

  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
    const [fullscreen, setFullscreen] = useState(true);

     const fechaModal = () =>{
    setShowModal(false)
  }

  return(
    <>

      <Modal show={showModal} fullscreen={fullscreen} onHide={() => fechaModal()}>
       <Modal.Header className='modalHeader' data-bs-theme="dark" closeButton onClick={() => fechaModal() }>
          <Modal.Title className='modalTitulo'>Cadastro de Missionários</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='missionario'>
            <div className='divPesquisa'>

            </div>
            <div className='divCadastros'>
            <FormMissionario />
            </div>
          </div>
        </Modal.Body>
      </Modal>
   </>
  )
}

export default Missionario;