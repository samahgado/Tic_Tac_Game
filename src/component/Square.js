import React from 'react'

const Square = (props) => {
    const{index,handleClick,square}= props
    const styles={
       color : square === "X" ? "#ffafbd" : "#c9ffbf" 
        
    }
  return (
    <div className='square' onClick={handleClick} style={styles}>{square}</div>
  )
}

export default Square
