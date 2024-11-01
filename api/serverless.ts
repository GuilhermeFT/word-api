import Fastify from "fastify"
import { routes } from "../src/routes/index"

const fastify = Fastify({
  logger: false,
})

fastify.register(routes)

export default async (req: Request, res: Response) => {
  await fastify.ready()
  fastify.server.emit("request", req, res)
}
