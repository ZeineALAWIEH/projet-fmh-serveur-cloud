import { createReducer } from '@reduxjs/toolkit';
import { ISagas } from '../../types';
import { fetchSagas, fetchSingleSaga } from '../thunk/FetchSagas'

interface ISagasState {
    list : ISagas[];
    isLoading: boolean;
    singleSaga:ISagas | null;
}

const initialState:ISagasState = {
    list : [],
    isLoading: false,
    singleSaga : null,
};

//export const changeEmailContactValue = createAction<string>('contact/changeEmailContactValue')

const sagasReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchSagas.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSagas.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list = action.payload
        })
        .addCase(fetchSagas.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSingleSaga.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSingleSaga.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleSaga = action.payload
        })
        .addCase(fetchSingleSaga.rejected, (state) => {
            state.isLoading = false;
        })
    });
        
export default sagasReducer;