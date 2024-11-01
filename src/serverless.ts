import Fastify from "fastify"
import { fastifyApp } from "."

const fastify = Fastify({
  logger: false,
})

fastify.register(fastifyApp)

export default async (req: Request, res: Response) => {
  fastify.ready()
  fastify.server.emit("request", req, res)
}
