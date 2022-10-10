import React from "react";
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './processos.css';


function Processos() {
    return (
        <div>
            <Header />
            <div className="tabelaProcessos">
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>CPF</th>
                            <th>RG</th>
                            <th>Cidade</th>
                            <th>Endereço</th>
                            <th>Nº Processo</th>
                            <th>Situação</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Vinicius</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Canoas</td>
                            <td>Jandir Maya Faillace, 74</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Eder</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Alvorada</td>
                            <td>25 de Dezembro, 171</td>
                            <td>00002</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Maiquel</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Canoas</td>
                            <td>Inconfidência, 157</td>
                            <td>00003</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Pedro</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Porto Alegre</td>
                            <td>Sete de setembro, 500</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Maria</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Gravataí</td>
                            <td>José Loureiro da Silva, 150</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Eduarda</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Canoas</td>
                            <td>Uruguai, 1084</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Carlos</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Canoas</td>
                            <td>25 de maio, 50</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Henrique</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Guaíba</td>
                            <td>Cesar Verdi, 600</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Flávia</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Guaíba</td>
                            <td>Professora Rosa Perachi, 88</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Tamara</td>
                            <td>XXXXXXXXXXX</td>
                            <td>XXXXXXXXXX</td>
                            <td>Tramandaí</td>
                            <td>Tramandaí, 271</td>
                            <td>00001</td>
                            <td>Andamento</td>
                            <td id='botoes_cadastros'>
                                <Button id='btn_cadastros' size='sm' variant="primary" type="submit" href="/processo">Visualizar</Button>
                            </td>
                        </tr>                        
                    </tbody>
                </Table>
            </div>
            <Footer />
        </div>


    );
}

export default Processos;