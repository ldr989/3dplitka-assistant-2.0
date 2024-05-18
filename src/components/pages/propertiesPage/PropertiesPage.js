import PropertyTemplatesList from "../propertyTemplatesList/PropertyTemplatesList";
import SinglePropertiesTemplate from "../singlePropertiesTemplate/SinglePropertiesTemplate";
import { TextHeader } from "../../common";

const PropertiesPage = () => {
    return (
        <>
            <TextHeader text={"Шаблоны:"} className={"text-primary"} />
            <PropertyTemplatesList />
            <SinglePropertiesTemplate />
        </>
    );
};

export default PropertiesPage;
