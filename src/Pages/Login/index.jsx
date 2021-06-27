import { useState } from 'react'
import './estilos.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const logar = (evento) => {
        evento.preventDefault()

        const login = {}
        login.email = email
        login.senha = senha

        axios.post('http://localhost:8000/auth/login', login)
            .then(response => {
                console.log(response.data)
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('nome', response.data.user.nome)
            })

        setSenha('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={logar}>
                <h1>Login</h1>
                <input required placeholder="Email" type="email" value={email} onChange={(evento) => setEmail(evento.target.value)} />
                <input required placeholder="Email" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)} />
                <div className="button">
                    <button>Entrar</button>
                </div>
            </form>
            <div className="button">
                <Link to="/cadastro" className="link" >Cadastrar</Link>
            </div>
        </div>

    )
}

export default Login