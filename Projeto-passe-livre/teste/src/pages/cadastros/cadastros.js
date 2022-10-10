import React from "react";
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function Cadastros() {
    return (
        <div>
            <Header />
            <div className="tabelaProcessos">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Organização</th>
                            <th>Classe</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vinicius Carvalho</td>
                            <td>vinicius.pawcar@gmail.com</td>
                            <td>04179731010</td>
                            <td>6118706362</td>
                            <td>FADERS</td>
                            <td>Administrador</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' variant="primary" type="submit" href="/cadastro">Visualizar</Button>
                                <Button id='btn_cadastros' variant="danger" type="submit">Apagar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Carmen Lucia</td>
                            <td>carmen.lucia@gmail.com</td>
                            <td>04179731999</td>
                            <td>9998706362</td>
                            <td>CRAS_PRESLUCENA</td>
                            <td>S. Público</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' variant="primary" type="submit" href="/cadastro">Visualizar</Button>
                                <Button id='btn_cadastros' variant="danger" type="submit">Apagar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Eder Matos</td>
                            <td>eder.matos@gmail.com</td>
                            <td>04179731777</td>
                            <td>7778706362</td>
                            <td>CRAS_ALVORADA</td>
                            <td>Usuário</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' variant="primary" type="submit" href="/cadastro">Visualizar</Button>
                                <Button id='btn_cadastros' variant="danger" type="submit">Apagar</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>


    );
}

export default Cadastros;