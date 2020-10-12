import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import imagem from '../../assets/pets.png';
import logo from '../../assets/logo2.png';


const Home = () => {
    return (
        <div id="page-home">
            <div className='content'>
                <header>
                    <div className="menu">
                        <img src={logo} alt="Logo" height={64} />
                        <ul id="opcoes">
                            <Link to="/" className="link">
                                <li className="active">HOME</li>
                            </Link>

                            <Link to="/dashboard" className="link">
                                <li>ADOTAR</li>
                            </Link>

                            <div className="dropdown">
                                <button id="btn-cadastrar">CADASTRAR</button>
                                    <div className="opcoes-cadastrar">
                                        <Link to="/create-user">USUÁRIO</Link>
                                        <Link to="/create-pet">PET</Link>
                                    </div>
                            </div>
                        </ul>
                    </div>

                </header>
                <main>
                    <p>Todo mundo merece um lar feliz</p>
                    <img className='imagem-animais' src={imagem} alt=""/>
                </main>
            </div>
        </div>
    );
}

export default Home;