/* eslint-disable jsx-a11y/anchor-is-valid */
// import classNames from "classnames";
import "./appHeader.scss";
const AppHeader = () => {
    return (
        <header className="app__header">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                        Работа с картинками
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active" href="#">
                        Работа со свойствами
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default AppHeader;
