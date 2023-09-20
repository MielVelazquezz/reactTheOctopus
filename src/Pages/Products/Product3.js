import React from "react";
import mochilaVerde from '../Products/imgProducts/mochilaVerde.png'

function Product3() {

    return (


        <main>


            <div class="card">

                <img src={mochilaVerde} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Mochila Verde - Voar </h6>

                    <p className="card-text">

                    A mochila verde com o incrível poder de voar é um acessório verdadeiramente extraordinário que leva você a novas alturas, literalmente. Com um design vibrante e cheio de energia, esta mochila oferece muito mais do que estilo - ela proporciona a incrível capacidade de levitar e explorar o céu.
                    
                    </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li>Liberte sua Imaginação: A mochila amarela com poder de voar oferece uma experiência verdadeiramente mágica, permitindo que você alcance lugares antes inacessíveis e desfrute de uma liberdade sem limites nos céus.</li>
                            <li>Versatilidade sem Limites: Seja para escapar do trânsito urbano, explorar montanhas ou simplesmente sentir a adrenalina de voar, esta mochila se adapta a uma variedade de aventuras e situações.</li>
                            <li>Segurança e Conforto: Voar com esta mochila é uma experiência segura e confortável. Ela é equipada com sistemas de estabilização avançados e alças ergonômicas para garantir uma jornada agradável.</li>
                            <li>Habilidade de Voar: Com um simples comando, a mochila ativa seu poder de voo. Você pode pairar no ar, subir alturas incríveis e explorar paisagens de uma perspectiva única.</li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$35,90 </a>

                </div>

            </div>

        </main>

    )

}

export default Product3