import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    tasks: [{ id: "ff234f", nameTask: "zrobic cos", completed: false }],
};

const reducer = (state = initialState, action) => {
    return state;
};

const enhancer = devToolsEnhancer();

export const store = createStore(reducer, enhancer);
