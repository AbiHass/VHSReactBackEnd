import React from 'react'
import { HomeWrapper } from './HomeStyles'
import About from '../../components/About/About'
import Contact from '../../components/Contact/Contact'
import Categorias from '../../components/Categorias/Categorias'
import Productos from '../../components/Productos/Productos'

const Home = () => {
  return (
    <HomeWrapper>
      <About/>
      <Categorias/>
      <Productos/>
      <Contact/>
    </HomeWrapper>
  )
}

export default Home