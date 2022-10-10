import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Col, Row, FormLabel, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './processo.css';
library.add(fas);



function Processo() {
    return (
        <div className='processo'>
            <Header />
            <div className='esquerdaProcesso'>
                <div className='processoInfo'>
                    <div className='coluna1'>
                        <FormLabel id='label'>Nome do beneficiário:</FormLabel>
                        <FormControl type='text' placeholder='Vinicius Carvalho' size='sm' id='form' />
                        <FormLabel id='label'>Data de nascimento:</FormLabel>
                        <FormControl type='text' placeholder='28/12/1997' size='sm' id='form' />
                        <FormLabel id='label'>Sexo:</FormLabel>
                        <FormControl type='text' placeholder='Masculino' size='sm' id='form' />
                        <FormLabel id='label'>Nome do pai:</FormLabel>
                        <FormControl type='text' placeholder='Vilmar' size='sm' id='form' />
                        <FormLabel id='label'>Nome da mãe:</FormLabel>
                        <FormControl type='text' placeholder='Flavia' size='sm' id='form' />
                        <FormLabel id='label'>CPF:</FormLabel>
                        <FormControl type='text' placeholder='04179731010' size='sm' id='form' />
                    </div>
                    <div className='coluna2'>
                        <FormLabel id='label'>RG:</FormLabel>
                        <FormControl type='text' placeholder='6118706362' size='sm' id='form' />
                        <FormLabel id='label'>Emissão:</FormLabel>
                        <FormControl type='text' placeholder='Abcdefgh' size='sm' id='form' />
                        <FormLabel id='label'>Órgão:</FormLabel>
                        <FormControl type='text' placeholder='Abcdefgh' size='sm' id='form' />
                        <FormLabel id='label'>UF:</FormLabel>
                        <FormControl type='text' placeholder='Rio Grande do Sul' size='sm' id='form' />
                        <FormLabel id='label'>Endereço:</FormLabel>
                        <FormControl type='text' placeholder='Jandir Maya Faillace, 74' size='sm' id='form' />
                        <FormLabel id='label'>Cidade:</FormLabel>
                        <FormControl type='text' placeholder='Canoas' size='sm' id='form' />
                    </div>
                    <div className='coluna3'>
                        <FormLabel id='label'>Bairro:</FormLabel>
                        <FormControl type='text' placeholder='São José' size='sm' id='form' />
                        <FormLabel id='label'>CEP:</FormLabel>
                        <FormControl type='text' placeholder='92425160' size='sm' id='form' />
                        <FormLabel id='label'>UF:</FormLabel>
                        <FormControl type='text' placeholder='Abcdefgh' size='sm' id='form' />
                        <FormLabel id='label'>Telefone:</FormLabel>
                        <FormControl type='text' placeholder='51 99916-5016' size='sm' id='form' />
                        <FormLabel id='label'>E-mail:</FormLabel>
                        <FormControl type='text' placeholder='estagiario-2@outlook.com' size='sm' id='form' />
                        <FormLabel id='label'>Renda familiar bruta:</FormLabel>
                        <FormControl type='text' placeholder='R$ 3.200,00' size='sm' id='form' />
                    </div>
                </div>
            </div>
            <div className='direitaProcesso'>
                <div className='documentos'>
                    <FontAwesomeIcon icon="fa-camera" size="5x" id='icone' />
                    <FontAwesomeIcon icon="fa-file-medical" size="5x" id='icone' />
                    <FontAwesomeIcon icon="fa-file-invoice-dollar" size="5x" id='icone' />
                    <br />
                    <FontAwesomeIcon icon="fa-id-card" size="5x" id='icone' />
                    <FontAwesomeIcon icon="fa-house" size="5x" id='icone' />
                </div>
                <div id='situacao'>
                    <h2>Situação:</h2>
                    <h3 id='status'>Em andamento</h3>
                </div>
                <div className='definir'>
                    <Button id='btnDefinir' variant="success">Aprovar</Button>
                    <Button id='btnDefinir' variant="primary">Reenviar documento</Button>
                    <Button id='btnDefinir' variant="danger">Reprovar</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Processo;
