import React from "react";
import chapeuCiano from '../Products/imgProducts/chapeuCiano.png'

function Product8() {

    return (

        <main>


            <div class="card">

                <img src={chapeuCiano} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Ciano - Manipulação de Elementos </h6>

                    <p className="card-text"> Quem o veste pode controlar e manipular os elementos naturais, como fogo, água, terra e ar. Isso permite criar defesas sólidas, gerar tempestades de água, incendiar obstáculos ou criar correntes de ar para se mover rapidamente. Esse controle sobre os elementos naturais torna o usuário extremamente versátil em diferentes situações. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design moderno e atraente. </li>
                            <li> Controla os elementos naturais, como fogo, água, terra e ar. </li>
                            <li> Permite adaptar-se a diferentes situações e desafios. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$85,50 </a>

                </div>

            </div>

        </main>

    )

}

export default Product8