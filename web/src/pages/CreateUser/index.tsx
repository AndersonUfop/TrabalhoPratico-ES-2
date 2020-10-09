import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import { LeafletMouseEvent } from 'leaflet';
import api from '../../services/api';
import axios from 'axios';
import Dropzone from '../../components/Dropzone';

import './styles.css';
import logo from '../../assets/logo.svg';

// qnd criar um estado pra array ou objeto: manualmente informar o tipo da variavel
const CreateUser = () => {
    const [nome, setNome] = useState<string[]>([]);
    const [telefone, setTelefone] = useState<string[]>([]);
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

  

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const data = new FormData();
           
        await api.post('points', data);

        alert('Ponto de coleta criado.');
        history.push('/');
    }

    async function redirectCreatePet() {
        history.push('/create-pet');
    }


    // Renderização da página
    return (
        <div id='page-create-point'>
            <header>

                <Link to='/'>
                    <FiArrowLeft />
                    Voltar para home
                </Link>
            </header>

            <form onSubmit={handleSubmit}>
                <h1>Cadastro de usuários</h1>

                <fieldset>

                    <div className='field'> 
                        <label htmlFor="name"> NOME DO USUÁRIO</label>
                        <input 
                            type="text"
                            name="nome"
                            id="nome"
                            // onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="name"> TELEFONE</label>
                            <input 
                                type="text"
                                name="telefone"
                                id="telefone"
                                // onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="email">EMAIL</label>
                            <input 
                                type="email"
                                name="email"
                                id="email"
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="password"> SENHA</label>
                            <input 
                                type="text"
                                name="senha"
                                id="senha"
                                // onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="name">CONFIRMAR SENHA</label>
                            <input 
                                type="text"
                                name="conf-senha"
                                id="conf-senha"
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className='field'> 
                            <label htmlFor="name">ENDEREÇO</label>
                            <input 
                                type="text"
                                name="endereco"
                                id="endereco"
                                // onChange={}
                            />
                        </div>
                </fieldset>
                
                <div className="Buttons">
                    <button type="button">Cadastrar usuário</button> 
                    <button type="button" onClick={redirectCreatePet}>Cadastrar pet</button> 
                    <button type="button">Quero adotar</button>
                </div>
                
            </form>
        </div>
    );
};

export default CreateUser;