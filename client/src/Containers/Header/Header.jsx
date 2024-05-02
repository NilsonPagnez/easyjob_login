import React from 'react'
import './Header.css'
import Logo from '../../assets/MainLogoNova.png'
import IconSearch from '../../assets/Icon_search.png'
import IconMenu from '../../assets/Icon_menu.png'
import Login from '../../assets/login.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header >
            <div class="container">
                <div class="header_content">

                    <img src={Logo} className='Logo' alt="Logo"></img>

                    <div class="busca">
                        <input type="text" placeholder="Buscar Serviço"></input>
                        <button>
                            <img class="icons" src={IconSearch} alt="IconSearch"></img>
                        </button>

                    </div>
                    <button class="show-menu-mobile"><img src={IconMenu} class="icons" alt=""></img></button>
                    <ul class="clickTo_menu">

                        <Link to='/'>
                            <button class="menu-buttons">HOME</button>
                        </Link>

                        <Link to='/Sobre'>
                            <button class="menu-buttons">SOBRE</button>
                        </Link>

                        <Link to='/Servicos'>
                            <button class="menu-buttons">SERVIÇOS</button>
                        </Link>

                        <Link to='/Contato'>
                            <button class="menu-buttons">CONTATO</button>
                        </Link>

                        <button class="logar">
                            <Link to='/Login'>
                                <img class="icons" src={Login} alt="login"></img>LogIn
                            </Link>
                        </button>
                    </ul>
                </div>
            </div>
        </header >
    )
}

export default Header