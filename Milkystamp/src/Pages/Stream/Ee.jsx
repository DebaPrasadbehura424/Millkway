import React from 'react'
import Year from '../AllNote/Year'


let Electornics = [
    {
        Branch: "FIRST YEAR",
        nav: "*",
    },
    {
        Branch: "SECOEND YEAR",
        nav: "*",
    },
    {
        Branch: "THIRD YEAR",
        nav: "*",
    },
    {
        Branch: "FOURTH YEAR",
        nav: "*",
    }
]
function Ee() {
  return (
    <>
    
        <Year ashok={Electornics}/>
    </>
  )
}

export default Ee