import { useState } from "react";
import Calendar from "./Calendar";

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  const handleToggleTheme = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <main>
      <div>
        <h1>Calendario Schedule-X</h1>
        <button className="btn-darkmode" onClick={handleToggleTheme}>
          {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
      </div>
      <Calendar darkMode={darkMode} />
    </main>
  )
}
