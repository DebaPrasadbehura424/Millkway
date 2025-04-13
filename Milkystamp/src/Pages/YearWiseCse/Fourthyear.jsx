import React from 'react'
import Pdfshow from './Pdfshow'


let subjectsThirdfirst = [

 


]
let subjectsThirdSec = [

   
  


]

function Fourthyear() {
    return (
        <div>
        <br />
        <center className='heading'><u><b>SEVEN SEMESTER</b></u></center>
        <Pdfshow subjects={subjectsThirdfirst} />
        <br />
        <br />
        <br />
        <br />
        <center className='heading'><u><b>EIGHT SEMESTER</b></u></center>
        <Pdfshow subjects={subjectsThirdSec} />
    </div>
    )
}

export default Fourthyear