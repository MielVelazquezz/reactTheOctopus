import React from "react";
import chapeuLaranja from '../Products/imgProducts/chapeuLaranja.png'

function Product9() {

    return (

        <main>


            <div class="card">

                <img src={chapeuLaranja} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Laranja - Compartilhar Emoções </h6>

                    <p className="card-text"> Quem o usa pode compartilhar suas emoções com outras pessoas, permitindo que os outros experimentem alegria, amor ou tranquilidade instantaneamente. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design acolhedor. </li>
                            <li> Compartilha emoções positivas com as pessoas ao redor. </li>
                            <li> Promove conexões emocionais e bem-estar. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$35,00 </a>

                </div>

            </div>

        </main>

    )

}

export default Product9