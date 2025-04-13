import React from 'react';
import { useNavigate } from 'react-router-dom';


function Btech() {
    const navigate = useNavigate();
    return (
        <div className='branches' >
        <center><u>Choose Branch</u></center>
            {
                [
                    {
                        Branch: "COMPUTER SCIENCE",
                        nav: "/cse",
                    },
                    {
                        Branch: "MECHANICAL ENGINEERING",
                        nav: "/mi",
                    },
                    {
                        Branch: "CIVIL ENGINEERING",
                        nav: "/civil",
                    },
                    {
                        Branch: "ELECTRICAL ENGINEERING",
                        nav: "/Ee",
                    }
                ].map((data) => {
                    return (
                        <div onClick={() => navigate(data.nav)} className='branchSub' >
                            <p>
                                {data.Branch}
                            </p>

                        </div>
                    )
                })
            }
        </div>
    )
}

export default Btech