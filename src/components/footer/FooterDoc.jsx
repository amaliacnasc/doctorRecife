import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';


import './footer.css'

const FooterDoc = () => {

    return (
        <div >
            <div className='row mt-3 container-footer '>
                <div className='col-lg-3'>  </div>
                <div className='col-lg-5 fonte-footer copywr '>  Todos os direitos reservados  <i className="bi bi-c-circle copy"></i></div>
                <div className='col-lg-3'>
                    <p className='fonte-titulo-footer contato'><i className="bi bi-whatsapp wpp contato"></i>Contato</p>
                    <p className='fonte-titulo-footer'><i className="bi bi-geo-alt loc"></i>Endereço</p>
                    <p className='fonte-footer'>Av. dos Pinheiros, 1234 - Sala 405</p>
                    <p className='fonte-footer'>Bairro Bela Vista</p>
                    <p className='fonte-footer'>Cidade Nova, SP - CEP: 12345-678</p>
                </div>
            </div>
        </div>
    )
}

export default FooterDoc;