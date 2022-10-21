import React, { useState } from 'react'
import "./Layout.css";
import { SnakeForPlayrs } from './snakeladder';
import { LadderForPlayers } from './snakeladder';
import {snakeLadderPosition} from './snakeladder';
import {fromTo} from './snakeladder';
import {PlayerPosition1} from './snakeladder';
import {PlayerPosition2} from './snakeladder';



const Layout = () => {
  const value = [];
  const array = [];
  let row = 0;
  let lastvalueofrow = 0;
  for (let i = 100; i > 0; i--) {
    array.push(i)
  }
  for (let j = 0, k = 0; j < 100; j++) {
    if (j % 10 === 0) {
      row += 1
      lastvalueofrow = array[j]
      k = 10
    }
    if (row % 2 === 0) {
      k--;
      value[j] = lastvalueofrow - k;
    } else value[j] = array[j]
  }

  const [rollCount, setRollCount] = useState(0);
  const [firstPlayerPosition, setFirstPlayerPosition] = useState(0);
  const [secondPlayerPosition, setSecondPlayerPosition] = useState(0);
  const [Random, setRandom] = useState(0)
  const [hint, setHint] = useState("")
  const [turn, setTurn] = useState("Turn to Player1")
 
  const randomDice = () => {
    setRollCount(rollCount + 1);
    if (rollCount % 2 === 0) {
      if (firstPlayerPosition < 100) {
        setTurn("Turn to Player2")
        let random = Math.ceil(Math.random() * 6);
        setRandom(random)
        setFirstPlayerPosition(firstPlayerPosition + random)
        if (firstPlayerPosition > 94) {
          setFirstPlayerPosition(100)
          setHint("PLAYER1 ..WON THIS GAME")
        }
      }
    } else {
      if (secondPlayerPosition < 100) {
        setTurn("Turn to Player1")
        let random = Math.ceil(Math.random() * 6);
        setRandom(random)
        setSecondPlayerPosition(secondPlayerPosition + random)
        if (secondPlayerPosition > 94) {
          setSecondPlayerPosition(100)
          setHint("PLAYER2 ..WON THIS GAME")
        }
      }
    }
  }

  const Reset=()=>{
    setRollCount(0)
    setFirstPlayerPosition(0)
    setSecondPlayerPosition(0)
    setTurn("Turn to Player1")
    setRandom(0)

  }
  SnakeForPlayrs(firstPlayerPosition, setFirstPlayerPosition)
  LadderForPlayers(firstPlayerPosition, setFirstPlayerPosition)
  SnakeForPlayrs(secondPlayerPosition, setSecondPlayerPosition)
  LadderForPlayers(secondPlayerPosition, setSecondPlayerPosition)
  return (
    <div>
      <div className="container">
        <div className='row '>
          <div className="col-lg-9">
            <div className="wrapper">
              {value.map((element) => (
                <div className="box" id={"box" + element.toString()}>
                  <div className="row">
                    <div className='col-lg-6'>
                      <h5>{element}</h5>
                      <span id={ element.toString()}>{PlayerPosition1(element,firstPlayerPosition)}</span>
                      <span id={ element.toString()}>{PlayerPosition2(element,secondPlayerPosition)}</span>
                    </div>
                    <div className='col-lg-6'>
                      <div id={element.toString()}>{snakeLadderPosition(element)}</div> 
                     <div className='fromTo' id={element.toString()}>{fromTo(element)}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-3">
            <h1>Player1</h1>
            <p>position:{firstPlayerPosition}</p>
            <h1>Player2</h1>
            <p>position:{secondPlayerPosition}</p>
            <p>You Got:{Random}</p>
            <button onClick={randomDice}>RollUp</button>
            <p className='mt-3'>{turn}</p>
            <h4 className='mt-4'>{hint}</h4>
            <button onClick={Reset}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Layout