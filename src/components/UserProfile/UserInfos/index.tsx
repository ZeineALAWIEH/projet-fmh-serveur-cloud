import { useAppSelector } from "../../../hooks/redux"


export default function UserInfos() {

  const user = useAppSelector((state) => state.user.data)
  //const user = userData[0] === undefined ? [] : userData[0];

  const userDefault = {
    id:0,
    email: "non renseigné",
    roles: ["non renseigné"],
    password:"non renseigné",
    Pseudo: "non renseigné",
    favorite: [],
    creer_le:null
  }
  const userValid = user ? user : userDefault


  //user role 
  let userRole = "utilisateur"
  
  for (const [key, role] of Object.entries(userValid.roles)) {
    console.log(`${key}: ${role}`);

    if (role.includes("ROLE_ADMIN")) {
      userRole = "administrateur"; 
      break;
    } else if (role.includes("ROLE_MOD")) {
      userRole = "modérateur";
    }

  }

  return (
    <>
    <h2 className='font-bold text-xl py-3'>Mes informations personnelles</h2>
        <div className='border-4 mb-9'></div>
    <div className="flex gap-3 mt-6
                    [&_div]:flex [&_div]:flex-col [&_div]:text-md [&_div]:mb-6
                    [&_div>span]:mb-3 [&_div>span]:
                    ">
        <div className="me-9 ms-12">
            <span>Identifiant :</span>
            <span>Pseudo :</span>
            <span>E-mail :</span>
            <span>Rôle :</span>
        </div>
        <div className="text-primary font-bold">
            <span>{user?.id}</span>
            <span>{user?.Pseudo!==null ? user?.Pseudo : "non renseigné"}</span>
            <span>{user?.email}</span>
            <span>{userRole}</span>
        </div>
    </div>
    {/* <button className="btn btn-primary mb-9">Modifier mes informations</button> */}
    </>
  )
}
