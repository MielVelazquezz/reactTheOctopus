import React from "react";
import chapeuVermelho from '../Products/imgProducts/chapeuVermelho.png'

function Product12() {

    return (

        <main>


            <div class="card">

                <img src={chapeuVermelho} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Vermelho - Aceleração Temporal </h6>

                    <p className="card-text"> Quem o veste pode acelerar ou desacelerar o tempo ao seu redor, permitindo que se movam rapidamente em situações de perigo ou desfrutem de momentos especiais por mais tempo. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design elegante e atemporal. </li>
                            <li> Acelera ou desacelera o tempo ao seu redor. </li>
                            <li> Útil para exploradores do tempo e heróis em busca de aventuras. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$80,00 </a>

                </div>

            </div>

        </main>

    )

}

export default Product12