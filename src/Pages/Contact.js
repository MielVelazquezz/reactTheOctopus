import React from "react";

function Contact() {

    return (

        <main>

            <section className="sContato">

                <h1> Formulário de Contato </h1>

                <div class="mb-3">

                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu nome" autoFocus />
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Digite seu endereço de Email" />


                </div>

                <div class="mb-3">

                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua mensagem aqui ;)"></textarea>
                    <button className="btn-sContato"> Enviar </button>

                </div>

            </section>

            <div className="cxLocal">

                <h1> Nossa Localização </h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.2860666888355!2d-51.318465224989254!3d-22.229222414006905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949475d0750b1b3d%3A0x86a2c97c517c8093!2sEscola%20Sesi%20de%20Regente%20Feij%C3%B3%20-%20CE%20368!5e0!3m2!1spt-BR!2sbr!4v1695181720610!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>

        </main>

    )

}

export default Contact