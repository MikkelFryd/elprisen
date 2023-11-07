import { createContext, useState, ReactNode, useEffect } from "react";

type SettingsProviderProps = {
  children: ReactNode;
};

const defaultState = {
  region: "DK1",
  setRegion: (region: string) => {
    region;
  },
  tax: false,
  setTax: (tax: boolean) => {
    tax;
  },
  alarm: false,
  setAlarm: (alarm: boolean) => {
    alarm;
  },
  isChecked: false,
  setIsChecked: (isChecked: boolean) => {
    isChecked;
  },
};

export const SettingsContext = createContext(defaultState);

export default function SettingsProvider({ children }: SettingsProviderProps) {
  const [region, setRegion] = useState<string>("DK1");
  const [tax, setTax] = useState<boolean>(false);
  const [alarm, setAlarm] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setAlarm(JSON.parse(localStorage.getItem("alarm")!));
    setTax(JSON.parse(localStorage.getItem("tax")!));
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        region,
        setRegion,
        tax,
        setTax,
        alarm,
        setAlarm,
        isChecked,
        setIsChecked,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
