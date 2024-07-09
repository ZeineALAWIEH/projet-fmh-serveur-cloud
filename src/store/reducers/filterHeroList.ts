import { createAction, createReducer } from '@reduxjs/toolkit';

interface IfilterHeroListState {
    isChecked : {
        humain:boolean,
        elfe:boolean,
    }
    isRadio : {
        alphabet:boolean,
        creationDate:boolean,
        pertinence:boolean,
    }
}

const initialState:IfilterHeroListState = {
    isChecked : {
        humain:false,
        elfe:false
    },
    isRadio : {
        alphabet:false,
        creationDate:false,
        pertinence:true
    }
};

export const changeCheckboxHumain = createAction('filterHeroList/changeCheckboxHumain')
export const changeCheckboxElfe = createAction('filterHeroList/changeCheckboxElfe')
export const changeRadioAlphabet = createAction('filterHeroList/changeRadioAlphabet')
export const changeRadioCreationDate = createAction('filterHeroList/changeRadioCreationDate')
export const changeRadioPertinence = createAction('filterHeroList/changeRadioPertinence')

const filterHeroListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeCheckboxHumain , (state) => {
            state.isChecked.humain = !state.isChecked.humain 
        })
        .addCase(changeCheckboxElfe , (state) => {
            state.isChecked.elfe= !state.isChecked.elfe
        })
        .addCase(changeRadioAlphabet , (state) => {
            state.isRadio.alphabet  = true;
            state.isRadio.creationDate= false;
            state.isRadio.pertinence=false;
        })
        .addCase(changeRadioCreationDate , (state) => {
            state.isRadio.creationDate= true;
            state.isRadio.alphabet  = false;
            state.isRadio.pertinence=false;
        })        
        .addCase(changeRadioPertinence , (state) => {
            state.isRadio.pertinence=true;
            state.isRadio.creationDate= false;
            state.isRadio.alphabet  = false;
        })

    });
        
export default filterHeroListReducer;