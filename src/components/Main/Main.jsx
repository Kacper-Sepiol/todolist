import { Form } from "../Form/Form";
import { Task } from "../Tasks/Task";
import style from "./Main.module.css";

export const Main = () => {
    return (
        <main className={style.backgroundMain}>
            <h1 className={style.header__title}>Todo List</h1>
            <Form />
            <Task />
        </main>
    );
};
