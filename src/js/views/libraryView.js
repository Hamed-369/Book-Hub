import View from "./view.js";

class LibraryView extends View {
  _parentEl = document.getElementById("resultsContainer");
  _errorMessage =
    "No saved searches yet. Search for something and it will appear here.";

  addHandlerShowLibrary(handler) {
    const btn = document.getElementById("my-books");
    if (!btn) return;
    btn.addEventListener("click", handler);
  }

  addHandlerDeleteQuery(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn--delete-library");
      if (!btn) return;
      const query = btn.dataset.query;
      handler(query);
    });
  }

  _escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  _generateMarkup() {
    return this._data
      .map((query) => {
        const safeQuery = this._escapeHtml(query);
        return `
          <div class="library-item rounded-3xl border p-3 mb-2 grid grid-rows-2 text-center items-center gap-y-2 h-fit">
            <span class="library-item__text font-bold">${safeQuery}</span>
            <button
              class="btn btn--delete-library text-sm px-2 py-1 bg-white/60 text-gray-800 rounded cursor-pointer"
              type="button"
              data-query="${safeQuery}"
            >
              Delete
            </button>
          </div>
        `;
      })
      .join("");
  }
}

export default new LibraryView();
