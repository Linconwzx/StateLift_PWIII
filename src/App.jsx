import { useState } from 'react'

import './App.css'
import Saudacao from './assets/componentes/Saudacao'
import SeuNome from './assets/componentes/SeuNome'

function App() {
  const [nome, setNome] = useState("")
  

  return (
    <div className='bloco'>
    <div className='App'>
      <h1>State Lift</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
      {nome &&(
        <p>O nome digitado foi:{nome}</p>
      )}
    </div>
    </div>
    
  )
}

export default App