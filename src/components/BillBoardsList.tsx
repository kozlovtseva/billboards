import React from "react";

import { ListItemTypes } from "../interfaces/data";
import { createStyles, makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

import BillBoardsItem from "./BillBoardsItem";

interface Props {
    billBoards: BillBoards[];
    setGroup: (groupIndex: number) => void;
}
interface BillBoards {
    type: string;
    amount: number;
    items: ListItemTypes[];
}
const useStyles = makeStyles(() =>
    createStyles({
        root: {
            height: "100vh",
            left: 0,
            top: 0,
            overflow: "scroll",
            position: "absolute",
            zIndex: 2,
            width: "350px",
        },
        button: {
            backgroundColor: "#2196f3",
            border: "none",
            borderRadius: "4px",
            color: "#fff",
            cursor: "pointer",
            display: "block",
            height: "30px",
            lineHeight: "30px",
            margin: "15px auto",
        },
    })
);
const CssAccordionSummary = withStyles({
    root: {
        "& .MuiAccordionSummary-expandIcon.Mui-expanded": {
            transform: "rotate(90deg)",
        },
    },
})(AccordionSummary);

const BillBoardsList = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {props.billBoards.map((item: BillBoards, index: number) => (
                <Accordion
                    key={index}
                    onChange={(event: any, expanded: boolean) => {
                        if (expanded) props.setGroup(index);
                    }}
                >
                    <CssAccordionSummary
                        expandIcon={<ArrowForwardRoundedIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>
                            {item.type} - {item.amount}
                        </Typography>
                    </CssAccordionSummary>
                    <AccordionDetails>
                        <div>
                            <ul>
                                {item.items.map((item: ListItemTypes) => (
                                    <BillBoardsItem item={item} key={item.id} />
                                ))}
                            </ul>
                            <button className={classes.button} type="button">
                                Заказать этот блок
                            </button>
                        </div>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default BillBoardsList;
