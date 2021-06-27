import './App.css'
import Home from './Pages/Home'
import Produtos from './Pages/Produtos'
import Servicos from './Pages/Servicos'
import Erro from './Pages/404'
import Navbar from './Componentes/Navbar'
import Produto from './Pages/Produto'
import Servico from './Pages/Servico'
import Cadastro from './Pages/Cadastro'
import Login from './Pages/Login'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/produtos">
          <Produtos />
        </Route>
        <Route path="/produtos/:id">
          <Produto />
        </Route>
        <Route exact path="/servicos">
          <Servicos />
        </Route>
        <Route path="/servicos/:id">
          <Servico />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route>
          <Erro />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
