import { createTaskController } from "#controllers/tasks/create.js";
import { defineRoutes } from "#functions/utils.js";
import { getAllTasksController, getByIdTasksController } from "#controllers/tasks/get.js";
import { updateTaskController } from "#controllers/tasks/update.js";

export default defineRoutes(app => {
    app.get("/", getAllTasksController);
    app.post("/", createTaskController);
    app.get("/:id", getByIdTasksController);
    app.patch("/:id", updateTaskController);
});