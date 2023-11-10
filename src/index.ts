import Fastify, { FastifyInstance } from "fastify"
import dotenv from "dotenv"
import TodosRoute from "./routes/todos.routes"

dotenv.config()
const fastify: FastifyInstance = Fastify();

const start = async () => {
    try {
        fastify.register(require("@fastify/cors"))
        fastify.register(require("@fastify/formbody"))
        fastify.register(require("@fastify/helmet"), { global: true })

        // Route
        TodosRoute(fastify)

        await fastify.listen({ port: Number(process.env.PORT) });
        console.log(`Server started at ${process.env.PORT}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();