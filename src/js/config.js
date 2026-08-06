export const RES_PER_PAGE = 30;
export const API_URL = function (query) {
  return `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=20`;
};
export const TIMEOUT_SEC = 10;
