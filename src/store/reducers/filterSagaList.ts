import { createAction, createReducer } from '@reduxjs/toolkit';

interface IfilterSagaListState {
    letter:string,
}

const initialState:IfilterSagaListState = {
    letter:"",
};

export const changeLetter = createAction<string | null>('filterSagaList/changeLetter')

const filterSagaListReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeLetter , (state, action) => {
            state.letter = action.payload ? action.payload : "";  
        })

    });
        
export default filterSagaListReducer;