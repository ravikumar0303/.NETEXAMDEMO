function Person(name,age,gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.show_details=()=>{
        console.log(this)
    }
}

var p1 = new Person('J',26,'M')
console.log(p1)
p1.show_details()