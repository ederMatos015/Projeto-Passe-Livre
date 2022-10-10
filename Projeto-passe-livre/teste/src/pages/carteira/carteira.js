import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./carteira.css";
import Foto3x4 from "../../img/foto_3x4.jpeg";
import Logofaders from "../../img/logo_faders.png";
import Brasao from "../../img/brasao_gov.jpeg";


function Carteira() {
    const [flip, setFlip] = useState(false);
    return (
        <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
            <div className="body_carteira">
                <button className="botao_flip" onClick={() => setFlip(!flip)}>
                    <div class="card_face--front">
                        <div>
                            <img src={Foto3x4} alt="foto" className="foto_3x4" />
                            <img src={Logofaders} alt="LOGO" className="logo_faders" />
                            <img src={Brasao} alt="BRASÃO" className="brasao_gov" />
                        </div>
                        <div className="dados_frente">
                            <div className="descricao_governo">GOVERNO DO ESTADO DO RIO GRANDE DO SUL
                                <p className="p1">FUNDAÇÃO DE ARTICULAÇÃO E DESENVOLVIMENTO DE POLÍTICAS PÚBLICAS PARA PESSOAS COM DEFICIÊNCIA E PESSOAS COM ALTAS HABILIDADES NO RS</p>
                                <p className="p2">CARTEIRA DE IDENTIFICAÇÃO PARA PESSOAS COM DEFICIÊNCIA</p>
                            </div>
                            <div className="nome_usuario">Nome:</div>
                            <div className="tipo_sanguineo">Tipo sanguíneo:</div>
                            <div className="rg">RG:</div>
                            <div className="data_nascimento">Data de nascimento:</div>
                            <div className="local_nascimento">Local de nascimento:</div>
                            <div className="filiacao">Filiação:</div>
                            <div className="endereco_residencial">Endereço residencial:</div>
                        </div>
                    </div>
                </button>
            </div>
            <div className="body_carteira">
                <button className="botao_flip" onClick={() => setFlip(!flip)}>
                    <div className="card__face">
                        <img src="https://api.qrserver.com/v1/create-qr-code/?data=https://curious-halva-771b6c.netlify.app/&size=50x50" alt="QR CODE" className="qr_code" />
                        <div className="dados_verso">
                            <div className="responsaveis_legais">Reponsáveis legais</div>
                            <div className="nome_responsavel_1">Nome:</div>
                            <div className="rg_responsavel_1">RG:</div>
                            <div className="contato">Contato:</div>
                            <div className="nome_responsavel_2">Nome:</div>
                            <div className="rg_responsavel_2">RG:</div>
                            <div className="contato_2">Contato:</div>
                            <div className="orgao_expedidor">Orgão expedidor:  FADERS  Acessibilidade e Inclusão</div>
                            <div className="data_emissao">DATA DE EMISSÃO: 25/08/2022</div>
                            <div className="data_validade">DATA DE VALIDADE: 30/12/2027</div>
                            <div className="descricao_vertical">VÁLIDA EM TODO TERRITÓRIO ESTADUAL</div>
                            <div className="lei_federal">DE ACORDO COM A LEI FEDERAL 13.977 DE 8 DE JANEIRO DE 2020</div>
                            <div className="lei_federal_2">E O DECRETO ESTADUAL N° 55.995 DE 14 DE JULHO DE 2021.</div>
                        </div>
                    </div>
                </button>
            </div>
        </ReactCardFlip>
    );
}

export default Carteira;