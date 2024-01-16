import { Dispatch, SetStateAction, ReactNode } from "react";


export interface PriceDataProps {
    data: Array<PriceDataInner>;
}

export interface ModalProps {
    openModal?: boolean;
    setOpenModal?: Dispatch<SetStateAction<boolean>>;
}

export interface PriceCircleInterface {
    value: string;
}
  

export interface ColoredPTagProps {
    item: PriceDataInner;
    color: string;
}

export interface SettingsProviderProps {
    children: ReactNode;
  }

export interface PriceSorted {
    min: string;
    max: string;
}

export interface ToggleSwitchProps {
    handleToggle: (e: boolean) => void;
    isChecked: boolean;
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

