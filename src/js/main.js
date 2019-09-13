import API from "./data.js";
import injectDOM from "./entriesDOM.js";



API.getEntries()
    .then(taco => injectDOM.addToDom(taco))