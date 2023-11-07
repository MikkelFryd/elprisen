import { SettingsContext } from "../context/SettingsContext";
import style from "../styles/settingscontent.module.scss";
import { ToggleSwitch } from "./ToggleSwitch";
import { useContext, useEffect } from "react";
import { handleNotification } from "../utils/handleNotification";

export const SettingsContent = () => {
  const { setRegion, setTax, tax, setAlarm, alarm } =
    useContext(SettingsContext);

  useEffect(() => {
    if (alarm) {
      handleNotification();
    }
  }, [alarm]);

  function handleSelect(value: string) {
    setRegion(value);
  }

  const handleTaxBtn = (e: boolean) => {
    setTax(tax ? false : true);
    localStorage.setItem("tax", JSON.stringify(e));
  };
  const handleAlarmBtn = (e: boolean) => {
    setAlarm(alarm ? false : true);
    localStorage.setItem("alarm", JSON.stringify(e));
  };

  return (
    <section className={style.settingscontent}>
      <h2>INDSTILLINGER</h2>
      <div>
        <p>PRISER INKL. MOMS</p>
        <ToggleSwitch isChecked={tax} handleToggle={handleTaxBtn} />
      </div>
      <div>
        <p>LAVESTE PRIS ALARM</p>
        <ToggleSwitch isChecked={alarm} handleToggle={handleAlarmBtn} />
      </div>
      <div className={style.selectoptions}>
        <p>VÆLG REGION</p>
        <select
          defaultValue="default"
          placeholder="VÆLG REGION"
          onChange={(e) => handleSelect(e.target.value)}
        >
          <option value="default" disabled>
            VÆLG REGION
          </option>
          <option value="DK1">REGION VEST</option>
          <option value="DK2">REGION ØST</option>
        </select>
      </div>
    </section>
  );
};
