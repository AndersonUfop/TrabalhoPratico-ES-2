import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import imagem from '../../assets/pets.png';


const Home = () => {
    return (
        <div id="page-home">
            <div className='content'>
                <header>
                  
                
                    <ul id="opcoes">
                        <Link to="/dashboard">
                            <li>ADOTAR</li>
                        </Link>

                        <Link to="/create-user">
                            <li>CADASTRO</li>
                        </Link>
                    </ul>

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