function App() {
  function handleClick() {
    let randomNum = Math.floor(Math.random() * 10) + 1
    console.log(randomNum)
    let userInput = prompt('type a number')
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`)
  }

  return (
    <div className='App'>
      <h1>Guess the number between 1 and 10</h1>
      <button onClick={handleClick}>Guess</button>
    </div>
  )
}

export default App
