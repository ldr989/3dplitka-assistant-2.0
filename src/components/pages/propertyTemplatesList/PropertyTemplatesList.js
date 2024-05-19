/* eslint-disable jsx-a11y/anchor-is-valid */
import { TextSubHeader, ListOfItems } from "../../common";
import { TemplateAddForm } from "../../forms";

import "./propertyTemplatesList.scss";

const data = [
    { id: "", name: "Italon Керамогранит ", value: "21 свойств" },
    { id: "", name: "Atlas Conc. 60x60", value: "11 свойств" },
    { id: "", name: "Casalgrande padana", value: "15 свойств" },
    { id: "", name: "Laparet Appolon", value: "13 свойств" },
    { id: "", name: "Керамогранит", value: "19 свойств" },
    { id: "", name: "Настенная плитка", value: "16 свойств" },
];

const PropertyTemplatesList = () => {
    return (
        <div className="propertyTemplates">
            <TextSubHeader text={"Список шаблонов:"} className={"mt-3"} />
            <div className="propertyTemplates__list">
                <ListOfItems
                    dividerMargin={10}
                    data={data}
                    nameTittle={"Название шаблона"}
                    valueTittle={"Колличество свойств"}
                />
                <TemplateAddForm />
            </div>
        </div>
    );
};

export default PropertyTemplatesList;
