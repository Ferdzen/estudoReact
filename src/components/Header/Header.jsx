import './Header.css'
import React from 'react';
import { useNavigate } from "react-router-dom";
import { AutenticacaoContext, AutenticacaoProvider } from "../../contexts/autenticacao";
import { useContext } from "react";

function Header() {
    
    const navegador = useNavigate();

    //const { autenticado, login } = useContext(AutenticacaoContext)

    function handleBrandClick(){
        navegador('/Categorias')
    }
    function handleProductClick(){
        navegador('/Cadastro-Filme')
    }
    function handleUserClick(){
        navegador('/Usuarios')
    }
    function handleMenuClick(){
        navegador('/Home')
    }
    /*const exit(token) =>{
        console.log('Tristeza');
    }*/

    return (
        <nav className="header">
            <div className="nav__title">Bem vindo, {localStorage.getItem("user")}</div>
                <ul className="nav__list">   
                    <li className="nav__item" onClick={handleMenuClick}>Menu</li>
                    <li className="nav__item" onClick={handleBrandClick}>Categorias</li>
                    <li className="nav__item" onClick={handleProductClick}>Filmes</li>
                    <li className="nav__item" onClick={handleUserClick}>Usuários</li>
                </ul>
        </nav>

    )	
}

export default Header;