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
        breed: '',
        age: '',
        city: '',
    });

    const [selectedUser, setSelectedUser] = useState('0');
    const [selectedFile, setSelectedFile] = useState<File>();
    const [selectedSpecie, setSelectedSpecie] = useState('0');
    const [selectedPort, setSelectedPort] = useState('0');
    const [selectedSex, setSelectedSex] = useState('0');

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

    function handleSelectSpecies(event: ChangeEvent<HTMLSelectElement>) {
        const specie = event.target.value;
        setSelectedSpecie(specie);
        console.log(specie);
    }

    function handleSelectPort(event: ChangeEvent<HTMLSelectElement>) {
        const port = event.target.value;
        setSelectedPort(port);
        console.log(port);
    }

    function handleSelectSex(event: ChangeEvent<HTMLSelectElement>) {
        const sex = event.target.value;
        setSelectedSex(sex);
        console.log(sex);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    }


    async function handleSubmit(event: FormEvent) {
        event.preventDefault();
        const { name, breed, age, city } = formData;
        const user = selectedUser;
        const specie = selectedSpecie;
        const port = selectedPort;
        const sex = selectedSex;

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
                                placeholder="Digite o nome do animal"
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="especie"> ESPÉCIE</label>
                            <select
                                    name="specie"
                                    id="specie"
                                    value={selectedSpecie}
                                    onChange={handleSelectSpecies}
                                >
                                <option value="0">Selecione uma espécie</option>
                                <option value="Cachorro">Cachorro</option>
                                <option value="Gato">Gato</option>
                                </select>
                        </div>
                    </div>

                        <div className="field-group">
                            <div className='field'> 
                                <label htmlFor="raca"> RAÇA</label>
                                <input 
                                    type="text"
                                    name="breed"
                                    id="breed"
                                    placeholder="Digite a raça do animal"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='field'> 
                                <label htmlFor="porte">PORTE</label>
                                <select
                                    name="port"
                                    id="port"
                                    value={selectedPort}
                                    onChange={handleSelectPort}
                                >
                                <option value="0">Selecione o porte do animal</option>
                                <option value="Pequeno">Pequeno</option>
                                <option value="Médio">Médio</option>
                                <option value="Grande">Grande</option>
                                </select>
                            </div>
                        </div>

                        <div className="field-group">
                            <div className='field'> 
                                <label htmlFor="name"> IDADE</label>
                                <input 
                                    type="number"
                                    name="age"
                                    id="age"
                                    placeholder="Digite a cidade"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className='field'> 
                                <label htmlFor="name">SEXO</label>
                                <select
                                    name="sexo"
                                    id="sexo"
                                    value={selectedSex}
                                    onChange={handleSelectSex}
                                >
                                <option value="0">Selecione o sexo</option>
                                <option value="Macho">Macho</option>
                                <option value="Fêmea">Fêmea</option>
                                </select>
                            </div>
                        </div>

                        <div className='field'> 
                                <label htmlFor="name">CIDADE</label>
                                <input 
                                    type="text"
                                    name="city"
                                    id="city"
                                    placeholder="Digite a sua cidade"
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                        <div className="field">
                            <label htmlFor="user">Nome do usuário</label>
                            <select
                                className="user" 
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
                        <Link to="/dashboard"> 
                            <button type="button">Quero adotar</button>
                        </Link>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default CreatePet;