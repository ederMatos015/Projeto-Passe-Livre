import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_faders from '../../img/logo_faders.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './home-servidor.css';

function Home_servidor() {
    return (
        <div>
            <Header />
            <div className="esquerda">
                <div className='logoHome-servidor'>
                    <img src={Logo_faders} />
                </div>
            </div>
            <div className="direita">
                <div className="botoes">
                    <Button className="btn" variant="primary" type="submit" size="lg">Novo Processo</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Visualizar Processos</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Sugestões</Button>
                    <br />
                    <Button className="btn" variant="danger" type="submit" size="lg">Sair</Button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home_servidor;