import { ListOfItems, TextSubHeader } from "../../common";

import "./singlePropertiesTemplate.scss";

const data = [
    { id: "", name: "Материал", value: "Керамогр." },
    { id: "", name: "Морозоустойчивость", value: "Да" },
    { id: "", name: "Влагопоглощаемость", value: "BIa ≤ 0,5%" },
    { id: "", name: "Вариативность", value: "V2" },
    { id: "", name: "Тональность:", value: "выраженн." },
    { id: "", name: "Фабричный цвет", value: "" },
    { id: "", name: "Отр. поверхности", value: "Матовая" },
    { id: "", name: "Обработка", value: "Нат Рект" },
    { id: "", name: "Толщина мм.", value: "10" },
    { id: "", name: "В упаковке [шт]", value: "5" },
    { id: "", name: "М2 в упаковке", value: "0.97" },
    { id: "", name: "Вес упаковки", value: "21" },
    { id: "", name: "Вес 1 шт.", value: "4.2" },
    { id: "", name: "Вес 1 кв.м.", value: "21.65" },
    { id: "", name: "Площадь плитки", value: "0.194" },
    { id: "", name: "Кор. на паллете", value: "63" },
    { id: "", name: "М2 в палетте", value: "61.11" },
    { id: "", name: "Кг. в палетте", value: "1323" },
    { id: "", name: "Устойч. к пятнам", value: "Класс 4" },
];

const SinglePropertiesTemplate = () => {
    return (
        <div className="singlePropertiesTemplate">
            <div className="singlePropertiesTemplate__name text-secondary">
                Atlas Conc. 60x60
            </div>
            <TextSubHeader text={"Список свойств:"} className={"mt-3"} />
            <ul>
                <ListOfItems dividerMargin={10} data={data} />
            </ul>
        </div>
    );
};

export default SinglePropertiesTemplate;
