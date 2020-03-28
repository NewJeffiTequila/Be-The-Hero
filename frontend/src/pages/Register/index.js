import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

export default function Register() {
    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="logo"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu Cadastro, entre na plataforma e ajude a pessoas encontrarem casos da sua ONG</p>
                    <Link  className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não possuo cadastro.
                    </Link>
                </section>
                <form>
                    <input placeholder="Nome da Ong"/>
                    <input placeholder="EMAIL" type="email"/>
                    <input placeholder="Whatsapp"/>
                    <div className="input-group">
                        <input placeholder="Cidade"/>
                        <input placeholder="UF" style={{ width:80 }}/>
                    </div>
                    <button className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}