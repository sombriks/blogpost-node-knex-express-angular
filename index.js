/* módulos que usaremos */
var express = require("express");
var bodyParser = require("body-parser");
var knexfile = require("./knexfile");
var knex = require("knex")(knexfile.development);
/* garantindo que temos a versão mais recente do banco */
knex.migrate.latest();
/* referência ao express */
var app = express();
/* biblioteca para enviarmos e recebermos JSON no corpo das requisições */
app.use(bodyParser.json());
// listar mensagens
app.get("/mensagens",function(req,res){
  knex("mensagem").select().then(function(result){
    res.json(result);
  });
});
// salvar nova mensagem
app.post("/novamensagem",function(req,res){
  var novamsg = req.body;
  knex("mensagem").insert(novamsg,"idmensagem").then(function(retid){
    res.send("Mensagem salva - id: "+retid);
  });
});
// diretório de arquivos estáticos (client side)
app.use(express.static("public"));
// iniciando o servidor
app.listen(3000);
