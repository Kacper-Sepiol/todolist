import { addTask } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from "./Form.module.css";

export const Form = () => {
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const nameTask = form.elements.nameTask.value;

        dispatch(addTask(nameTask));

        form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit} className={style.form}>
                <input
                    type="nameTask"
                    name="nameTask"
                    required
                    className={style.form__input}
                />
                <button type="submit" className={style.form__button}>
                    Utworz
                </button>
            </form>
        </>
    );
};
