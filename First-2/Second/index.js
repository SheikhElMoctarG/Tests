for (let i = 1; i <=7; i++) {
    var a = ""
    var b = ""
    var c = ""
    for (let j = 1; j <=7-i; j++) {
        a += " "
    }
    for (let k = 1; k <=i; k++) {
        b += "*"
        if(k >= 4){
        for (let e = 1; e <=k/4; e++) {
            c += "*"
        }}
        else{
            for (let e = 1; e <=k/2; e++) {
                c += "*"
            }
        }
    }
    console.log(a+b+c)
}