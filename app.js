const express = require ("express");
const app = express();

app.use (require('cors') () );



app.get ("/", function(req,res){
    res.send("Seja bem vindo ao meu servidor!");
})

app.post("/cadastro", function(req,res){
    console.log(req);
    let obj={"resp":"Ok"}
    res.send (obj);
})

app.listen(8081, function(){
    console.log("Servido rodando -> localhost:8081")
});