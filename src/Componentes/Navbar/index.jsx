import './estilos.css'
import { Link } from 'react-router-dom'

const Navbar = () => {    

    return (
        <header>
            <div className="logo">
                <h2>PETSHOP</h2>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link className="menu" to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className="menu" to="/produtos">PRODUTOS</Link>
                    </li>
                    <li>
                        <Link className="menu" to="/servicos">SERVIÇOS</Link>
                    </li>                    
                    <li>
                        <Link className="menu" to="/login">LOGIN</Link>
                    </li>                    
                </ul>
            </nav>
        </header>
    )
}

export default Navbar