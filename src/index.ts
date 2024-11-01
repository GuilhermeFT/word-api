import Fastify, { FastifyInstance, FastifyPluginAsync } from "fastify"

const fastify = Fastify({
  logger: true,
})

fastify.listen({ port: 3333 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})

export const fastifyApp: FastifyPluginAsync = async (
  fastify: FastifyInstance
) => {
  fastify.get("/", (request, reply) => {
    reply.send({ hello: "world" })
  })
}
