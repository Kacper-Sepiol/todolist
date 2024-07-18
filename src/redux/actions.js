import { nanoid } from "nanoid";

export const addTask = (nameTask) => {
    return {
        type: "addTask/tasks",
        payload: {
            id: nanoid(),
            nameTask: nameTask,
            completed: false,
        },
    };
};

export const removeTask = (idTask) => {
    return {
        type: "removeTask/tasks",
        payload: idTask,
    };
};
