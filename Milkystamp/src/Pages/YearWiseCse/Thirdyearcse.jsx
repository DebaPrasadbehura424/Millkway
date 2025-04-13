import React from 'react'
import Pdfshow from './Pdfshow'
import './index.css'


import Os from './zOs.pdf'
import Dbms from './zDbms.pdf';


let subjectsThirdfirst = [

    {
        sub: "OPERATING SYSTEM",
        subNav: Os
    },
    {
        sub: "DATABASE MANAGEMENT SYSTEM(SQL)",
        subNav: Dbms
    },
   
]
let subjectsThirdSec = [

 



]




function Thirdyearcse() {

    return (
        <div>
            <br />
            <center className='heading'><u><b>FIFTH SEMESTER</b></u></center>
            <Pdfshow subjects={subjectsThirdfirst} />
            <br />
            <br />
            <br />
            <br />
            <center className='heading'><u><b>SIXTH SEMESTER</b></u></center>
            <Pdfshow subjects={subjectsThirdSec} />
        </div>
    )
}

export default Thirdyearcse