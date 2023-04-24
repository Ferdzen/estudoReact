import React, { useContext } from 'react';
import Header from '../../components/Header/Header';

import '../../components/Header/Header.css'
import TabelaFilmes from '../../components/Tabela/tabela';
import TabelaCategorias from '../../components/Tabela/tabela';
import { AutenticacaoContext } from '../../contexts/autenticacao';

function Home() {

    //chamando dados das tabelas
    const {camposFilme} = useContext(AutenticacaoContext)
    const {dadosFilme} = useContext(AutenticacaoContext)
    const {categorias} = useContext(AutenticacaoContext)
    const {dadosCategorias} = useContext(AutenticacaoContext)
    
    return (
        <div className='home d-flex flex-column w-100'>

            <Header></Header>
            <h2 className='amostra-dados-titulo w-50 p-3 mx-auto'>Review</h2>
            <div className='amostra-dados w-50 p-3 d-flex mx-auto p-2 grid gap-3'>
                <TabelaFilmes dados={dadosFilme} colunas={camposFilme} classEstilo="table table-bordered border-primary p-2 g-col-6"/>
                <TabelaCategorias classEstilo="table table-bordered border-primary p-2 g-col-6" colunas={categorias} dados={dadosCategorias}/>
            </div>
        </div>
        
    )
}

export default Home;