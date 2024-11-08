import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './middlecta.css';
import foto1 from '../../assets/doc6.png'


const MiddleCta = () => {
  console.log("App loaded")
  return (
    <div >
        <div className='row mt-3 container-cta'>
            <div className='col-lg-6 container-especialidade '>
              <h2 className='titulo-secao-especialidades'>Encontre a especialidade certa para você</h2>
              <ul>
                <li className='text-white fonte'>Estamos aqui para ouvir e cuidar dos seus problemas de saúde</li>
                <li className='text-white fonte'>Não é apenas sobre o dinheiro</li>
                <li className='text-white fonte'>Mais do que apenas tratar pacientes</li>
              </ul>
              <button className=' btn btn-success text-white fonte lupa'> <i  className=" lupa bi bi-search"></i>Veja a clínica mais próxima</button>
            </div>
            <div className='col-lg-6 container-redes'>
            <img className='foto-middle-cta' src={foto1} alt='foto medico'></img>
            <div className='container-icones'>
                <h4 className='fonte-icones text-center text-uppercase'>Estamos à um clique de distância</h4>
                <div className='icones'>
                <p><i class="bi bi-whatsapp"></i></p>
                <p><i class="bi bi-instagram"></i></p>
                <p><i class="bi bi-linkedin"></i></p>
                <p><i class="bi bi-geo-alt"></i></p>
                </div>
             
            </div>
            </div>
        </div>
    </div>
  )
}

export default MiddleCta;