import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { 
  //changeAvatarRegisterValue,
  changeEmailRegisterValue, 
  changeErrorMessageRegisterValue, 
  changeNomRegisterValue, 
  changePasswordConfirmRegisterValue, 
  changePasswordRegisterValue 
} from "../../../store/reducers/register";
import { fetchRegisterUser } from "../../../store/thunk/FetchUser";
import { slug_url } from "../../../constants/global";

export default function RegisterForm() {

  const dispatch=useAppDispatch();
  const { Pseudo, email, password} = useAppSelector((state) => state.register.credentials)
  const passwordConfirm = useAppSelector((state) => state.register.passwordConfirm)
  const errorRegister = useAppSelector((state) => state.register.errorMessage)

  function handleSubmitRegistration(e:React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    errorRegister === null ? 
      dispatch(fetchRegisterUser()) :
      dispatch(changeErrorMessageRegisterValue("Veuillez compléter correctement tous les champs du formulaire avant de le soumettre"))
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Créer un compte
              </h1>

              {errorRegister && 
                <div className="text-center text-red-700 bg-red-100 
                                border-2 border-red-800
                                p-3 font-bold rounded-box
                              ">
                  {errorRegister}
                </div> 
              }



              <form className="space-y-4 md:space-y-6">

              <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nom / Pseudo
                  </label>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    value={Pseudo}
                    onChange={(e)=> dispatch(changeNomRegisterValue(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nom ou pseudo"
                    required={true}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e)=> dispatch(changeEmailRegisterValue(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nom@exemple.com"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mot de passe 
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e)=> dispatch(changePasswordRegisterValue(e.target.value))}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirmez le mot de passe
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    value={passwordConfirm}
                    onChange={(e)=> dispatch(changePasswordConfirmRegisterValue(e.target.value))}
                    onBlur={(e)=> dispatch(changePasswordConfirmRegisterValue(e.target.value))}
                    onFocus={(e)=> dispatch(changePasswordConfirmRegisterValue(e.target.value))}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>

{/*                 <div>
                  <label
                    htmlFor="avatar"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Lien vers l'image de mon avatar
                  </label>
                  <input
                    type="avatar"
                    name="avatar"
                    id="avatar"
                    value={avatar}
                    onChange={(e)=> dispatch(changeAvatarRegisterValue(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https://monlien.fr/vers/mon/avatar"
                    required={false}
                  />
                </div> */}


                {/* Checkbox : conditions d'utilisation
                ----------------------------------------                
                <div className="flex items-start">

                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required={true}
                    />
                  </div>
                  
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      J'accepte{" "}
                      <a
                        className="font-medium text-primary hover:underline dark:text-primary"
                        href="#"
                      >
                        Les conditions d'utilisation
                      </a>
                    </label>
                  </div>

                </div> */}


                <button
                  type="submit"
                  onClick={handleSubmitRegistration}
                  className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary dark:focus:ring-primary"
                >
                  Créer un compte
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Vous avez déjà un compte ?{" "}
                  <Link 
                    to={`${slug_url}/login`}
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Connectez vous ici
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
