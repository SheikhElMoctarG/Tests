for (let i = 1; i <=6; i++) {
    var a = ""
    var b = ""
    for (let j = 1; j <=6-i; j++) {
        a += " "
    }
    for (let j2 = 1; j2 <=i; j2++) {
        b += "*"
    }
    console.log(a+b)
    if (i == 6) {
        for (let i2 = 1; i2 <=i; i2++) {
            var a1 = ""
            var b1 = ""
            for (let j3 = 1; j3 <=i2; j3++) {
                a1 += " "
            }
            for (let j4 = 1; j4 <=i-i2; j4++) {
                b1 += "*"
            }
            console.log(a1+b1)
        }
    }
}