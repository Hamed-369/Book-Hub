import resultsView from "./views/resultsView.js";
import * as model from "./modal.js";
import searchView from "./views/searchView.js";
import bookmarksView from "./views/bookmarksView.js";
import libraryView from "./views/libraryView.js";

let showingBookmarks = false;

const controlSearchResults = async function () {
  try {
    showingBookmarks = false;
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner();
    await model.getBookList(query);
    resultsView.renderData(model.state.search.results);
    console.log(model.state.search.results);

    resultsView._modalClose.addEventListener("click", resultsView.closePreview);
    resultsView._modalOverlay.addEventListener("click", (e) => {
      if (e.target === resultsView._modalOverlay) resultsView.closePreview();
    });

    document.querySelectorAll(".preview-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        model.openPreview(btn.dataset.ia, btn.dataset.title);
      });

      resultsView._modalFrame.addEventListener("error", () => {
        resultsView._modalTitle.textContent = "Couldn't load preview";
      });
    });
  } catch (err) {
    console.log(err);
  }
};

const controlShowLibrary = function () {
  libraryView.renderData(model.state.library);
};

const controlDeleteSearchQuery = function (query) {
  if (!query) return;
  model.deleteSearchQuery(query);
  libraryView.renderData(model.state.library);
};

const controlAddBookmark = function (id) {
  if (!id) return;

  const book =
    model.state.search.results.find(
      (result) => result.coverId?.toString() === id || result.title === id,
    ) ??
    model.state.bookmarks.find(
      (result) => result.coverId?.toString() === id || result.title === id,
    );

  if (!book) return;

  const isBookmarked = model.state.bookmarks.some(
    (result) => result.coverId?.toString() === id || result.title === id,
  );

  if (!isBookmarked) model.addBookmark(book);
  else model.deleteBookmark(id);

  if (showingBookmarks) bookmarksView.renderData(model.state.bookmarks);
  else resultsView.renderData(model.state.search.results);
};

const controlBookmarks = function () {
  showingBookmarks = true;
  const btn_MyBook = document.getElementById("my_books");
  btn_MyBook.addEventListener("click", function () {
    bookmarksView.renderData(model.state.bookmarks);
  });
};

const controlOpenPreview = function (iaId, title) {
  if (!iaId || !title) return;
  model.openPreview(iaId, title);
};

const controlClosePreview = function () {
  resultsView.closePreview();
};

const init = function () {
  searchView.addHandlerSearch(controlSearchResults);
  resultsView.addHandlerAddBookmark(controlAddBookmark);
  resultsView.addHandlerOpenPreview(controlOpenPreview);
  resultsView.addHandlerClosePreview(controlClosePreview);
  bookmarksView.addHandlerRender(controlBookmarks);
  bookmarksView.addHandlerOpenPreview(controlOpenPreview);
  libraryView.addHandlerShowLibrary(controlShowLibrary);
  libraryView.addHandlerDeleteQuery(controlDeleteSearchQuery);
};
init();
