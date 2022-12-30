import React from 'react';
import SEO from '../../../assests/img/seo.png';
import Chave from '../../../assests/img/chave.png';
import Desempenho from '../../../assests/img/desempenho.png';
import Decorador from '../../../assests/icons/decorador.svg';

const Beneficios = () => {
  return (
    <section className="cor-b-p1 py-md-6 py-4">
      <div className="container-md container-fluid ">
        <h1 className='text-center cor-2 '>BENEFICIOS</h1>
        <div className="d-flex mt-4 gap-lg-4 gap-md-3  gap-sm-4 text-center flex-md-nowrap flex-wrap justify-content-center">
          <div className="cor-b-2 p-3 rounded ">
            <img style={{ width: 'auto' }} src={SEO} alt="" />
            <h2>SEO</h2>

            <img style={{ width: 'auto' }} src={Decorador} alt="" />
            <p>
              Pontue bem no google e tenha seu site visto por mais pessoas.
              Assim com mais possibilidades de atingir mais clientes e gerar
              mais resultados
            </p>
          </div>

          <div className="cor-b-2 p-3 rounded">
            <img style={{ width: 'auto' }} src={Chave} alt="" />
            <h2>Palavra-chave</h2>

            <img style={{ width: 'auto' }} src={Decorador} alt="" />
            <p>
            Utilizamos de palavra-chave para seu site ter maior desempenho nas buscar do seu seguimento. Com isso trazendo mais tráfego sem pagar nada a mais.
            </p>
          </div>

          <div className="cor-b-2 p-3 rounded">
            <img style={{ width: 'auto' }} src={Desempenho} alt="" />
            <h2>Desempenho</h2>

            <img style={{ width: 'auto' }} src={Decorador} alt="" />
            <p>
            Ninguém gosta de esperar e para suprir essa dificuldade que muitos sites possuem que é a falta de velocidade trabalhamos bastante para maior ter desempenho.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
