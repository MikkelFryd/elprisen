import style from "../styles/toggleswitch.module.scss";

interface ToggleSwitchProps {
  handleToggle: (e: boolean) => void;
  isChecked: boolean;
}

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
