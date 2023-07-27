function Class1(x){
    this.x = x;
    this.f1=()=>{
       return x*x 
    }
}

function Class2(){
    this.f2=(x)=>{
        return x*x*x
    }
}

function Class3(){
    this.f3=(x)=>{
        return x*x*x*x
    }
}

Class2.prototype = new Class3()
Class1.prototype = new Class2()
let obj = new Class1(4)

console.log(obj.f1())
console.log(obj.f2(5))
console.log(obj.f3(3))
console.log(obj)
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj)))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(obj))))
let d1 = new Date()
let d2 = new Date()
console.log(d1)
console.log(Object.getPrototypeOf(d2))

Class1.prototype.f4 = (x)=>{
    return x*11
}

console.log(obj.f4(5))
console.log(obj)
console.log(Object.getPrototypeOf(obj))
console.log(Object.getPrototypeOf(Object.getPrototypeOf(obj)))

Date.prototype.sayMyName = ()=>{
    return "Heisenberg"
}

console.log(d1.sayMyName())
console.log(Object.getPrototypeOf(new Date()))