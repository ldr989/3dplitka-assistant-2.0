/* eslint-disable jsx-a11y/anchor-is-valid */
import ListItemBtnsGroup from "../listItemBtnsGroup/ListItemBtnsGroup";

import "./listOfItems.scss";

const ListOfItems = ({ dividerMargin, data, nameTittle, valueTittle }) => {
    const getElement = (data) => {
        return data.map((item, i) => {
            const value = item.value;
            let shortenedValue = "";
            if (value && value.length > 10) {
                shortenedValue = value.slice(0, 10) + "...";
            } else {
                shortenedValue = value;
            }
            const itemValue = item.value === "" ? "Пусто" : shortenedValue;

            return (
                <li key={i}>
                    <div className="listOfItems__wrapper">
                        <div className="listOfItems__item">
                            <div className="listOfItems__item__name">
                                {item.name}
                            </div>
                            <div className="listOfItems__item__value">
                                {itemValue}
                            </div>
                        </div>
                        <ListItemBtnsGroup
                            editFunc={() => console.log("Элемент изменен")}
                            deleteFunc={() => console.log("Элемент удален")}
                        />
                    </div>
                </li>
            );
        });
    };

    return (
        <div className="listOfItems">
            {/* <div className="listOfItems__wrapper">
                <div className="listOfItems__tittles">
                    <div className="listOfItems__tittles__name">
                        {nameTittle}
                    </div>
                    <div className="listOfItems__tittles__value">
                        {valueTittle}
                    </div>
                </div>
            </div> */}
            <ul>{getElement(data)}</ul>
            <div className="btn btn-sm btn-primary">Добавить</div>
        </div>
    );
};

export default ListOfItems;
