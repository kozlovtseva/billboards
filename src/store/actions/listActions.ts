import { ListActionTypes } from "../constants";

import instance from "../axios";

export function getList() {
    return {
        type: ListActionTypes.GET_LIST,
        payload: instance.get("/api/lift_media", {
            params: {
                by_group: true,
            },
        }),
    };
}
