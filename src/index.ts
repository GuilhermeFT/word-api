import Fastify from "fastify"
import { routes } from "./routes"

const fastify = Fastify({
  logger: true,
})

fastify.register(routes, { prefix: "/api" })

fastify.listen({ port: 3333 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
