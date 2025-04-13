import { defineRoutes } from "#functions/utils.js";
import { StatusCodes } from "http-status-codes";
export default defineRoutes(app => {
    app.get("/", (_req, repĺy) => {
        repĺy.status(StatusCodes.OK).send({
            message: "Hello world"
        });
    });
});
