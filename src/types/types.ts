import { Dispatch, SetStateAction, ReactNode } from "react";


export interface PriceDataProps {
    data: Array<PriceDataInner>;
}

export interface PriceDataInner {
    DKK_per_kWh: number;
    EUR_per_kWh: number;
    EXR: number;
    time_end: string;
    time_start: string;
}

export interface SettingsContextInterface {
    region: string;
    setRegion: Dispatch<SetStateAction<string>>
    tax: boolean;
    setTax: Dispatch<SetStateAction<boolean>>
    alarm: boolean;
    setAlarm: Dispatch<SetStateAction<boolean>>
    children?: ReactNode
}

