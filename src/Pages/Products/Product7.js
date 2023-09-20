import React from "react";
import chapeuAzul from '../Products/imgProducts/chapeuAzul.png'

function Product7() {

    return (

        <main>


            <div class="card">

                <img src={chapeuAzul} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Azul - Controlar o Clima </h6>

                    <p className="card-text"> Quem o usa pode mudar as condições climáticas ao seu redor, tornando os dias ensolarados, chuvosos, nevados ou ventosos conforme desejarem. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design resistente e estilo clássico. </li>
                            <li> Altera as condições climáticas ao seu redor com um pensamento. </li>
                            <li> Ideal para aventureiros que desejam controlar o clima. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$25,50 </a>

                </div>

            </div>

        </main>

    )

}

export default Product7