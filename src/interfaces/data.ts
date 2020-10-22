export interface ListTypes {
    [key: string]: ListItemTypes[];
}
export interface ListItemTypes {
    ad_unit: string;
    adress: string;
    city_name: string;
    count_stands: number;
    id: number;
    lat: number;
    link: string;
    lng: number;
    manager: string;
    manager_name: string;
    name_owner: string;
    phone_number: string;
}
