import { createAction, createReducer } from '@reduxjs/toolkit';

interface IPaginationState {
    pageHeroList : {
        currentPage : number,
        lastPage:number,
        elementPerPage : number
      },
    pageSagaList : {
        currentPage : number,
        lastPage:number,
        elementPerPage : number
      },
}

const initialState:IPaginationState = {
    pageHeroList  : {
        currentPage : 1,
        lastPage:1,
        elementPerPage : 5

      },
    pageSagaList  : {
        currentPage : 1,
        lastPage:1,
        elementPerPage : 5
      },
};

export const changeHeroListCurrentPage = createAction<number>('pagination/changeHeroListCurrentPage')
export const changeHeroListLastPage = createAction<number>('pagination/changeHeroListLastPage')
export const changeSagaListCurrentPage = createAction<number>('pagination/changeSagaListCurrentPage')
export const changeSagaListLastPage = createAction<number>('pagination/changeSagaListLastPage')

const paginationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeHeroListCurrentPage, (state, action) => {
            if(action.payload <1 || action.payload>state.pageHeroList.lastPage) {
                state.pageHeroList.currentPage=1
            } else {
                state.pageHeroList.currentPage=action.payload
            }
        })
        .addCase(changeHeroListLastPage, (state, action) => {
            state.pageHeroList.lastPage=action.payload
            
        })
        .addCase(changeSagaListCurrentPage, (state, action) => {
            if(action.payload <1 || action.payload>state.pageSagaList.lastPage) {
                state.pageSagaList.currentPage=1
            } else {
                state.pageSagaList.currentPage=action.payload
            }
        })
        .addCase(changeSagaListLastPage, (state, action) => {
            state.pageSagaList.lastPage=action.payload
        })
    });
        
export default paginationReducer;