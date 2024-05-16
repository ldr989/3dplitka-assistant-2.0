import TextHeader from "../textHeader/TextHeader";
import TextSubHeader from "../textSubHeader/TextSubHeader";

const AddImages = ({ header, subHeader, Form }) => {
    const mainHeader =
        header !== "" ? (
            <TextHeader text={header} className={"text-primary"} />
        ) : null;
    return (
        <div className="addImages">
            {mainHeader}
            <TextSubHeader text={subHeader} className={"mt-3"} />
            <Form />
        </div>
    );
};

export default AddImages;
