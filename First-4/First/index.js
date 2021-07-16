for (let i = 1; i <=9; i++) {
    var a = ""
    if (i == 1) {
        a += " "
    } else {
        a += "*"
    }
    for (let o = 1; o <=9; o++) {
        if (o ==i && o !=1) {
            a += "  "
        } else if(o!=1){
            a += " *"
        }
    }
    console.log(a)
}