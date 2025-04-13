import React, { useEffect, useState } from 'react'
import Board from './Board';
import { GameState } from './GameState';
import './index.css';
import { RiSwordFill } from "react-icons/ri";
import { GiSwordwoman } from "react-icons/gi";
import BoardSec from './BoardSec';





const player_x = "X";
const player_o = "O";














const winningCombinationsFive =
    [
        { combo: [0, 1, 2, 3], strikeclass: "" },
        { combo: [1, 2, 3, 4], strikeclass: "" },
        { combo: [5, 6, 7, 8], strikeclass: "" },
        { combo: [6, 7, 8, 9], strikeclass: "" },
        { combo: [10, 11, 12, 13], strikeclass: "" },
        { combo: [11, 12, 13, 14], strikeclass: "" },
        { combo: [15, 16, 17, 18], strikeclass: " " },
        { combo: [16, 17, 18, 19], strikeclass: "" },
        { combo: [20, 21, 22, 23], strikeclass: " " },
        { combo: [21, 22, 23, 24], strikeclass: "" },
        //col
        { combo: [0, 5, 10, 15], strikeclass: "" },
        { combo: [5, 10, 15, 20], strikeclass: "" },
        { combo: [1, 6, 11, 16], strikeclass: "" },
        { combo: [6, 11, 16, 21], strikeclass: "" },
        { combo: [2, 7, 12, 17], strikeclass: "" },
        { combo: [7, 12, 17, 22], strikeclass: "" },
        { combo: [3, 8, 13, 18], strikeclass: "" },
        { combo: [8, 13, 18, 23], strikeclass: "" },
        { combo: [4, 9, 14, 19], strikeclass: "" },
        { combo: [9, 14, 19, 24], strikeclass: "" },
        //daigonal
        { combo: [15, 11, 7, 3], strikeclass: "" },
        { combo: [20, 16, 12, 8], strikeclass: "" },
        { combo: [16, 12, 8, 4], strikeclass: "" },
        { combo: [21, 17, 13, 9], strikeclass: "" },
        { combo: [5, 11, 17, 23], strikeclass: "" },
        { combo: [0, 6, 12, 18], strikeclass: "" },
        { combo: [6, 12, 18, 24], strikeclass: "" },
        { combo: [1, 7, 13, 19], strikeclass: "" },

    ]
const winningCombinations =
    [
        { combo: [0, 1, 2], strikeclass: "strike-row-1" },
        { combo: [3, 4, 5], strikeclass: "strike-row-2" },
        { combo: [6, 7, 8], strikeclass: "strike-row-3" },
        { combo: [0, 3, 6], strikeclass: "strike-col-1" },
        { combo: [1, 4, 7], strikeclass: "strike-col-2" },
        { combo: [2, 5, 8], strikeclass: "strike-col-3" },
        { combo: [0, 4, 8], strikeclass: "strike-dai-1 " },
        { combo: [2, 4, 6], strikeclass: "strike-dai-2" },
    ]

function checkWiner(tiles, setGameState, setStrike) {
    for (const { combo, strikeclass } of winningCombinations) {
        const tileValue1 = tiles[combo[0]];
        const tileValue2 = tiles[combo[1]];
        const tileValue3 = tiles[combo[2]];
        if (tileValue1 != null && tileValue1 == tileValue2 && tileValue1 == tileValue3) {
            setStrike(strikeclass);
            if (tileValue1 === player_x) {
                setGameState(GameState.playerXwins);
            } else {
                setGameState(GameState.playerOwins);
            }
            return;
        }
        const Allies = tiles.every((tl) => tl !== null);
        if (Allies) {
            setGameState(GameState.draw);
        }

    }
}




function checkWinersec(tilesec, setGameState, setStrike) {
    for (const { combo, strikeclass } of winningCombinationsFive) {
        const tileValue1 = tilesec[combo[0]];
        const tileValue2 = tilesec[combo[1]];
        const tileValue3 = tilesec[combo[2]];
        const tileValue4 = tilesec[combo[3]];
        if (tileValue1 != null && tileValue1 == tileValue2 && tileValue1 == tileValue3 && tileValue1 == tileValue4) {
            setStrike(strikeclass);
            if (tileValue1 === player_x) {
                setGameState(GameState.playerXwins);
            } else {
                setGameState(GameState.playerOwins);
            }
            return;
        }
        const Allies = tilesec.every((tl) => tl !== null);
        if (Allies) {
            setGameState(GameState.draw);
        }

    }
}







