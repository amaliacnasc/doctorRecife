import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Button} from 'react-bootstrap';
import headerImg from '../../assets/header_img.png';

import './home.css'

const Home = () => {
  console.log("App loaded")
  return (
    <div  id="about" >
        <div className='row mt-3'>
            <div className='col-lg-6 container-texto'>
              <h1 className='text-uppercase fonte-verde'>Sua saúde é nossa prioridade</h1>
              <p className='fonte'>Encontre o especialista ideal para cuidar da sua saúde! Com nosso sistema, você pode buscar por doutores de diferentes especialidades e agendar consultas de forma prática e rápida. Conecte-se com profissionais de confiança e facilite seu cuidado com a saúde!</p>
              <Button className='fonte btn-success text-uppercase tamanho-botao'>Conheça nossos serviços</Button>
            </div>
            <div className='col-lg-6'>
              <img className='foto-header' src={headerImg} alt='foto medicos '></img>
            </div>
        </div>
    </div>
  )
}

export default Home;