import AddImages from "../../addImages/AddImages";
import ImagesAddForm from "../../imagesAddForm/ImagesAddForm";
import Divider from "../../divider/Divider";

const ImagesPage = () => {
    return (
        <>
            <AddImages
                header={"Коллекции:"}
                subHeader={"Фото интерьеров"}
                Form={ImagesAddForm}
            />
            <Divider />
            <AddImages
                header={"Плитки:"}
                subHeader={"Лица"}
                Form={ImagesAddForm}
            />
            <AddImages
                header={""}
                subHeader={"Изображения"}
                Form={ImagesAddForm}
            />
        </>
    );
};

export default ImagesPage;
