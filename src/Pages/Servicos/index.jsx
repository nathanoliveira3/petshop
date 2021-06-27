import { useState, useEffect } from "react";
import CardServico from '../../Componentes/CardServico'
import http from "../../http";
import './estilos.css'

const Servicos = () => {

  const [servicos, setServicos] = useState([])

  useEffect(() => {
    http.get('servicos')
      .then(response => {
        setServicos(response.data)        
      })
  }, [])
  
  return (
    <div className="servico">    
      
        {servicos.map((servico, index) => <CardServico key={index} nome={servico.nome} preco={servico.preco} id={servico.id} />)}
      
    </div>
  )
}

export default Servicos