import './estilos.css'
import { Link } from 'react-router-dom'

const CardServico = (props) => {
    return(
        <div className="card">
            <ul className='list'>
                <li>{props.nome}</li>
                <li>R$ {props.preco}</li>               
            </ul>
           <Link to={`/servicos/${props.id}`}>Ver detalhes</Link>
        </div>
    )
}

export default CardServico