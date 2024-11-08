
import 'bootstrap-icons/font/bootstrap-icons.css';
import './about.css'
import doctor6 from '../../assets/about_image.png'

function About() {
  return (
    <div   id="home" className='row container-sobre'>
      <div className='col-lg-6 container-foto'>
        <img className='foto-sobre' src={doctor6} alt='foto medico sobre'></img>
      </div>
      <div className='col-lg-6 '>
        <h2 className='titulo-secao'>Doctor Recife </h2>
        <p className='fonte-sobre text-justify'>Bem-vindo à Doctor Recife, sua clínica de saúde de confiança na cidade de Recife. Nossa missão é oferecer atendimento médico de qualidade, acessível e humanizado, com uma equipe dedicada e especializada em diferentes áreas da saúde. </p>
        <dl>
          <dt className='fonte-sobre'>Equipe de Especialistas</dt>
          <dd className='fonte-sobre'>Contamos com profissionais altamente qualificados e em constante atualização.</dd>

          <dt className='fonte-sobre'>Atendimento Humanizado</dt>
          <dd className='fonte-sobre'>Valorizamos cada paciente, oferecendo escuta ativa e atenção em cada consulta.</dd>

          <dt className='fonte-sobre'>Estrutura Moderna</dt>
          <dd className='fonte-sobre'>Nossas instalações são pensadas para proporcionar conforto e praticidade.</dd>

          <dt className='fonte-sobre'>Facilidade de Agendamento</dt>
          <dd className='fonte-sobre'>Agende sua consulta de forma rápida e segura, online ou por telefone.</dd>
        </dl>
        <button className='btn btn-secondary '><i className="bi bi-whatsapp"></i>  Quero marcar minha consulta</button>
      </div>
    </div>

  );
}

export default About;
