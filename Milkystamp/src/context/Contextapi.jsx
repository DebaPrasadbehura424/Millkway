import React, { useState } from 'react'
import { createContext } from 'react';
export const  CounterContext=createContext(null);

function Contextapi({children}) {
   const[data,setData]=useState();
  return (
    <CounterContext.Provider value={{data,setData}}>
      {children}
    </CounterContext.Provider>
  )
}

export default Contextapi