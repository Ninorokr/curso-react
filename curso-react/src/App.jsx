import { useState } from 'react'
import SugarSyntax from './clase3/SugarSyntax'
import Componente3 from './clase3/Componente3'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Componente3 />
    </>
  )
}

export default App
