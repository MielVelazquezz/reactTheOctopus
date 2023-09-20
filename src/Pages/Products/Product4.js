import React from "react";
import mochilaAmarela from '../Products/imgProducts/mochilaAmarela.png'

function Product4() {

    return (


        <main>


            <div class="card">

                <img src={mochilaAmarela} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Mochila Amarela - Teletransporte </h6>

                    <p className="card-text">

                        A mochila amarela é um acessório compacto, mas com um poderzinho especial de super velocidade! <br /> Seu design elegante e discreto esconde um segredo incrível. <br /> Com um simples toque no fecho, você pode ativar seu modo de super velocidade. <br /> Quando isso acontece, a mochila ganha a habilidade de se mover rapidamente, permitindo que você a transporte de um lugar para outro em um piscar de olhos. Ela é perfeita para quem está sempre em movimento e precisa chegar a lugares rapidamente. Além disso, seu vermelho vibrante acrescenta um toque de estilo e energia a qualquer look. Com a mochila vermelha de super velocidade, você estará sempre pronto para enfrentar qualquer desafio que apareça em seu caminho! </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Permite teletransportar-se para qualquer lugar do mundo com um pensamento. </li>
                            <li> Design vibrante e resistente. </li>
                            <li> Ideal para exploradores e viajantes. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$85,50 </a>

                </div>

            </div>

        </main>

    )

}

export default Product4