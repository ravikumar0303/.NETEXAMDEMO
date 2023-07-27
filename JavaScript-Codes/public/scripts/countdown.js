function countdown(count,fn){
    let set=false;
    down = ()=>{
        console.log('hello',count)
        if(count>=0){
            count = count - 1;
            
        }
        else{
            console.log("!!! Boom !!!")
            clearInterval(ct)
            set=true;
        }
    }
    let ct = setInterval(down,1000)
    if(set){
        return set;
    }
}

