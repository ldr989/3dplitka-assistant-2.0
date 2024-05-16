import "./textSubHeader.scss";

const TextSubHeader = ({ text, className }) => {
    return <div className={`textSubheader ${className}`}>{text}</div>;
};

export default TextSubHeader;
