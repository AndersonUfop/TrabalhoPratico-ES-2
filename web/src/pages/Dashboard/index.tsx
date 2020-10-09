import React from 'react';
import { Link} from 'react-router-dom';



import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

const Dashboard: React.FC = () => {

  return (
    <div id="dashboard">
      <header>
        <Link to='/'>
            <FiArrowLeft />
            Voltar para home
          </Link>
        </header>
    </div>


    
  );
};

export default Dashboard;
