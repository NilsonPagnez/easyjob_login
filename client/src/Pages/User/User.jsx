import React, { useContext } from 'react'
import "./User.css"
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';
import * as yup from 'yup';


function User() {
    const { authData, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    const logoutOnSubmit = () => {
        logout()
        navigate("/Login")
        console.log(authData)
    }

  
    const handleUpdate = (values, actions) => {
        Axios.post("http://localhost:3001/update_user", {
            idusers: authData.idusers,
            nome: authData.nome, 
            email: authData.email, 
            email_pessoal: values.email_pessoal,
            telefone: values.telefone,
            cpf: values.cpf,
            situation: values.situation,
            cargo: values.cargo,
            cep: values.cep,
            endereco: values.endereco,
            estado: values.estado,
            cidade: values.cidade,
            descricao: values.descricao
        }).then((response) => {
            const data = response.data.data;
            alert(response.data.msg);
        }).catch((error) => {
            console.error('Erro ao atualizar dados:', error);
            // Tratar erros ou informar ao usuário
        }).finally(() => {
            actions.setSubmitting(false); // Define que a submissão foi completada
        });
    };

    const validationUpdate = yup.object().shape({
        email_pessoal: yup.string().email("Não é um email!").required("este campo é obrigatório!"),
        cpf: yup.string().min(11, "O CPF deve ter 11 caracteres!").max(11, "O CPF deve ter 11 caracteres!"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "As senhas não são iguais!").min(8, "A senha deve ter 8 caracteres!").required("este campo é obrigatório!"),
    })

    return (
        <>
            {
                authData ? (

                    <Formik
                        initialValues={{
                            email_pessoal: authData.email_pessoal,
                            telefone: authData.telefone,
                            cpf: authData.cpf || '',
                            situation: authData.situation || '',
                            cargo: authData.cargo || '',
                            cep: authData.cep || '',
                            endereco: authData.endereco || '',
                            estado: authData.estado || '',
                            cidade: authData.cidade || '',
                            descricao: authData.descricao || ''
                        }}
                        onSubmit={handleUpdate}
                        validationSchema={validationUpdate}
                        enableReinitialize={true}
                    >
                        {({ isSubmitting }) => (
                            <Form className={'userSection'}>

                                <>
                                    <div className={'nomeDiv'}>
                                        <h1>{authData.nome}</h1>
                                    </div>
                                    <div className={'userMain'}>
                                        <div>
                                            <FaUserAlt />
                                        </div>
                                        <ul>
                                            <li>
                                                <h3>Nome</h3>
                                                <span>{authData.nome}</span>
                                            </li>
                                            <li>
                                                <h3>Email</h3>
                                                <span>{authData.email}</span>
                                            </li>
                                            <li>
                                                <h3>Senha</h3>
                                                <span>********</span>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <h3>CPF</h3>
                                                <Field  maxlength="11" type="text" name="cpf" />
                                                <ErrorMessage component='span' name='cpf' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Situação</h3>
                                                <Field  maxlength="30" type="text" name="situation" />
                                                <ErrorMessage component='span' name='situation' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Cargo</h3>
                                                <Field maxlength="40" type="text" name="cargo" />
                                                <ErrorMessage component='span' name='cargo' className='form-error' />

                                            </li>
                                        </ul>
                                    </div>
                                    <div className='contact'>
                                        <h2>Contato</h2>
                                        <ul>
                                            <li>
                                                <h3>Email Pessoal</h3>
                                                <Field maxlength="40" type="text" name="email_pessoal" />
                                                <ErrorMessage component='span' name='email_pessoal' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Telefone Comercial</h3>
                                                <Field maxlength="15"  type="text" name="telefone" />
                                                <ErrorMessage component='span' name='telefone' className='form-error' />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='endereco'>
                                        <h2>Endereço</h2>
                                        <ul>
                                            <li>
                                                <h3>CEP</h3>
                                                <Field maxlength="9"  type="text" name="cep" />
                                                <ErrorMessage component='span' name='cep' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Número</h3>
                                                <Field maxlength="5" type="text" name="endereco" />
                                                <ErrorMessage component='span' name='endereco' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Estado</h3>
                                                <Field type="text" name="estado" />
                                                <ErrorMessage maxlength="20" component='span' name='estado' className='form-error' />

                                            </li>
                                            <li>
                                                <h3>Cidade</h3>
                                                <Field maxlength="40"  type="text" name="cidade" />
                                                <ErrorMessage component='span' name='cidade' className='form-error' />

                                            </li>
                                        </ul>
                                    </div>
                                    <div className='userDescription'>
                                        <h2>Descrição do usuário</h2>
                                        <Field  as="textarea" name="descricao" />
                                    </div>
                                    <div className={'btnDiv'}>
                                        <button type="submit" disabled={isSubmitting}>
                                            Ajustar Alterações
                                        </button>
                                        <span onClick={logoutOnSubmit} className={'btn_sair'}>
                                            Sair
                                        </span>
                                    </div>
                                </>

                            </Form>
                        )}
                    </Formik>
                ) : (

                    <div>
                        <span>O usuário deve estar LOGADO para acessar está página!!</span>
                        <span>Clique aqui para logar!</span>
                    </div>
                )
            }

        </>
    )
}

export default User