import React from 'react';

const Contato = () => {
  return (
    <section className="cor-b-1 " id = "contato">
      <div className="container-md  container-fluid position-relative z-2 py-md-6 py-4">
        <h1 className='cor-p1 text-center mb-4 fw-semibold'>ENTRE EM CONTATO</h1>
        <div className="row d-grid d-md-flex align-items-center cor-b-1 shadow rounded p-2 p-md-5 py-4 mx-2 mx-sm-0">
          <div className="col ">
            <h1 className='cor-p1 mb-4'>Gostou ? entre em contato!</h1>
            <h2 className='cor-8 mb-3'>Não peca essa oportunidade de comprar seu site! </h2>
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
            <form action="https://comprarsite.us21.list-manage.com/subscribe/post?u=577fb9a22cb885d30649bdf30&amp;id=f4da60481f&amp;f_id=009ad7e1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" noValidate className="p-3 p-md-4 cor-b-p1 cor-2 shadow rounded">
              <div class="mb-3 ">
                <div className="row d-grid d-sm-flex">
                  <div className="col">
                    <label htmlFor="nome" className="form-label">
                      Nome
                    </label>
                    <input
                    required={true}
                    name="FNAME"
                      id="nome"
                      type="text"
                      className="form-control"
                      aria-describedby="nome"
                    />
                  </div>

                  <div className="col mt-2 mt-sm-0 ">
                    <label htmlFor="sobrenome" className="form-label">

                      Sobrenome
                    </label>
                    <input

                    required={true}
                    name="LNAME"
                      id="sobrenome"
                      type="text"
                      className="form-control"
                      aria-describedby="sobrenome"
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                    required={true}
                    name="EMAIL"
                    id="email"
                    placeholder='exemplo@email.com'
                      type="text"
                      className="form-control"
                      aria-describedby="email"
                    />
                    
                  </div>

                  <div className="mt-3">
                    <label htmlFor="contato" className="form-label">
                      Telefone/Celular
                    </label>
                    <input
                    required={true}
                    name="PHONE"
                      id="contato"
                      placeholder='(11) 9999-99999'
                      type="text"
                      className="form-control"
                      aria-describedby="contato"
                    />
                  </div>

                  <div className="mt-3">
                    <label htmlFor="mensagem" className="form-label">
                      Assunto
                    </label>
                    <textarea
                    name="ASSUNTO"
                    placeholder='Conte-nos, o que você precisa?'
                    rows="5"
                    required={true}
                      type="text"
                      className="form-control"
                      id="mensagem"
                      aria-describedby="mensagem"
                    />
                  </div>

                  
                </div>
              </div>

              {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
              <div className='mb-3'>
                <span className='fw-semibold cor-3'>Respostas em menos de 2 horas </span>
              </div>
              <button type="submit" className="btn btn-primary fw-semibold">
                ENVIAR
              </button>
              <div style={{'position': 'absolute', 'left': '-5000px'}} aria-hidden="true"><input type="text" name="b_7be0dd65ca351019069992978_0a9348f331" tabIndex="-1"/></div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
