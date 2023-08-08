import { FastifyInstance } from "fastify"
import { TodosController } from "../controllers/todos.controller"


export default function TodosRoute(app: FastifyInstance) {
    const todosController = new TodosController()
    
    app.get("/todo", todosController.getDataTodos)
    app.post("/create-todo", todosController.postDataTodos)
}