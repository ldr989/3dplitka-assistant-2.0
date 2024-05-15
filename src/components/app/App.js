import AppHeader from "../appHeader/AppHeader";
import AddImages from "../addImages/AddImages";
import ImagesAddForm from "../imagesAddForm/ImagesAddForm";
import Divider from "../divider/Divider";

import "./app.css";

function App() {
    return (
        <div className="app">
            <div className="container">
                <AppHeader />
                <main>
                    <AddImages
                        h2Header={"Коллекции:"}
                        h3Header={"Фото интерьеров"}
                        Form={ImagesAddForm}
                    />
                    <Divider />
                    <AddImages
                        h2Header={"Плитки:"}
                        h3Header={"Лица"}
                        Form={ImagesAddForm}
                    />
                    <AddImages
                        h2Header={""}
                        h3Header={"Изображения"}
                        Form={ImagesAddForm}
                    />
                </main>
            </div>
        </div>
    );
}

export default App;
