import React from 'react'
import Year from '../AllNote/Year'
let machine = [
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

function Me() {
    return (
        <>
            <Year ashok={machine} />
        </>
    )
}

export default Me







