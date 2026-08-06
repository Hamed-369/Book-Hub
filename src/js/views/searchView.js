import View from "./view";

class SearchView extends View {
  _parentEl = document.getElementById("search");
  _data;

  getQuery() {
    const query = this._parentEl.querySelector(".search_field").value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentEl.querySelector(".search_field").value = "";
  }

  addHandlerSearch(handler) {
    this._parentEl.addEventListener("submit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
