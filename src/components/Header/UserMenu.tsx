import champignon from "../../assets/images/pngegg.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { logout } from "../../store/reducers/auth";
import { slug_url } from "../../constants/global";

export default function UserMenu() {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const isLogged = useAppSelector((state) => state.user.isLogged)

  const handleDisconnectUser = () => {
    dispatch(logout())
    // refresh page
    navigate(0)
  }

  return (
    <>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS Navbar component" src={champignon} />
          </div>
        </div>

          {isLogged ?
          
            //USER CONNECTED
            <ul tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                  to={`${slug_url}/user`}
                  >
                  Mon profil
                </NavLink>
              </li>
              <li><Link to={`${slug_url}/user/addhero`} >Ajouter un héro</Link></li>
              <li onClick={handleDisconnectUser}><span>Déconnexion</span></li>
            </ul> :

            //USER NOT CONNECTED
            <ul tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li><Link to={`${slug_url}/login`} state={{ prevPath: location.pathname }}  >Se connecter</Link></li>
              <li><Link to={`${slug_url}/register`} state={{ prevPath: location.pathname }}  >S'inscrire</Link></li>
        
            </ul> 
          }

      </div>
    </>
  );
}
