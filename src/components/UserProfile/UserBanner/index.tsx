import { Link } from "react-router-dom";
import { useAppSelector } from "../../../hooks/redux";
import { slug_url } from "../../../constants/global";

export default function UserBanner() {

  const user = useAppSelector((state) => state.user.data)
  //const user = userData[0] === undefined ? [] : userData[0]; 

  const dateCreatedUser = user?.creer_le && new Date(Date.parse(user?.creer_le))

  return (
    <>
      <div
        className="  w-full my-auto h-48 flex items-center gap-9
                        bg-gradient-to-r from-cyan-500 to-blue-500
                        "
      >
        <div className="avatar ms-9">
          <div className="w-24 rounded-full ring ring-base-200 ring-offset-base-100 ring-offset-2">
            <Link to={`${slug_url}/user/${user?.id}`}>
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-24">
                  <span className="text-3xl">{user?.Pseudo !== null ? user?.Pseudo.charAt(0) : "NA"}</span>
                </div>
              </div>
              {/* <img src={user?.avatar} /> */}
              {/* <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" /> */}
            </Link>
          </div>
        </div>

        <div className="">
          <div className="font-bold">
            {user?.Pseudo !== null ? user?.Pseudo : "Pseudo non renseigné"}
          </div>
          <div className="flex">
            Profil approuvé
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "rgba(0, 0, 0, 1)"}}><path d="M20.995 6.9a.998.998 0 0 0-.548-.795l-8-4a1 1 0 0 0-.895 0l-8 4a1.002 1.002 0 0 0-.547.795c-.011.107-.961 10.767 8.589 15.014a.987.987 0 0 0 .812 0c9.55-4.247 8.6-14.906 8.589-15.014zM12 19.897C5.231 16.625 4.911 9.642 4.966 7.635L12 4.118l7.029 3.515c.037 1.989-.328 9.018-7.029 12.264z"></path><path d="m11 12.586-2.293-2.293-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"></path></svg>
          </div>
          <div className="">
            
            {dateCreatedUser &&
              `Membre depuis le ${dateCreatedUser.toLocaleString().substring(0, 10)}`
            }
          </div>
        </div>
      </div>
    </>
  );
}
