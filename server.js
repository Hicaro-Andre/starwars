// Carrega as variáveis de ambiente do arquivo .env (DEVE ser a primeira linha)
require('dotenv').config();

// Importa o framework Express para criar o servidor
const express = require('express')
const app = express()

// Inicia o servidor na porta 3000
app.listen(3000, function(){
  console.log('listening on 3000')
})

// Middleware para processar dados de formulários HTML
app.use(express.urlencoded({ extended: true }))

// Rota GET para a página inicial que envia o arquivo index.html
app.get('/' ,(req, res) =>{
  res.sendFile(__dirname + '/index.html')
})

// Rota POST para receber dados do formulário
app.post("/quotes" , (req, res) => {
  console.log(req.body)
})