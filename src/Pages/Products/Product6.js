import React from "react";
import chapeuAmarelo from '../Products/imgProducts/chapeuAmarelo.png'

function Product6() {

    return (

        <main>


            <div class="card">

                <img src={chapeuAmarelo} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Amarelo - Compreensão Universal </h6>

                    <p className="card-text"> Quem o coloca pode entender e falar qualquer língua do mundo instantaneamente, facilitando a comunicação com pessoas de todas as culturas. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li></li>

                            <li> Design clássico. </li>
                            <li> Permite entender e falar qualquer língua instantaneamente. </li>
                            <li> Facilita a comunicação global. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$95,50 </a>

                </div>

            </div>

        </main>

    )

}

export default Product6