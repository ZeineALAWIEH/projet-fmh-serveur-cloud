import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { initWordSearching, isLocationHome } from "../store/reducers/searchBar";
import { useEffect } from "react";
import { fetchHeros } from "../store/thunk/FetchHeros";
import { fetchSagas } from "../store/thunk/FetchSagas";
import { fetchUserAuthorization } from "../store/thunk/FetchUser";
import { slug_url } from "../constants/global";

function Layout() {

  const dispatch =useAppDispatch()
  const location = useLocation();

  //location.pathname === '/' ? dispatch(isLocationHome(true)) : dispatch(isLocationHome(false)); équivaut à
  dispatch(isLocationHome(location.pathname == `${slug_url}/`));

  if(location.pathname !== `${slug_url}/search/result`) dispatch(initWordSearching())
  
  //Centralisation de la sécurisation des composants et des pages dans le Layout
  //Liste des routes qui nécessite une autorisation complète (toutes la page) ou partielle (reviews dans hero single)
  //obligatoire de faire le dispatch ici, pour que la route soit enregistré
  //if(location.pathname.includes('/user')) dispatch(fetchUserAuthorization())
  //if(location.pathname.includes('/heros')) dispatch(fetchUserAuthorization())
  dispatch(fetchUserAuthorization()) //vérification de la connexion pour toutes les pages, à cause du header

  //Fetch des data de tous les héros et des sagas
  useEffect(()=> {
    dispatch(fetchHeros())
    dispatch(fetchSagas())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="Layout mx-auto px-10 py-5 ">
      <Header />
      <Outlet />
      {/* <Page /> */}
      <Footer />

      {/* restore the scroll to the top of the page when url changes */}
      {/* see ScrollRestoration in react router */}
      <ScrollRestoration
        getKey={(location) => {
          // default behavior
          return location.key;
        }}
      />
    </div>
  );
}

export default Layout;
