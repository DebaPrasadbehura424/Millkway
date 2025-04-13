import React from 'react';
import './Quiz.css';
import { useContext } from 'react';
import { CounterContext } from '../../context/Contextapi';
import { NavLink } from 'react-router-dom'
import { datahtml } from './datahtml';
import { datacss } from './datacss';
import { datajs } from './datajs';
import {dataReact} from './dataReact';
import{dataCpp} from './dataCpp';
import {dataJava} from './dataJava'
import {dataPy} from './dataPy'


function QuizApp() {
  const counterState = useContext(CounterContext);




  return (
    <div className="container">
      <NavLink to='/mainquizz'>
        <button className='language html' onClick={() => counterState.setData(datahtml)} >HTML</button>
      </NavLink>
      <NavLink to='/mainquizz'>
        <button className='language css' onClick={() => counterState.setData(datacss)}>CSS</button>
      </NavLink>

      <NavLink to="/mainquizz">
        <button className='language javascript' onClick={() => counterState.setData(datajs)}>JAVASCRIPT</button>
      </NavLink>

      <NavLink to="/mainquizz">
        <button className='language react' onClick={() => counterState.setData(dataReact)}>REACT</button>
      </NavLink>
      <NavLink to="/mainquizz">
        <button className='language cpp' onClick={() => counterState.setData(dataCpp)}>C++</button>
      </NavLink>
      <NavLink to="/mainquizz">
        <button className='language java' onClick={() => counterState.setData(dataJava)}>JAVA</button>
      </NavLink>
      <NavLink to="/mainquizz">
        <button className='language python' onClick={() => counterState.setData(dataPy)}>PYTHON</button>
      </NavLink>
    </div>
  );
}

export default QuizApp;
