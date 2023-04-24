import React from 'react';
import {useEffect, useState} from 'react';
import BotaoPrincipal from '../../components/BotaoPrincipal'
import InputPrincipal from '../../components/Input'

function Pesquisa(){
    
    const [searchState, setSearch] = useState({
        pesquisa:'',
    })

    const mudaSearchState = (evento, chave) =>{
        setSearch(
            {...searchState, [chave]:evento.target.value}
        )
    }

    const novaPesquisa = (evento)=>{
        evento.preventDefault()
        console.log(searchState.pesquisa)
    }

    //TRABALHANDO COM useEFFECT
    useEffect(
        () =>{
            if(searchState.pesquisa.length>2){
                console.log(`Pesquisando por: ${searchState.pesquisa}`)
            }
        }, [searchState.pesquisa]

    )
    
    return(
        <form method='POST' className='coluna' onSubmit={novaPesquisa}>
            <InputPrincipal
                type="text"
                msg='Insira aqui'
                obrigatorio='s'
                value={searchState.pesquisa}
                onChange={(evento) =>{mudaSearchState(evento, 'pesquisa')}}
            />
            <BotaoPrincipal texto='Pesquisa' cor='yellow'></BotaoPrincipal>
        </form>
    )
}

export default Pesquisa;