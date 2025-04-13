import gsap from 'gsap';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ai from '../../Asserts/Ai.avif';
import Allnote from '../../Asserts/Allnotes.jpg';
import photos from '../../Asserts/Phonewall2.png';
import games from '../../Asserts/Tictac.png';
import Logo from '../../Componenets/Logo';
import '../Homebar/index.css';


function MainBar() {
    const navigate = useNavigate();
    useEffect(() => {
        gsap.to('.app', {
            y: -10,
            duration:3,
            opacity:1
            
        },[]);        
    });

    return (
        <div className='Container' style={{ backgroundImage: `url(${photos})` }}>
            <Logo />
            <div className='app_container'>

                <div className="app" onClick={() => navigate("/freenote")}>
                    <div className='image_container'>
                        <img src={Allnote} alt="allnotes" />
                    </div>
                    <p>NOTES</p>
                </div>

                <div className="app" onClick={() => navigate("/games")}>
                    <div className='image_container'>
                        <img src={games} alt="allnotes" />
                    </div>
                    <p>GAMES</p>
                </div>
                <div className="app" onClick={() => navigate("/Devai")}>
                    <div className='image_container'>
                        <img src={ai} alt="allnotes" />
                    </div>
                    <p>DEV.AI</p>
                </div>
            </div>


        </div>
    )
}

export default MainBar