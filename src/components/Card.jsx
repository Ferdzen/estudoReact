import React from "react";

function Card(props) {    
    return (
        
        <div className={props.classeMolde} style={props.estilos}>
            <img src={props.diretorio} className={props.classeImg}></img>
            <div className={props.classesCorpo}>
                <h2 className={props.classesTitulo}>{props.titulo}</h2>
                <p className={props.classesDescricao}>{props.descricao}</p>
                <button className={props.classesBotao}>{props.botao}</button>
            </div>
        </div>
    )
}

export default Card;