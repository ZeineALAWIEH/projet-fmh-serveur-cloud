import { ActionCreatorWithoutPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks/redux";

interface props {
    content:string;
    isChecked : boolean;
    changeCheckboxState: ActionCreatorWithoutPayload
}

export default function Checkbox({content, isChecked, changeCheckboxState}:props) {

  const dispatch =useAppDispatch()

  return (
    <>
      <div className="form-control">
        <label className="label cursor-pointer">
          <span className="label-text">{content}</span>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => dispatch(changeCheckboxState())}
            className={`checkbox`}
          />
        </label>
      </div>
    </>
  );
}
