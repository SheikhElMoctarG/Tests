for (var i = 0; i <= 5; i++) {
    var a = ""
    var b = ""
    for (var k = 1; k <=5-i; k++) {
        a += " "        
    }
    for (var j = 1; j <=i; j++) {
        b += "*"
    }
    console.log(a+b)
}