import React from "react";
import chapeuVerde from '../Products/imgProducts/chapeuVerde.png'

function Product11() {

    return (

        <main>


            <div class="card">

                <img src={chapeuVerde} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Verde - Comunicação com a Natureza </h6>

                    <p className="card-text"> Quem o usa pode se comunicar com plantas e animais, entendendo seus pensamentos e necessidades, e até mesmo influenciando a flora e fauna ao seu redor. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design natural e vegano. </li>
                            <li> Permite entender e se comunicar com plantas e animais. </li>
                            <li> Promove a conservação e a cooperação com a natureza. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$55,00 </a>

                </div>

            </div>

        </main>

    )

}

export default Product11