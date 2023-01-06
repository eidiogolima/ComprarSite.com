import React from 'react'
import Introducao from '../Todos/Introducao.js'
import Parceiros from '../Todos/Parceiros.js'
import Beneficios from '../Todos/Beneficios.js'
import Trabalhos from '../Todos/Trabalhos.js'

import Duvidas from '../Todos/Duvidas.js'
import Head from '../Global/Head.js'
const Home = () => {
  return (
    <div>
      
      <Head title = 'Home | Comprar Site' description = 'Comprar site um site bom nunca foi tão fácil entre em contato a nossa equipe e tenha seu orçamento em menos de minutos por um de nossos (desenvolvedor) web, programador de site, desenvolvedor de site, web design qualificado. Suporte 24 h, atendimento de qualidade e prioridade para o cliente.'/>
      <Introducao/>
      <Parceiros/>
      <Beneficios/>
      <Trabalhos/>

      <Duvidas/>
    </div>
  )
}

export default Home