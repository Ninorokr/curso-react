//Ejemplo #1 Recibo una prop como objeto

import States from "./States";

/*const Props = (prop) => {
    return (
        <>
            <h1 className="display-1">{prop.academia + " - " + prop.curso}</h1>
            <h3 className="display-3">{prop.curso}</h3>
        </>
    )
}

export default Props*/

//Los estados se definen siempre DENTRO de un componente

const Logo = ({ url, texto, ancho }) => {
  return <img src={url} alt={texto} width={ancho} className="img-thumbnail" />;
};

//Ejemplo #2 => Recibo una prop y la desestructuro (destructuring)

const Props = ({ academia, logo, curso }) => {
  let ubicacion = "Lima, Perú";

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col text-center">
          <h1 className="display-1">{academia}</h1>
          <h3 className="display-3">{curso + " (Carrera Frontend)"}</h3>
          <p><Logo ancho={240} texto={curso} url={logo}/></p>
        </div>
      </div>
    </div>
  );
};
export default Props;
