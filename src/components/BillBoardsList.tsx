import React from "react";

import { ListTypes, ListItemTypes } from "../interfaces/data";
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
    list: ListTypes;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: "100%",
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
    const makeList = (list: ListTypes | [] | undefined) => {
        if (list) {
            Object.entries(props.list).map(
                (value: [string, ListItemTypes[]], index: number) => {
                    let total = 0;
                    for (let i = 0; i < value[1].length; i++) {
                        total += value[1][i].count_stands;
                    }
                    return (
                        <Accordion key={index}>
                            <CssAccordionSummary
                                expandIcon={<ArrowForwardRoundedIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography>
                                    {value[0]} - {total}
                                </Typography>
                            </CssAccordionSummary>
                            <AccordionDetails>
                                <ul>
                                    {value[1].map((item: ListItemTypes) => (
                                        <BillBoardsItem item={item} />
                                    ))}
                                </ul>
                            </AccordionDetails>
                        </Accordion>
                    );
                }
            );
        } else {
            return null;
        }
    };
    const list = makeList(props.list);
    return <div className={classes.root}>{list}</div>;
};

export default BillBoardsList;
