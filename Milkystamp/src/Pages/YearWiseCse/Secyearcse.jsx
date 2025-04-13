import React from 'react'
import Pdfshow from './Pdfshow'
import clang from './ZdataStructure.pdf'
import java from './Zjava.pdf'
let subjectsThirdfirst = [

    {
        sub: "DATA STRUCTURE ",
        subNav: clang
    },
    {
        sub: "OBJECT ORIENTED PROGRAMMING (JAVA)",
        subNav:java
    },
   



]
let subjectsThirdSec = [

  
   


]



function Secyearcse() {
    return (
        <div>
            <br />
            <center className='heading'><u><b>THIRD SEMESTER</b></u></center>
            <Pdfshow subjects={subjectsThirdfirst} />
            <br />
            <br />
            <br />
            <br />
            <center className='heading'><u><b>FOURTH SEMESTER</b></u></center>
            <Pdfshow subjects={subjectsThirdSec} />
        </div>
    )
}

export default Secyearcse