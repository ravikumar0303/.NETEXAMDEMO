function Product1(name,cost,desc){
    this.pname = name;
    this.pcost = cost;
    this.pdesc = desc;
    this.showDetails=()=>{
        console.log(this)
    }
}

let p1 = new Product1('Bag',2300,'For Carrying Stuff')
console.log(p1)