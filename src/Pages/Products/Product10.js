import React from "react";
import chapeuRosa from '../Products/imgProducts/chapeuRosa.png'

function Product10() {

    return (

        <main>


            <div class="card">

                <img src={chapeuRosa} class="card-img-top" alt="..." />

                <div className="card-body">

                    <h6 className="card-title"> Chapéu Rosa - Cura Instantânea </h6>

                    <p className="card-text"> Quem o coloca pode curar ferimentos e doenças instantaneamente, trazendo alívio e saúde para quem estiver por perto. </p>

                    <h6 className="titleMochila"> Sobre este item </h6>

                    <p className="card-text">

                        <ul>

                            <li> Design suave e reconfortante. </li>
                            <li> Cura ferimentos e doenças instantaneamente. </li>
                            <li> Ajuda a restaurar a saúde e aliviar o sofrimento. </li>

                        </ul>

                    </p>

                    <a href="#" className="btn btn-primary"> Comprar por R$65,50 </a>

                </div>

            </div>

        </main>

    )

}

export default Product10