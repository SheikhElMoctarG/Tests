for (let i = 1; i <=6; i++) {
    var a = ""
    var b = ""
    for (let j = 1; j <=6-i; j++) {
        a += " "
    }
    for (let j2 = 1; j2 <=i; j2++) {
        b += "*"
        if (j2 <=3 ) {
            for (let e = 1; e <=j2/2; e++) {
                b += "*"
            }
        } else {
            for (let e = 1; e <=j2/4; e++) {
                b += "*"
            }
        }

    }
    console.log(a+b)
    if (i == 6) {
        for (let i2 = 1; i2 <=i; i2++) {
            var a2 = ""
            var b2 = ""
            for (let j3 = 1; j3 <=i2; j3++) {
                a2 += " "
            }
            for (let j4 = 1; j4 <=i-i2; j4++) {
                b2 += "*"
                if (j4 <=3 ) {
                 for (let e = 1; e <=j4/2; e++) {
                    b2 += "*"
                 }
                } else {
                 for (let e = 1; e <=j4/4; e++) {
                    b2 += "*"
                 }
                }
    }
    console.log(a2+b2)

 }
}
}