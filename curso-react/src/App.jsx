import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Encabezado from './components/Encabezado.jsx'
import PieDePagina from './components/PieDePagina.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col bg-light text-info">
            <Encabezado />
            <h3>Curso de ReactJS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur earum nisi obcaecati ipsum cupiditate ut quo commodi laboriosam repellat dicta iusto, eaque vel voluptatum exercitationem odio temporibus id facilis?</p>
            <PieDePagina />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
