import View from "./views/view";
import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const fetchData = async function (url) {
  try {
    const fetchPro = await fetch(url);

    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);

    const data = await res.json();

    if (!res.ok) alert(`Book was not found!. Try again: ${res.status}`);
    return data;
  } catch (err) {
    throw err;
  }
};
