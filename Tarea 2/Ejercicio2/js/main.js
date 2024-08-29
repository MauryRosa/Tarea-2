function sinDuplicados(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let input = prompt("Ingrese valores separados por comas:"); 
let values = input.split(",").map(item => item.trim());

console.log("Array sin duplicados: " + JSON.stringify(sinDuplicados(values)));
