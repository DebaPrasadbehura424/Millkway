import React from "react";
import { Route, Routes } from 'react-router-dom';
import Devai from "./Componenets/Devilai/Devai";
import Home from "./Componenets/Home";
import Notfound from "./Componenets/Notfound";
import Btech from "./Pages/AllNote/Btech";
import FreeNote from "./Pages/AllNote/FreeNote";
import MainBar from "./Pages/Homebar/MainBar";
import Civil from "./Pages/Stream/Civil";
import Cse from "./Pages/Stream/Cse";
import Ee from "./Pages/Stream/Ee";
import Me from "./Pages/Stream/Me";
import Firstyearcse from "./Pages/YearWiseCse/Firstyearcse";
import Fourthyear from "./Pages/YearWiseCse/Fourthyear";
import Secyearcse from "./Pages/YearWiseCse/Secyearcse";
import Thirdyearcse from "./Pages/YearWiseCse/Thirdyearcse";
import Games from "./Componenets/Games";
import Tictactoe from "./Gamepage/TTT/Tictactoe";
import DinoApp from "./Gamepage/DinoGame/DinoApp";
import QuizApp from "./Gamepage/QuizTime/QuizApp";
import Mainquizz from "./Gamepage/QuizTime/Mainquizz";












function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mainbar" element={<MainBar />} />
      <Route path="/freenote" element={<FreeNote />} />
      <Route path="/btech" element={<Btech />} />
      <Route path="/cse" element={<Cse />} />
      <Route path="/mi" element={<Me />} />
      <Route path="/Ee" element={<Ee />} />
      <Route path="/civil" element={<Civil />} />

      {/* cse all path */}
      <Route path="/firstyearcse" element={<Firstyearcse />} />
      <Route path="/SecoendyearCse" element={<Secyearcse />} />
      <Route path="/ThirdyearCse" element={<Thirdyearcse />} />
      <Route path="/fourthyearCse" element={<Fourthyear />} />
      {/* cse all path */}


      {/*  if page not exist */}
      <Route path="/*" element={<Notfound />} />
      {/*  if page not exist */}


      {/* ai,games here */}
      <Route path="/Devai" element={<Devai />} />
      <Route path="/games" element={<Games />} />
      {/* ai,games here */}


      {/* all games real path */}
      <Route path="/ticstacs" element={<Tictactoe />} />
      <Route path="/Dinoapp" element={<DinoApp />} />
      <Route path="/quizapp" element={<QuizApp />} />
      <Route path="/mainquizz" element={<Mainquizz />} />

      {/* all games real path */}






    </Routes>
  )
}

export default App
