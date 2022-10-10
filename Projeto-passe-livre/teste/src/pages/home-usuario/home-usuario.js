import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo_faders from '../../img/logo_faders.png';
import Footer from '../../components/Footer';
import './home-usuario.css';
function Home_usuario() {
    return (
        <div className="home-usuario">
            <div>
                <div className='logoHome-usuario'>
                    <img src={Logo_faders} />
                </div>
                <br />
                <div className="botoesUsuario">
                    <Button className="btn" variant="primary" type="submit" size="lg">Novo Processo</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Visualizar Processo</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Visualizar Carteira</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Renovar Carteira</Button>
                    <br />
                    <Button className="btn" variant="primary" type="submit" size="lg">Sugestões</Button>
                    <br />
                    <Button className="btn" variant="danger" type="submit" size="lg">Sair</Button>
                </div>
            </div>
            <div className="footerUsuario">
                <Footer />
            </div>
        </div>
    );
}

export default Home_usuario;