import * as Yup from "yup";
import SimpleAddForm from "../simpleAddForm/SimpleAddForm";

import "./templateAddForm.scss";

const Schema = Yup.object().shape({
    templateName: Yup.string()
        .min(2, "Слишком короткое название")
        .max(26, "Слишком длинное название")
        .required("Введите название"),
});

const initialValues = {
    templateName: "",
};

const foo = (values) => {
    console.log(values);
};

const bar = () => {
    console.log("Действие отменено");
};

const TemplateAddForm = () => {
    return (
        <SimpleAddForm
            initialValues={initialValues}
            validationSchema={Schema}
            submitFunc={foo}
            fieldName={"templateName"}
            submitBtnText={"Сохранить"}
            additionalBtn={true}
            additionalBtnText={"Отмена"}
            additionalBtnFunc={bar}
        />
    );
};

export default TemplateAddForm;
