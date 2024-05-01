import React from 'react'
import './Footer.css'
import LogoNova from '../../assets/logonova.png'
import IconGmail from '../../assets/Icon_gmail.png'
import IconTwitter from '../../assets/Icon_twitter.png'
import IconInstagram from '../../assets/Icon_instagram.png'
import IconFacebook from '../../assets/Icon_facebook.png'
import IconOrkut from '../../assets/Icon_orkut.png'
import IconWhatsapp from '../../assets/Icon_whatsapp.png'
import IconLinkedin from '../../assets/Icon_linkedin.png'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="f-top">
                    <div className="EJ_info">
                        <img className="LogoNova" src={LogoNova} alt=""></img>
                        <span>Jeito mais prático de arrumar emprego</span>
                        <div className="redes">
                            <a href=""><img src={IconGmail} alt="Gmail"></img></a>
                            <a href=""><img src={IconTwitter} alt="Twitter"></img></a>
                            <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                            <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                            <a href=""><img src={IconOrkut} alt="Orkut"></img></a>
                            <a href=""><img src={IconWhatsapp} alt="Whatsapp"></img></a>
                        </div>
                    </div>

                    <div className="colaboradores">
                        <h3>Dados de contato: </h3>
                        <ul>
                            <li><a href="./"><span >Número de telefone: (22) 9922222222</span></a></li>
                            <li><a href="./"><span >Endereço: R. Est. Evaldo Silva Gomes - Bacaxá, Saquarema - RJ, 28990-000</span></a></li>
                        </ul>
                    </div>

                    <div className="idealizadores">

                        <h3>Idealizadores da EasyJob</h3>
                        <ul>
                            <li>

                                <span > Felipe Ramos </span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                            <li>

                                <span > Igor Merlim </span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                            <li>

                                <span > Jonathas Pereira </span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                            <li>
                                <span > Nilson Pagnez </span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                            <li>
                                <span > Thiago Cardim</span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                            <li>
                                <span > Natalya Mendonça </span>
                                <div className="ID_Redes">
                                    <a href=""><img src={IconInstagram} alt="Instagram"></img></a>
                                    <a href=""><img src={IconFacebook} alt="Facebook"></img></a>
                                    <a href=""><img src={IconLinkedin} alt="Facebook"></img></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer