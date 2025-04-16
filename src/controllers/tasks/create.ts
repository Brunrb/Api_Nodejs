import { CreateTaskSchema } from "#schemas/tasks.js";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

const schema = z.object({
    name: z.string().min(3)
}) satisfies z.ZodType<CreateTaskSchema>;

async function controller(req: FastifyRequest, reply: FastifyReply){
    const data = schema.parse(req.body);
}

export { controller as createTaskController}