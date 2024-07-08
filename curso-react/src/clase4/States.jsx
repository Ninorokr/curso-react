import { useState } from "react";

const States = () => {
  const [texto, setTexto] = useState("Curso de Javascript");
  //const texto = "Curso de React JS" //No se puede hacer esto porque es una constante
  let texto2 = "YouTube";
  const [contador, setContador] = useState(0);

  const modificarTexto = () => {
    setTexto("Curso de React JS"); //Modificar el estado "texto"
    texto2 = "Coderhouse";
    console.log(texto2);
  }

  const incrementarContador = () => {
    setContador(contador + 1)
  }

  texto2 = "Google Video"; //Acá muere el valor de la variable

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-1">Estados / States</h1>
          <p>
            <button className ="btn btn-primary" onClick={modificarTexto}>Modificar Texto</button>
          </p>
          <p>{texto}</p>
          <p>{texto2}</p>
          <p><button className="btn btn-primary" onClick={incrementarContador}>Contador</button></p>
          <p>Contador: {contador}</p>
        </div>
      </div>
    </div>
  );
};

export default States;