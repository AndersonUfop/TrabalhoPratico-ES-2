import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import Dropzone from '../../components/Dropzone';
import './styles.css';

const CreatePet = () => {
    

    const [selectedItems, setSelectedItems] = useState<number[]>([]);
    const [selectedFile, setSelectedFile] = useState<File>();
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        whatsapp: '',
    });

    const [selectedUf, setSelectedUf] = useState('0');
    const [selectedCity, setSelectedCity] = useState('0');
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0]);

    const history = useHistory();

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const { name, email, whatsapp } = formData;
        const uf = selectedUf;
        const city = selectedCity;
        const [ latitude, longitude ] = selectedPosition;
        const items = selectedItems;

        const data = new FormData();

            data.append('name', name);
            data.append('email', email);
            data.append('whatsapp', whatsapp);
            data.append('uf', uf);
            data.append('city', city);
            data.append('latitude', String(latitude));
            data.append('longitude', String(longitude));
            data.append('items', items.join(','));

            if (selectedFile) {
                data.append('image', selectedFile)
            }

        await api.post('points', data);

        alert('Ponto de coleta criado.');
        history.push('/');
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
                            name="nome"
                            id="nome"
                            // onChange={handleInputChange}
                        />
                    </div>

                    <div className='field'> 
                        <label htmlFor="name"> ESPÉCIE</label>
                        <input 
                            type="text"
                            name="especie"
                            id="especie"
                           // onChange={handleInputChange}
                        />
                    </div>
                </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="name"> RAÇA</label>
                            <input 
                                type="text"
                                name="raca"
                                id="raca"
                                // onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="name">PORTE</label>
                            <input 
                                type="text"
                                name="porte"
                                id="porte"
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className="field-group">
                        <div className='field'> 
                            <label htmlFor="name"> IDADE</label>
                            <input 
                                type="text"
                                name="idade"
                                id="idade"
                                // onChange={handleInputChange}
                            />
                        </div>

                        <div className='field'> 
                            <label htmlFor="name">SEXO</label>
                            <input 
                                type="text"
                                name="sexo"
                                id="sexo"
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <div className='field'> 
                            <label htmlFor="name">CIDADE</label>
                            <input 
                                type="text"
                                name="cidade"
                                id="cidade"
                                // onChange={}
                            />
                        </div>
                </fieldset>
                
                <div className="Buttons">
                    <button type="button">Cadastrar pet</button> 
                    <button type="button">Quero adotar</button>
                </div>
                
            </form>
        </div>
    );
};

export default CreatePet;