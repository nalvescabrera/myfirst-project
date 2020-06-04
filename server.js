const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient 
const uri = "<!-- insira aqui o caminho para seu BD -->"

app.use(bodyParser.urlencoded({extended:true}))

app.listen(3000,function(){
    console.log('Server rodando na porta 3000')
})

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.set('view engine','ejs')

app.post('/adicionaPerfil',function(req,res){
    console.log(req.body)
});     

MongoClient.connect(uri, (err, client) => {
    // ... start the server
  })
