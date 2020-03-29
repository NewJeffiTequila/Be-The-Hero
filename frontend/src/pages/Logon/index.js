import React ,{useState} from 'react';
import './style.css';
import api from '../../services/api'
import {Link , useHistory} from 'react-router-dom'
import {FiLogIn} from 'react-icons/fi';
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {

    const [id , setId] = useState('');
    const history = useHistory();


    async function handleLogin(e) {
        e.preventDefault();
        try {
            const response = await api.post('sessions' , {id});

            localStorage.setItem('ongId' , id);
            localStorage.setItem('ongName' ,response.data.name);
            history.push('/profile')

            console.log(response.data.name);
        } catch (error) {
            alert('error')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="logo"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input 
                    placeholder="Seu ID"
                    value={id}
                    onChange={e=>setId(e.target.value)}
                    />
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
