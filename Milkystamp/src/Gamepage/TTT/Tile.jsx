import React from 'react'

function Tile({ onClick, tilevalue }) {
  return (
    <div className='tile' onClick={onClick}>{tilevalue}</div>
  )
}

export default Tile