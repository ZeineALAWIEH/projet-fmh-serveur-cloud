import { Navigate, useLocation } from 'react-router-dom'
import LoginForm from '../../components/Form/LoginForm'
import PageBanner from '../../components/Generic/PageBanner'
import { useAppSelector } from '../../hooks/redux'

export default function Login() {

  //prevPath from useLocation generated with a <Link> or navigate()
  const { state } = useLocation();

  //prevPath from dispatch generated with dipatch(saveCurrentNavigation) 
  const prevPathFromDispatch = useAppSelector((state) => state.user.navigation)
  //prevPath from dispatch
  const previousPath = state ? state.prevPath : prevPathFromDispatch;

  const isLogged = useAppSelector((state) => state.user.isLogged)
  const isLoginSucceed = useAppSelector((state) => state.auth.isLoginSucceed)

  //console.log("isLogged", isLogged);
  //console.log("isLoginSucceed", isLoginSucceed);
  //console.log("prevPath", previousPath);
  //console.log("prevPath Location", state);

  return (
   
    <>
      {isLoginSucceed || isLogged ? 
        <Navigate to={previousPath.length === 0 ? "/" : previousPath} replace /> :
        <div>
          <PageBanner title="Formulaire de connexion" banner="" />
          <LoginForm />
        </div>
       }
    </>
  )
}
