import React from 'react';

function Input(props) {
    if (props.obrigatorio == 's') {
        return <input type={props.tipo}
            placeholder={props.msg}
            required={true}
        />

    } else {

        return <input type={props.tipo}
            placeholder={props.msg}
            required={false}
        />
    }
}


export default Input