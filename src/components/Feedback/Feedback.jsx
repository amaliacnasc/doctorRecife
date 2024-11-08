import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import mulher from '../../assets/woman.jpg'
import homem from '../../assets/man.jpg';

import './feedback.css'

const ClientFeedback = () => {
  
  return (
    <div   id="feedback">
        <div className='row mt-3'>
            <h2 className='titulo-secao '>O que nossos pacientes estão falando?</h2>
            <div className='col-lg-5'>
                <div className='container-feedback'>
                    <div className='container-foto-feedback'>
                        <img className='foto-feedback' alt='foto mulher sorrindo' src={mulher}></img>
                    </div>
                    <div className='container-texto-feedback'>
                        <h4>Patrícia Ribeiro</h4>
                        <div className='estrelas'>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        </div>
                        <p className='depoimento'>
                        Eu não posso deixar de elogiar a equipe, tanto médica quanto administrativa, pela maneira profissional, atenciosa e gentil com que fui tratado. Todos foram pacientes e tranquilizadores, e mais do que dispostos a responder a todas as minhas perguntas. Nada foi incômodo demais. O hospital estava impecavelmente limpo, e a atenção aos detalhes foi excelente; eu não poderia ter pedido mais. Já recomendei este hospital a amigos e familiares
                        </p>
                    </div>
                </div>
            </div>
            <div className='col-lg-6'>
                <div className='container-feedback'>
                    <div className='container-foto-feedback '>
                        <img className='foto-feedback' alt='foto mulher sorrindo' src={homem}></img>
                    </div>
                    <div className='container-texto-feedback'>
                        <h4>Patrícia Ribeiro</h4>
                        <div className='estrelas'>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        <i className="bi bi-star-fill estrela"></i>
                        </div>
                        <p className='depoimento'>
                        Desde o momento em que entrei no doctor recife, fui recebido com tanta gentileza e atenção que me senti imediatamente seguro e acolhido. A equipe, tanto médica quanto administrativa, foi extremamente profissional e cuidadosa em cada etapa do meu tratamento. Responderam todas as minhas dúvidas com paciência e sempre demonstraram preocupação genuína com o meu bem-estar. O ambiente era incrivelmente limpo e organizado, o que trouxe ainda mais tranquilidade durante minha estadia. Recomendo  a todos que procuram um atendimento de alta qualidade e humanizado
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientFeedback;