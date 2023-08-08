import { FastifyRequest, FastifyReply } from "fastify"

export class TodosController {
    public async getDataTodos(request: FastifyRequest, reply: FastifyReply) {
        return reply.send({
            data: [
                { id: 1, title: "Hey" },

                { id: 2, title: "Hey Two" }
            ]
        })
    }

    public async postDataTodos(request: FastifyRequest, reply: FastifyReply) {
        const todo = request.body
        return reply.send({
            formData: todo,
            message: "Success create todos"
        })
    }
}