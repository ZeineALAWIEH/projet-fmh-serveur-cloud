import { createAction, createReducer } from '@reduxjs/toolkit';

interface IsearchBarState {
  locationHome:boolean;
  locationSearchResult:boolean;
  wordSearching:string;
}
export const initialState: IsearchBarState = {
  locationHome:true,
  locationSearchResult:false,
  wordSearching:"",
};

export const isLocationHome = createAction<boolean>('searchBar/isLocationHome')
export const initWordSearching = createAction('searchBar/initWordSearching')
export const changeWordSearching = createAction<string>('searchBar/changeWordSearching')

const searchBarReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(isLocationHome , (state, action) => {
        state.locationHome = action.payload
    })
    .addCase(initWordSearching, (state) => {
      state.wordSearching = ""
  })
    .addCase(changeWordSearching , (state, action) => {
        state.wordSearching = action.payload
    })
});

export default searchBarReducer;