import React from 'react';
import '../AllNote/index.css';
import photo from '../../Asserts/back2.jpeg'
import { useNavigate } from 'react-router-dom';
function FreeNote() {
    const navigate = useNavigate();
    return (
        <div className='Stream' style={{ backgroundImage: `url(${photo})` }}>
            <h1>FREE NOTES</h1>
            <div className='boxes'>
                {
                    [
                        { Brach: "B-TECH", nav: "/btech" },
                        { Brach: "DIPLOMA", nav: "/diploma" },
                        { Brach: "MCA", nav: "/mca" }
                    ].map((data) => {
                        return (
                            <div onClick={() => navigate(data.nav)}>{data.Brach}</div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default FreeNote