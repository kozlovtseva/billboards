import React from "react";

import { ListItemTypes } from "../interfaces/data";

interface Props {
    item: ListItemTypes;
}

const BillBoardsItem: React.FC<Props> = (props: Props) => {
    return <li>{props.item.adress + " - " + props.item.count_stands}</li>;
};

export default BillBoardsItem;
