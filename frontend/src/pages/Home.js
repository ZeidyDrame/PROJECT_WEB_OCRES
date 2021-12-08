import React from 'react';
import Navigation from '../components/Navigation';
import "../index.css"

const Home =() => {
    return(
        <body>
            <Navigation/>
            <header>
            <h1>
                Présentation du site
            </h1>
            <hr/>
            <main>
                <p>
                    Voici les informations principales concernant ce site web.
                    <br/>
                    <br/>
                    Il a été réalisé en tant que projet web de fin de semestre afin de travailler les différentes notions vus en cours.
                    <br/>
                    <br/>
                    Le but de ce site web est de prolonger l'expérience de jeu sur le thème de Clash Royaleapi
                    <br/>
                    <br/>
                    Mes objectifs personnels étaient :
                    <br/>
                    <ul>
                        <li>Réaliser un premier site web en React</li>
                        <li>Tester mes limites sur un projet de développement seul</li>
                        <li>Réaliser un projet qui me plaît</li>
                    </ul>
                </p>
            </main>
            <hr/>
            </header>

            <footer>
                Me contacter :  
                <ul>
                        <li><a href="mailto:zeidy.drame@edu.ece.fr">Mail</a></li>
                        <li><a href="https://www.linkedin.com/in/ze%C3%AFdy-dram%C3%A9-2099401b5/">LinkedIn</a></li>
                        <li><a href="https://github.com/ZeidyDrame">GitHub</a></li>
                    </ul>
            </footer>
        </body>
    )
}

export default Home;