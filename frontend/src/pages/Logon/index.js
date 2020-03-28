import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png'
import logoImg from '../../assets/logo.svg'

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                
                <form>
                    <h1>Faça seu Login</h1>
                    <input placeholder="Seu ID"/>
                    <button className="button" type="submit">Entrar</button>
                    <Link  className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não possuo cadastro.
                    </Link>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
  }
