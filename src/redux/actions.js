import { nanoid } from "nanoid";

export const addTask = (nameTask) => {
    return {
        type: "tasks/addTask",
        payload: {
            id: nanoid(),
            nameTask: nameTask,
            completed: false,
        },
    };
};

export const removeTask = (idTask) => {
    return {
        type: "tasks/removeTask",
        payload: idTask,
    };
};

export const changeStatus = (idTask) => {
    return {
        type: "tasks/changeStatus",
        payload: idTask,
    };
};
