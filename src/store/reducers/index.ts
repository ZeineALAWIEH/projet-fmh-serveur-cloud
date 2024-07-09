import searchBarReducer from "./searchBar"
import authReducer from "./auth"
import userReducer from "./user"
import registerReducer from "./register";
import contactReducer from "./contact";
import herosReducer from "./heros";
import addHeroReducer from "./addHero";
import sagasReducer from "./sagas";
import paginationReducer from "./pagination";
import filterHeroListReducer from "./filterHeroList";
import filterSagaListReducer from "./filterSagaList";

const reducer = {
    searchBar: searchBarReducer,
    auth: authReducer,
    user: userReducer,
    register: registerReducer,
    contact: contactReducer,
    heros: herosReducer,
    addHero: addHeroReducer,
    sagas: sagasReducer,
    pagination: paginationReducer,
    filterHeroList: filterHeroListReducer,
    filterSagaList: filterSagaListReducer,
};

export default reducer;
