import React from 'react';
import { useNavigate } from 'react-router-dom';


function Year(props) {
    const navigate = useNavigate();
    return (
        <div className='branches' >
            <center><u>Choose Year</u></center>
            {
                props.ashok.map((data) => {
                    return (
                        <div onClick={() => navigate(data.nav)} className='branchSub'>
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

export default Year