import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { changeCheckboxElfe, changeCheckboxHumain, changeRadioAlphabet, changeRadioCreationDate, changeRadioPertinence } from '../../../store/reducers/filterHeroList';
import Checkbox from '../../Generic/Checkbox'

export default function HeroListFilter() {

  const dispatch = useAppDispatch()
  const isCheckedHumain = useAppSelector((state) => state.filterHeroList.isChecked.humain)
  const isCheckedElfe = useAppSelector((state) => state.filterHeroList.isChecked.elfe)
  const isRadioAlphabet = useAppSelector((state) => state.filterHeroList.isRadio.alphabet)
  const isRadioCreationDate = useAppSelector((state) => state.filterHeroList.isRadio.creationDate)
  const isRadioPertinence = useAppSelector((state) => state.filterHeroList.isRadio.pertinence)

  return (
    <>
      {/* Drawer that opens from right side of page */}
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content flex justify-end">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-accent rounded-full fixed z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"
            >
              <path d="M13 20v-4.586L20.414 8c.375-.375.586-.884.586-1.415V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2.585c0 .531.211 1.04.586 1.415L11 15.414V22l2-2z"></path>
            </svg>
          </label>
        </div>

        <div className="drawer-side z-10">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}

            {/* Dropdown left */}
            <ul className="menu bg-base-200 w-56 rounded-box">
              <li>
                <details open>
                  <summary>Trier les héros par :</summary>
                  <ul>

                  <li>
                      <label>
                        <input
                          type="radio"
                          name="sorted-option"
                          checked={isRadioPertinence}
                          onChange={() => dispatch(changeRadioPertinence())}
                          className="radio radio-primary"
                        />{" "}
                        Pertinence{" "}
                      </label>
                    </li>


                    <li>
                      <label>
                        <input
                          type="radio"
                          name="sorted-option"
                          checked={isRadioAlphabet}
                          onChange={() => dispatch(changeRadioAlphabet())}
                          className="radio radio-primary"
                        />{" "}
                        Ordre alphabétique{" "}
                      </label>
                    </li>
                    <li>
                      <label>
                        <input
                          type="radio"
                          name="sorted-option"
                          checked={isRadioCreationDate}
                          onChange={() => dispatch(changeRadioCreationDate())}
                          className="radio radio-primary"
                        />
                        Date de création{" "}
                      </label>
                    </li>
                  </ul>
                </details>
              </li>

              <li>
                <details open>
                  <summary>Filtrer les héros par :</summary>
                  <ul className="[&_li>*]:font-bold">
                    <li>
                      <details open>
                        <summary>Espèces</summary>
                        <ul>

                          <li>
                            <label>
                              <Checkbox content="" 
                                        isChecked={isCheckedHumain} 
                                        changeCheckboxState={changeCheckboxHumain} 
                              />
                              Humain
                            </label>
                          </li>

                          <li>
                            <label>
                              <Checkbox content="" 
                                        isChecked={isCheckedElfe} 
                                        changeCheckboxState={changeCheckboxElfe} 
                              />
                              Elfe
                            </label>
                          </li>

                        </ul>
                      </details>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
