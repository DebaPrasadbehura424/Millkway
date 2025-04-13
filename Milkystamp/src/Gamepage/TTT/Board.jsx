import React from 'react'
import Tile from './Tile'
import Strike from './Strike'

function Board({ tiles, playerTurn, handleClick,strikeclass }) {
    return (
        <div className='board'>
            <Tile playerTurn={playerTurn} onClick={() => handleClick(0)} tilevalue={tiles[0]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(1)} tilevalue={tiles[1]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(2)} tilevalue={tiles[2]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(3)} tilevalue={tiles[3]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(4)} tilevalue={tiles[4]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(5)} tilevalue={tiles[5]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(6)} tilevalue={tiles[6]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(7)} tilevalue={tiles[7]} />
            <Tile playerTurn={playerTurn} onClick={() => handleClick(8)} tilevalue={tiles[8]} />
            <Strike strikeclass={strikeclass} />
        </div>
    )
}

export default Board