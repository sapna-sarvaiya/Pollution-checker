export interface IData {
    id: number
    location: string
    latitude: number
    longitude: number
    pm25: number
    co: number
    severity: string
    sensor_name: string
    sensor_type: string
    installation_date: string
    temperature: number
    description: string
};

export interface IDropDownOption {
    label: string;
    value: string | number;
}

export interface IDropDownFilter {
    [key: string]: IDropDownOption[];
}