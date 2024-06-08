import React from 'react'
import "./User.css"
import { FaUserAlt } from 'react-icons/fa';
function User() {
    return (
        <section className={'userSection'}>
            <div className={'nomeDiv'}>
                <h1>Usuário</h1>

                <span>Editar</span>
            </div>
            <div className={'userMain'}>
                <div>
                    <FaUserAlt />

                </div>
                <ul>
                    <li>
                        <h3>Nome</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Email</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Senha</h3>
                        <span>********</span>
                    </li>

                </ul>
                <ul>
                    <li>
                        <h3>CPF</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Situação</h3>
                        <span>XXXXXXXX</span>
                    </li>
                    <li>
                        <h3>Função</h3>
                        <span>XXXXXXXX</span>
                    </li>

                </ul>
            </div>
            <div className='userDescription'>
                    <h2>Descrição do usuário</h2>
                    <textarea name="description" id="" cols="30" rows="10"></textarea>
            </div>
            <div className='contact'>
                <h2>Contato</h2>
                <ul>
                    <li>
                        <h3>Email Pessoal</h3>
                        <input type="text" name="email_pessoal" id="" />
                    </li>
                    <li>
                        <h3>Telefone Comercial</h3>
                        <input type="text" name="telefone" id="" />
                    </li>
                </ul>
            </div>
            <div className='endereco'>
                <h2>Endereço</h2>
                <ul>
                    <li>
                        <h3>CEP</h3>
                        <input type="text" name="email_pessoal" id="" />
                    </li>
                    <li>
                        <h3>Número</h3>
                        <input type="text" name="numero" id="" />
                    </li>
                    <li>
                        <h3>Estado</h3>
                        <input type="text" name="estado" id="" />
                    </li>
                    <li>
                        <h3>Cidade</h3>
                        <input type="text" name="cidade" id="" />
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default User