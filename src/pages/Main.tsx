import React from "react";
import { connect } from "react-redux";

import { AppState } from "../store/store";
import { ListTypes } from "../interfaces/data";
import CircularProgress from "@material-ui/core/CircularProgress";
import BillBoardsList from "../components/BillBoardsList";

interface BillBoardsList {
    list: ListTypes;
    is_loading: boolean;
}
interface Props {
    list: BillBoardsList;
}

const Main: React.FC<Props> = ({ list }) => {
    return (
        <>
            {list.is_loading ? (
                <CircularProgress />
            ) : (
                <BillBoardsList list={list.list}></BillBoardsList>
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
