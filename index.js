console.log(`Hello World!`);

const PI = Math.PI;
let radius;

document.getElementById("mySubmit").onclick = function() {

    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    check = String(radius)

    if (check != "NaN") {
           
        
        document.getElementById("circumference").textContent = (2 * PI * radius).toFixed(2) + "cm";
        document.getElementById("myInput").value = '';


    } 








}




