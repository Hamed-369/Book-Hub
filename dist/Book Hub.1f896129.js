let e;class t{_data;renderData(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}_clear(){this._parentEl.innerHTML=""}renderSpinner=function(){let e=`
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
    `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",e)};renderError(e=this._errorMessage){let t=`
          <div class="error m-auto flex gap-x-2 col-span-5">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
</svg>

            </div>
            <p>${e}</p>
          </div> 
        `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
          <div class="message">
            
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

            <p>${e}</p>
          </div> 
        `;this._clear(),this._parentEl.insertAdjacentHTML("afterbegin",t)}}var r=new class extends t{generateMarkupPreview(e,t){let r=Array.isArray(e.iaId)&&e.iaId.length>0?e.iaId[0]:null,a=e.bookmarked?"btn_active":"";return`
      <li
        class="grid grid-rows-9 border-2 border-white/30 bg-white/20 text-white/85 rounded-xl pt-2 backdrop-blur-xl shadow-xl w-42 h-49"
      >

       <a
        class="btn--bookmark fixed top-2 right-2 cursor-pointer [.btn_active_&]:fill-white/70 ${a}"
        data-coverid="${e.coverId??""}"
        data-title="${t(e.title??"")}"
        aria-pressed="${e.bookmarked?"true":"false"}"

      >
        <svg class=" w-4 h-4 ${e.bookmarked?"fill-white":"text-white/70"}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
        </svg>
      </a>

      ${e.coverId?`<img class="w-full h-full row-span-4 object-contain" src="https://covers.openlibrary.org/b/id/${e.coverId}-M.jpg" loading="lazy" />`:'<div class="text-center text-sm font-semibold">No cover available</div>'}

        <div class="mt-3 pl-3 pr-1 h-full w-full">
          <h4 class="font-semibold text-[11px] mb-1">${e.title?e.title:"no Title available"}</h4>
          <span class="text-xs">Author: ${e.authorName?e.authorName:"no Author available"}</span><br />
          <span class="text-xs">Publish: ${e.publishYear?e.publishYear:"no Publish Year available"}</span>
          <div class="flex justify-between pr-3 mt-0.5 items-center">
          <button 
             class="preview-btn text-left text-[10px] text-white/70 hover:underline cursor-pointer" 
             type="button"
             data-ia="${r}" 
             data-title="${e.title?e.title:"no Title available"}">
             Preview book
           </button>

          <span>--</span>
          ${r?`<a href="https://archive.org/details/${t(r)}" target="_blank" rel="noopener" class="text-[10px] text-white/70 hover:underline">Read full book </a>`:'<a class="text-[9px] text-white/70" >No online version </a>'}
          </div>
          
        </div>
      </li>
    `}};class a extends t{_parentEl=document.getElementById("resultsContainer");_modalOverlay=document.getElementById("modalOverlay");_modalFrame=document.getElementById("modalFrame");_modalTitle=document.getElementById("modalTitle");_modalClose=document.getElementById("modalClose");_errorMessage="No book found for your query! Please try again with another book.";_generateMarkup(){let[e]=this._data;return this._data.map(e=>this._generateMarkupPreview(e)).join("")}closePreview(){this._modalOverlay.classList.add("hidden"),this._modalOverlay.classList.remove("flex"),this._modalFrame.src=""}addHandlerClosePreview(e){this._modalClose.addEventListener("click",e),this._modalOverlay.addEventListener("click",function(t){t.target===this&&e()})}_escapeHtml(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}addHandlerAddBookmark(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e(r.dataset.coverid||r.dataset.title)})}addHandlerOpenPreview(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--preview");r&&e(r.dataset.iaid||r.dataset.ia,r.dataset.title)})}_generateMarkupPreview(e){return r.generateMarkupPreview(e,this._escapeHtml)}}var n=new a,o=function(e){var t,r=Object.prototype,a=r.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function d(e,r,a,o){var i,l,s,c,d=Object.create((r&&r.prototype instanceof m?r:m).prototype);return n(d,"_invoke",{value:(i=e,l=a,s=new S(o||[]),c=h,function(e,r){if(c===p)throw Error("Generator is already running");if(c===f){if("throw"===e)throw r;return{value:t,done:!0}}for(s.method=e,s.arg=r;;){var a=s.delegate;if(a){var n=function e(r,a){var n=a.method,o=r.iterator[n];if(t===o)return(a.delegate=null,"throw"===n&&r.iterator.return&&(a.method="return",a.arg=t,e(r,a),"throw"===a.method))?v:("return"!==n&&(a.method="throw",a.arg=TypeError("The iterator does not provide a '"+n+"' method")),v);var i=u(o,r.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,v;var l=i.arg;return l?l.done?(a[r.resultName]=l.value,a.next=r.nextLoc,"return"!==a.method&&(a.method="next",a.arg=t),a.delegate=null,v):l:(a.method="throw",a.arg=TypeError("iterator result is not an object"),a.delegate=null,v)}(a,s);if(n){if(n===v)continue;return n}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(c===h)throw c=f,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);c=p;var o=u(i,l,s);if("normal"===o.type){if(c=s.done?f:"suspendedYield",o.arg===v)continue;return{value:o.arg,done:s.done}}"throw"===o.type&&(c=f,s.method="throw",s.arg=o.arg)}})}),d}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=d;var h="suspendedStart",p="executing",f="completed",v={};function m(){}function g(){}function y(){}var b={};c(b,i,function(){return this});var w=Object.getPrototypeOf,k=w&&w(w(O([])));k&&k!==r&&a.call(k,i)&&(b=k);var _=y.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach(function(t){c(e,t,function(e){return this._invoke(t,e)})})}function E(e,t){var r;n(this,"_invoke",{value:function(n,o){function i(){return new t(function(r,i){!function r(n,o,i,l){var s=u(e[n],e,o);if("throw"===s.type)l(s.arg);else{var c=s.arg,d=c.value;return d&&"object"==typeof d&&a.call(d,"__await")?t.resolve(d.__await).then(function(e){r("next",e,i,l)},function(e){r("throw",e,i,l)}):t.resolve(d).then(function(e){c.value=e,i(c)},function(e){return r("throw",e,i,l)})}}(n,o,r,i)})}return r=r?r.then(i,i):i()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function O(e){if(null!=e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function r(){for(;++n<e.length;)if(a.call(e,n))return r.value=e[n],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,n(_,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:g,configurable:!0}),g.displayName=c(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,c(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),c(E.prototype,l,function(){return this}),e.AsyncIterator=E,e.async=function(t,r,a,n,o){void 0===o&&(o=Promise);var i=new E(d(t,r,a,n),o);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},x(_),c(_,s,"Generator"),c(_,i,function(){return this}),c(_,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var a in t)r.push(a);return r.reverse(),function e(){for(;r.length;){var a=r.pop();if(a in t)return e.value=a,e.done=!1,e}return e.done=!0,e}},e.values=O,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var r in this)"t"===r.charAt(0)&&a.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(a,n){return l.type="throw",l.arg=e,r.next=a,n&&(r.method="next",r.arg=t),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],l=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=a.call(i,"catchLoc"),c=a.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);else if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else if(c){if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&a.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return(i.type=e,i.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var a=r.completion;if("throw"===a.type){var n=a.arg;I(r)}return n}}throw Error("illegal catch attempt")},delegateYield:function(e,r,a){return this.delegate={iterator:O(e),resultName:r,nextLoc:a},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=o}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=o:Function("r","regeneratorRuntime = r")(o)}let i=async function(e){try{let t=await fetch(e),r=await Promise.race([t,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),a=await r.json();return r.ok||alert(`Book was not found!. Try again: ${r.status}`),a}catch(e){throw e}},l="bookmarks",s="library",c={search:{query:"",page:1,results:[],resultsPerPage:30},bookmarks:[],library:[]},d=async function(e){try{let t=e.trim();if(!t)return;c.search.query=t;let r=await i(`https://openlibrary.org/search.json?q=${encodeURIComponent(t)}&limit=20`);c.search.results=r.docs.map(e=>({authorName:Array.isArray(e.author_name)?e.author_name[0]:e.author_name,title:e.title,coverId:e.cover_i,publishYear:e.first_publish_year,iaId:e.ia})),c.search.page=1,u(t)}catch(e){throw e}},u=function(e){let t=e.trim();!t||c.library.some(e=>e.toLowerCase()===t.toLowerCase())||(c.library.unshift(t),v())},h=function(e){let t=c.library.findIndex(t=>t.toLowerCase()===e.toLowerCase());-1!==t&&(c.library.splice(t,1),v())},p=function(e,t){modalTitle.textContent=t,modalFrame.src=`https://archive.org/embed/${e}`,setTimeout(()=>{modalFrame.src=`https://archive.org/embed/${e}`},50),modalOverlay.classList.remove("hidden"),modalOverlay.classList.add("flex")},f=function(){localStorage.setItem(l,JSON.stringify(c.bookmarks))},v=function(){localStorage.setItem(s,JSON.stringify(c.library))},m=function(e){if(c.bookmarks.some(t=>t.coverId?.toString()===e.coverId?.toString()||t.title===e.title))return;c.bookmarks.push({...e,bookmarked:!0});let t=c.search.results.find(t=>t.coverId===e.coverId||t.title===e.title);t&&(t.bookmarked=!0),f()},g=function(e){let t=c.bookmarks.findIndex(t=>t.coverId?.toString()===e||t.title===e);-1!==t&&c.bookmarks.splice(t,1);let r=c.search.results.find(t=>t.coverId?.toString()===e||t.title===e);r&&(r.bookmarked=!1),f()};e=localStorage.getItem("bookmarks"),function(){try{let e=JSON.parse(localStorage.getItem(l)),t=JSON.parse(localStorage.getItem(s));Array.isArray(e)&&(c.bookmarks=e),Array.isArray(t)&&(c.library=t)}catch(e){localStorage.removeItem(l),localStorage.removeItem(s),c.bookmarks=[],c.library=[]}}(),e&&(c.bookmarks=JSON.parse(e));class y extends t{_parentEl=document.getElementById("search");_data;getQuery(){let e=this._parentEl.querySelector(".search_field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search_field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var b=new y;class w extends t{_parentEl=document.getElementById("resultsContainer");_errorMessage=" No bookmarks yet. Find a nice book and bookmark it :)";toggleIcon(){this._parentEl.addEventListener("click",function(e){let t=e.target.closest(".btn_svg");t&&t.classList.toggle("btn_active")})}addHandlerRender(e){window.addEventListener("load",e)}_escapeHtml(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}addHandlerOpenPreview(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--preview");r&&e(r.dataset.iaid||r.dataset.ia,r.dataset.title)})}_generateMarkup(){return this._data.map(e=>r.generateMarkupPreview(e,this._escapeHtml)).join("")}}var k=new w;class _ extends t{_parentEl=document.getElementById("resultsContainer");_errorMessage="No saved searches yet. Search for something and it will appear here.";addHandlerShowLibrary(e){let t=document.getElementById("my-books");t&&t.addEventListener("click",e)}addHandlerDeleteQuery(e){this._parentEl.addEventListener("click",function(t){let r=t.target.closest(".btn--delete-library");r&&e(r.dataset.query)})}_escapeHtml(e){let t=document.createElement("div");return t.textContent=e,t.innerHTML}_generateMarkup(){return this._data.map(e=>{let t=this._escapeHtml(e);return`
          <div class="library-item rounded-3xl border p-3 mb-2 grid grid-rows-2 text-center items-center gap-y-2 h-fit">
            <span class="library-item__text font-bold">${t}</span>
            <button
              class="btn btn--delete-library text-sm px-2 py-1 bg-white/60 text-gray-800 rounded cursor-pointer"
              type="button"
              data-query="${t}"
            >
              Delete
            </button>
          </div>
        `}).join("")}}var x=new _;let E=!1,L=async function(){try{E=!1;let e=b.getQuery();if(!e)return;n.renderSpinner(),await d(e),n.renderData(c.search.results),console.log(c.search.results),n._modalClose.addEventListener("click",n.closePreview),n._modalOverlay.addEventListener("click",e=>{e.target===n._modalOverlay&&n.closePreview()}),document.querySelectorAll(".preview-btn").forEach(e=>{e.addEventListener("click",()=>{p(e.dataset.ia,e.dataset.title)}),n._modalFrame.addEventListener("error",()=>{n._modalTitle.textContent="Couldn't load preview"})})}catch(e){console.log(e)}},I=function(e,t){e&&t&&p(e,t)};b.addHandlerSearch(L),n.addHandlerAddBookmark(function(e){if(!e)return;let t=c.search.results.find(t=>t.coverId?.toString()===e||t.title===e)??c.bookmarks.find(t=>t.coverId?.toString()===e||t.title===e);t&&(c.bookmarks.some(t=>t.coverId?.toString()===e||t.title===e)?g(e):m(t),E?k.renderData(c.bookmarks):n.renderData(c.search.results))}),n.addHandlerOpenPreview(I),n.addHandlerClosePreview(function(){n.closePreview()}),k.addHandlerRender(function(){E=!0,document.getElementById("my_books").addEventListener("click",function(){k.renderData(c.bookmarks)})}),k.addHandlerOpenPreview(I),x.addHandlerShowLibrary(function(){x.renderData(c.library)}),x.addHandlerDeleteQuery(function(e){e&&(h(e),x.renderData(c.library))});
//# sourceMappingURL=Book Hub.1f896129.js.map
