import View from "./view";

class ResultsView extends View {
  _parentEl = document.getElementById("resultsContainer");
  _errorMessage =
    "No book found for your query! Please try again with another book.";
  _message = "";

  _generateMarkup() {
    const [data] = this._data;
    return this._data.map((book) => this._generateMarkupPreview(book)).join("");
  }

  _generateMarkupPreview(data) {
    return `
      <li
        class="grid grid-rows-9 border-2 border-white/30 bg-white/20 text-white/85 rounded-xl pt-2 backdrop-blur-xl shadow-xl w-42 h-49 cursor-pointer"
      >

      ${
        data.coverId
          ? `<img class="w-full h-full row-span-4 object-contain" src="https://covers.openlibrary.org/b/id/${data.coverId}-M.jpg" loading="lazy" />`
          : `<div class="text-center text-sm font-semibold">No cover available</div>`
      }

        <div class="mt-3 pl-3 pr-1 h-fit w-fit">
          <h4 class="font-semibold text-xs mb-1">${data.title ? data.title : "no Title available"}</h4>
          <span class="text-xs">Author: ${data.authorName ? data.authorName : "no Author available"}</span><br />
          <span class="text-xs">Publish: ${data.publishYear ? data.publishYear : "no Publish Year available"}</span>
        </div>
      </li>
    `;
  }
}

export default new ResultsView();
