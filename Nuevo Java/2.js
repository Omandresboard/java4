function numero() {
    var n1 = prompt("ingrese su numero");
    
    if (!isNaN(n1)) {
        alert ("el valor: "+"'"+n1+"'" +" si es un numero");
    }else{ 
        alert ("el valor: "+"'"+n1+"'" +" no es un numero");
    }
};

function random() {
    let num = parseInt(Math.random()*100);
    alert(num);
};