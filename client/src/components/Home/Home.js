import React from 'react'
import './styles.css';
import { useNavigate } from 'react-router-dom';

const Home = ({user}) => {
    const navigate = useNavigate()

    if (user){
        navigate('/profile/:<user.username>')
    }
    return (
        <div>Home</div>
    )
}

export default Home