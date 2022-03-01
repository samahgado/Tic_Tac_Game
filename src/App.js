import React, { useState } from 'react';
import "./style.css"
import "./component/Square"
import Square from './component/Square';
import Confetti from 'react-confetti'


function App() {
  const[squares,setSquares]=useState(Array(9).fill(null))
  const[turn ,setTurn] = useState("X")
  const[winner,setWinner] = useState(false)
  // board elements
  const squareElement = squares.map((square,index) => (
    <Square key={index} handleClick={()=>handleClick(index)} square={square} index={index}/>
  ))
  function handleClick(index){
   //check that square not clicked 
  if(squares[index] === null && !winner) {
    
      if(turn === "X"){
         squares[index]= "X"
         setTurn("O")
      }else{
        squares[index]="o"
         setTurn("X")
      }
      setSquares(prevSquares => [...prevSquares])
      calcWinner(squares)
    }
  }
  //to know the winner
  function calcWinner(squares){
    const lines=[
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ]
    for(let i =0;i<lines.length;i++){
      const[a,b,c]= lines[i]
     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c] ){
       setWinner(true)
       setTurn(squares[a])

     }
    }
  }
  function handleClear(){
    setSquares(Array(9).fill(null))
    setTurn("X")
    setWinner(false)
  }
  const styles = {
        
    color : turn === "X"? "#ffafbd" : "#c9ffbf"
    
  }
  return (
    
       <main>
         {winner && <Confetti/>}
         
      
      <h2 className="title"><span className='pin'>Tic</span> <span className='gre'>Tac</span> <span className='pin'>Toe</span></h2>
     <h2  className='sub-title' style={styles} > {winner ? `Winner ${turn}` : `Turn ${turn}`}</h2>
      
      <div className="board">
     {squareElement}
    
     </div>
     <div className='wrapper'>
     <button className="clear" onClick={handleClear}>Play Again <span></span> <span></span>  <span></span> <span></span></button>
     </div>
    </main>
  
  );
}

export default App;
