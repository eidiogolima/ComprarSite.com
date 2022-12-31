import React from 'react'
import Introducao from '../Todos/Introducao.js'
import Parceiros from '../Todos/Parceiros.js'
import Beneficios from '../Todos/Beneficios.js'
import Trabalhos from '../Todos/Trabalhos.js'
import Contato from '../Todos/Contato.js'
import Duvidas from '../Todos/Duvidas.js'
const Home = () => {
  return (
    <div>
      <Introducao/>
      <Parceiros/>
      <Beneficios/>
      <Trabalhos/>
      <Contato/>
      <Duvidas/>
    </div>
  )
}

export default Home