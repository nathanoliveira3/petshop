import './estilos.css'
import { Link } from 'react-router-dom'

const CardProduto = (props) => {
    return(
        <div className="card">
            <ul className='list'>
                <li>{props.nome}</li>
                <li>R$ {props.preco}</li>               
            </ul>
           <Link to={`/produtos/${props.id}`}>Ver detalhes</Link>
        </div>
    )
}

export default CardProduto