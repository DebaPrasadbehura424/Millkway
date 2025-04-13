import React from 'react'
import Year from '../AllNote/Year';

let Civils = [
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



function Civil() {
  return (
    <>
        <Year ashok={Civils}/>
    </>
  )
}

export default Civil