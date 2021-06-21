var total = 7;

for (let i = 1; i <=total; i++) {
    var a = ""
    var b = ""
    var c = ""
    for (let k = 1; k <=i; k++) {
        a += " "
    }
    for (let j = 1; j <=total - i; j++) {
        b += "*"
        if (j >= 4) {
            for (let e = 1; e <=j/4; e++) {
                c += "*"
            }
        } else {
            for (let e = 1; e <=j/2; e++) {
                c += "*"
            }
        }
    }
        console.log(a+b+c)
}