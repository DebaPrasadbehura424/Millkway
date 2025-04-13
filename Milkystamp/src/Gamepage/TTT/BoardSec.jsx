import React, { useEffect } from 'react'
import Tile from './Tile'
import Strike from './Strike'
function BoardSec({ tiles, playerTurn, handleClick, strikeclass }) {

    return (
        <div className='boardsec'>
            <p style={{ position: "absolute",top:"-50%",left:"43%" }}>Join only 4</p>
            <Tile playerTurn={playerTurn} onClick={() => handleClick(0)} tilevalue={tiles[0]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(1)} tilevalue={tiles[1]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(2)} tilevalue={tiles[2]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(3)} tilevalue={tiles[3]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(4)} tilevalue={tiles[4]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(5)} tilevalue={tiles[5]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(6)} tilevalue={tiles[6]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(7)} tilevalue={tiles[7]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(8)} tilevalue={tiles[8]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(9)} tilevalue={tiles[9]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(10)} tilevalue={tiles[10]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(11)} tilevalue={tiles[11]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(12)} tilevalue={tiles[12]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(13)} tilevalue={tiles[13]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(14)} tilevalue={tiles[14]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(15)} tilevalue={tiles[15]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(16)} tilevalue={tiles[16]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(17)} tilevalue={tiles[17]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(18)} tilevalue={tiles[18]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(19)} tilevalue={tiles[19]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(20)} tilevalue={tiles[20]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(21)} tilevalue={tiles[21]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(22)} tilevalue={tiles[22]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(23)} tilevalue={tiles[23]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(24)} tilevalue={tiles[24]} />
            <Strike strikeclass={strikeclass} />
        </div>
    )
}

export default BoardSec