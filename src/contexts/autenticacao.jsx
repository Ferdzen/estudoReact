import React, { createContext } from "react";
import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";


export const AutenticacaoContext = createContext();

export const AutenticacaoProvider = ({children}) => {
    /*
    const [usuario, setUsuario] = useState(
        {
            User: 'Dicamargo',
            Email: 'jose@emailjose.com',
            Password: 'zeze',
        },

        {
            User: 'solimaLake',
            Email: 'blackandsole@emailSBL.com',
            Password: 'eurioTuSolimoes',

        },

        {
            User: 'littleXitas',
            Email: 'xitas@zaozao.com',
            Password: 'xitasOhomem',

        }, 
    );
    */
    
    //dados das tabelas filmes
    const camposFilme = ['Nome', 'Genero', 'Ano'];
    const dadosFilme = [
        {
            Nome: 'O Fantástico Sr. Raposo',
            Genero: 'Comédia/Aventura',
            Ano: '2009',
        },

        {
            Nome: 'Garota Mimada',
            Genero: 'Comédia/Romance',
            Ano: '2008',

        },

        {
            Nome: 'Ilha de Cachorros',
            Genero: 'Comédia/Aventura',
            Ano: '2018',

        },
    ]

    //dados tabelas categorias
    const categorias = ['Genero', 'Ano', 'Diretor'];
    const dadosCategorias = [
        {
            Genero: 'Comedia',
            Ano: '2004',
            Diretor: 'Nick Moore',
        },

        {
            Genero: 'Aventura',
            Ano: '2006',
            Diretor: 'Wes Anderson',

        },

        {
            Genero: 'Terror',
            Ano: '2002',
            Diretor: 'Nolan',

        },
    ]

    //dados tabela usuario
    const colunaUsuarios = ['User', 'Email', 'Password'];
    const dados = [
        {
            User: 'Dicamargo',
            Email: 'jose@emailjose.com',
            Password: 'zeze',
        },

        {
            User: 'solimaLake',
            Email: 'blackandsole@emailSBL.com',
            Password: 'eurioTuSolimoes',

        },

        {
            User: 'littleXitas',
            Email: 'xitas@zaozao.com',
            Password: 'xitasOhomem',

        },
    ]

    const navegador = useNavigate();
    const [user, setUser] = useState(null);
    const login = (user, senha) => {
        setUser(
            {
                user, senha
            })
        console.log(`User: ${user} e Senha: ${senha}`);
        
        if(user == 'admin' && senha == 'teste'){
            setUser({
                user: "admin",
                senha: "teste",
            });
            navegador('/Home')
        }else if(senha == 'codigoVisitante'){
            setUser({
                user: user, 
                senha: senha,
            })
            navegador('/Home')
        }
    };


    const logout = () => {
        console.log("See ya...!");
        setUsuario(null)
        navegador('/')
    };

    

    return (
        <AutenticacaoContext.Provider value={
            {
                autenticado: !!user,
                user,
                login,
                logout,
                camposFilme,
                dadosFilme,
                categorias,
                dadosCategorias,
                colunaUsuarios,
                dados
            }
        }>
            {children}
        </AutenticacaoContext.Provider>
    )
};