let a = +prompt ('Введите число')
let b = +prompt ('Введите степень')

let c = a
for(let i = 1;i < b; i++) {
    c = c * a
}
alert(c)