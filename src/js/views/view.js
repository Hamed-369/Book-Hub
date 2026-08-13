import "../../css/spinner.css";

export default class View {
  _data;

  renderData(data) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;
    const markup = this._generateMarkup();

    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentEl.innerHTML = "";
  }

  renderSpinner = function () {
    const markup = `
    <div class="flex flex-col items-center gap-4 col-span-full row-span-full m-auto">
  <div class="relative w-15 h-11 book-3d">
    <!-- cover -->
    <div
      class="absolute inset-0 bg-[#4b7fbb] rounded-r-md rounded-l-sm shadow-lg"
    ></div>
    <!-- pages -->
    <div
      class="absolute top-0.5 bottom-0.5 right-0.5 w-6.5 bg-blue-50 rounded-r shadow-sm page-origin animate-flip"
    ></div>
    <div
      class="absolute top-0.5 bottom-0.5 right-0.5 w-6.5 bg-blue-50 rounded-r shadow-sm page-origin animate-flip-delay-1"
    ></div>
    <div
      class="absolute top-0.5 bottom-0.5 right-0.5 w-6.5 bg-blue-50 rounded-r shadow-sm page-origin animate-flip-delay-2"
    ></div>
    <!-- spine -->
    <div
      class="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-900 rounded-l-sm"
    ></div>
  </div>
  <div class="text-xs font-semibold tracking-widest uppercase text-white/80">
    Loading&hellip;
  </div>
</div>
    `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  };

  renderError(message = this._errorMessage) {
    const markup = `
          <div class="error m-auto flex gap-x-2 col-span-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>

            </div>
            <p>${message}</p>
          </div> 
        `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }

  renderMessage(message = this._message) {
    const markup = `
          <div class="message">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

            <p>${message}</p>
          </div> 
        `;
    this._clear();
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
