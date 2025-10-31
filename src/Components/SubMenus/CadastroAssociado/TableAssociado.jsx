import { Button, Table } from "react-bootstrap"
import { useEffect, useState } from 'react';
import './TableAssociado.css'
function TableAssociado({associado, setAssociado,setIndiceAssociado}){
  const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  // const [associado, setAssociado] = useState(null);
  const [associadoDe, setAssociadoDe] = useState(0);
  const [associadoAte, setAssociadoAte] = useState(50);
  const [executaConsultaAssociado, setExecutaConsultaAssociado] = useState(0);
  // const [indiceAssociado, setIndiceAssociado] = useState(1);

  const atualizaAssociado = (result) => {
    setAssociado(result);   
    setIndiceAssociado(0)
    
  }

  useEffect(() => {
    function consultaAssociado() {
     
        fetch(`http://localhost:4011/api/associados?codAssociadoDe=${associadoDe}&&codAssociadoAte=${associadoAte}`)
          .then((response) => response.json())
          .then((result) => {
            atualizaAssociado(result);
          })
          .catch((error) => console.error("Erro ao buscar card", error));
      }
      consultaAssociado()

  }, [executaConsultaAssociado]);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShowModal(false);
  }

    const carregarMais = () => {
    setAssociadoDe(associadoDe )
    setAssociadoAte(associadoAte + 51 )          
    setExecutaConsultaAssociado(executaConsultaAssociado+1)
}
const atualizaFomr = (indice) => {
    setIndiceAssociado(indice)
}

  return(
    <>
     <Table bordered hover size="sm" responsive>
            
            <thead>
              <tr>
                <th style={{ width: '15%' }}>Código</th>
                <th style={{ width: '60%' }}>Nome</th>
                <th style={{ width: '25%' }}>Abreviatura</th>                
              </tr>
            </thead>
            {associado && Array.from({ length: associado.length }).map((_, idx) => (
        
              <tbody key={idx}>               
                <tr>
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].CodAssociado}</td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].Nome}</td>
                  <td onClick={()=>{atualizaFomr(idx)}}>{associado[idx].Abreviatura}</td>                               
                </tr>                
              </tbody>
            

            ))}
            
          </Table>
      
          <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={carregarMais} >
              Carregar mais Associados...
            </Button>
          </div>

          
      </>
  )
}

export default TableAssociado;