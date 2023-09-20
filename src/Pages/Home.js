import React from "react";
import { Link } from "react-router-dom";

import chapeuAmarelo from '../Pages/Products/imgProducts/chapeuAmarelo.png'
import chapeuAzul from '../Pages/Products/imgProducts/chapeuAzul.png'
import chapeuCiano from '../Pages/Products/imgProducts/chapeuCiano.png'
import chapeuLaranja from '../Pages/Products/imgProducts/chapeuLaranja.png'
import chapeuRosa from '../Pages/Products/imgProducts/chapeuRosa.png'
import chapeuVerde from '../Pages/Products/imgProducts/chapeuVerde.png'
import chapeuVermelho from '../Pages/Products/imgProducts/chapeuVermelho.png'

import mochilaAmarela from '../Pages/Products/imgProducts/mochilaAmarela.png'
import mochilaAzul from '../Pages/Products/imgProducts/mochilaAzul.png'
import mochilaRoxa from '../Pages/Products/imgProducts/mochilaRoxa.png'
import mochilaVerde from '../Pages/Products/imgProducts/mochilaVerde.png'
import mochilaVermelha from '../Pages/Products/imgProducts/mochilaVermelha.png'


function Home() {

    return (

        <main className="sMain">

            <div className="row">

                <div className="cardProduct" >

                    <img src={chapeuAmarelo} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Amarelo - Compreensão Universal </h5>
                        <p className="cardProduct-text"> Quem o coloca pode entender e falar qualquer... </p>
                        <h4 className="cardProduct-text"> R$95,50 </h4>
                        <Link to="/Product6" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuAzul} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Azul - Controlar o Clima </h5>
                        <p className="cardProduct-text"> Quem o usa pode mudar as condições climáticas ao seu... </p>
                        <h4 className="cardProduct-text"> R$25,50 </h4>
                        <Link to="/Product7" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuCiano} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Ciano - Manipulação de Elementos </h5>
                        <p className="cardProduct-text"> Quem o veste pode controlar e... </p>
                        <h4 className="cardProduct-text"> R$85,50 </h4>
                        <Link to="/Product8" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuLaranja} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Laranja - Compartilhar Emoções </h5>
                        <p className="cardProduct-text"> Quem o usa pode compartilhar suas emoções com outras pes... </p>
                        <h4 className="cardProduct-text"> R$35,00 </h4>
                        <Link to="/Product9" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuRosa} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Rosa - Cura Instantânea </h5>
                        <p className="cardProduct-text"> Quem o coloca pode curar ferimentos e doenças instantan... </p>
                        <h4 className="cardProduct-text"> R$65,50 </h4>
                        <Link to="/Product10" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuVerde} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Verde - Comunicação com a Natureza </h5>
                        <p className="cardProduct-text"> Quem o usa pode se comunicar... </p>
                        <h4 className="cardProduct-text"> R$55,00 </h4>
                        <Link to="/Product11" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={chapeuVermelho} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Chapéu Vermelho - Aceleração Temporal </h5>
                        <p className="cardProduct-text"> Quem o veste pode acelerar ou desacelerar o tempo ao seu red... </p>
                        <h4 className="cardProduct-text"> R$80,00 </h4>
                        <Link to="/Product12" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                {/* ------------------- MOCHILAS ------------------- */}

                <div className="cardProduct">

                    <img src={mochilaAmarela} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Mochila Amarela - Teletransporte </h5>
                        <p className="cardProduct-text"> Quem a usa pode pensar em qualquer lugar do mundo e ins... </p>
                        <h4 className="cardProduct-text"> R$85,50 </h4>
                        <Link to="/Product4" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={mochilaAzul} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Mochila Azul - Dimensão Infinita </h5>
                        <p className="cardProduct-text"> Por fora, parece uma mochila comum, mas por dentro, é ca... </p>
                        <h4 className="cardProduct-text"> R$79,99 </h4>
                        <Link to="/Product5" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={mochilaRoxa} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Mochila Roxa - Invisibilidade </h5>
                        <p className="cardProduct-text"> A mochila roxa de invisibilidade é um acessório extraordinário que... </p>
                        <h4 className="cardProduct-text"> R$20,00 </h4>
                        <Link to="/Product2" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={mochilaVerde} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Mochila Verde - Voar </h5>
                        <p className="cardProduct-text"> A mochila Verde vem com o incrível poder de voar é um acessório verdadeiramente ex... </p>
                        <h4 className="cardProduct-text"> R$35,90 </h4>
                        <Link to="/Product3" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

                <div className="cardProduct">

                    <img src={mochilaVermelha} className="cardProduct-img-top" alt="" />

                    <div className="cardProduct-body">

                        <h5 className="cardProduct-title"> Mochila Vermelha - SuperVelocidade </h5>
                        <p className="cardProduct-text"> A mochila vermelha é um acessório compacto, mas com... </p>
                        <h4 className="cardProduct-text"> R$32,50 </h4>
                        <Link to="/Product1" className="btn btn-primary"> Comprar </Link>

                    </div>

                </div>

            </div>

        </main>

    )

}

export default Home