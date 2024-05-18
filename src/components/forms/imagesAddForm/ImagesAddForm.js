import * as Yup from "yup";
import SimpleAddForm from "../simpleAddForm/SimpleAddForm";

import "./imagesAddForm.scss";

const Schema = Yup.object().shape({
    amount: Yup.number()
        .typeError("Введите число")
        .min(1, "это слишком мало :)")
        .max(50, "Это слишком много, не больше 50!")
        .required("Введите количество"),
});

const initialValues = {
    amount: "",
};

const foo = (values) => {
    console.log(values);
};

const ImagesAddForm = () => {
    return (
        <SimpleAddForm
            initialValues={initialValues}
            validationSchema={Schema}
            submitFunc={foo}
            fieldName={"amount"}
            submitBtnText={"Добавить"}
        />
    );
};

export default ImagesAddForm;
