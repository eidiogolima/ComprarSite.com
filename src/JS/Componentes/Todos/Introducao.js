import React from 'react';
import Notebook from '../../../assests/img/notebook.png';

const Introducao = () => {
  return (
    <div className="introducao" style={{ backgroundImage: `var(--background-intro)` }}>
      <div className="container-md container-fluid">
        <div className="row py-md-6 py-4 text-center text-md-start align-items-center d-md-flex d-grid">
          <div className="col">
            <h1 className='pb-3'>Invista na sua empresa. Compre um site! </h1>
            <p className='pb-3'>
              Eleve seu negócio para outro nível, entre em contato para nos
              contar o que você precisa e confira nossos melhores preços!
            </p>
            <button className="btn cor-b-1 cor-p1 fw-bold  ">Entrar em contato</button>
          </div>
          <div className='col'>
            <img width='100%' src={Notebook} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introducao;
