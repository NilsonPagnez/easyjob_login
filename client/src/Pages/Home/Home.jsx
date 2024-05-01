import React from 'react'
import './Home.css'
import Img_aperto from '../../assets/Img_Aperto_Mão.png'
import Img_contato from '../../assets/contato.png'
import Information from '../../assets/information-button.png'
import Tool from '../../assets/tool.png'
import Google from '../../assets/Icon_google-play.png'
import Apple from '../../assets/Icon_apple-logo.png'
import Cell from '../../assets/cell.png'
import CellPhoneMan from '../../assets/excited-happy-celebrating-handsome-redhead-man-with-bristle-lifting-fist-up-victory-gesture-holding-smartphone.png'

function Home() {
    return (
        <>
            <section className="s-main">
                <div className="container">
                    <div className="left">
                        <h1>MELHOR FORMA DE GARANTIR EMPREGO</h1>
                        <h2>Jeito mais prático de arrumar emprego</h2>
                        <h3>ou de gerar-lo</h3>
                        <button className="botao">INICIAR SESSÃO ➪</button>
                    </div>
                </div>
                <div className="right" >
                    <img className="mao" src={Img_aperto} alt="Img_aperto"></img>
                </div>
            </section>

            <section className="s-mid">
                <div className="container">
                    <h2>Nossos Principais Serviços</h2>
                    <nav>

                        <div>
                            <a href="contato.html">

                                <img src={Img_contato} alt="contato"></img>
                                <span>Contatos</span>
                            </a>
                        </div>

                        <div>
                            <a href="sobre.html">
                                <img src={Information}></img>
                                <span>Sobre</span>
                            </a>
                        </div>

                        <div>
                            <a href="servicos.html">
                                <img src={Tool}></img>
                                <span>Serviços</span>
                            </a>
                        </div>

                    </nav>

                </div>
            </section>

            <section className="s-app">
                <div className="container">
                    <div className="left">
                        <h1>Baixe já nosso aplicativo</h1>

                        <div className="app-download">
                            <button className="botao">
                                <a className='botao-link' href="">
                                    <img className="icons" src={Google} alt="Google"></img>
                                    <p>Disponível na <br></br><span>Google play</span></p>

                                </a>
                            </button>
                            <button className="botao">
                                <a className='botao-link' href="">
                                    <img className="icons icon_apple" src={Apple} alt="Apple"></img>
                                    <p>Disponível na <br></br><span>Appstore</span></p>
                                </a>

                            </button>
                        </div>
                    </div>
                    <div className="right">
                        <div className="imgs" >
                            <img className="celular-img" src={Cell} alt="cell"></img>
                            <img className="h-celular" src={CellPhoneMan} alt="CellPhoneMan"></img>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default Home