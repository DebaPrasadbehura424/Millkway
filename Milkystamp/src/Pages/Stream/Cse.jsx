import React from 'react'
import Year from '../AllNote/Year'




let computer = [
    {
        Branch: "FIRST YEAR",
        nav: "/firstyearcse",
    },
    {
        Branch: "SECOEND YEAR",
        nav: "/SecoendyearCse",
    },
    {
        Branch: "THIRD YEAR",
        nav: "/ThirdyearCse",
    },
    {
        Branch: "FOURTH YEAR",
        nav: "/fourthyearCse",
    }
]
function Cse() {
    return (
        <>
            <Year ashok={computer} />
        </>
    )
}

export default Cse