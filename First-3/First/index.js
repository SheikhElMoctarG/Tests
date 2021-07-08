for (let i = 1; i <=6; i++) {
    var a = ""
    var b = ""
    var c = ""
    var d = ""
    var e = ""
    for (let j = 1; j <=6-i; j++) {
        a += " "
    }
    b += "*"
    for (let j2 = 1; j2 <=i-1; j2++) {
        c += "*"
    }
    for (let j3 = 1; j3 <=i/1-2; j3++) {
        d += "*"
    }
    if (i != 1) {
        e += "*"
    }
    console.log(a+b+c+d+e)
    if (i == 6) {
        for (let i2 = 1; i2 <=i-1; i2++) {
            var a2 = ""
            var b2 = ""
            var c2 = ""
            var d2 = ""
            var e2 = ""
            for (let j2 = 1; j2 <=i2; j2++) {
                a2 += " "
            }
            b2 += "*"
            for (let j3 = 1; j3 <=i-i2-1; j3++) {
                c2 += "*"
            }
            for (let j4 = 1; j4 <=i-i2-2; j4++) {
                d2 += "*"
            }
            if (i2 != 5) {
                e2 += "*"
            }
            console.log(a2+b2+c2+d2+e2)
        }
    }
}