import { FastifyInstance } from "fastify"
import { TodosController } from "../controllers/todos.controller"
import { todoSchema } from "../validator/todo_validator"


export default function TodosRoute(app: FastifyInstance) {
    const todosController = new TodosController()

    app.get("/todo", todosController.getDataTodos)
    app.post("/create-todo", { schema: todoSchema }, todosController.postDataTodos)
}