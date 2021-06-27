import { useState, useEffect } from "react";
import CardProduto from '../../Componentes/CardProduto'
import http from "../../http";
import './estilos.css'

const Produtos = () => {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    http.get('produtos')
      .then(response => {
        setProdutos(response.data)
      })
  }, [])

  return (
    <div className="produto">     
      
        {produtos.map((produto, index) => <CardProduto key={index} nome={produto.nome} preco={produto.preco} id={produto.id} />)}
      
    </div>
  )
}

export default Produtos