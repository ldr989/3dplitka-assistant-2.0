import "./addImages.scss";

const AddImages = ({ h2Header, h3Header, Form }) => {
    return (
        <div className="addImages mt-3">
            <h6 className="text-primary">{h2Header}</h6>
            <div className="addImages__subheader mt-3">{h3Header}</div>
            <Form />
        </div>
    );
};

export default AddImages;
