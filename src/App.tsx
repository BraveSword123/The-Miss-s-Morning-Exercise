// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Circle from "./components/Circle"
import LetterBox from "./components/LetterBox"
import './App.css'
import defaultSpeak from './assets/Images/Face Asset Speak Default.png'
// import words from "../assets/data/words.json";

function App() {
  // const [count, setCount] = useState(0)
   let level: number = 1; 
  // let firstName: string = "None"; 
  // let surName: string = "None"; 
  //    <div id="backgroundImage"/> 
// Doubly Linked List for dialogue progression 
//       <div id="circleContainer">         </div>
// Add input
// Change h1 to header maybe 

  return (
    <div id="container">
    <div id="header">
      <h1 id="title">The Miss's Morning Exercise</h1>
      <h1 id="level">Level {level}</h1>
     </div>
     <div id="circleContainer">
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
        <Circle/>
                </div>
      <button id="hint">Hint</button>
      <div id="letterBoxContainer">
        <LetterBox/>
        <LetterBox/>
        <LetterBox/>
        <LetterBox/>
        <LetterBox/>
      </div>
      <div id="textBox">
        <h2 id="boxTitle">Miss Sinclair</h2>
        <div id="dialogue">Good morning, we shall proceed at once.</div>
        <div id="buttonContainer">
        <button id="firstButton">Go Back</button>
        <button id="secondButton">Continue</button>
        </div>
      </div>
        <div id="backgroundImage"/> 
        <img id="characterAsset" src={defaultSpeak}/>
    </div>
  )
}

export default App
