calculator = (num1,num2,op)=>{
    switch(op){
        case '+': console.log(num1+num2)
                    break
        case '-': console.log(num1-num2)
                    break
        case '*': console.log(num1*num2)
                    break
        case '/': console.log(num1/num2)
                    break
        case '%': console.log(num1%num2)
                    break
        default : console.log('Enter valid operand')
    }
}
calculator(2,5,'%')