import React, { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';

import logo from '../../assets/logo2.png';

import dog from '../../assets/dog.jpeg';


import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import api from '../../services/api';

interface Pet {
  id: string;
  image_url: string;
  name: string;
  breed: string;
  port: string;
  age: string;
  user_id: string;
}

interface User {
  id: string;
  name: string;
  telephone: string;
  mail: string;
}

const Dashboard: React.FC = () => {
  const [pets, setPets] = useState<Pet[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  

  useEffect(() => {
    api.get('pets').then(response => {
      setPets(response.data);
      /* console.log(response.data);  */
    });

    api.get('users').then(response => {
      setUsers(response.data);
     /*  console.log(response.data);  */
    })
  }, []);


  return (
    <div id="dashboard">
      <div className="content">
        <header>
          <img src={logo} alt="Logo" height={64} />
          <Link to='/'>
              <FiArrowLeft />
              Voltar para home
            </Link>
          </header>

            <div className="Titulo">
              <h1>Quero Adotar</h1>
            </div>

            <ul className="itens">
                {pets.map(pet => (
                
              <li key={pet.id} 
                  className="pet">
                <img className="animal" src={pet.image_url}/>
                <h1>{pet.name}</h1>
                <strong id="raca">{pet.breed}</strong><br></br>
                <strong id="porte">{pet.port}</strong><br></br>
                <strong id="idade">{pet.age} ANOS</strong>
                <div className="rodape">
                  <button id="detalhes">Mais detalhes</button>
                </div>
            </li>

            ))}

              
            </ul>
        </div>
    </div>


    
  );
};

export default Dashboard;
