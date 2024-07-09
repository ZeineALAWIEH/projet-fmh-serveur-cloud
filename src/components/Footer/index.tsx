import { Link } from 'react-router-dom';
import logoBoy from "../../assets/images/logoFMH-boy.jpg";
import { slug_url } from '../../constants/global';

export default function Footer() {
  return (
    <>
    <div className='section-split__bande'></div>
    <footer className="footer p-10 text-base-content border-2">
      
      <aside>
        <Link to={`${slug_url}`}>
          <img src={logoBoy} className="max-w-28 rounded-full" alt="Logo Find My Hero" /> 
        </Link>
        <p>
          Find My Hero
          <br />
          Encyclopédie intéractive des héros de jeux vidéos
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Navigation</h6>
        <Link to={`${slug_url}`} className="link link-hover">Accueil</Link>
        <Link to={`${slug_url}/heros`} className="link link-hover">Heros</Link>
        <Link to={`${slug_url}/sagas`} className="link link-hover">Sagas</Link>
        {/* <Link to={`/`} className="link link-hover">Plan du site</Link> */}
      </nav>
      <nav>
        <h6 className="footer-title">Aide</h6>
        <Link to={`${slug_url}/contact`} className="link link-hover">Contact</Link>
      </nav>
    </footer>
    </>
  );
}
