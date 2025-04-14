import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Componenets/Home";
import Notfound from "./Componenets/Notfound";
import QuizApp from "./Gamepage/QuizTime/QuizApp";
import Mainquizz from "./Gamepage/QuizTime/Mainquizz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/*" element={<Notfound />} />
      <Route path="/quizapp" element={<QuizApp />} />
      <Route path="/mainquizz" element={<Mainquizz />} />
    </Routes>
  );
}

export default App;
