import React from 'react';
import { useState, useContext } from 'react';
import { AutenticacaoContext } from '../../contexts/autenticacao';

function initialState() {
    return { user: '', password: '' }
}


function Login() {

    //const [nome, setNome] = useState('');
    //const [email, setEmail] = useState('');
    //const [senha, setSenha] = useState('');
    const { autenticado, login } = useContext(AutenticacaoContext)

    const [values, setValues] = useState(initialState);

    function onChange(event) {

        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value,
        })

    }



    /*
    const [stateForm, setForm] = useState({
        email: '',
        senha: '',
    });

    const mudaFormState = (evento, chave) => {
        setForm(
            { ...stateForm, [chave]: evento.target.value }
        )
    }
    */

    const verificaLogin = (event) => {
        event.preventDefault()
        login(values.user,
            values.password);

        localStorage.setItem("user", values.user)
    }


    //mudança da visibilidade da senha

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }
    //<p>{String(autenticado)}</p>


    //Esqueci minha senha
    const [showInput, setShowInput] = useState(false);
    const mostraSenha = () => {
        setShowInput(true);
    };

    return (

        <div className='login d-flex flex-column w-100 p-3'>

            <form
                method='POST'
                className='form-control mb-3 w-75 mx-auto p-2'
                onSubmit={verificaLogin}>

                <h3>Login</h3>

                <input
                    type='user'
                    className='form-control mb-3'
                    placeholder='Usuário'
                    name='user'
                    onChange={onChange}
                    value={values.user}
                ></input>
                <input
                    type={showPassword ? 'text' : 'password'}
                    id='password'
                    className='form-control mb-3'
                    placeholder='Senha'
                    name='password'
                    onChange={onChange}
                    value={values.password}
                ></input>
                <p onClick={mostraSenha}>Esqueci minha senha!</p>
                <button type="button" className="form-control mb-3 btn btn-outline-secondary" onClick={togglePasswordVisibility}>
                    {showPassword ? 'Ocultar' : 'Mostrar Senha'}
                </button>
                <button
                    className="form-control mb-3 btn btn-outline-success"
                    type='submit'
                >Enviar</button>
                {showInput && <textarea className='form-control mb-3' placeholder='Esqueceu a senha? Utilize o Código: codigoVisitante com seu usuário para acessar como visitante.'/>}
            </form>
            

        </div>
    )
}

export default Login