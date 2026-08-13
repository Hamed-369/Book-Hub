import View from "./view";
import preview from "./preview.js";

class BookmarksView extends View {
  _parentEl = document.getElementById("resultsContainer");
  _errorMessage = " No bookmarks yet. Find a nice book and bookmark it :)";

  toggleIcon() {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn_svg");
      if (!btn) return;
      btn.classList.toggle("btn_active");
    });
  }

  addHandlerRender(handler) {
    window.addEventListener("load", handler);
  }

  _escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  addHandlerOpenPreview(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--preview");
      if (!btn) return;
      const iaId = btn.dataset.iaid || btn.dataset.ia;
      const title = btn.dataset.title;
      handler(iaId, title);
    });
  }

  _generateMarkup() {
    return this._data
      .map((book) => preview.generateMarkupPreview(book, this._escapeHtml))
      .join("");
  }
}

export default new BookmarksView();
