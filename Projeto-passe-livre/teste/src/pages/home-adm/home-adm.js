import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_faders from '../../img/logo_faders.png';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './home-adm.css';


function Home_adm() {
    return (
        <div>
            <Header />
            <div className="home-adm">
                <div>
                    <div className='logoHome-adm'>
                        <img src={Logo_faders} />
                    </div>
                    <br />
                    <div className="botoesAdm">
                        <Button className="btn" variant="primary" type="submit" size="lg">Cadastrar</Button>
                        <br />
                        <Button className="btn" variant="primary" type="submit" size="lg">Visualizar Cadastros</Button>
                        <br />
                        <Button className="btn" variant="primary" type="submit" size="lg">Novo Processo</Button>
                        <br />
                        <Button className="btn" variant="primary" type="submit" size="lg">Visualizar Processos</Button>
                        <br />
                        <Button className="btn" variant="primary" type="submit" size="lg">Sugestões</Button>
                        <br />
                        <Button className="btn" variant="danger" type="submit" size="lg">Sair</Button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home_adm;