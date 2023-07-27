function Primes(num){
    this.num = num;
    var ret="";
    var flag;
    for(let i=2;i<num;i++){
        for(let j=2;j*j<=i;j++){
        flag=false;
            if(i%j==0){
                flag=true
                break;
            }
        }
        if(!flag){
            ret+= i+' '
        }
    }
    
    return `<link rel="stylesheet" href="css/output.css" type="text/css">
    <div class='output'>${ret}</div>`
    
}
module.exports = Primes