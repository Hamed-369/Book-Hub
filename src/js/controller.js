import resultsView from "./views/resultsView.js";
import * as model from "./modal.js";
import searchView from "./views/searchView.js";

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.getBookList(query);
    resultsView.renderData(model.state.search.results);
    console.log(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
};
init();
