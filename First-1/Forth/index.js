for (var i = 0; i <=5; i++) {
    var a = ""
    var b = ""
    for (let k = 1; k <=i; k++) {
        a += " "
    }
    for (let j = 1; j <=5-i; j++) {
        b += "*"
    }
    console.log(a+b)   
}