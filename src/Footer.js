import { Component } from "react";


class Footer extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul class="menu">
                        <li><a href="/">Inicio</a></li>
                        <li><a href="/Personajes">Contenido</a></li>
                        <li><a href="/Formulario">Contacto</a></li>
                    </ul>
                </nav>
                <footer>
                    <figure class="text-center">
                        <blockquote class="blockquote">
                            <p>Ejemplo Footer Daniel Martínez</p>
                            <a href="https://www.facebook.com/daniel.toflexy/">Facebook<i class="fab fa-facebook"></i> </a><br></br>
                            <a href="https://github.com/dmartinezs1">Github<i class="fab fa-github"></i> </a><br></br>
                            <a href="https://www.linkedin.com/in/dsmartinez02/">Linkedin<i class="fab fa-linkedin"></i></a>
                        </blockquote>
                        <figcaption class="blockquote-footer">
                            <cite title="Source Title">Adsi:2184573</cite>
                        </figcaption>
                    </figure>
                </footer>
            </>
        )
    }

}
export default Footer;