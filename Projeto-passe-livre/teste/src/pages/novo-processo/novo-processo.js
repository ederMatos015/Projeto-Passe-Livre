import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Novo_processo() {
    return (
        <div>
            <Header />
            <div className="formularioNovoProcesso">
                <h3>1 - REQUERIMENTO E SITUAÇÃO SOCIOECONOMICA</h3>
                <br />
                <Form>
                    <Form.Label>Nome do beneficiário</Form.Label>
                    <Form.Control type="text" placeholder="Nome" />
                    <Form.Label>Data de nascimento</Form.Label>
                    <Form.Control type="text" placeholder="Data" />
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control type="text" placeholder="Masculino / Feminino" />
                    <Form.Label>Nome do Pai</Form.Label>
                    <Form.Control type="text" placeholder="Nome do Pai" />
                    <Form.Label>Nome da Mãe</Form.Label>
                    <Form.Control type="text" placeholder="Nome do Mãe" />
                    <Form.Label>Identidade - RG</Form.Label>
                    <Form.Control type="text" placeholder="RG" />
                    <Form.Label>Identidade - CPF</Form.Label>
                    <Form.Control type="text" placeholder="CPF" />
                    <Form.Label>Emissão</Form.Label>
                    <Form.Control type="text" placeholder="Emissão" />
                    <Form.Label>Órgão</Form.Label>
                    <Form.Control type="text" placeholder="Órgão" />
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" placeholder="UF" />
                    <Form.Label>Endereço</Form.Label>
                    <Form.Control type="text" placeholder="Endereço" />
                    <Form.Label>Cidade</Form.Label>
                    <Form.Control type="text" placeholder="Cidade" />
                    <Form.Label>Bairro</Form.Label>
                    <Form.Control type="text" placeholder="Bairro" />
                    <Form.Label>CEP</Form.Label>
                    <Form.Control type="text" placeholder="CEP" />
                    <Form.Label>UF</Form.Label>
                    <Form.Control type="text" placeholder="UF" />
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text" placeholder="Telefone" />
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="text" placeholder="E-mail" />
                    <Form.Label>Renda familiar bruta</Form.Label>
                    <Form.Control type="text" placeholder="R$ 0.000,00" />
                    <h3>2 - ANEXAR ARQUIVOS DE PROCESSO</h3>
                    <br />
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Foto 3x4</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Atestado médico de deficiência permanente</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Comprovantes de renda de grupo familiar</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Carteira de identidade / Documento com foto (frente e verso)</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                    <Form.Group controlId="formFile" className="mb-3">
                        <Form.Label>Comprovante de residência</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Form>
                <br />
                <Button href="/novo-processo2" className="enviarProcesso" variant="primary" type="submit">
                    Enviar
                </Button>
            </div>
            <Footer />

        </div >
    );
}

export default Novo_processo;