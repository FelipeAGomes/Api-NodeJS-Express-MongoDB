import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
    .get("/livros", LivroController.listarLivros)
    .get("/livros/busca", LivroController.listarLivroPorEditora) // busca personalizada precisa esta acima da busca de id, pq o sistema vai identificar o parametro como id.(A busca mais especifica precisa ficar acima)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .get("/livros/:id", LivroController.listarLivroPorId)
    .delete("/livros/:id", LivroController.excluirLivro)
    
export default router;