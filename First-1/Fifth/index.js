for (let i = 0; i <5; i++) {
    var a = ""
    var b = ""
    for (let k = 0; k <5-i; k++) {
        a += " "
    }
    for (let j = 0; j < 10; j++) {
        b += "*"
    }
    console.log(a+b);
    
}