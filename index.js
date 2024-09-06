const prompt = require('prompt-sync')();

function ordenarNumeros() {
    let num1 = parseFloat(prompt("Ingresa el primer numero: "));
    let num2 = parseFloat(prompt("Ingresa el segundo numero: "));
    let num3 = parseFloat(prompt("Ingresa el tercer numero: "));

    if (num1 === num2 && num2 === num3) {
        console.log(`Los números son iguales: ${num1}, ${num2}, ${num3}`);
    } else {
        // Crear un array con los números
        let numeros = [num1, num2, num3];
        
        // numeros.slice(): crea una copia de la lista original de números para que no se cambie la lista original.
        // sort((a, b) => b - a): Aquí le decimos al programa que compare dos números (llamados a y b) y los ordene. Si b es mayor que a, lo coloca primero. Esto hace que el número más grande esté primero y el más pequeño al final.

        // Ordenar: menor a mayor
        let menorAMayor = numeros.slice().sort((a, b) => a - b);
        // Ordenar: mayor a menor
        let mayorAMenor = numeros.slice().sort((a, b) => b - a);

        // Mostrar resultados
        console.log(`Mayor a menor: ${mayorAMenor}`);
        console.log(`Menor a mayor: ${menorAMayor}`);
    }
}

ordenarNumeros()
