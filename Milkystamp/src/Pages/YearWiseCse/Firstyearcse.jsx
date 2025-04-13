import React from 'react'
import Pdfshow from './Pdfshow'
import be from './Zsibasish.pdf'
import physics from './ZPhysics.pdf'
import clang from './ZdataStructure.pdf'

let subjectsThirdfirst = [

    {
        sub: "BASIC ELECTRONICS",
        subNav: be
    },
   



]
let subjectsThirdSec = [

    {
        sub: "PHYSICS",
        subNav: physics
    },
    {
        sub: "DATA STRUCTURE IN C ",
        subNav: clang
    },
  
]






function Firstyearcse() {
    return (
        <div>
        <br />
        <center className='heading'><u><b>FIRST SEMESTER</b></u></center>
        <Pdfshow subjects={subjectsThirdfirst} />
        <br />
        <br />
        <br />
        <br />
        <center className='heading'><u><b>SECOEND SEMESTER</b></u></center>
        <Pdfshow subjects={subjectsThirdSec} />
    </div>
    )
}

export default Firstyearcse