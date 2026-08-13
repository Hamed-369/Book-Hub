import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config.js";
import { fetchData } from "./helpers.js";

const STORAGE_BOOKMARKS = "bookmarks";
const STORAGE_LIBRARY = "library";

export const state = {
  search: {
    query: "",
    page: 1,
    results: [],
    resultsPerPage: RES_PER_PAGE,
  },
  bookmarks: [],
  library: [],
};
export const getBookList = async function (query) {
  try {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) return;

    state.search.query = trimmedQuery;
    const data = await fetchData(API_URL(trimmedQuery));
    state.search.results = data.docs.map((book) => {
      return {
        authorName: Array.isArray(book.author_name)
          ? book.author_name[0]
          : book.author_name,
        title: book.title,
        coverId: book.cover_i,
        publishYear: book.first_publish_year,
        iaId: book.ia,
      };
      state.search.results = state.search.results.map((result) => ({
        ...result,
        bookmarked: state.bookmarks.some(
          (bookmark) =>
            bookmark.coverId === result.coverId ||
            bookmark.title === result.title,
        ),
      }));
    });
    state.search.page = 1;
    addSearchQuery(trimmedQuery);
  } catch (err) {
    throw err;
  }
};

export const addSearchQuery = function (query) {
  const trimmed = query.trim();
  if (!trimmed) return;

  if (
    state.library.some((saved) => saved.toLowerCase() === trimmed.toLowerCase())
  )
    return;

  state.library.unshift(trimmed);
  persistLibrary();
};

export const deleteSearchQuery = function (query) {
  const index = state.library.findIndex(
    (saved) => saved.toLowerCase() === query.toLowerCase(),
  );
  if (index === -1) return;
  state.library.splice(index, 1);
  persistLibrary();
};

export const openPreview = function (iaId, title) {
  modalTitle.textContent = title;
  modalFrame.src = `https://archive.org/embed/${iaId}`;

  setTimeout(() => {
    modalFrame.src = `https://archive.org/embed/${iaId}`;
  }, 50);

  modalOverlay.classList.remove("hidden");
  modalOverlay.classList.add("flex");
};

const persistBookmark = function () {
  localStorage.setItem(STORAGE_BOOKMARKS, JSON.stringify(state.bookmarks));
};

const persistLibrary = function () {
  localStorage.setItem(STORAGE_LIBRARY, JSON.stringify(state.library));
};

const loadStorage = function () {
  try {
    const bookmarks = JSON.parse(localStorage.getItem(STORAGE_BOOKMARKS));
    const library = JSON.parse(localStorage.getItem(STORAGE_LIBRARY));

    if (Array.isArray(bookmarks)) state.bookmarks = bookmarks;
    if (Array.isArray(library)) state.library = library;
  } catch (err) {
    localStorage.removeItem(STORAGE_BOOKMARKS);
    localStorage.removeItem(STORAGE_LIBRARY);
    state.bookmarks = [];
    state.library = [];
  }
};

export const addBookmark = function (book) {
  if (
    state.bookmarks.some(
      (result) =>
        result.coverId?.toString() === book.coverId?.toString() ||
        result.title === book.title,
    )
  )
    return;

  state.bookmarks.push({ ...book, bookmarked: true });

  const currentBook = state.search.results.find(
    (result) => result.coverId === book.coverId || result.title === book.title,
  );
  if (currentBook) currentBook.bookmarked = true;
  persistBookmark();
};

export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(
    (el) => el.coverId?.toString() === id || el.title === id,
  );
  if (index !== -1) state.bookmarks.splice(index, 1);

  const currentBook = state.search.results.find(
    (result) => result.coverId?.toString() === id || result.title === id,
  );
  if (currentBook) currentBook.bookmarked = false;
  persistBookmark();
};

const init = function () {
  const storage = localStorage.getItem("bookmarks");
  loadStorage();
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
