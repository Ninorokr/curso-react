const SugarSyntax = () => {
    //Javascript tradicional

    /*const condicion = true;
    let resultado = null;

    if (condicion) {
        resultado = "correcto"
    } else {
        resultado = "incorrecto"
    }

    console.log("Resultado: " + resultado)*/

    //Utilizando Sugar Syntax
    /*const condicion = true;
    console.log("Resultado: " + (condicion) ? "Correcto" : "Incorrecto");*/

    //Variables por copia y referencia
    //Variables primitvas (integer, string, boolean)
    /*let valor1 = 10;
    let valor2 = valor1; //Es una variable por copia
    valor1 = 20;
    console.log(valor1);
    console.log(valor2);*/

    //Objetos
    /*const bebida = {id: 1, nombre: "Coca cola", precio: 1600};
    const bebida2 = bebida; //Es una variable por referencia
    bebida.precio = 1800;
    console.log(bebida);
    console.log(bebida2);*/
    // (Lo mismo pasa con los array)

    //Arrays
    /*const bebdias = ["coca", "pepsi", "seven up"]; 
    const bebdias2 = bebdias; //Es una variable por referencia
    bebdias.push("sprite");
    console.log(bebdias);
    console.log(bebdias2);*/

    // Operador Spread (...)
    //Operador Spread en Objetos
    /*const bebida = {id: 1, nombre: "Coca cola", precio: 1600};
    const bebida2 = {...bebida} //Desparramar las props del obj1 en obj2 (crea un nuevo obj)
    console.log(bebida);
    console.log(bebida2);
    bebida.precio = 2000
    bebida2.id = 2;
    bebida2.nombre = "Pepsi"
    console.log(bebida);
    console.log(bebida2);
    //El operador spread debería ir primero para que tome primero las propiedades
    //y luego se reemplacen por los nuevos valores
    const bebida3 = {...bebida2, id: 3, nombre: "Seven up", categoria:"gaseosas"}
    console.log(bebida3)*/

    const bebidas = ["coca", "pepsi", "seven up"];
    const bebidas2 = [...bebidas]; //Desparrama los elementos del array bebidas en bebidas2 (crea un nuevo array)
    bebidas.push("sprite")
    console.log(bebidas)
    console.log(bebidas2)
    const bebidas3 = ["fanta", ...bebidas2, "cunnington cola"];
    console.log(bebidas3)
    


    return (
        <>
            <h1>Sugar Syntax</h1>
        </>
    )
}

export default SugarSyntax;