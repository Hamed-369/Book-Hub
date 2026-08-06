import { async } from "regenerator-runtime";
import { API_URL, RES_PER_PAGE } from "./config.js";
import { fetchData } from "./helpers.js";

export const state = {
  search: {
    query: "",
    page: 1,
    results: [],
    resultsPerPage: RES_PER_PAGE,
  },
};
export const getBookList = async function (query) {
  try {
    state.search.query = query;
    const data = await fetchData(API_URL(query));
    state.search.results = data.docs.map((book) => {
      return {
        authorName: Array.isArray(book.author_name)
          ? book.author_name[0]
          : book.author_name,
        title: book.title,
        coverId: book.cover_i,
        publishYear: book.first_publish_year,
      };
    });
    state.search.page = 1;
  } catch (err) {
    throw err;
  }
};
