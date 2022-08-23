import './App.css'
import Homepage from './Homepage'
import AboutMe from './AboutMe'
import Contact from './Contact'
import { Routes, Route, Link } from 'react-router-dom'
import screenshot from './assets/images/image1.jpg'
import ReactPlayer from 'react-player'

function App() {
  const randomImageURL = 'https://picsum.photos/seed/picsum/200/300'
  const vidURL = 'https://www.youtube.com/watch?v=58qCba0BhHQ'
  return (
    <div className='App'>
      <nav>
        <Link to='/' className='nav-item'>
          Homepage
        </Link>
        <Link to='/about-me' className='nav-item'>
          About Me
        </Link>
        <Link to='/contact' className='nav-item'>
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/about-me' element={<AboutMe />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>

      <div>
        <h1>Task: How to add three images with some styling</h1>
        <img
          height={200}
          src={screenshot}
          alt='screenshot of embedded assets'
        />
        <img
          height={200}
          src={require('./assets/images/image1.jpg')}
          alt='screenshot of embedded assets'
        />
        <img src={randomImageURL} height={200} width={300} />
      </div>

      <h1>React Player Example</h1>
      <p>first: npm install react-player</p>
      <p>second: import ReactPlayer</p>
      <p>third: create vidURL const</p>
      <p>fourth: add ReactPlayer</p>
      <ReactPlayer url={vidURL} player={false} volume={0.5} />
    </div>
  )
}

export default App
