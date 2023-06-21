import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "./sou-rav";

function App() {
  const names = ['Alfa', 'Bravo', 'Charlie', 'Deviac']
  const [selectedName, setSelectedName] = useState("Deviac")

  const handleClick = () => {
    let nameIndex = Math.floor((Math.random() * 4));
    setSelectedName(names[nameIndex])
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          Change Name
        </button>
      </div>
      <sou-rav name={selectedName}></sou-rav>
    </>
  )
}

export default App
