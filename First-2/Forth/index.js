for (let i = 1; i <=6; i++) {
    var a = ""
    for (let j = 1; j <=i; j++) {
        a += "*"
    }
    console.log(a)
    if(i == 6){
        for (let e = 1; e <=i; e++) {
            var q = ""
            for (let u = 1; u <=i-e; u++) {
                q += "*"
            }
            console.log(q)
        }
    }
}