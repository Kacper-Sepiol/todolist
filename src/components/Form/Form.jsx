import { addTask } from "../../redux/actions";
import { useDispatch } from "react-redux";

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
            <form onSubmit={handleSubmit}>
                <p>Nazwa zadania</p>
                <input type="nameTask" name="nameTask" required />
                <button type="submit">Utworz</button>
            </form>
        </>
    );
};
