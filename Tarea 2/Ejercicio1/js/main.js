function thirdLargest(nums) {
    nums.sort((a, b) => b - a);
    return nums[2];
}

let nums = [];
while (nums.length < 3) {
    let num = parseFloat(prompt("Ingrese un número:"));
    if (!isNaN(num)) nums.push(num);
    else alert("Por favor, ingrese un número válido.");
}

console.log("El tercer número más grande es: " + thirdLargest(nums));


