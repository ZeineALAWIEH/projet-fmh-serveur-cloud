import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import InputText from "./InputText";
import {
  changeHeroAge,
  changeHeroApercu,
  changeHeroArmes,
  changeHeroCompetences,
  changeHeroCreationYear,
  changeHeroEspece,
  changeHeroNom,
  changeHeroOrigine,
  changeHeroPhotoProfil,
  changeHeroPrenom,
  changeHeroStory,
  changeSelectedSaga,
} from "../../../store/reducers/addHero";
import { fetchAddHeros } from "../../../store/thunk/FetchHeros";

export default function UserAddHero() {
  const dispatch = useAppDispatch();
  const sagas = useAppSelector((state) => state.sagas.list);
  const addHero = useAppSelector((state) => state.addHero.hero);

  const handleFormAddHero = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(fetchAddHeros());
    
/*  Méthode qui n'utilise pas les input controlés donc les state pour envoyer les data du formulaire
    const form = e.currentTarget.parentElement as HTMLFormElement;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries()); */
  };
  

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          {/* <div className="text-8xl text-center text-red-300">MARYAM</div> */}

          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Formulaire d'ajout d'un héro
          </h2>
          <form method="post">
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">

              <InputText
                nameInput="prenom"
                labelInput="Prénom"
                stateInput={addHero.prenom}
                changeState={changeHeroPrenom}
                placeholderInput="Prénom du personnage"
                taille="w-full"
              />
              <InputText
                nameInput="nom"
                labelInput="Nom"
                stateInput={addHero.nom}
                changeState={changeHeroNom}
                placeholderInput="Nom du personnage"
                taille="w-full"
              />

              <div className="w-full">
                <label
                  htmlFor="date_de_creation"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Année de création
                </label>
                <input
                  type="number"
                  name="date_de_creation"
                  id="date_de_creation"
                  value={addHero.date_de_creation}
                  onChange={(e) => dispatch(changeHeroCreationYear(e.target.value))}
                  min={1950}
                  max={2024}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Année de création du personnage, de 1950 à 2024"
                  required={true}
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={addHero.age}
                  onChange={(e) => dispatch(changeHeroAge(e.target.value))}
                  min={0}
                  max={99}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="De 0 à 99 ans"
                  required={true}
                />
              </div>

              <InputText
                nameInput="espece"
                labelInput="Espèce"
                stateInput={addHero.espece}
                changeState={changeHeroEspece}
                placeholderInput="Espèce du personnage"
                taille="w-full"
              />
              <InputText
                nameInput="armes"
                labelInput="Armes"
                stateInput={addHero.armes}
                changeState={changeHeroArmes}
                placeholderInput="Armes du personnage"
                taille="w-full"
              />
              <InputText
                nameInput="competences"
                labelInput="Compétences"
                stateInput={addHero.competences}
                changeState={changeHeroCompetences}
                placeholderInput="Compétences du personnage"
                taille="w-full"
              />
              <InputText
                nameInput="origine"
                labelInput="Origine"
                stateInput={addHero.origine}
                changeState={changeHeroOrigine}
                placeholderInput="Origine du personnage"
                taille="w-full"
              />
             <InputText
                nameInput="photo_de_profil"
                labelInput="Photo principale du héro"
                stateInput={addHero.photo_de_profil}
                changeState={changeHeroPhotoProfil}
                placeholderInput="https://monlien.fr/vers/images/hero"
                taille="sm:col-span-2"
              />
              <InputText
                nameInput="apercu"
                labelInput="Résumé"
                stateInput={addHero.apercu}
                changeState={changeHeroApercu}
                placeholderInput="Résumé du personnage"
                taille="sm:col-span-2"
              />

              <div className="sm:col-span-2">
                <label
                  htmlFor="storyId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Histoire
                </label>
                <textarea
                  id="storyId"
                  name="story"
                  value={addHero.story}
                  onChange={(e) => dispatch(changeHeroStory(e.target.value))}
                  rows={8}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Histoire du personnnage"
                ></textarea>
              </div>

              <div>
                <label
                  htmlFor="sagaSelectId"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Saga
                </label>
                <select
                  id="sagaSelectId"
                  name="selectedSaga"
                  value={addHero.mysaga[0]}
                  onChange={(e) => dispatch(changeSelectedSaga(e.target.value))}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option value="default">Choisissez une saga</option>
                  {sagas.map((s) => {
                    return <option key={s.id} value={s.id}>{s.nom}</option>;
                  })}
                </select>
              </div>
            </div>

            <button
              type="submit"
              onClick={handleFormAddHero}
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary rounded-lg focus:ring-4 focus:ring-primary dark:focus:ring-primary hover:bg-primary"
            >
              Ajouter le héro
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
