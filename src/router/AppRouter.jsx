import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate
} from "react-router-dom"
import Login from '../pages/Login'
import CadastrarFilme from "../pages/Cadastro/Produto"
import Usuarios from "../pages/Cadastro/Usuario"
import Categoria from "../pages/Cadastro/Categoria"
import Home from "../pages/Home";
import { AutenticacaoContext, AutenticacaoProvider } from "../contexts/autenticacao";
import { useContext } from "react";

const AppRoutes = () => {

const Private = ({children}) =>{
    const {autenticado} = useContext(AutenticacaoContext)
    
    if(autenticado){
        return children
    }else{
        <Navigate to = '/'/>
    }
   
}

    return (
        <Router>
            <AutenticacaoProvider>
                <Routes>
                    <Route exact path="/"
                        element={<Login />} />
                    <Route exact path="/Cadastro-Filme"
                        element={<Private> <CadastrarFilme /> </Private>} />
                    <Route exact path="/Categorias"
                        element={<Private> <Categoria /> </Private>} />
                    <Route exact path="/Usuarios"
                        element={<Private> <Usuarios /> </Private>} />
                    <Route exact path="/Home"
                        element={<Private> <Home /> </Private>} />
                </Routes>
            </AutenticacaoProvider>

        </Router>
    )

}

export default AppRoutes;