import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Cadastro() {
    return (
        <div className='cadastro'>
            <Form>
                <Form.Label>Nome</Form.Label>
                <Form.Control type="text" placeholder="Nome" />
                <Form.Label>E-mail</Form.Label>
                <Form.Control type="text" placeholder="Data" />
                <Form.Label>CPF</Form.Label>
                <Form.Control type="text" placeholder="CPF" />
                <Form.Label>RG</Form.Label>
                <Form.Control type="text" placeholder="RG" />
                <Form.Label>Organização</Form.Label>
                <Form.Control type="text" placeholder="CRAS..." />
                <Form.Label>Classe</Form.Label>
                <Form.Control type="text" placeholder="Adm/Servidor/Usuário" />
            </Form>
            <Button variant='success' type='submit'>Editar</Button>
        </div>
    );
}

export default Cadastro;
