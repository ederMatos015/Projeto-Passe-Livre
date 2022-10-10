import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../../components/Footer';
import './cadastrar.css';


function Cadastrar() {
  return (
    <div className='login' style={{ height: '100vh' }}>
      <br />
      <div id='formBackgroundCadastrar'>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2}>
              Nome:
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder='nome completo' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2}>
              E-mail:
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder='e-mail' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2}>
              RG:
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder='RG' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2}>
              CPF:
            </Form.Label>
            <Col>
              <Form.Control type="text" placeholder='CPF' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2}>
              Senha:
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder='senha' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='formularioCadastrar'>
          <Row>
            <Form.Label column lg={2} id='confirme'>
              Confirme:
            </Form.Label>
            <Col>
              <Form.Control type="password" placeholder='confirme sua senha' size='lg' />
            </Col>
          </Row>
        </div>
        <div className='botao'>
          <h1>
            <Button size='lg' id='btn'>Cadastrar</Button>
          </h1>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default Cadastrar;