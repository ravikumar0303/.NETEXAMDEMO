var express = require('express');
//for file io operations
var fs = require('fs');
var path = require('path');
// to convert post request json to string
const bodyParser = require('body-parser');

var prime = require(__dirname+'/public/scripts/Prime.js')
var calculator = require(__dirname+'/public/scripts/calculator.js')
var app = express()
var _dir = __dirname+"/public/"

app.use(express.static('public'))
app.use(bodyParser.json())


app.use(bodyParser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    
	res.sendFile(_dir+'login.html')
})
app.post('/login',(req,res)=>{
	
	if(req.body.username==="Jeremy" && req.body.password==="Jeremy"){
		res.redirect('./home')
	}
	else{
		res.redirect('/')
	}
})
app.get('/home',(req,res)=>{
	res.sendFile(_dir+'hello.html')
})
app.get('/form',(req,res)=>{
	res.sendFile(_dir+'form.htm')
})
app.post('/formend',(req,res)=>{
	console.log(JSON.stringify(req.body));
	res.redirect('./form');
})
app.get('/games',(req,res)=>{
	res.sendFile(_dir+'games.html');
})
app.get('/game',(req,res)=>{
	res.sendFile(_dir+'bouncingball.html');
})
app.get('/game2',(req,res)=>{
	res.sendFile(_dir+'boxgame.html');
})
app.get('/number',(req,res)=>{
	res.sendFile(_dir+'numops.html');
})
// Prime numbers program
app.get('/prime',(req,res)=>{
	res.sendFile(_dir+'prime.html');
})
app.post('/prime',(req,res)=>{
    res.send(prime(req.body.num))
})
// Calculator Program
app.get('/calculator',(req,res)=>{
	res.sendFile(_dir+'calculator.html');
})
app.post('/calculator',(req,res)=>{
	res.send(calculator(parseInt(req.body.num1),parseInt(req.body.num2),req.body.op));
})
//Currency converter program
app.get('/currency',(req,res)=>{
    res.sendFile(_dir+'currency.html');
})
app.get('/arrays',(req,res)=>{
    res.sendFile(_dir+'array.html');
})
app.get('/dates',(req,res)=>{
    res.sendFile(_dir+'dates.html');
})
app.listen(9000,()=>{console.log("Listening at port 9000")})