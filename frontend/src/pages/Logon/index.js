import React from 'react';
import './style.css';
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
                    <button type="submit">Entrar</button>
                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não possuo cadastro.
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes"/>
        </div>
    );
  }
