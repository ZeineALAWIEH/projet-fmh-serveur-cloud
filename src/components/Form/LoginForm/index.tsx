import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { changeEmailValue, changePasswordValue } from "../../../store/reducers/auth";
import { fetchLogin } from "../../../store/thunk/FetchUser";
import { slug_url } from "../../../constants/global";

export default function LoginForm() {

  const dispatch=useAppDispatch();
  const { username, password} = useAppSelector((state) => state.auth.credentials)
  const errorLogin = useAppSelector((state) => state.auth.errorMessage)

  const handleFormLogin = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchLogin())
  }

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Connexion à votre compte
              </h1>

              {errorLogin && 
                <div className="text-center text-red-700 bg-red-100 
                                border-2 border-red-800
                                p-3 font-bold rounded-box
                              ">
                  {errorLogin}
                </div> 
              }

              <form className="space-y-4 md:space-y-6" action="#">
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
                    value={username}
                    onChange={(e)=> dispatch(changeEmailValue(e.target.value))}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nom@mail.fr"
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
                    onChange={(e)=> dispatch(changePasswordValue(e.target.value))}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required={true}
                  />
                </div>

{/*                 <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required={true}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Se souvenir de moi
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary hover:underline dark:text-primary"
                  >
                    Mot de passe oublié ?
                  </a>
                </div> */}


                <button
                  type="submit"
                  onClick={handleFormLogin}
                  className="w-full text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
                >
                    Se connecter
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Toujours pas de compte ?{" "}
                  <Link
                    to={`${slug_url}/register`}
                    className="font-medium text-primary hover:underline dark:text-primary"
                  >
                    Créer un compte
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
