import { useSelector } from "react-redux";

export const Task = () => {
    const tasks = useSelector((state) => state.tasks);

    return (
        <ul>
            {tasks.map((task) => (
                <div key={task.id}>
                    <h3>Name task: {task.nameTask}</h3>
                    <p>
                        completed
                        <input type="checkbox" name="completedTask" />
                    </p>
                </div>
            ))}
        </ul>
    );
};
