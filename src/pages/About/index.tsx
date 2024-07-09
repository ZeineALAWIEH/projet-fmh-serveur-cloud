import PageBanner from '../../components/Generic/PageBanner'
import logoCDC from '../../assets/images/banner-2.jpg'
import HomeAbout from '../../components/Home/Home_about';

export default function About() {
  return (
    <>
      <PageBanner title="A propos" banner="" />

      <div
        className="w-full mb-9 shadow-lg rounded-box 
                    bg-center min-h-screen
                    font-bold text-2xl text-white
                    bg-base-200 border-b-2 border-slate-300 text-center"
        style={{ backgroundImage: `url(${logoCDC})` }}
      >

        <div className="hero-overlay bg-opacity-90 py-9 px-20 lg:px-40 
                        rounded-box min-h-screen
                        [&_p]:mb-6
                        "
        >
        <h2 className="text-5xl font-bold pb-5">Présentation du projet</h2>
          <p>
            Le projet Find My Hero vise à créer un site web interactif qui agit
            comme une encyclopédie détaillée sur les héros de jeux vidéo.
          </p>
          <p>
            Le site web permettra aux utilisateurs de découvrir et d'explorer
            les personnages les plus emblématiques du monde du jeu vidéo, en
            accédant à des informations approfondies sur leur origine, leur
            apparence, leurs capacités, leurs aventures, et plus encore. Chaque
            héros aura sa propre page dédiée, avec des éléments multimédias, des
            liens et des sources.
          </p>
          <p>
            Mais le site web ne sera pas seulement informatif, il sera aussi
            participatif. Les utilisateurs pourront interagir avec le contenu,
            en laissant des commentaires, des notes, des suggestions, ou en
            partageant leurs propres expériences avec les héros. Ils pourront
            également créer leur propre profil, rejoindre des groupes,
            participer à des sondages, des quiz, des concours, et plus encore.
          </p>
          <p>
            En somme, notre projet crée une véritable valeur pour ses
            utilisateurs, qui peuvent enfin trouver leur héros et se connecter
            avec d'autres passionnés.
          </p>

          <HomeAbout />
        
        </div>



      </div>

      {/* <div className=" font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl"> */}
      {/*
       <div className='w-full mx-auto'>
          <img src={logoCDC} alt="find my hero" />
        </div>
      </div> 
      */}
    </>
  );
}
