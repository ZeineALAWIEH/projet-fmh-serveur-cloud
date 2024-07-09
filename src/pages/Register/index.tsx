import { Navigate, useLocation } from 'react-router-dom'
import RegisterForm from '../../components/Form/RegisterForm'
import PageBanner from '../../components/Generic/PageBanner'
import { useAppSelector } from '../../hooks/redux';

export default function Register() {

 //prevPath from useLocation generated with a <Link> or navigate()
 const { state } = useLocation();

 //prevPath from dispatch generated with dipatch(saveCurrentNavigation) 
 const prevPathFromDispatch = useAppSelector((state) => state.user.navigation)
 //prevPath from dispatch
 const previousPath = state ? state.prevPath : prevPathFromDispatch;

 const isLogged = useAppSelector((state) => state.user.isLogged)
 const isRegisterSucceed = useAppSelector((state) => state.register.isRegisterSucceed)

  return (
    <>
     {isRegisterSucceed || isLogged ? 
        <Navigate to={previousPath.length === 0 ? "/" : previousPath} replace /> :
        <div>
          <PageBanner title="Formulaire de création de compte" banner="" />
          <RegisterForm />
        </div>
       }
    </>
  )
}
