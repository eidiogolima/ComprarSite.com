import React from 'react'
import Logo from '../../../assests/public/logo.svg'
import Icon from '../../../assests/icons/esfera-header.svg'
const Header = () => {
  return (
    <header className='cor-b-1 shadow py-2'>
      <nav className="navbar navbar-expand-md bg-light d-flex container-md-fluid container-lg p-2 justify-content-between">
        <a href="/">
          <img style={{"width": '200px'}} src={Logo} alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          id="navbarSupportedContent"
          className="collapse navbar-collapse flex-grow-0"
        >
          <ul className="d-flex navbar-nav align-item-center">
         
            

            <li className="nav-item">
              <a className="nav-link fw-semibold cor-11" href="/">
                Trabalhos
              </a>
            </li>

            <div className='d-none d-md-flex mx-2'>
              <img src={Icon} alt="" />
            </div>

            <li className="nav-item fw-semibold ">
              <a className="nav-link cor-11" href="/">
                Duvidas Frequentes
              </a>
            </li>

            <div className='d-md-flex mx-2 me-3 d-none'>
              <img width = {""} src={Icon} alt="" />
            </div>

            <li className="nav-item shadow-sm">
              <a className="nav-link btn btn-primary  text-white fw-semibold "target="_blank"rel="noreferrer noopener" href="https://wa.me/5511915647291">
                SOLICITAR ORÇAMENTO
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header