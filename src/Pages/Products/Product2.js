import React from "react";
import mochilaRoxa from '../Products/imgProducts/mochilaRoxa.png'

function Product2() {

    return (


        <main>


            <div class="card">

                <img src={mochilaRoxa} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Mochila Roxa - Invisibilidade </h6>

                    <p className="card-text">

                        A mochila roxa de invisibilidade é um acessório extraordinário que desafia a realidade com seu design misterioso e poderes incríveis. <br /> Com um tom profundo e enigmático de roxo, esta mochila não é apenas uma bolsa elegante, mas também uma ferramenta mágica.

                    </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li>Design Encantador: O roxo profundo da mochila confere um toque de mistério e sofisticação ao seu estilo.</li>
                            <li>Poder de Invisibilidade: Com um simples comando, a mochila desencadeia seu incrível poder de invisibilidade. Quando usada, você se torna completamente invisível para aqueles ao seu redor, desaparecendo da vista.</li>
                            <li>Privacidade e Segurança: A mochila de invisibilidade é uma aliada valiosa para situações em que a privacidade e a segurança são fundamentais. Ela permite que você se mova discretamente e permaneça incógnito, garantindo que seus segredos estejam sempre protegidos.</li>
                            <li>Um Toque de Magia na Vida Cotidiana: Com a mochila roxa de invisibilidade, você pode experimentar a sensação única de ser invisível, adicionando um toque de magia à sua vida diária.</li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$20,00 </a>

                </div>

            </div>

        </main>

    )

}

export default Product2