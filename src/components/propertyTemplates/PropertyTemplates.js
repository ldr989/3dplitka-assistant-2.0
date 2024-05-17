/* eslint-disable jsx-a11y/anchor-is-valid */
import Divider from "../divider/Divider";
import TextHeader from "../textHeader/TextHeader";
import TextSubHeader from "../textSubHeader/TextSubHeader";
import ListItemBtnsGroup from "../listItemBtnsGroup/ListItemBtnsGroup";
import TemplateAddForm from "../templateAddForm/TemplateAddForm";

import "./propertyTemplates.scss";

const PropertyTemplates = () => {
    return (
        <div className="propertyTemplates">
            <TextHeader text={"Шаблоны:"} className={"text-primary"} />
            <TextSubHeader text={"Список шаблонов:"} className={"mt-3"} />
            <div className="propertyTemplates__list">
                <ul>
                    <Divider margin={10} />
                    <li>
                        <div className="propertyTemplates__item">
                            <a href="#">Italon Керамогранит 60x120</a>
                        </div>
                        <ListItemBtnsGroup
                            editFunc={() => console.log("Элемент изменен")}
                            deleteFunc={() => console.log("Элемент удален")}
                        />
                    </li>
                    <Divider margin={10} />
                    <li>
                        <div className="propertyTemplates__item">
                            <a href="#">Atlas Concorde 60x60 lev</a>
                        </div>
                        <ListItemBtnsGroup
                            editFunc={() => console.log("Элемент изменен")}
                            deleteFunc={() => console.log("Элемент удален")}
                        />
                    </li>
                    <Divider margin={10} />
                    <li>
                        <div className="propertyTemplates__item">
                            <a href="#">Casalgrande padana 120x278 matt</a>
                        </div>
                        <ListItemBtnsGroup
                            editFunc={() => console.log("Элемент изменен")}
                            deleteFunc={() => console.log("Элемент удален")}
                        />
                    </li>
                    <Divider margin={10} />
                    <li>
                        <div className="propertyTemplates__item">
                            <a href="#">Laparet Appolon 60x120 carving</a>
                        </div>
                        <ListItemBtnsGroup
                            editFunc={() => console.log("Элемент изменен")}
                            deleteFunc={() => console.log("Элемент удален")}
                        />
                    </li>
                </ul>
                <TemplateAddForm />
                <Divider margin={10} />
                <div className="btn btn-sm btn-primary">Добавить</div>
            </div>
        </div>
    );
};

export default PropertyTemplates;
