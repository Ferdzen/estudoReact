import React from "react";

function Tabela(props) {
    const colunas = props.colunas;
    const dados = props.dados;


    return (
        <table className={props.classEstilo}>
            <thead>
                <tr>
                    {colunas.map((coluna, index) => (
                        <th key={index}>{coluna}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dados.map((dado, index) => (
                    <tr key={index}>
                        {colunas.map((coluna, index) => (
                            <td key={index}>{dado[coluna]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Tabela;