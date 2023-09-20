import React from "react";
import mochilaAzul from '../Products/imgProducts/mochilaAzul.png'

function Product5() {

    return (

        <main>


        <div class="card">

            <img src={mochilaAzul} class="card-img-top" alt="..." />

            <div className="card-body">

                <h6 className="card-title"> Mochila Azul - Dimensão Infinita </h6>

                <p className="card-text"> Por fora, parece uma mochila comum, mas por dentro, é capaz de armazenar uma quantidade infinita de objetos, não importando o tamanho ou peso. É perfeita para quem nunca quer deixar nada para trás. </p>

                <h6 className="titleMochila"> Sobre este item </h6>

                <p className="card-text">

                    <ul>

                        <li> Cor: Azul. </li>
                        <li> Armazena uma quantidade infinita de objetos. </li>
                        <li> Ideal para viagens e aventuras. </li>

                    </ul>

                </p>

                <a href="#" className="btn btn-primary"> Comprar por R$79,99 </a>

            </div>

        </div>

    </main>

    )

}

export default Product5