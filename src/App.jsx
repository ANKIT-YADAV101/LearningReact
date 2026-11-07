import {useState} from "react"


function App() {
 let [curValve, setValve] = useState(3)
  return (
    <>
      <div className="count">{curValve}</div>

      <div id="buttons">
        <button id="increment" onClick={()=>{
          if(curValve >= 10){
            alert("You can't increment the valve above 10")
          }
          else setValve(curValve + 1)
        }}>increment</button>
        <button id="decrement" onClick={()=>{
          if(curValve <= 0){
            alert("You can't decrement the valve below 0")
          }
          else setValve(curValve - 1)
          
        }}>decrement</button>
      </div>
    </>
  )
}

export default App
