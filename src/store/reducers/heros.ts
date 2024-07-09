import { createAction, createReducer } from '@reduxjs/toolkit';
import { IHeros, IVideos } from '../../types';
import { fetchHeroVideos, fetchHeros, fetchSearchHeros, fetchSingleHero, fetchSingleHeroRandom } from '../thunk/FetchHeros'

interface IHerosState {
    list : IHeros[];
    listSearch: IHeros[];
    listVideos: IVideos[];
    isLoading: boolean;
    singleHero: IHeros | null;
    singleHeroRandom: IHeros | null;
    tabsValueActive:string;

}

const initialState:IHerosState = {
    list : [],
    listSearch : [],
    listVideos : [],
    isLoading: false,
    singleHero: null,
    singleHeroRandom: null,
    tabsValueActive:"",
};

export const changeTabsValue = createAction<string>('heros/changeTabsValue')

const herosReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeTabsValue, (state, action) => {
            state.tabsValueActive = action.payload;
        })
        .addCase(fetchHeros.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchHeros.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list = action.payload
        })
        .addCase(fetchHeros.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSingleHero.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSingleHero.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleHero = action.payload
        })
        .addCase(fetchSingleHero.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSingleHeroRandom.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSingleHeroRandom.fulfilled, (state, action) => {
            state.isLoading = false;
            state.singleHeroRandom = action.payload
        })
        .addCase(fetchSingleHeroRandom.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchSearchHeros.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSearchHeros.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listSearch = action.payload;
        })
        .addCase(fetchSearchHeros.rejected, (state) => {
            state.isLoading = false;
        })
        .addCase(fetchHeroVideos.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchHeroVideos.fulfilled, (state, action) => {
            state.isLoading = false;
            state.listVideos = action.payload;
        })
        .addCase(fetchHeroVideos.rejected, (state) => {
            state.isLoading = false;
        })
    });
        
export default herosReducer;