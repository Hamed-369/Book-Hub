import View from "./view";
import preview from "./preview.js";

class ResultsView extends View {
  _parentEl = document.getElementById("resultsContainer");
  _modalOverlay = document.getElementById("modalOverlay");
  _modalFrame = document.getElementById("modalFrame");
  _modalTitle = document.getElementById("modalTitle");
  _modalClose = document.getElementById("modalClose");
  _errorMessage =
    "No book found for your query! Please try again with another book.";

  _generateMarkup() {
    const [data] = this._data;
    return this._data.map((book) => this._generateMarkupPreview(book)).join("");
  }

  closePreview() {
    this._modalOverlay.classList.add("hidden");
    this._modalOverlay.classList.remove("flex");
    this._modalFrame.src = "";
  }

  addHandlerClosePreview(handler) {
    this._modalClose.addEventListener("click", handler);

    this._modalOverlay.addEventListener("click", function (e) {
      if (e.target === this) handler();
    });
  }
  _escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  addHandlerAddBookmark(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--bookmark");
      if (!btn) return;
      const id = btn.dataset.coverid || btn.dataset.title;
      handler(id);
    });
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

  _generateMarkupPreview(data) {
    return preview.generateMarkupPreview(data, this._escapeHtml);
  }
}

export default new ResultsView();
