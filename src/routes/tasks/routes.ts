import { createTaskController } from "#controllers/tasks/create.js";
import { defineRoutes } from "#functions/utils.js";

export default defineRoutes(app => {
    app.post("/", createTaskController);
});