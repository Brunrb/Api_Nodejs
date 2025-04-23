import { createTaskController } from "#controllers/tasks/create.js";
import { defineRoutes } from "#functions/utils.js";
import { getAllTasksController } from "./get.js";
export default defineRoutes(app => {
    app.get("/", getAllTasksController);
    app.post("/", createTaskController);
});
