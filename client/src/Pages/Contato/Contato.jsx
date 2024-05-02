import React from 'react'
import './Contato.css'
import Mapa from '../../assets/mapa.png'
import Telefone from '../../assets/telefone.png'
import Email from '../../assets/e-mail.png'

export default function Contato() {
    return (
        <section class="b-mid container">

            <div class="texto ">

                <ul>
                    <li >
                        <div class="imageDiv" >
                            <img src={Mapa} alt=""></img>
                        </div>
                        <div class="content">

                            <span id="sobre">Nossa Localização</span>
                            <p>R. Est. Evaldo Silva Gomes - Bacaxá, Saquarema - RJ, 28990-000</p>
                        </div>

                    </li>
                    <li >
                        <div class="imageDiv" >
                            <img src={Telefone} alt=""></img>
                        </div>
                        <div class="content">
                            <span id="sobre">Nosso Telefone</span>
                            <p>(24) 2471-8309</p>
                        </div>
                    </li>
                    <li >
                        <div class="imageDiv" >
                            <img src={Email} alt=""></img>
                        </div>
                        <div class="content">
                            <span id="sobre">Email</span>
                            <p>processoseletivo@universidadedevassouras.edu.br</p>
                        </div>
                    </li>
                </ul>

            </div>

            <div class="area-texto">
                <span >Contato</span>
                <input type="text" placeholder="Nome"></input>
                <input type="text" placeholder="E-mail"></input>
                <div>
                    <input type="text" placeholder="Assunto"></input>
                    <input type="text" placeholder="Telefone"></input>
                </div>
                <textarea placeholder="Mensagem" name="" id="" cols="1" rows="8"></textarea>
                <button class="env">Enviar</button>
            </div>


        </section>

    )
}
