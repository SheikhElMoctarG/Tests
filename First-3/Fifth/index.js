for (let i = 1; i <=7; i++) {
    if (i == 1) {
        var a = ""
        var b = ""
        a += "*"
        for (let j = 1; j <=14; j++) {
            b += " *"
        }
        console.log(a+b)
    } else if(i != 7){
        var a = ""
        var b = ""
        a += "*"
        for (let j = 1; j <=13; j++) {
            b += "  "
        }
        console.log(a+b+" *")
    } else if(i == 7){
        var a = ""
        var b = ""
        a += "*"
        for (let j = 1; j <=14; j++) {
            b += " *"
        }
        console.log(a+b)
    }
}