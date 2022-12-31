import React from 'react';

const Contato = () => {
  return (
    <section className="cor-b-1 ">
      <div className="container-md  container-fluid position-relative z-2 py-md-6 py-4">
        <h1 className='cor-p1 text-center mb-4 fw-semibold'>ENTRE EM CONTATO</h1>
        <div className="row d-grid d-md-flex align-items-center cor-b-1 shadow rounded p-2 p-md-5 py-4 mx-2 mx-sm-0">
          <div className="col ">
            <h1 className='cor-p1 mb-4'>Gostou ? entre em contato!</h1>
            <h3 className='cor-8 mb-3'>Não peca essa oportunidade </h3>
            <p className='cor-8 fw-semibold mb-4'>
              Seu negócio pode crescer ainda mais não peca essa oportunidade de
              comprar um site para aumentar suas vendas consideravelmente.{' '}
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <div className="list">
                <h3 className='fw-semibold cor-10'>20+</h3>
                <p className='cor-7 fw-semibold'>Reformas</p>
              </div>
              <div className="list">
                <h3 className='fw-semibold cor-10'>50+</h3>
                <p className='cor-7 fw-semibold'>Reformas</p>
              </div>
              <div className="list">
                <h3 className='fw-semibold cor-10'>100+</h3>
                <p className='cor-7 fw-semibold'>Clientes</p>
              </div>
            </div>
          </div>

          <div className="col">
            <form className="p-3 p-md-4 cor-b-p1 cor-2 shadow rounded">
              <div class="mb-3 ">
                <div className="row d-grid d-sm-flex">
                  <div className="col">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nome"
                      aria-describedby="nome"
                    />
                  </div>

                  <div className="col ">
                    <label htmlFor="sobrenome" className="form-label">
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="sobrenome"
                      aria-describedby="sobrenome"
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                    placeholder='exemplo@email.com'
                      type="text"
                      className="form-control"
                      id="email"
                      aria-describedby="email"
                    />
                    
                  </div>

                  <div className="mt-3">
                    <label htmlFor="contato" className="form-label">
                      Telefone/Celular
                    </label>
                    <input
                      placeholder='(11) 9999-99999'
                      type="text"
                      className="form-control"
                      id="contato"
                      aria-describedby="contato"
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="contato" className="form-label">
                      Assunto
                    </label>
                    <textarea
                    placeholder='Conte-nos, o que você precisa?'
                    rows="5"
                      type="text"
                      className="form-control"
                      id="contato"
                      aria-describedby="contato"
                    />
                  </div>

                  
                </div>
              </div>

              <button type="submit" className="btn btn-primary fw-semibold">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
