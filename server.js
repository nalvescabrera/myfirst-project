const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const ObjectId = require('mongodb').ObjectID;
const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb://172.20.0.2:27017/";
//"mongodb://172.20.0.2:27017/";

MongoClient.connect(uri, (err, client) => {
    if(err) return console.log(err)
    db = client.db("bd_perfils")
    
    app.listen(3000,()=>{
        console.log("Rodando porta 3000")
        })
    })

app.use(bodyParser.urlencoded({extended:true}))

app.set('view engine','ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.get('/',(req,res)=>{
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
            res.redirect('/adicionaPerfil')
            
        })
    })

    app.route('/edit/:id')
    .get((req,res) => {
        var id = req.params.id

        db.collection('perfil').find(ObjectId(id)).toArray((err,result)=>{
            if(err) return res.send(err)
            res.render('edit.ejs',{perfil:result})
        })

    })
    .post((req,res)=>{
        var id = req.params.id
        var name = req.body.name
        var surname = req.body.surname
        

        db.collection('perfil').updateOne({_id: ObjectId(id)},{
            $set:{
                name:name,
                surname:surname
                        
            }
        }, (err,result)=>{
            if(err) return res.send(err)
            res.redirect('/adicionaPerfil')
            console.log('Atualizado no Banco de Dados')
        })
     })

    app.route('/delete/:id')
    .get((req,res)=> {
        var id = req.params.id

        db.collection('perfil').deleteOne({_id:ObjectId(id)},(err,result)=>{
            if(err) return res.send(500,err)
            console.log('Deletado com sucesso do Banco de Dados!')
            res.redirect('/adicionaPerfil')
        })
    })