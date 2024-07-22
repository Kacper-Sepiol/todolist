import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeStatus } from "../../redux/actions";
import { removeTask } from "../../redux/actions";
import style from "./Task.module.css";

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
                <div key={task.id} className={style.task}>
                    <h3 className={style.task__text}>{task.nameTask}</h3>
                    <div className={style.button__box}>
                        <button
                            type="button"
                            onClick={handleClickForm}
                            className={style.buttons}
                            value={task.id}
                        >
                            completed
                        </button>
                        <button
                            type="button"
                            value={task.id}
                            onClick={handleClickButton}
                            className={style.buttons}
                        >
                            Usun
                        </button>
                    </div>
                </div>
            ))}
        </ul>
    );
};
