import HomeBanner from '../../components/Home/Home_Banner'
import HomeHeroList from '../../components/Home/Home_HeroList'
import HomeHeroVideos from '../../components/Home/Home_HeroVideos'
import HomeHeroRandom from '../../components/Home/Home_HeroRandom'
import HomeHeroNew from '../../components/Home/Home_HeroNew'
import HomeAbout from '../../components/Home/Home_about'
import { useAppSelector } from '../../hooks/redux'

export default function Home() {

  const heros = useAppSelector((state)=>state.heros.list)
  
  return (
    <div>
      <HomeBanner />
      {heros.length>0 && <HomeHeroList heros={heros}/>}
      <HomeHeroVideos /> {/* Demander à benjamin de te créer une route qui récupère 4 liens vidéos (les derniers de la table vidéo) */}
      <HomeHeroRandom />
      {heros.length>0 && <HomeHeroNew heros={heros}/>}
      <HomeAbout />
    </div>
  )
}
