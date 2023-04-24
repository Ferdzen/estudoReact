import React from 'react';

function BotaoPrincipal({texto, cor}){
    
    if(cor == 'red'){
        return <button style={{color: 'green'}}>{texto}</button>
    }else{
        return <button style={{color: 'blue'}}>{texto}</button>
    }
    
}

export default BotaoPrincipal