import { Link, useLocation } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchUserAddFavorites, fetchUserDelFavorites, fetchUserFavorites } from "../../../store/thunk/FetchUser";
import { useEffect, useState } from "react";


interface props {
  imgSrc:string,
  title:string,
  apercu:string,
  linkTo:string,
  heroId?:string|number|undefined
}

export default function Card({imgSrc, title, apercu, linkTo, heroId}:props) {

    const [checkFavorites, setCheckFavorites] = useState(false)
    const dispatch = useAppDispatch()
    const location = useLocation()
    const isLogged = useAppSelector((state) => state.user.isLogged)
    const userFavorites = useAppSelector((state) => state.user.favorites)
    

    //get favorites à chaque changement de state de la checkbox (quand le user clique dessus)
    useEffect(() => {
      dispatch(fetchUserFavorites())
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [checkFavorites])
    
    
    //Lors de l'affichage des card, mettre un coeur plein lorsque la card est déjà en favoris sinon un coeur vide    
    useEffect(()=> {
      setCheckFavorites(() =>
      userFavorites.find((uf) => {
        return uf.prenom == title
      }) !== undefined)
      
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[userFavorites])
  
  
  const handleChangeHeroFavorites = () => {

    //console.log(`dataFav ${title}`, userFavorites);
    
    //Ajout ou suppression d'un hero dans la bdd
    const isInUserFavorites = userFavorites.find((uf) => {
                                return uf.prenom == title
                              }) !== undefined


    //console.log(`isUserFav ${title}`, isInUserFavorites);
    
    isInUserFavorites ? dispatch(fetchUserDelFavorites(heroId)) : dispatch(fetchUserAddFavorites(heroId))

    //MàJ du state de l'input checkbox "heart"
    setCheckFavorites(() => !isInUserFavorites)

  }
    
  return (
    <div className="card card-compact w-80 bg-base-100 shadow-xl ">
      <figure>
        <img src={imgSrc} alt="image introuvable" className="h-64 w-auto p-6" />
      </figure>
      <div className="card-body">
        <div className="card-title flex justify-between">
          <h2>{title}</h2>

          {!location.pathname.includes("saga") && isLogged && (
            <span>
              <label className="swap swap-flip">
                {/* this hidden checkbox controls the state */}
                <input  type="checkbox" 
                        checked={checkFavorites}
                        onChange={handleChangeHeroFavorites} 
                />
                
                {/* heart empty icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(211, 0, 0, 1)" }}
                  className="swap-off fill-current w-10 h-10"
                  //onClick={() => console.log("add")}
                >
                  <path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path>
                </svg>
                {/* heart full icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  style={{ fill: "rgba(211, 0, 0, 1)" }}
                  className="swap-on fill-current w-10 h-10"
                  //onClick={() => console.log("del")}
                >
                  <path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path>
                </svg>
              </label>
            </span>
          )}
        </div>

        <p>{apercu}</p>
        <div className="card-actions justify-end">
          <Link to={`${linkTo}`}>
            <button className="btn btn-primary">Voir la fiche</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
