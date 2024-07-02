//Si la imagen está en src, indicar la ruta e importarlo al codigo HTML
import imagen2 from "../assets/images/penaldo.png"

const Componente3 = () => {
    let nombre = "Lionel Messi"
    let nombre2 = "Cristiano Penaldo"
    //Si la imagen está en la carpeta public, lo jala directamente indicando su nombre
    let imagen = "messi.png"

    let estiloCelesteBlanco = {color:"white", backgroundColor:"lightblue", padding:"20"};

    return (
        <div className="container">
            <div className="row">
                <div className="col">
            <h1 className="colorCoder">JSX</h1>
            <p style={estiloCelesteBlanco}>{nombre}</p>
            <p style={{color: "red", fontSize:24, textTransform:"uppercase"}}>Clase de React JS</p>
            <p><img src={imagen} alt={nombre} /></p>
            <p><img src={imagen2} alt={nombre2} /></p>
                </div>
            </div>
        </div>
    )
}

export default Componente3