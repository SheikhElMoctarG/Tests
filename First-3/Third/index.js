for (let i = 1; i <=6; i++) {
    var a = ""
    var b = ""
    var c = ""
    var d = ""
    var e = ""
    var f = ""
    for (let j = 1; j <=6-i; j++) {
        a += "-"
    }
    b += "*"
    for (let j2 = 1; j2 <=i-2; j2++) {
        c += " "
    }
    for (let j3 = 1; j3 <=i-1; j3++) {
        d += " "
    }
    if (i != 1) {
        e += "*"
    }
    for (let j4 = 1; j4 <=6-i; j4++) {
        f += "-"
    }
    console.log(a+b+c+d+e+f)
    if (i == 6) {
        for (let i2 = 1; i2 <=i-1; i2++) {
            var a2 = ""
            var b2 = ""
            var c2 = ""
            var d2 = ""
            var e2 = ""
            var f2 = ""
            for (let j = 1; j <=i2; j++) {
                a2 += "-" 
            }
            b2 += "*"
            for (let j2 = 1; j2 <=5-i2; j2++) {
                c2 += " "
            }
            for (let j3 = 1; j3 <=5-i2-1; j3++) {
                d2 += " "
            }
            if (i2 != 5 ) {
                e2 += "*"
            }
            for (let j4 = 1; j4 <=i2; j4++) {
                f2 += "-"
            }
            console.log(a2+b2+c2+d2+e2+f2)
        }
    }
}