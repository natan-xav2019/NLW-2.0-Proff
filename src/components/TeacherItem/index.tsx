import * as React from 'react';
import './styles.css'
import whatsappLogo from "../../assets/images/icons/whatsapp.svg";

function TeacherItem () {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                        <div>
                            <strong>Diego Fernandes</strong>
                            <span>Quimica</span>
                        </div>
                    </header>

                    <p>
                    Entusiasta das melhores tecnologias de quimica avançada.
                    <br/><br/>
                    Apaixonado por explodir coisas em laboratårio e por mudar a Vida das pessoas através de experiéncias. Mais de 200.000 pessoas jå passaram por uma das minhas explosöes.
                    </p>

                    <footer>
                        <p>
                            preço/hora
                            <strong>R$20,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappLogo} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
};

export default TeacherItem