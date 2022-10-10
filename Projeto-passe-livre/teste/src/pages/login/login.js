import React from 'react';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login.css';
import Logo_faders from '../../img/logo_faders.png';
import Footer from '../../components/Footer';


function Login() {
  return (
    <div className='login' style={{ height: '100vh' }}>
      <br />
      <div className='formBackground'>
        <div className='logo'>
          <img src={Logo_faders} />
        </div>
        <div className='formulario'>
          <Row>
            <Form.Label column lg={2}>
              E-mail:
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder='e-mail' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formulario'>
          <Row>
            <Form.Label column lg={2}>
              Senha:
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder='senha' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='botao'>
          <h1>
            <Button size='lg' id='btn'>Acessar</Button>
          </h1>
          <h1>
            <Link to='/cadastrar'><Button size='lg' id='btn2'>Cadastre-se</Button></Link>
          </h1>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Login;