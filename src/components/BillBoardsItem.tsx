import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { ListItemTypes } from "../interfaces/data";

interface Props {
    item: ListItemTypes;
}
const useStyles = makeStyles(() =>
    createStyles({
        listItem: {
            listStyle: "none",
        },
    })
);
const BillBoardsItem: React.FC<Props> = (props: Props) => {
    const classes = useStyles();
    return (
        <li className={classes.listItem}>
            {props.item.adress + " - " + props.item.count_stands}
        </li>
    );
};

export default BillBoardsItem;
