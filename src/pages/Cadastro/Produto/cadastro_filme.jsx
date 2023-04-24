import React, {useContext} from 'react';
import TabelaFilmes from '../../../components/Tabela/tabela';
import Header from '../../../components/Header/Header';
import { AutenticacaoContext } from '../../../contexts/autenticacao';


function CadastrarFilme() {

    const {camposFilme} = useContext(AutenticacaoContext)
    const {dadosFilme} = useContext(AutenticacaoContext)

    return (
        <div className='cadastro_filme'>
            <Header />
            <div className='w-50 p-3 position-absolute top-50 start-50 translate-middle'>
                <form
                    method='POST'
                    className='mb-3 form-control'
                >
                    <h3>Cadastro Filme</h3>

                    <input
                        type='name'
                        placeholder='Nome'
                        name='movieName'
                        className='form-control'
                    ></input>
                    <input
                        type='text'
                        placeholder='Genero'
                        name='gender'
                        className='form-control'
                    ></input>
                    <input
                        type='text'
                        placeholder='Ano'
                        name='year'
                        className='form-control'
                    ></input>
                    <button
                        className="btn btn-outline-success"
                        type='submit'
                    >Cadastrar</button>
                </form>

                <TabelaFilmes dados={dadosFilme} colunas={camposFilme} classEstilo="table table-bordered border-primary"/>
            </div>
        </div>

    );
}

export default CadastrarFilme;