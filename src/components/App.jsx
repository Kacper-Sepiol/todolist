import style from "./App.module.css";
import { Main } from "./Main/Main";

export const App = () => {
    return (
        <div className={style.background}>
            <Main />
        </div>
    );
};
