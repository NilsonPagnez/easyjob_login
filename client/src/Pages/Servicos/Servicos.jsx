import React from 'react'
import './Servicos.css'
import Catalogo from '../../assets/catalogo.png'
import Analise from '../../assets/analise.png'
import Conversando from '../../assets/conversando.png'
import Suporte from '../../assets/suporte-ao-cliente.png'

export default function Servicos() {
  return (
    <section className="meio container">

    <div className="grid">

        <ul>
            <li >
                <div className="imageDiv" >
                    <img src={Catalogo} alt=""></img>
                </div>
                <div className="content">
                    <span id="sobre">Catálogo de serviços</span>
                    <p>Colocar pessoas com necessidades de empregos em uma vitrine online para que os clientes possam escolher de acordo com seu gosto pessoal.</p>
                </div>
                    
            </li>
            <li >
                <div className="imageDiv" >
                    <img src={Analise} alt=""></img>
                </div>
                <div className="content">
                    <span id="sobre">Avaliação</span>
                    <p>Cada profissional será avaliado pelo cliente após o serviço, podendo assim ficar em evidência em nossa plataforma.</p>
                </div>
            </li>
            <li >
                <div className="imageDiv" >
                    <img src={Conversando} alt=""></img>
                </div>
                <div className="content">
                    <span id="sobre">Chat</span>
                    <p>Existira um chat entre cliente e profissional para que ambos possam sanar suas dúvidas.</p>
                </div>
            </li>
            <li >
                <div className="imageDiv" >
                    <img src={Suporte} alt=""></img>
                </div>
                <div className="content">
                    <span id="sobre">Suporte especial</span>
                    <p>Tanto o cliente quantos os profissionais terão um suporte a qualquer momento para que não gere estresse a ninguém.</p>
                </div>
            </li>
        </ul>
        
    </div>


</section>
  )
}
