export default function HomeAbout() {
  return (
    <div className="flex flex-col rounded-box my-6 py-3 shadow-lg">

    <hgroup className="py-2 text-center">
        <h2 className="text-5xl font-bold pb-5">Qui sommes nous ?</h2>
        <p>
            Nous sommes une équipe de 4 développeurs en formation chez l'école O'Clock. 
            Passionné par la programmation web, nous sommes spécialisé dans les languages HTML, CSS, JavaScript, PHP.
            Le site a été développé en utilisant le framework Symfony, et la librairie React. 
        </p>
    </hgroup>

      {/* Timeline de l'équipe */}
      <div className="my-6 self-center text-black">
        {/* Supprimer/ajouter "timeline-vertical" pour avoir la même chose en horizontal */}
        <ul className="timeline timeline-vertical lg:timeline-horizontal">
          <li>
            <div className="timeline-start timeline-box">Equipe Front</div>
            <div className="timeline-middle">
              {/* remplacer style par className pour les svg copier de boxicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill: rgba(211, 32, 17, 1);transform: ;msFilter:;"
              >
                {/* le "fill" dans <path est responsable de la couleur de la maison */}
                <path fill="#4a00ff" d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10A1 1 0 0 0 3 14h2v7a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669zM12 16a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path>
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-base-content text-white">
              Equipe Back
            </div>
            <hr className="bg-primary" />
          </li>
                {/* <hr className="bg-secondary" /> */}
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Zeine ALAWIEH</div>
            <div className="timeline-middle">
              {/* remplacer style par className pour les svg copier de boxicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
                <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              {/* remplacer style par className pour les svg copier de boxicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-base-content text-white">
              Benjamin BONIFACE
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-start timeline-box">Farid FARHAT</div>
            <div className="timeline-middle">
              {/* remplacer style par className pour les svg copier de boxicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2A10.13 10.13 0 0 0 2 12a10 10 0 0 0 4 7.92V20h.1a9.7 9.7 0 0 0 11.8 0h.1v-.08A10 10 0 0 0 22 12 10.13 10.13 0 0 0 12 2zM8.07 18.93A3 3 0 0 1 11 16.57h2a3 3 0 0 1 2.93 2.36 7.75 7.75 0 0 1-7.86 0zm9.54-1.29A5 5 0 0 0 13 14.57h-2a5 5 0 0 0-4.61 3.07A8 8 0 0 1 4 12a8.1 8.1 0 0 1 8-8 8.1 8.1 0 0 1 8 8 8 8 0 0 1-2.39 5.64z"></path>
                <path d="M12 6a3.91 3.91 0 0 0-4 4 3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4zm0 6a1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2 1.91 1.91 0 0 1-2 2z"></path>
              </svg>
            </div>
            <hr className="bg-primary" />
          </li>
          <li>
            <hr className="bg-primary" />
            <div className="timeline-middle">
              {/* remplacer style par className pour les svg copier de boxicons */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
              >
                <path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path>
              </svg>
            </div>
            <div className="timeline-end timeline-box bg-base-content text-white">
              Damien PELLETIER
            </div>
          </li>
        </ul>
      </div>



    </div>
  );
}
