import { useAppDispatch } from '../../../hooks/redux';
import { changeLetter } from '../../../store/reducers/filterSagaList';
import BtnLetter from './BtnLetter'
import { nanoid } from 'nanoid'

export default function SagaListFilter() {

  const dispatch = useAppDispatch()

  const alphabets = [...Array(26).keys()].map((n) => <BtnLetter key={nanoid()} letter={String.fromCharCode(65 + n)} /> ); 
  /* Change 65 to 97 for lowercase */

  return (
    <>
      {/* Drawer that opens from right side of page */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex justify-end">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-accent rounded-full fixed z-10"
          >
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z"></path>
            </svg>
          </label>
        </div>

        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <ul className="menu p-4 w-20 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            
            {/* Trash to delete filter */}
            <li className="bg-red-200 rounded-full mb-2 hover:scale-125"
                onClick={() => dispatch(changeLetter(""))}
            >
              <svg  xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    className="ms-2 ps-0 pe-8 hover:bg-transparent focus:bg-transparent"
                    style={{fill: "rgba(211, 0, 0, 1)"}}>
                <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"></path>
              </svg>
            </li>
            
            {/* letter of the alphabet */}
            {alphabets}

          </ul>


        </div>
      </div>
    </>
  );
}
