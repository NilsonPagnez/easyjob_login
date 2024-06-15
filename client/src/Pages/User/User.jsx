import React, { useContext } from 'react'
import "./User.css"
import { FaUserAlt } from 'react-icons/fa';
import { AuthContext } from '../../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import Axios from 'axios';


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
                        validateOnChange={false}
                        validateOnBlur={false}
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
                                                <Field type="text" name="cpf" />
                                            </li>
                                            <li>
                                                <h3>Situação</h3>
                                                <Field type="text" name="situation" />
                                            </li>
                                            <li>
                                                <h3>Cargo</h3>
                                                <Field type="text" name="cargo" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='contact'>
                                        <h2>Contato</h2>
                                        <ul>
                                            <li>
                                                <h3>Email Pessoal</h3>
                                                <Field type="text" name="email_pessoal" />
                                            </li>
                                            <li>
                                                <h3>Telefone Comercial</h3>
                                                <Field type="text" name="telefone" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='endereco'>
                                        <h2>Endereço</h2>
                                        <ul>
                                            <li>
                                                <h3>CEP</h3>
                                                <Field type="text" name="cep" />
                                            </li>
                                            <li>
                                                <h3>Número</h3>
                                                <Field type="text" name="endereco" />
                                            </li>
                                            <li>
                                                <h3>Estado</h3>
                                                <Field type="text" name="estado" />
                                            </li>
                                            <li>
                                                <h3>Cidade</h3>
                                                <Field type="text" name="cidade" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='userDescription'>
                                        <h2>Descrição do usuário</h2>
                                        <Field as="textarea" name="descricao" />
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