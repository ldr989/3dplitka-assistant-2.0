import { Formik, Form, Field } from "formik";

import "./simpleAddForm.scss";

const SimpleAddForm = ({
    initialValues,
    validationSchema,
    submitFunc,
    fieldName,
    submitBtnText,
    additionalBtn = false,
    additionalBtnText,
    additionalBtnFunc,
}) => {
    const cancelBtn = additionalBtn ? (
        <button
            onClick={additionalBtnFunc}
            className="btn btn-secondary"
            type="button"
        >
            {additionalBtnText}
        </button>
    ) : null;

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submitFunc}
        >
            {({ errors, touched }) => (
                <Form className="simpleAddForm">
                    <div className="simpleAddForm__controls input-group-sm">
                        <Field className="form-control" name={fieldName} />
                        <button className="btn btn-primary" type="submit">
                            {submitBtnText}
                        </button>
                        {cancelBtn}
                    </div>

                    {errors[fieldName] && touched[fieldName] ? (
                        <div className="simpleAddForm__error text-danger">
                            {errors[fieldName]}
                        </div>
                    ) : null}
                </Form>
            )}
        </Formik>
    );
};

export default SimpleAddForm;
