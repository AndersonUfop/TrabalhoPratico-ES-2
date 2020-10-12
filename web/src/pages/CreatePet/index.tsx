import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';
import './styles.css';

import logo from '../../assets/logo2.png';

interface User {
    id: string;
    name: string;
}

const CreatePet = () => {
    const [users, setUsers] = useState<User[]>([]);
    

    const [formData, setFormData] = useState({
        name: '',
        specie: '',
        breed: '',
        port: '',
        age: '',
        sex: '',
        city: '',
    });

    const [selectedUser, setSelectedUser] = useState('0');
    const [selectedFile, setSelectedFile] = useState<File>();

    const history = useHistory();

    useEffect(() => {
        api.get('users').then(response => {
            setUsers(response.data);
            console.log(response.data);
        });
    }, []);

    function handleSelectUsers(event: ChangeEvent<HTMLSelectElement>) {
        const user = event.target.value;

        setSelectedUser(user);

        console.log(user);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const { name, specie, breed, port, age, sex, city } = formData;
        const user = selectedUser;

        const data = new FormData();
        
        data.append('name', name);
        data.append('specie', specie);
        data.append('breed', breed);
        data.append('port', port);
        data.append('age', age);
        data.append('sex', sex);
        data.append('city', city);
        data.append('user_id', user);
        
        if (selectedFile) {
            data.append('image', selectedFile)
        }
       

        console.log(data);

        await api.post('pets/create', data);
        
        alert('Pet cadastrado com sucesso.');
        
        history.push('/');
    }


    // Renderização da página
    return (
        <div id='page-create-point'>
            <div className="content">
                <header>
                <img src={logo} alt="Logo" height={64} />
                    <Link to='/'>
                        <FiArrowLeft />
                        Voltar para home
                    </Link>
                </header>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastro de pets</h1>

                    <Dropzone onFileUploaded={setSelectedFile} />

                    <fieldset>
                        <legend>
                            <h2> Dados </h2>
                        </legend>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="name"> NOME DO PET</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="name"> ESPÉCIE</label>
                            <input 
                                type="text"
                                name="specie"
                                id="specie"
                            onChange={handleInputChange}
                            />
                        </div>
                    </div>

                        <div className="field-group">
                            <div className='field'> 
                                <label htmlFor="name"> RAÇA</label>
                                <input 
                                    type="text"
                                    name="breed"
                                    id="breed"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='field'> 
                                <label htmlFor="name">PORTE</label>
                                <input 
                                    type="text"
                                    name="port"
                                    id="port"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="field-group">
                            <div className='field'> 
                                <label htmlFor="name"> IDADE</label>
                                <input 
                                    type="text"
                                    name="age"
                                    id="age"
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className='field'> 
                                <label htmlFor="name">SEXO</label>
                                <input 
                                    type="text"
                                    name="sex"
                                    id="sex"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className='field'> 
                                <label htmlFor="name">CIDADE</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="city"
                                    onChange={handleInputChange}
                                />
                            </div>

                        <div className="field">
                            <label htmlFor="user">Nome do usuário</label>
                            <select 
                                name="user_id" 
                                id="user_id"
                                value={selectedUser}
                                onChange={handleSelectUsers}
                            >
                            
                            <option value="0">Selecione o usuário</option>
                                {users.map(user => (
                                    <option key={user.id} value={user.id}>{user.name}</option>
                                ))}

                            </select>
                        </div>

                        
                    </fieldset>
                    
                    <div className="Buttons">
                        <button type="submit">Cadastrar pet</button> 
                        <button type="button">Quero adotar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default CreatePet;