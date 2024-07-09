import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeWordSearching } from "../../../store/reducers/searchBar";
import { fetchSearchHeros } from "../../../store/thunk/FetchHeros";
import banner from "../../../assets/images/banner.jpg";
import { slug_url } from "../../../constants/global";

export default function HomeBanner() {

  const navigate = useNavigate();
  const dispatch=useAppDispatch();
  const wordSearching = useAppSelector((state) => state.searchBar.wordSearching)

  const handleSearchSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchSearchHeros());  
    navigate(`${slug_url}/search/result`);   
}

/* style={{
  backgroundImage:
    "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
}} */

  return (
    <div
      className="hero min-h-96 my-3 shadow-lg shadow-[0_0px_15px_5px_rgba(0,0,0,0.5)]"
      style={{backgroundImage:`url(${banner})`}}      

    >
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-white">

        <div className="max-w-2xl">
          <h1 className="mb-5 text-4xl font-bold">Retrouvez vos héros préférés</h1>
          <p className="mb-5 text-md">
          Votre encyclopédie détaillée et intéractif sur les héros de jeux vidéos. 
          Venez découvrir et explorer les personnages les plus emblématiques du monde du jeu vidéo !
          </p>
          <form>
              <div className="join flex flex-wrap sm:flex-none sm:flex-nowrap">
                <input  type="search" 
                        value={wordSearching}
                        onChange={(e)=> dispatch(changeWordSearching(e.target.value))}
                        placeholder="Ecrire le nom d'un héro"
                        className="input input-bordered sm:join-item text-blue-600
                                    w-full mb-6 sm:mb-0" 
                         />
                <button type="submit"
                        onClick={handleSearchSubmit}
                        className="btn btn-primary sm:join-item  w-full sm:w-36 rounded">
                  Rechercher un héro
                </button>
              </div>
          </form>
        </div>

      </div>
    </div>
  );
}
