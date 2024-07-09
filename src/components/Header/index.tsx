import { Link } from "react-router-dom";
import logoBoy from "../../assets/images/logoFMH-boy.jpg";
import logoGirl from "../../assets/images/logoFMH-girl.jpg";
import Drawer from "./Drawer";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { useAppSelector } from "../../hooks/redux";
import { slug_url } from "../../constants/global";

export default function Header() {
  const isLocationHome = useAppSelector(
    (state) => state.searchBar.locationHome
  );

  return (
    <div className="navbar bg-base-100 flex flex-wrap items-center justify-between">
      
      <div className="">

        <Link to={`${slug_url}`}>
          
          {/* Swap icons with flip effect */}
          <label className="swap swap-flip text-9xl">
            
            <input type="checkbox" /> {/* this hidden checkbox controls the state */}

            <div className="swap-off"><img src={logoBoy} className="max-w-28 rounded-full" alt="Logo Find My Hero" /></div>
            <div className="swap-on"><img src={logoGirl} className="max-w-28 rounded-full" alt="Logo Find My Hero" /></div>
          </label>
          
        </Link>

      </div>

      {!isLocationHome && <SearchBar />}

      <div className="">
        <Drawer />
        <UserMenu />
      </div>
    </div>
  );
}
