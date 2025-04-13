import React from 'react';
import tinpot from '../Asserts/Tictac.png';
import Dinoats from '../Asserts/DinoGame.jpg';
import quizes from '../Asserts/quiza.png';

import './index.css';
import { NavLink } from 'react-router-dom';
let gamesBox =
  [
    {
      gamesphoto: "Tic tac toe",
      gamesLink: tinpot,
      gamesNlink: "/ticstacs"
    },
    {
      gamesphoto: "DINO 3.0",
      gamesLink: Dinoats,
      gamesNlink: "/Dinoapp"
    },
    {
      gamesphoto: "Code Quiz",
      gamesLink: quizes,
      gamesNlink: "/quizapp"
    },
  ]

  // chrome dino logo


function Games() {
  return (
    <div className='games_container'>
      {
        gamesBox.map((maxdata, index) => {
          return (
            <div className='games_subcontinent' key={index} >
              {index + 1 == gamesBox.length && <button>NEW</button>}
              <div className='games_photocontainer'>
              <NavLink to={maxdata.gamesNlink}>
                <img src={maxdata.gamesLink} alt="ticktaktoe"/>
              </NavLink>
              </div>
              <p >
                {maxdata.gamesphoto}
              </p>


            </div>
          )
        })
      }
    </div>
  )
}

export default Games;
