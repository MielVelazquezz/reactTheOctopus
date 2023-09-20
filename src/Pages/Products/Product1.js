import React from "react";
import mochilaVermelha from '../Products/imgProducts/mochilaVermelha.png'

function Product1() {

    return (

        <main>

            <div className="card">

                <img src={mochilaVermelha} className="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Mochila Vermelha - SuperVelocidade </h6>

                    <p className="card-text"> 

                    A mochila vermelha é um acessório compacto, mas com um poderzinho especial de super velocidade! <br /> Seu design elegante e discreto esconde um segredo incrível. <br /> Com um simples toque no fecho, você pode ativar seu modo de super velocidade. <br /> Quando isso acontece, a mochila ganha a habilidade de se mover rapidamente, permitindo que você a transporte de um lugar para outro em um piscar de olhos. Ela é perfeita para quem está sempre em movimento e precisa chegar a lugares rapidamente. Além disso, seu vermelho vibrante acrescenta um toque de estilo e energia a qualquer look. Com a mochila vermelha de super velocidade, você estará sempre pronto para enfrentar qualquer desafio que apareça em seu caminho! </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li>Super Velocidade: Com um simples toque no fecho especial, a mochila ganha a habilidade de se mover rapidamente, permitindo que você a transporte instantaneamente de um lugar para outro.</li>
                            <li>Inovação Surpreendente: Este item é um exemplo impressionante de como a tecnologia e a moda podem se unir para criar algo verdadeiramente único e funcional</li>
                            <li>Uma Solução para os Desafios Diários: Com a mochila vermelha de super velocidade, você estará sempre preparado para enfrentar qualquer desafio, chegando onde precisa com facilidade e estilo.</li>

                        </ul>

                    </p>
                    
                    <a href="#" className="btn btn-primary" onClick={alertar}> Comprar por R$32,50 </a>

                </div>

            </div>

        </main>

    )

}

function alertar() {
    
    alert("Obaa, compra efetuada com sucesso")

}

export default Product1