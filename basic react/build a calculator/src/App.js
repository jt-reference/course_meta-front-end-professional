import { useState, useRef } from 'react'
import './App.css'
import Calculator from './Calculator'

function App() {
  const inputRef = useRef(null)
  const resultRef = useRef(null)
  const [result, setResult] = useState(0)

  const plus = (e) => {
    e.preventDefault()
    setResult((result) => result + Number(inputRef.current.value))
  }

  const minus = (e) => {
    e.preventDefault()
    const inputVal = inputRef.current.value
    const newResult = result - Number(inputVal)
    setResult(newResult)
  }

  const multiply = (e) => {
    e.preventDefault()
    const inputVal = inputRef.current.value
    const newResult = result * Number(inputVal)
    setResult(newResult)
  }

  const divide = (e) => {
    e.preventDefault()
    const inputVal = inputRef.current.value
    const newResult = result / Number(inputVal)
    setResult(newResult)
  }

  const resetInput = (e) => {
    e.preventDefault()
    inputRef.current.value = 0
  }

  const resetResult = (e) => {
    e.preventDefault()
    setResult((prevVal) => prevVal * 0)
  }

  return (
    <div className='App'>
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />
        <button onClick={plus}>add</button>
        <button onClick={minus}>minus</button>
        <button onClick={multiply}>multiply</button>
        <button onClick={divide}>divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  )
}

export default App
