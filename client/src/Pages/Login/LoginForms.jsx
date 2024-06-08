import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';
import "./LoginForms.css";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';

function LoginForms() {

    const navigate = useNavigate()

    const handleClickLogin = (values) => {
        Axios.post("http://localhost:3001/login", {
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            alert(response.data.msg);
            navigate("/User")


        })
    }
    const handleClickRegister = (values) => {
        Axios.post("http://localhost:3001/register", {
            nome: values.nome,
            email: values.email,
            password: values.password,
        }).then((response) => {
            console.log(response);
            alert(response.data.msg);

        })
    }

    const validationLogin = yup.object().shape({
        email: yup.string().email("Não é um email!").required("este campo é obrigatório!"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres!").required("este campo é obrigatório!"),
    })

    const validationRegister = yup.object().shape({
        email: yup.string().email("Não é um email!").required("este campo é obrigatório!"),
        password: yup.string().min(8, "A senha deve ter 8 caracteres!").required("este campo é obrigatório!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais!").min(8, "A senha deve ter 8 caracteres!").required("este campo é obrigatório!"),
    })

    return (
        <div className='container-usuario'>

            <div className="container-cadastro">
                <div className="h1-cadastro">
                    <h1>Cadastro</h1>
                </div>
                <Formik
                    initialValues={{}}
                    onSubmit={handleClickRegister}
                    validationSchema={validationRegister}
                >
                    <Form className='register-form'>
                        <div className='register-form-group'>
                            <Field name='nome' className='form-field' placeholder='Nome' />
                            <ErrorMessage component='span' name='nome' className='form-error' />
                        </div>
                        <div className='register-form-group'>
                            <Field name='email' className='form-field' placeholder='Email' />
                            <ErrorMessage component='span' name='email' className='form-error' />
                        </div>

                        <div className='register-form-group'>
                            <Field name='password' className='form-field' placeholder='Senha' />
                            <ErrorMessage component='span' name='password' className='form-error' />
                        </div>

                        <div className='register-form-group'>
                            <Field name='confirmPassword' className='form-field' placeholder='Confirme sua senha' />
                            <ErrorMessage component='span' name='confirmPassword' className='form-error' />
                        </div>

                        <button className='button' type='submit'>Register</button>
                    </Form>
                </Formik>
            </div>

            <div className='container-login'>
                <div className="h1-login">
                    <h1>Login</h1>
                </div>
                <Formik
                    initialValues={{}}
                    onSubmit={handleClickLogin}
                    validationSchema={validationLogin}
                >
                    <Form className='login-form'>

                        <div className='login-form-group'>
                            <Field name='email' className='form-field' placeholder='Email' />
                            <ErrorMessage component='span' name='email' className='form-error' />
                        </div>

                        <div className='login-form-group'>
                            <Field name='password' className='form-field' placeholder='Senha' />
                            <ErrorMessage component='span' name='password' className='form-error' />
                        </div>

                        <button className='button' type='submit'>Loggin</button>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default LoginForms