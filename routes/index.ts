import { FastifyInstance } from "fastify";
export default async (
  server: FastifyInstance,
) => {
  server.get("/", {}, async (request, reply) => {
    return reply.code(200).send({ message: "hello" });
  });
  // server.register(translate, { prefix: "/translate" });
};
