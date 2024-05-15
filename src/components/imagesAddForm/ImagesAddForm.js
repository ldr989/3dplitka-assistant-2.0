import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

import "./imagesAddForm.scss";

const Schema = Yup.object().shape({
    amount: Yup.number()
        .typeError("Введите число")
        .min(1, "это слишком мало :)")
        .max(50, "Воу воу палегше, не больше 50!")
        .required("Введите колличество"),
});

const ImagesAddForm = () => {
    return (
        <Formik
            initialValues={{
                amount: "",
            }}
            validationSchema={Schema}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form className="imagesAddForm">
                    <div className="imagesAddForm__controls input-group-sm">
                        <Field className="form-control" name="amount" />
                        <button className="btn btn-primary" type="submit">
                            Добавить
                        </button>
                    </div>

                    {errors.amount && touched.amount ? (
                        <div className="imagesAddForm__error text-danger">
                            {errors.amount}
                        </div>
                    ) : null}
                </Form>
            )}
        </Formik>
    );
};

export default ImagesAddForm;
