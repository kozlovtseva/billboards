import React from "react";

import { AppState } from "../store/store";

import { connect } from "react-redux";

interface Props {
    list: any;
}

const Main: React.FC<Props> = ({ list }) => {
    console.log(list.list);
    return <></>;
};

function mapStateToProps(store: AppState) {
    return {
        list: store.list,
    };
}

export default connect(mapStateToProps)(Main);
