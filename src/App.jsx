import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './component/Signup'
import Login from './component/Login'
import Home from './component/Home'
import Not from './component/Not'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      
      {/* <Signup/> */}
      {/* <Login/> */}
      <BrowserRouter>
        <Routes>
          <Route element={<Signup/>} path='/'></Route>
          <Route element={<Login/>} path='/Login'></Route>
          <Route element={<Home/>} path='/home'></Route>
          <Route element={<Not/>} path='/not'></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
