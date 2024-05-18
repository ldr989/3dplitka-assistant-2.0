/* eslint-disable jsx-a11y/anchor-is-valid */
import { Divider, TextSubHeader, ListOfItems } from "../../common";
import { TemplateAddForm } from "../../forms";

import "./propertyTemplatesList.scss";

const data = [
    { id: "", name: "Italon Керамогранит ", value: "21 шт" },
    { id: "", name: "Atlas Conc. 60x60", value: "11 шт" },
    { id: "", name: "Casalgrande padana", value: "15 шт" },
    { id: "", name: "Laparet Appolon", value: "13 шт" },
    { id: "", name: "Керамогранит", value: "19 шт" },
    { id: "", name: "Настенная плитка", value: "16 шт" },
];

const PropertyTemplatesList = () => {
    return (
        <div className="propertyTemplates">
            <TextSubHeader text={"Список шаблонов:"} className={"mt-3"} />
            <div className="propertyTemplates__list">
                <ul>
                    <ListOfItems dividerMargin={10} data={data} />
                </ul>
                <TemplateAddForm />
                <Divider margin={10} />
                <div className="btn btn-sm btn-primary">Добавить</div>
            </div>
        </div>
    );
};

export default PropertyTemplatesList;
