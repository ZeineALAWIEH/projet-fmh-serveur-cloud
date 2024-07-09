
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { changeWordSearching } from "../../store/reducers/searchBar";
import { fetchSearchHeros } from "../../store/thunk/FetchHeros";
import { slug_url } from "../../constants/global";

/*       <input
        type="text"
        placeholder="Rechercher un héro"
        classNameName="input input-bordered
                  w-full sm:w-80 md:w-96
                  my-6 md:my-0
                  order-last sm:order-none
                  "
      /> */
export default function SearchBar() {

  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const wordSearching = useAppSelector((state) => state.searchBar.wordSearching)

  const handleSearchSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(fetchSearchHeros());  
      navigate(`${slug_url}/search/result`);   
  }


  return (
    <form className=" w-full sm:w-80 md:w-96
                      my-6 md:my-0
                      order-last sm:order-none
                    ">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Rechercher
      </label>

      <div className="relative w-full">
        <input
          type="search"
          id="searchHeaderHero"
          value={wordSearching}
          onChange={(e)=> dispatch(changeWordSearching(e.target.value))}
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 
                      focus:ring-blue-500 focus:border-blue-500 
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
                      "
          placeholder="Rechercher un héro"
          required
        />
        <button
          type="submit"
          onClick={handleSearchSubmit}
          className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Rechercher</span>
        </button>
      </div>
    </form>
  );
}
