import "./textHeader.scss";
const TextHeader = ({ text, className }) => {
    return <h6 className={`mainTextHeader ${className}`}>{text}</h6>;
};

export default TextHeader;
