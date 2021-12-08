import React from 'react';
import { NavLink } from "react-router-dom"
import Logo from './Logo';
import "../index.css"
const Navigation = () => {
    return (
        <nav className = "navigation">
           <Logo className= "stateBar"/>
            
            <NavLink  to="/"  className= "stateBar" >
                Accueil
            </NavLink>

            <NavLink  to="/a-propos"  className= "stateBar" >
                 À propos
            </NavLink>
            
            <NavLink  to="/clans"  className= "stateBar" >
                 Clans
            </NavLink>

            <NavLink  to="/player"  className= "stateBar" >
                 Joueur
            </NavLink>

            <NavLink  to="/cards"  className= "stateBar" >
                 Cartes
            </NavLink>

            <NavLink  to="/tournaments"  className= "stateBar" >
                 Tournois
            </NavLink>
        </nav>
    );
};

export default Navigation; 