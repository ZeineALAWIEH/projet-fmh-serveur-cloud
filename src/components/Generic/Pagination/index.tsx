import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useAppDispatch } from '../../../hooks/redux';

import './index.scss'

interface props {
  lastPage : number,
  currentPage:number,
  changeCurrentPage: ActionCreatorWithPayload<number, string>,
}

export default function Pagination({changeCurrentPage, lastPage, currentPage}:props) {

  const dispatch = useAppDispatch()

  return (
    <div className="pagination flex justify-center py-9">
      <div className="join">

        {/* button previous */}
        <button className="join-item btn"
                onClick={()=>dispatch(changeCurrentPage(currentPage-1))}        
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M13.939 4.939 6.879 12l7.06 7.061 2.122-2.122L11.121 12l4.94-4.939z"></path>
          </svg>
        </button>

        {/* page numerotation */}

        {/* first page */}
        <div className="join ">
          <button
            className="join-item btn btn-square"
            onClick={()=>dispatch(changeCurrentPage(1))} 
          >1</button>

          {/* input Page */}
          <input
            className="btn-input-pagination join-item btn btn-square 
                        border-2 border-accent bg-accent"
            type="number"
            min={1}
            max={lastPage} 
            value={currentPage}
            onChange={(e)=> dispatch(changeCurrentPage(parseInt(e.target.value)))}           
          />          

          {/* last page */}
          <button
            className="join-item btn btn-square"
            onClick={()=>dispatch(changeCurrentPage(lastPage))} 
          >{Math.round(lastPage)}</button>
        </div>

        {/* button next */}
        <button className="join-item btn"
                onClick={()=>dispatch(changeCurrentPage(currentPage+1))} 
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
          >
            <path d="M10.061 19.061 17.121 12l-7.06-7.061-2.122 2.122L12.879 12l-4.94 4.939z"></path>
          </svg>
        </button>

      </div>
    </div>
  );
}
