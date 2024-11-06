import React from 'react';
import doctor1 from '../../assets/doc5.png';
import doctor2 from '../../assets/doc6.png';
import doctor3 from '../../assets/doc7.png'; 
import doctor4 from '../../assets/doc8.png'; 
import './doctor.css'
const Doctors = () => {
  console.log("App loaded")
  return (
    <div className='row container-especialidades '>
     <h3 className='fonte-especialidades-titulo text-center text-uppercase mt-3'>Conheça nossas especialidades</h3>
     <div className='col-lg-12 container-especialidades'>
      <div className='container-foto-especialidade'>
      <img className='foto-medico' src={doctor1} alt='foto medico' ></img>
      <p className='fonte-especialidades text-center text-uppercase'>Dra. Carol Vercel</p>
      <p className='fonte-especialidades text-center '>Clínico geral</p>
      </div>
      <div className='container-foto-especialidade'> 
      <img className='foto-medico' src={doctor2} alt='foto medico' ></img>
      <p className='fonte-especialidades text-center text-uppercase'>Dr. Alber Ribeiro</p>
      <p className='fonte-especialidades text-center'>Dermatologista</p>
      </div>
      <div className='container-foto-especialidade'>
      <img className='foto-medico' src={doctor3} alt='foto medico' ></img>
      <p className='fonte-especialidades text-center text-uppercase'>Dr. Gustavo Silva</p>
      <p className='fonte-especialidades text-center'>Nutrólogo</p>
      </div>
      <div className='container-foto-especialidade'>
      <img className='foto-medico' src={doctor4} alt='foto medico' ></img>
      <p className='fonte-especialidades text-center text-uppercase'>Dr. Víctor Sena</p>
      <p className='fonte-especialidades text-center'>Cardiologista</p>
      </div>
     </div>

    </div>
  )
}

export default Doctors;
