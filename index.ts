import multipath from "@fastify/multipart";
import fastify from "fastify";
import routes from "~routes/index";

const app = fastify({
  logger: {
    level: "info",
    file: "./logger.log", // Will use pino.destination()
  },
});

app.setErrorHandler(async (error, request, reply) => {
  console.error(error);
  reply.status(500).send(error);
});
await Promise.all([
  app.register(multipath, {
    // addToBody: true,
    limits: {
      // fieldNameSize: 100, // Max field name size in bytes
      // fieldSize: 100, // Max field value size in bytes
      // fields: 10, // Max number of non-file fields
      // fileSize: 299 * 1024 * 1024, // 10 MB
      // files: 10, // Max number of file fields
      // headerPairs: 2000, // Max number of header key=>value pairs
    },
  }),
  app.register(routes),
]);

app.listen({ port: Number(process.env.PORT) || 4000, host: process.env.HOST }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
