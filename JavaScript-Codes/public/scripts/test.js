var x = ""+1
var y = ""+2
console.log(parseInt(x)+parseInt(y))
console.log(Math.random())
var a = [1,2,3,4,5]
var Person = [{name:'J',age:25,gender:'M'},{name:'K',age:25,gender:'M'}]
for(x of Person){
    for(y in x){
        console.log(x[y])
    }
    console.log(x)
}
console.log(/e/.test('hello'))
console.log("  sv  ".trim())
console.log(/@/.test('asd@caa.jhj'))
console.log(/./.test('asd@caa.jhj'))