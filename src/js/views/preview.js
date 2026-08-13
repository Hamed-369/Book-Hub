import View from "./view";

class Preview extends View {
  generateMarkupPreview(data, escapeHtml) {
    const iaId =
      Array.isArray(data.iaId) && data.iaId.length > 0 ? data.iaId[0] : null;
    const bookmarkActiveClass = data.bookmarked ? "btn_active" : "";

    return `
      <li
        class="grid grid-rows-9 border-2 border-white/30 bg-white/20 text-white/85 rounded-xl pt-2 backdrop-blur-xl shadow-xl w-42 h-49"
      >

       <a
        class="btn--bookmark fixed top-2 right-2 cursor-pointer [.btn_active_&]:fill-white/70 ${bookmarkActiveClass}"
        data-coverid="${data.coverId ?? ""}"
        data-title="${escapeHtml(data.title ?? "")}"
        aria-pressed="${data.bookmarked ? "true" : "false"}"

      >
        <svg class=" w-4 h-4 ${data.bookmarked ? "fill-white" : "text-white/70"}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </a>

      ${
        data.coverId
          ? `<img class="w-full h-full row-span-4 object-contain" src="https://covers.openlibrary.org/b/id/${data.coverId}-M.jpg" loading="lazy" />`
          : `<div class="text-center text-sm font-semibold">No cover available</div>`
      }

        <div class="mt-3 pl-3 pr-1 h-full w-full">
          <h4 class="font-semibold text-[11px] mb-1">${data.title ? data.title : "no Title available"}</h4>
          <span class="text-xs">Author: ${data.authorName ? data.authorName : "no Author available"}</span><br />
          <span class="text-xs">Publish: ${data.publishYear ? data.publishYear : "no Publish Year available"}</span>
          <div class="flex justify-between pr-3 mt-0.5 items-center">
          <button 
             class="preview-btn text-left text-[10px] text-white/70 hover:underline cursor-pointer" 
             type="button"
             data-ia="${iaId}" 
             data-title="${data.title ? data.title : "no Title available"}">
             Preview book
           </button>

          <span>--</span>
          ${
            iaId
              ? `<a href="https://archive.org/details/${escapeHtml(iaId)}" target="_blank" rel="noopener" class="text-[10px] text-white/70 hover:underline">Read full book </a>`
              : `<a class="text-[9px] text-white/70" >No online version </a>`
          }
          </div>
          
        </div>
      </li>
    `;
  }
}

export default new Preview();
