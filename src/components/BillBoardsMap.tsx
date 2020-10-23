import React from "react";
import { ListItemTypes } from "../interfaces/data";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) => ({
    map: {
        height: "100vh",
        width: "100vw",
    },
}));

interface Props {
    billBoards: BillBoards[];
    activeGroup: number;
}
interface BillBoards {
    type: string;
    amount: number;
    items: ListItemTypes[];
}

const BillBoardsMap = (props: Props) => {
    const center = props.billBoards[props.activeGroup].items[0];
    const mapState = {
        center: [center.lat, center.lng],
        zoom: 17,
    };
    const classes = useStyles();
    return (
        <>
            <YMaps>
                <div id="map-basics">
                    <Map className={classes.map} state={mapState}>
                        {[props.billBoards[props.activeGroup]].map(
                            (list: BillBoards) =>
                                list.items.map((item: ListItemTypes) => (
                                    <Placemark
                                        geometry={[item.lat, item.lng]}
                                        properties={{
                                            balloonContent:
                                                '<div style="width:200px; padding: 4px">' +
                                                `<p style="font-size:14px">${list.type} - ${list.amount}</p>` +
                                                `<p style="font-size:18px; text-align: center">${item.adress}</p>` +
                                                '<button type="button" style="display: block; margin: 0 auto; border-radius: 4px; height: 30px; line-height: 30px; color: #fff; background-color: #2196f3; border: none">Заказать этот блок</button></div>',
                                        }}
                                        modules={["geoObject.addon.balloon"]}
                                        key={item.id}
                                    />
                                ))
                        )}
                    </Map>
                </div>
            </YMaps>
        </>
    );
};

export default BillBoardsMap;
