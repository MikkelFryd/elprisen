import style from "../styles/toggleswitch.module.scss";
import { ToggleSwitchProps } from "../types/types";

export const ToggleSwitch = ({
  handleToggle,
  isChecked,
}: ToggleSwitchProps) => {
  return (
    <label className={style.switch}>
      <input
        onChange={(e) => handleToggle(e.target.checked)}
        type="checkbox"
        name=""
        id=""
        checked={isChecked}
      />
      <span className={style.slider}></span>
    </label>
  );
};
