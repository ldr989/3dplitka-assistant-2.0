import "./listItemBtnsGroup.scss";
const ListItemBtnsGroup = ({ editFunc, deleteFunc }) => {
    return (
        <div className="listItemBtnsGroup">
            <button
                onClick={editFunc}
                className="btn btn-sm btn-primary listItemBtnsGroup--edit"
                style={{ fontSize: "0.6rem" }}
            >
                Изменить
            </button>
            <button
                onClick={deleteFunc}
                className="btn btn-sm btn-danger listItemBtnsGroup--delete"
                style={{ fontSize: "0.6rem" }}
            >
                Удалить
            </button>
        </div>
    );
};

export default ListItemBtnsGroup;
