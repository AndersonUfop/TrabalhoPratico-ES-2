import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

// qnd criar um estado pra array ou objeto: manualmente informar o tipo da variavel
const CreateUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        telephone: '',
        mail: '',
        password: '',
        address: '',
        
    });

    const history = useHistory();

    function handleInputChange(event: ChangeEvent<HTMLInputElement>){
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const {
            name,
            telephone,
            mail,
            password,
            address
        } = formData;

        const data = {
            name,
            telephone,
            mail,
            password,
            address
        };

        console.log(data);

        await api.post('users/create' , data);

       alert('Usuario criado com sucesso!');

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
                            name="name"
                            id="name"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="name"> TELEFONE</label>
                            <input 
                                type="text"
                                name="telephone"
                                id="telephone"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="email">EMAIL</label>
                            <input 
                                type="email"
                                name="mail"
                                id="mail"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="password"> SENHA</label>
                            <input 
                                type="text"
                                name="password"
                                id="password"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="name">CONFIRMAR SENHA</label>
                            <input 
                                type="text"
                                name="conf-senha"
                                id="conf-senha"
                            />
                        </div>
                    </div>

                    <div className='field'> 
                            <label htmlFor="name">ENDEREÇO</label>
                            <input 
                                type="text"
                                name="address"
                                id="address"
                                onChange={handleInputChange}
                            />
                        </div>
                </fieldset>
                <div className="Buttons">
                    <button type="submit">Cadastrar usuário</button> 
                    <button type="button" onClick={redirectCreatePet}>Cadastrar pet</button> 
                    <button type="button">Quero adotar</button>
                </div>
                </form>
        </div>
    );
};

export default CreateUser;