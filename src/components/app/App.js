import AppHeader from "../appHeader/AppHeader";
import { Divider } from "../common";
import { PropertiesPage, ImagesPage } from "../pages";

import "./app.css";

function App() {
    return (
        <div className="app">
            <div className="container">
                <AppHeader />
                <main>
                    <PropertiesPage />
                    <Divider />
                    <ImagesPage />
                </main>
            </div>
        </div>
    );
}

export default App;