function Tictactoe() {
    const [tilessec, setTilessec] = useState(Array(25).fill(null));




    const [tiles, setTiles] = useState(Array(9).fill(null));
    const [playerTurn, setPlayerTurn] = useState(player_x);
    const [gameState, setGameState] = useState(GameState.inProgress)
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [winner, setWinner] = useState(`${value1} turn now`);
    const [strike, setStrike] = useState();
    const [popshow, setpopshow] = useState(false);
    const [type, setType] = useState(false);
    const [cnt1, setCnt1] = useState(0);
    const [cnt2, setCnt2] = useState(0);

    useEffect(() => {
        if (gameState == 0) {
            setWinner(`${value1} win the game`);
            setCnt1(prev => prev + 1)
        } else if (gameState == 1) {
            setWinner(`${value2} win the game`);
            setCnt2(prev => prev + 1)
        } else if (gameState == 2) {
            setWinner('draw');
        }

    }, [gameState])







    const handleClick = (index) => {
        if (gameState != GameState.inProgress) {
            return;
        }
        if (tiles[index] != null) {
            return;
        }
        const newTiles = [...tiles];
        newTiles[index] = playerTurn;
        setTiles(newTiles);

        if (playerTurn == player_x) {
            setPlayerTurn(player_o);
        } else {
            setPlayerTurn(player_x)
        }
    }


    const handleClicksec = (index) => {
        if (gameState != GameState.inProgress) {
            return;
        }
        if (tilessec[index] != null) {
            return;
        }
        const newTiles = [...tilessec];
        newTiles[index] = playerTurn;
        setTilessec(newTiles);

        if (playerTurn == player_x) {
            setPlayerTurn(player_o);
        } else {
            setPlayerTurn(player_x)
        }
    }







    function handleType(idx) {
        if (value1 == "" || value2 == "") {
            alert('fill the name box');
        } else {
            idx == 3 ? setType(false) : setType(true);
            setpopshow(!popshow);

        }
    }
    function handleNamesone(e) {
        let val = e.target.value;
        setValue1(val);


    }
    function handleNamesTwo(e) {
        let val = e.target.value;
        setValue2(val);

    }



    function handleReset() {
        setTiles(Array(9).fill(null));
        setTilessec(Array(25).fill(null));
        setPlayerTurn(player_x);
        setGameState(GameState.inProgress);
        setStrike(null);
    }




    useEffect(() => {
        checkWinersec(tilessec, setGameState, setStrike)
        setWinner(`${playerTurn == player_x ? value1 : value2} turn now`)
    }, [tilessec]);

    useEffect(() => {
        checkWiner(tiles, setGameState, setStrike);

        setWinner(`${playerTurn == player_x ? value1 : value2} turn now`)
    }, [tiles]);
    return (
        <div className='tical'>
            {
                gameState < 2 &&
                <div className='wincontent'>{gameState == 0 ? value1 : value2} is winner</div>
            }

            {
                popshow == false &&
                <div className='pop_up'>
                    <div>
                        <label>Player1 Name:</label>
                        <input type="text" onChange={(e) => handleNamesone(e)} value={value1} />
                    </div>
                    <div>
                        <label>Player2 Name:</label>
                        <input type="text" onChange={(e) => handleNamesTwo(e)} value={value2} />
                    </div>
                    <div className='choose_format'>
                        <div className='three' onClick={() => handleType(3)}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                            <p>3x3</p>
                        </div>
                        <div className='five' onClick={() => handleType(5)}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>

                            <p>5x5</p>
                        </div>
                    </div>
                </div>

            }



            <div className="wars">
                <div style={{ color: "red" }}><GiSwordwoman />  {value1} {cnt1}</div>
                <RiSwordFill color='#230020' fontSize={"50px"} />
                <div style={{ color: "Yellow" }} > <GiSwordwoman />{value2} {cnt2}</div>
            </div>



            <p style={{ color: "#214B3D", fontWeight: "bold", fontSize: "20px", backgroundColor: "white", padding: "1px" }}>
                {winner}
            </p>
            <br />
            {
                type == false ?
                    <Board
                        playerTurn={playerTurn}
                        tiles={tiles}
                        handleClick={handleClick}
                        strikeclass={strike}
                    />

                    :
                    <BoardSec
                        playerTurn={playerTurn}
                        tiles={tilessec}
                        handleClick={handleClicksec}
                        strikeclass={strike}
                    />
            }
            <div className='buttons'>
                <button onClick={handleReset}>Play again</button>
            </div>




        </div>
    )
}

export default Tictactoe