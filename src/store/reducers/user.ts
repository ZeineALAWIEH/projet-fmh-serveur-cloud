import { createAction, createReducer } from '@reduxjs/toolkit';
import { IUser } from '../../types';
import { fetchUserAuthorization, fetchUserFavorites, fetchUserReview } from '../thunk/FetchUser'

interface IUserState {
    data : IUser | null,
    isLoading: boolean,
    isLogged : boolean,
    navigation:string,
    reviewPost : {
        content:string,
        note:string
    }
    isNewReview:boolean,
    nbReviewShow:number,
    favorites: {
        prenom:string
    }[],
}

const initialState:IUserState = {
    data : null,
    isLoading: false,
    isLogged: false,
    navigation:"",
    reviewPost : {
        content:"",
        note:"5"
    },
    isNewReview:false,
    nbReviewShow:5,
    favorites : [{
        prenom:"Hero"
    }],
    
};

export const saveUserCurrentLocation = createAction<string>('user/saveUserCurrentLocation')
export const changeReviewValue = createAction<string>('user/changeReviewValue')
export const changeIsNewReview = createAction('user/changeIsNewReview')
export const IncrementShowReview = createAction('user/IncrementShowReview')
export const DecrementShowReview = createAction('user/DecrementShowReview')
export const changeNbReviewShow = createAction<number>('user/changeNbReviewShow')
export const changeHeroNote = createAction<string>('user/changeHeroNote')

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchUserAuthorization.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUserAuthorization.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.isLogged = true;
        })
        .addCase(fetchUserAuthorization.rejected, (state, action) => {
            state.isLoading = false;
            if(action.error.code === "ERR_BAD_REQUEST") state.isLogged = false;
        })
        .addCase(fetchUserReview.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUserReview.fulfilled, (state) => {
            state.isLoading = false;
            state.reviewPost.content = ""
            state.isNewReview = true
        })
        .addCase(fetchUserReview.rejected, (state) => {
            state.isLoading = false;     
        })
        .addCase(fetchUserFavorites.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchUserFavorites.fulfilled, (state, action) => {
            state.isLoading = false;
            state.favorites = action.payload;
        })
        .addCase(fetchUserFavorites.rejected, (state, action) => {
            state.isLoading = false;
            if(action.error.code === "ERR_BAD_REQUEST") state.isLogged = false;
        })
        .addCase(saveUserCurrentLocation, (state, action) => {
            state.navigation= action.payload;
        })
        .addCase(changeReviewValue, (state, action) => {
            state.reviewPost.content = action.payload;
        })
        .addCase(changeIsNewReview, (state) => {
            state.isNewReview = false
        })
        .addCase(IncrementShowReview, (state) => {
            state.nbReviewShow += 5;
        })
        .addCase(DecrementShowReview, (state) => {
            if(state.nbReviewShow >5 ) state.nbReviewShow -= 5;
        })        
        .addCase(changeNbReviewShow, (state, action) => {
            state.nbReviewShow = action.payload === undefined ? 5 : action.payload;
        })        
        .addCase(changeHeroNote, (state, action) => {
            state.reviewPost.note = action.payload;
        })               

    });
    
export default userReducer;