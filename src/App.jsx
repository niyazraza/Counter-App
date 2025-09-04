import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)
  const [isEvenOdd, setEvenOdd] = useState("Even")

  useEffect(() => {
    if (count % 2 === 0) {
      setEvenOdd("Even")
    } else {
      setEvenOdd("Odd")
    }
  }, [count])

  const incr = () => {
    if (count < 20) {
      setCount(count + 1)
    } else {
      alert("Count should not be more than 20")
    }
  }

  const decr = () => {
    if (count > 0) {
      setCount(count - 1)
    } else {
      alert("Count should not be less than 0")
    }
  }

  return (
    <>
     <h1 className="bg-text">Muhammad Niyaz</h1>
    <div className="container">
      <h1 className="header">Counter App</h1>
      <h2>{count}</h2>
      <p style={{ color: "white", fontSize: "1.5rem", marginBottom: "20px" }}>
        {isEvenOdd}
      </p>
      <div className="btn-group">
        <button onClick={incr}>+</button>
        <button onClick={decr}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
