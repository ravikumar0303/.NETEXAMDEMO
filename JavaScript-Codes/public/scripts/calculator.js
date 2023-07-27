calculator = (num1,num2,op)=>{
    let res = 0;
	switch(op){
        case '+': res =  (num1+num2)+' '
                    break;
        case '-': res = (num1-num2)+' '
                    break;
        case '*': res =  (num1*num2)+' '
                    break;
        case '/': res =  (num1/num2)+' '
                    break;
        case '%': res =  (num1%num2)+' '
                    break;
        default : return ('Enter valid operand')
    }
    return `<link rel="stylesheet" href="css/output.css" type="text/css">
            <div class='output'>${res}</div>`
}
module.exports = calculator