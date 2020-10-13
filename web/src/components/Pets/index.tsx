import React from 'react';

import './styles.css';

import Dog from '../../assets/dog.jpeg';

const Pets: React.FC = () => {

return (
  <div id="Container">
    <header>
      <img src={Dog} alt="" />
    </header>
    <section className="body">
      <h2>Nome do Pet</h2>
      <p>Descricao do pet</p>
    </section>

    <section className="footer">
      

     
    </section>
  </div>
);
};

export default Pets;