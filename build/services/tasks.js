import { db } from "#database";
async function exists(id) {
    return await db.tasks.has(id);
}
async function getTaskId(id) {
    return await db.tasks.get(id);
}
async function getAllTasks() {
    const data = await db.tasks.all();
    return data.map(({ value }) => value);
}
async function createTask(data) {
    const createdAt = new Date();
    const id = createdAt.getTime().toString();
    const status = "pending";
    return await db.tasks.set(id, {
        ...data, id, status, createdAt
    });
}
async function updateTask(id, data) {
    const task = await getTaskId(id);
    return await db.tasks.set(id, {
        ...task, ...data
    });
}
async function deleteTask(id) {
    return await db.tasks.delete(id);
}
export const tasksService = {
    exists,
    getById: getTaskId,
    getAll: getAllTasks,
    create: createTask,
    update: updateTask,
    delete: deleteTask
};
