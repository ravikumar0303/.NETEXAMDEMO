function Person(name,age,gender){
    this.name = name;
    this.age = age ;
    this.gender = gender;

    this.details = ()=>{
        return 'Name : '+this.name + ' Age  : '+ this.age + ' Gender : ' + this.gender ;
    }
}

