import React, { useContext } from 'react';
import Header from '../../../components/Header/Header';
import TabelaUsuarios from '../../../components/Tabela/tabela';
import { AutenticacaoContext } from '../../../contexts/autenticacao';

function cadastroUsuario(){
    
    const {colunaUsuarios} = useContext(AutenticacaoContext)
    const {dados} = useContext(AutenticacaoContext)
    
    return (
        <div className='cadastro_usuario'>
            <Header />
            <div className='w-50 p-3 position-absolute top-50 start-50 translate-middle'>
                <form
                    method='POST'
                    className='mb-3 form-control'
                >
                    <h3>Cadastro Usuario</h3>

                    <input
                        type='user'
                        placeholder='Nome do usuario'
                        name='userName'
                        className='form-control'
                    ></input>
                    <input
                        type='email'
                        placeholder='Endereço de email'
                        name='emailName'
                        className='form-control'
                    ></input>
                    <input
                        type='password'
                        placeholder='Senha'
                        name='password'
                        className='form-control'
                    ></input>
                    <button
                        className="btn btn-outline-success"
                        type='submit'
                    >Cadastrar</button>
                </form>

                <TabelaUsuarios classEstilo="table table-bordered border-primary" colunas={colunaUsuarios} dados={dados}/>
            </div>
        </div>
    )
}

export default cadastroUsuario;