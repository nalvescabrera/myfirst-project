const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://172.20.0.2:27017/";

MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)
    db = client.db("bd_perfils")
    
    app.listen(3000,()=>{
        console.log("Rodando porta 3000")
        })
    })

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/',(req,res)=>{
    //res.render('index.ejs')
    let cursor = db.collection('perfil').find()
})



app.get('/adicionaPerfil', (req, res) => {
    db.collection('perfil').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('adicionaPerfil.ejs', { perfil: results })

    })
})


    app.post('/adicionaPerfil',(req,res)=>{
        db.collection('perfil').save(req.body,(err,result)=>{
            if(err) return console.log(err)

            console.log('Salvo no banco de dados')
            res.redirect('/')
            
        })
    })