for (let i = 1; i <=10; i++) {
    if (i == 1) {
        var a = ""
        var b = ""
        a += "*"
        for (let j = 1; j <=9; j++) {
            b += " *"
        }
        console.log(a+b)
    } else if (i != 10) {
        var a = ""
        var b = ""
        var c = ""
        a += "*"
        for (let j = 1; j <=8; j++) {
            b += "  "
        }
        c += " *"
        console.log(a+b+c)
    } else if (i == 10) {
        var a = ""
        var b = ""
        a += "*"
        for (let j = 1; j <=9; j++) {
            b += " *"
        }
        console.log(a+b)
    }
    

}