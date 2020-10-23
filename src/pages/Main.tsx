import React, { useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { connect } from "react-redux";

import { AppState } from "../store/store";
import { ListTypes } from "../interfaces/data";
import CircularProgress from "@material-ui/core/CircularProgress";
import BillBoardsList from "../components/BillBoardsList";
import BillBoardsMap from "../components/BillBoardsMap";

const useStyles = makeStyles((theme: Theme) => ({
    container: {
        position: "relative",
    },
}));

interface BillBoardsList {
    list: ListTypes;
    is_loading: boolean;
}
interface Props {
    list: BillBoardsList;
}

const Main: React.FC<Props> = ({ list }) => {
    const [activeGroup, setActiveGroup] = useState(0);
    const classes = useStyles();
    let billBoards = [];
    for (let prop in list.list) {
        let total = 0;
        let currentList = list.list[prop];
        for (let i = 0; i < currentList.length; i++) {
            total += currentList[i].count_stands;
        }
        let billBoard = {
            type: prop,
            amount: total,
            items: currentList,
        };
        billBoards.push(billBoard);
    }
    const setGroup = (groupIndex: number) => {
        setActiveGroup(groupIndex);
    };
    return (
        <>
            {list.is_loading ? (
                <CircularProgress />
            ) : (
                <div className={classes.container}>
                    <BillBoardsList
                        billBoards={billBoards}
                        setGroup={setGroup}
                    ></BillBoardsList>
                    <BillBoardsMap
                        billBoards={billBoards}
                        activeGroup={activeGroup}
                    />
                </div>
            )}
        </>
    );
};

function mapStateToProps(store: AppState) {
    return {
        list: store.list,
    };
}

export default connect(mapStateToProps)(Main);
