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
    if (!localStorage.getItem("tax")) {
      localStorage.setItem("tax", "false");
    }
    if (!localStorage.getItem("alarm")) {
      localStorage.setItem("alarm", "false");
    }
    if (!localStorage.getItem("region")) {
      localStorage.setItem("region", "DK1");
    }
    if (localStorage.getItem("tax")) {
      setTax(JSON.parse(localStorage.getItem("tax")!));
    }
    if (localStorage.getItem("alarm")) {
      setAlarm(JSON.parse(localStorage.getItem("alarm")!));
    }
    if (localStorage.getItem("region")) {
      setRegion(localStorage.getItem("region")!);
    }
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
