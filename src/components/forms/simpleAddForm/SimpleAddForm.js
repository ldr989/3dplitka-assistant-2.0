import { Formik, Form, Field } from "formik";
import "./simpleAddForm.scss";

const submitBtn = (submitBtnText, fontSize = "") => {
    return (
        <button
            className="btn btn-primary"
            type="submit"
            style={{
                fontSize: fontSize === "" ? null : fontSize,
            }}
        >
            {submitBtnText}
        </button>
    );
};

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
    const btns = additionalBtn ? (
        <div className="simpleAddForm__btnGroup">
            {submitBtn(submitBtnText, "0.6rem")}
            <button
                onClick={additionalBtnFunc}
                className="btn btn-secondary"
                type="button"
                style={{ fontSize: "0.6rem" }}
            >
                {additionalBtnText}
            </button>
        </div>
    ) : (
        submitBtn(submitBtnText)
    );

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
                        {btns}
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
