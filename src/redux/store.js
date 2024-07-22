import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    tasks: [{ id: "ff234f", nameTask: "zrobic cos", completed: false }],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "tasks/addTask": {
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
        }
        case "tasks/removeTask": {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            };
        }
        case "tasks/changeStatus": {
            return {
                ...state,
                tasks: state.tasks.map((task) => {
                    if (task.id === action.payload) {
                        return {
                            ...task,
                            completed: !task.completed,
                        };
                    }
                    return task;
                }),
            };
        }
        default:
            return state;
    }
};

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
