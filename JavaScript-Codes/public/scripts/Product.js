class Product{
    constructor(pname,pcost,pdesc){
        this.pname = pname;
        this.pcost = pcost;
        this.pdesc = pdesc;
    }
    showDetails(){
        console.log(this)
    }
}

let p1 = new Product('Bag',2300,'For Carrying Stuff')
console.log(p1)