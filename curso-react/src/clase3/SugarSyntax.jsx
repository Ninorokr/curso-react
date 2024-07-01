const SugarSyntax = () => {
    const condicion = true;
    let resultado = null;

    if (condicion) {
        resultado = "correcto"
    } else {
        resultado = "incorrecto"
    }

    console.log("Resultado: " + resultado)

    return (
        <>
            <h1>Sugar Syntax</h1>
        </>
    )
}

export default SugarSyntax;