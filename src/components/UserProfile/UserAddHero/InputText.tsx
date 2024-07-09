import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useAppDispatch } from "../../../hooks/redux";

interface props {
    labelInput:string;
    placeholderInput:string;
    taille:string;
    nameInput:string;
    stateInput:string | number;
    changeState: ActionCreatorWithPayload<string, string> | ActionCreatorWithPayload<string | number, string>
}

/* taille : 
-> "w-full" pour 2 colonnes
-> "sm:col-span-2" pour 1 seule colonne */

export default function InputText({labelInput, placeholderInput, taille, nameInput, stateInput, changeState}:props) {

  const dispatch = useAppDispatch()

  return (
    <div className={taille}>
      <label
        htmlFor={nameInput}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
       {labelInput}
      </label>
      <input
        type="text"
        name={nameInput}
        id={nameInput}
        value={stateInput}
        onChange={e => dispatch(changeState(e.target.value))}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        placeholder={placeholderInput}
        required={true}
      />
    </div>
  );
}
