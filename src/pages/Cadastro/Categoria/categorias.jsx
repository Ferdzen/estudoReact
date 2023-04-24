import React, {useContext} from 'react';
import Header from '../../../components/Header/Header';
import TabelaCategorias from '../../../components/Tabela/tabela';
import { AutenticacaoContext } from '../../../contexts/autenticacao';

function cadastroCategoria(){
    const {categorias} = useContext(AutenticacaoContext)
    const {dadosCategorias} = useContext(AutenticacaoContext)

    
    return(
        <div className='cadastro_categoria'>
            
            <Header />
            <div className='w-50 p-3 position-absolute top-50 start-50 translate-middle'>
                <form
                    method='POST'
                    className='mb-3 form-control'
                >
                    <h3>Cadastro Categoria</h3>

                    <input
                        type='name'
                        placeholder='Nome da nova categoria'
                        name='categoryName'
                        className='form-control'
                    ></input>
                    <button
                        className="btn btn-outline-success"
                        type='submit'
                    >Cadastrar</button>
                </form>

                <TabelaCategorias classEstilo="table table-bordered border-primary" colunas={categorias} dados={dadosCategorias}/>
            </div>

        </div>
        
    )
}

export default cadastroCategoria;