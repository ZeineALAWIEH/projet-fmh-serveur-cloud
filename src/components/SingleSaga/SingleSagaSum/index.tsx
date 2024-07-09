import { ISagas } from "../../../types";

interface props {
  saga:ISagas|null
}

export default function SingleSagaSum({saga}:props) {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl mb-9 w-11/12 md:w-8/12 mx-auto">
        <figure className="w-1/3 p-9 me-3">
          <img
            src={`${saga?.picture}`}
            alt="Album"
            className="md:h-96 lg:h-auto rounded-box"

          />
        </figure>
        <div className="card-body w-2/3">
          <h2 className="card-title">Informations principales :</h2>
          <ul className=" [&_li]:p-2 
                          [&_li]:border-2 
                          [&_li]:rounded-box    
                          [&_li]:mb-2    
                          [&_li]:bg-base-200    
          ">
              <li>Créateur : <span className="font-bold">{`${saga?.creator}`}</span> </li>
              <li>Date de sortie du premier titre : <span className="font-bold">{`${saga?.date_de_creation}`}</span></li>
          </ul>
        </div>
      </div>
    </>
  );
}
