import http from '../../http'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Produto = () => {
    const { id } = useParams()
    const [produto, setProduto] = useState({})

    useEffect(() => {
        http.get('produtos/'+id)
            .then(response => {
                setProduto(response.data)
                console.log(response.data)
            })
    }, [id])    
    
    return (
        <div>
            <h1>{produto.nome}</h1>
            <h1>R${produto.preco}</h1>
        </div>
    )
}
export default Produto