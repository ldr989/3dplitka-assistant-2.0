// import classNames from "classnames";
import "./appHeader.scss";
const AppHeader = () => {
    return (
        <header className="app__header">
            <div className="tabs">
                <button className="btn-tab btn-tab--active">
                    <p>Работа с картинками</p>
                </button>
                <button className="btn-tab">
                    <p>Работа со свойствами</p>
                </button>
            </div>
        </header>
    );
};

export default AppHeader;
