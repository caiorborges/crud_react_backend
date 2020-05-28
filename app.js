const express = require ("express");
const app = express();

app.use ( require('cors')(), express.json());

var users = Array();

app.get ("/users", function(request, response){
    response.send(users);
})

app.post("/users", function(request, response){
    
    let user = request.body;
    users.push(user);

    response.send ({"success" : "ok"});
})

app.listen(8081, function(){
    console.log("Servido rodando -> localhost:8081")
});