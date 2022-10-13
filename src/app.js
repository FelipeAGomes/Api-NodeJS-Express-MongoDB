import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

//conexao com o mongodb
db.on("error", console.log.bind(console, 'Erro de conexāo'));
db.once("open", () => {
    console.log('Conexāo com o banco feita com sucesso')
});

const app = express();

//para tratar os dados recebidos em json pelo metodo post
app.use(express.json());

routes(app);

export default app;