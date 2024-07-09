import { Provider } from 'react-redux';
// On importe ReactDom qui nous permettra d'injecter notre Layoutlication dans le DOM
import ReactDOM from 'react-dom/client';
// On importe notre composant principal
import Layout from './Layout';
// On importe notre fichier de style global
import './index.scss';

//react-router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import store from './store';
import About from './pages/About'
import Contact from './pages/Contact'
import Error from './components/Error';
import Home from './pages/Home';
import HeroList from './pages/HerosList';
import SagaList from './pages/SagaList';
import SingleSaga from './pages/SingleSaga';
import SingleHero from './pages/SingleHero';
import User from './pages/User'
import UserInfos from './components/UserProfile/UserInfos'
import UserAddHero from './components/UserProfile/UserAddHero'
import UserFavorites from './components/UserProfile/UserFavorites'
import Login from './pages/Login'
import Register from './pages/Register'
import SearchResult from './pages/SearchResult'
import PrivatesRoutes from './components/PrivatesRoutes'
import {slug_url} from './constants/global'


const router = createBrowserRouter([
  {
    path: `${slug_url}`,
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        //path: "/", pas besoin s'il y a le index
        //index: true,
        path: `${slug_url}`,
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: `${slug_url}/heros`,
        element: <HeroList />,
        errorElement: <Error />,
      },
      {
        path: `${slug_url}/heros/:slugHeroId`,
        element: <SingleHero />,
        errorElement: <Error />,
      },
      {
        path: `${slug_url}/sagas`,
        element: <SagaList/>,
        errorElement: <Error />,
      },     
      {
        path: `${slug_url}/sagas/:slugSagaId`,
        element: <SingleSaga />,
        errorElement: <Error />,
      },
      {
        path: `${slug_url}/`,
        element: <PrivatesRoutes />,
        errorElement: <Error />,
        children: [
          {
            path: `${slug_url}/user`,
            element: <User />,
            errorElement: <Error />,
            children: [
              {
                path: `${slug_url}/user/account`,
                element: <UserInfos />,
                errorElement: <Error />,
              },
              {
                path: `${slug_url}/user/addHero`,
                element: <UserAddHero />,
                errorElement: <Error />,
              },
              {
                path: `${slug_url}/user/favorites`,
                element: <UserFavorites />,
                errorElement: <Error />,
              },
            ],
          }
        ],
      },
      {
        path: `${slug_url}/contact`,
        element: <Contact/>,
        errorElement: <Error />,
      }, 
      {
        path: `${slug_url}/about`,
        element: <About/>,
        errorElement: <Error />,
      }, 
      {
        path: `${slug_url}/login`,
        element: <Login />,
        errorElement: <Error />,
      }, 
      {
        path: `${slug_url}/register`,
        element: <Register />,
        errorElement: <Error />,
      }, 
      {
        path: `${slug_url}/search/result`,
        element: <SearchResult />,
        errorElement: <Error />,
      },
    ],

  }
  
]);


// Je créer un root pour mon Layoutlication (a partir d'un élément HTML)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// On injecte notre Layoutlication dans le DOM
//<RouterProvider router={router} /> remplace <Layout />
root.render(
    <Provider store={store}>
      <RouterProvider router={router} /> 
    </Provider>,
);



