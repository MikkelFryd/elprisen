import style from "../styles/settingsmodal.module.scss";
import { SettingsContent } from "./SettingsContent";
import { ModalProps } from "../types/types";

export const SettingsModal = (props: ModalProps) => {
  const setOpenModal = props.setOpenModal;
  return (
    <>
      <div className={style.modal}>
        <div className={style.modal_content}>
          <span
            className={style.closebtn}
            onClick={() => setOpenModal!(false)}
          />
          <SettingsContent />
        </div>
      </div>
    </>
  );
};
