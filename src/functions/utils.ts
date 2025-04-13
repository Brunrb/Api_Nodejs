import type { DefineRoutesHandler } from "#settings/types.js";
import type { FastifyInstance } from "fastify";

export function defineRoutes(handler: DefineRoutesHandler){
    return (app: FastifyInstance, _: {}, done: () => void) => {
        handler(app);
        done();
    }
}