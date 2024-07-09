import { useState } from 'react'
import SugarSyntax from './clase3/SugarSyntax'
import Componente3 from './clase3/Componente3'
import Props from './clase4/Props'
import States from './clase4/States'
import CompPresentacion from './clase4/CompPresentacion'
import CompContenedor from './clase4/CompContenedor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Props academia={"Coderhouse"} curso={"React JS"} logo={"https://cdn.icon-icons.com/icons2/2415/PNG/512/react_original_logo_icon_146374.png"}/> */}
      {/* <States /> */}
      {/* <CompPresentacion titulo1={"Coderhouse"} titulo2={"Curso de React JS"}/> */}
      <CompContenedor />
    </>
  )
}

export default App
