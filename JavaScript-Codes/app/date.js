var showAge=()=>{
    let d1 = new Date()
    let d2 = new Date(new Date().getFullYear(),d1.getMonth(),d1.getDate()).getDay()
    console.log(d2);
}
showAge()