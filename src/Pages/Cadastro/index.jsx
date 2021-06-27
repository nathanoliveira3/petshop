import { useState } from 'react'
import './estilos.css'
import axios from 'axios'

const Cadastro = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const [usuarios, setUsuarios] = useState([])

    const salvar = (evento) => {
        evento.preventDefault()
            
        const usuario = {}
        usuario.nome = nome
        usuario.email = email
        usuario.senha = senha

        axios.post('http://localhost:8000/auth/register', usuario)
            .then( response => {
                const novoUsuario = response.data
                setUsuarios(novoUsuario, ...usuarios)
                console.log(response.data)
            })
    }

    return(
        <form onSubmit={salvar}>
            <h1>Cadastro de usuário</h1>
            <input required placeholder="Nome" value={nome} type="text" onChange={(evento) => setNome(evento.target.value)}/>
            <input required placeholder="Email" value={email} type="email" onChange={(evento) => setEmail(evento.target.value)}/>
            <input required placeholder="Senha" value={senha} type="password" onChange={(evento) => setSenha(evento.target.value)}/>
            <div className="button">
                <button>Salvar</button>
            </div>
        </form>
    )
}
export default Cadastro