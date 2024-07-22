import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/actions";
import { removeTask } from "../../redux/actions";

export const Task = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleClickForm = (event) => {
        dispatch(changeStatus(event.target.value));
    };

    const handleClickButton = (event) => {
        console.log(event.target.value);
        dispatch(removeTask(event.target.value));
    };

    return (
        <ul>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>Name task: {task.nameTask}</h3>
                    <p>
                        completed
                        <input
                            type="checkbox"
                            name="completedTask"
                            onClick={handleClickForm}
                            value={task.id}
                        />
                    </p>
                    <button
                        type="button"
                        value={task.id}
                        onClick={handleClickButton}
                    >
                        Usun
                    </button>
                </div>
            ))}
        </ul>
    );
};
