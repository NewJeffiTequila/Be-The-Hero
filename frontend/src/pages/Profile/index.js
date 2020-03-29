import React,{useEffect , useState} from 'react';
import './style.css';
import {Link , useHistory} from 'react-router-dom'
import {FiPower , FiTrash2} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function Register() {

    const [incidents , setIncidents] = useState([])

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    
    const history = useHistory();

    useEffect(()=>{
        api.get('profile', {
            headers:{
                Authorization: ongId,
            }
        }).then(response =>{
            setIncidents(response.data)
        })
    } , [ongId]);

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}` ,{
                headers:{
                    Authorization: ongId,
            }});
            setIncidents(incidents.filter(incidents=>incidents.id !==id))
        } catch (error) {
            alert('erro')
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo"/>
                <span>Bem vindo {ongName}</span>
                    <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                    <button onClick={handleLogout} type="button">
                        <FiPower size={18} color="#e02041"/>
                    </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>

                {incidents.map(incidents=>(
                <li key={incidents.id}>
                    <strong>Caso:</strong> 
                    <p>{incidents.title}</p>
                    <strong>Descrição:</strong> 
                    <p>{incidents.description}</p>
                    <strong>Valor:</strong> 
                    <p>{Intl.NumberFormat('pt-BR' , {style:'currency' , currency:'BRL'}).format(incidents.value)}</p>
                    <button onClick={()=> handleDeleteIncident(incidents.id)} type="button">
                        <FiTrash2 size={20} color="#a8a8b3"/>
                    </button>
                </li>
                ))}
            </ul>
        </div>
    );
}