import { Outlet } from 'react-router-dom'
import UserBanner from '../../components/UserProfile/UserBanner'
import UserProfileMenu from '../../components/UserProfile/UserProfileMenu'

export default function User() {
  
    return (
    <>
        <UserBanner />
        <UserProfileMenu />
        <Outlet />

    </>
  )
}