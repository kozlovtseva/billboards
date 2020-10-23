import React from "react";

import { ListItemTypes } from "../interfaces/data";
import {
    Theme,
    createStyles,
    makeStyles,
    withStyles,
} from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ArrowForwardRoundedIcon from "@material-ui/icons/ArrowForwardRounded";

import BillBoardsItem from "./BillBoardsItem";

interface Props {
    billBoards: BillBoards[];
}
interface BillBoards {
    type: string;
    amount: number;
    items: ListItemTypes[];
}
const useStyles = makeStyles((theme: Theme) =>
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
                <Accordion key={index}>
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
                        <ul>
                            {item.items.map((item: ListItemTypes) => (
                                <BillBoardsItem item={item} key={item.id} />
                            ))}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
};

export default BillBoardsList;
