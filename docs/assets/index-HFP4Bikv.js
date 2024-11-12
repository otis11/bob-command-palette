const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./dark-CgC-1CtI.css"])))=>i.map(i=>d[i]);
var R=Object.defineProperty;var P=(s,e,t)=>e in s?R(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var p=(s,e,t)=>P(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const j="modulepreload",I=function(s,e){return new URL(s,e).href},L={},O=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),l=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.allSettled(t.map(c=>{if(c=I(c,i),c in L)return;L[c]=!0;const m=c.endsWith(".css"),D=m?'[rel="stylesheet"]':"";if(i)for(let h=a.length-1;h>=0;h--){const f=a[h];if(f.href===c&&(!m||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${D}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":j,m||(g.as="script"),g.crossOrigin="",g.href=c,l&&g.setAttribute("nonce",l),document.head.appendChild(g),m)return new Promise((h,f)=>{g.addEventListener("load",h),g.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=a,window.dispatchEvent(n),!n.defaultPrevented)throw a}return o.then(a=>{for(const n of a||[])n.status==="rejected"&&r(n.reason);return e().catch(r)})};function E(s,e="24px"){const t=document.createElement("span");t.innerHTML=s;const i=t.firstElementChild;return i&&(i.style.fontSize=e),t.style.display="inline-flex",t}const F='<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',U='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>dots-vertical</title><path d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z" /></svg>',v={name(){return"Bob dark theme"},async provideTheme(){return await O(()=>Promise.resolve({}),__vite__mapDeps([0]),import.meta.url)},icon:F},Z=`:root {
	/* colors */
	--bob-color-primary: #ffda58;
	--bob-color-accent: #c47f7e;
	--bob-color-success: green;
	--bob-color-error: red;
	--bob-color-base-100: #424649;
	--bob-color-base-200: #303134;
	--bob-color-base-300: #1f1f1f;
	--bob-color-base-content-100: #d9dce4;
	--bob-color-base-content-200: #d9dce4;
	--bob-color-base-content-300: rgba(166, 173, 187, 0.2);

	/* general */
	--bob-font-family: sans-serif;
	--bob-search-font-size: 1.5rem;

	/* tag */
	--bob-tag-border-radius: 8px;
	--bob-tag-padding: 3px 6px;
	--bob-tag-spacing: 4px;
	--bob-tag-font-size: 12px;

	/* input */
	--bob-input-border-radius: 4px;
	--bob-input-min-height: 36px;
	--bob-input-padding: 4px 16px;
	--bob-input-border: none;

	/* shortcut */
	--bob-shortcut-font-size: 13px;

	/* button */
	--bob-button-padding: 0 16px;
	--bob-button-border: none;

	/* results */
	--bob-result-spacing: 12px;
	--bob-result-title-spacing: 0 0 4px 0;
	--bob-result-title-font-size: 1.125rem;
	--bob-result-description-font-size: 0.875rem;
	--bob-result-description-opacity: 0.65;
	--bob-result-description-spacing: 4px 0 0 0;
	--bob-result-prepend-spacing: 0 12px 0 0;
	--bob-result-append-spacing: 0 0 0 12px;
	--bob-result-hit-color: var(--bob-color-primary);
	--bob-result-hit-font-weight: bold;
	--bob-plugin-active-border-radius: 4px;
}
`;function x(s,e){for(const t in e)if(Object.hasOwn(e,t))if(N(e[t])){if(!Object.hasOwn(e,t)||t==="__proto__"||t==="constructor")continue;(!s[t]||typeof s[t]!="object"||Array.isArray(s[t]))&&(s[t]={}),x(s[t],e[t])}else s[t]=e[t];return s}function N(s){return typeof s=="object"&&s!==null&&!Array.isArray(s)}let w=null;const G={selectResult:{keys:["Enter"],description:"When selecting a result",title:"Select result"},openResultOptions:{keys:["Shift","Enter"],description:"When opening the result options",title:"Open result options"},nextResult:{keys:["ArrowDown"],description:"",title:"Next result"},previousResult:{keys:["ArrowUp"],description:"",title:"Previous result"},close:{keys:["Escape"],description:"",title:"Close bob or options"}},y={locale:"en-US",search:{maxRenderedItems:40},pluginsConfig:{},pluginsEnabled:{"bob-dark-theme":!0,"bob-light-theme":!0,"bob-results":!0,prefixes:!0,"focus-active-input":!0,"clear-search-on-focus":!0,google:!0},dimensions:{width:900,height:600},keybindings:G,theme:"dark",customTheme:Z};async function B(s){const e=await A(!0),t=x(e,s);await chrome.storage.sync.set({config:t});try{await chrome.runtime.sendMessage(chrome.runtime.id,{type:"bob.config.change",data:t})}catch(i){console.error(i)}}async function A(s=!1){return s&&(w=null),w||(w=(await chrome.storage.sync.get(["config"])).config||y),w||y}const u=typeof navigator<"u"?navigator.userAgent.toLowerCase():"",M=typeof navigator<"u"?navigator.platform.toLowerCase():"",W=u.includes("chrome")||u.includes("chromium");u.includes("firefox")||u.includes("thunderbird")||u.includes("librewolf");u.includes("edg");u.includes("safari");M.startsWith("win");M.startsWith("mac");u.includes("mobile");const k=(()=>{const s=u.match(/firefox|librewolf|chrom(?:e|ium)|safari|edg/i);return s!=null&&s[0]?s[0]:""})();(()=>{const s=u.match(new RegExp(`(?:${k})(?:/| )([^ ]+)`));return s!=null&&s[1]?s[1]:""})();const z=[{id:"tabs",permissions:["tabs"],prefix:"t",name:"Tabs",description:"Search browser tabs.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/tabs.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>tab</title><path d="M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H13V9H21V19Z" /></svg>',canBeDisabled:!0},{id:"session-devices",permissions:["sessions"],prefix:"sd",name:"Session Devices",description:"Search your session devices.",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/session-devices.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>devices</title><path d="M3 6H21V4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H7V18H3V6M13 12H9V13.78C8.39 14.33 8 15.11 8 16C8 16.89 8.39 17.67 9 18.22V20H13V18.22C13.61 17.67 14 16.88 14 16S13.61 14.33 13 13.78V12M11 17.5C10.17 17.5 9.5 16.83 9.5 16S10.17 14.5 11 14.5 12.5 15.17 12.5 16 11.83 17.5 11 17.5M22 8H16C15.5 8 15 8.5 15 9V19C15 19.5 15.5 20 16 20H22C22.5 20 23 19.5 23 19V9C23 8.5 22.5 8 22 8M21 18H17V10H21V18Z" /></svg>',canBeDisabled:!0},{id:"prefixes",prefix:"?",name:"Prefixes",description:"Filter for a specific ResultGroup only.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/prefixes.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>chevron-double-right</title><path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z" /></svg>',canBeDisabled:!0},{id:"bookmark-actions",permissions:["bookmarks","tabs"],prefix:"ba",name:"Bookmark actions",description:"For instance create a bookmark for the current tab.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/bookmark-actions.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookmark</title><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',canBeDisabled:!0},{id:"tab-groups",permissions:["tabGroups"],prefix:"tg",name:"Tab Groups",description:"List tab groups.",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/tab-groups.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>group</title><path d="M1,1V5H2V19H1V23H5V22H19V23H23V19H22V5H23V1H19V2H5V1M5,4H19V5H20V19H19V20H5V19H4V5H5M6,6V14H9V18H18V9H14V6M8,8H12V12H8M14,11H16V16H11V14H14" /></svg>',canBeDisabled:!0},{id:"google",prefix:"g",name:"Google",description:"Google search & Google filters like intitle:youtube.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/google.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>google</title><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>',canBeDisabled:!0},{id:"focus-active-input",name:"Focus active search field",description:"When opening/switching to the bob command palette, focus the active search field to directly type into it.",providesTheme:!1,providesResults:!1,providesConfig:!1,file:"/plugins/focus-active-input.js",canBeDisabled:!0},{id:"management",permissions:["management"],prefix:"e",name:"Management",description:"Search & interact with installed extensions.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/management.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>puzzle-outline</title><path d="M22,13.5C22,15.26 20.7,16.72 19,16.96V20A2,2 0 0,1 17,22H13.2V21.7A2.7,2.7 0 0,0 10.5,19C9,19 7.8,20.21 7.8,21.7V22H4A2,2 0 0,1 2,20V16.2H2.3C3.79,16.2 5,15 5,13.5C5,12 3.79,10.8 2.3,10.8H2V7A2,2 0 0,1 4,5H7.04C7.28,3.3 8.74,2 10.5,2C12.26,2 13.72,3.3 13.96,5H17A2,2 0 0,1 19,7V10.04C20.7,10.28 22,11.74 22,13.5M17,15H18.5A1.5,1.5 0 0,0 20,13.5A1.5,1.5 0 0,0 18.5,12H17V7H12V5.5A1.5,1.5 0 0,0 10.5,4A1.5,1.5 0 0,0 9,5.5V7H4V9.12C5.76,9.8 7,11.5 7,13.5C7,15.5 5.75,17.2 4,17.88V20H6.12C6.8,18.25 8.5,17 10.5,17C12.5,17 14.2,18.25 14.88,20H17V15Z" /></svg>',canBeDisabled:!0},{id:"on-blur-close-window",name:"On bob leave close window",description:"When leaving the bob command palette, for instance focusing another window, fully close the command palette window.",providesTheme:!1,providesResults:!1,providesConfig:!1,file:"/plugins/on-blur-close-window.js",canBeDisabled:!0},{id:"bob-dark-theme",name:"Bob dark theme",providesTheme:!0,providesResults:!1,providesConfig:!1,file:"/plugins/bob-dark-theme.js",icon:'<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',canBeDisabled:!1},{id:"youtube",prefix:"yt",name:"Youtube",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/youtube.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" /></svg>',canBeDisabled:!0},{id:"content-settings",permissions:["contentSettings"],prefix:"cs",name:"Content Settings",description:"Settings that control whether websites can use features such as cookies, JavaScript, and plugins",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/content-settings.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>wrench-cog</title><path d="M19.94 17.94C19.96 17.79 19.97 17.65 19.97 17.5S19.96 17.2 19.94 17.05L20.91 16.32C21 16.25 21.03 16.13 20.97 16.03L20.05 14.47C20 14.37 19.86 14.33 19.76 14.37L18.61 14.82C18.37 14.65 18.12 14.5 17.83 14.38L17.66 13.19C17.64 13.08 17.54 13 17.43 13H15.58C15.46 13 15.36 13.08 15.34 13.19L15.17 14.38C14.88 14.5 14.63 14.65 14.39 14.82L13.24 14.37C13.14 14.33 13 14.37 12.96 14.47L12.03 16.03C11.97 16.13 12 16.25 12.09 16.32L13.06 17.05C13.05 17.2 13.03 17.35 13.03 17.5S13.05 17.79 13.06 17.94L12.09 18.68C12 18.75 11.97 18.87 12.03 18.97L12.96 20.53C13 20.63 13.14 20.66 13.24 20.63L14.39 20.17C14.63 20.35 14.88 20.5 15.17 20.62L15.34 21.81C15.36 21.92 15.46 22 15.58 22H17.43C17.54 22 17.64 21.92 17.66 21.81L17.83 20.62C18.12 20.5 18.37 20.35 18.61 20.17L19.76 20.63C19.86 20.66 20 20.63 20.05 20.53L20.97 18.97C21.03 18.87 21 18.75 20.91 18.68L19.94 17.94M16.5 19C15.67 19 15 18.33 15 17.5S15.67 16 16.5 16 18 16.67 18 17.5 17.33 19 16.5 19M9 2C10.8 2.6 12 4.3 12 6.2C12 8.2 10.8 9.9 9 10.5V21.5C9 21.8 8.8 22 8.5 22H6.5C6.2 22 6 21.8 6 21.4V10.4C4.2 9.8 3 8.1 3 6.2S4.2 2.6 6 2V5.7H9V2Z" /></svg>',canBeDisabled:!0},{id:"browser",prefix:"cfg",name:"Browser Settings",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/browser.js",canBeDisabled:!0},{id:"sessions",permissions:["sessions"],prefix:"s",name:"Sessions",description:"List your recently closed sessions.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/sessions.js",canBeDisabled:!0},{id:"bookmarks",permissions:["bookmarks"],prefix:"b",name:"Bookmarks",description:"Search & interact with bookmarks.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/bookmarks.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>bookmark</title><path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" /></svg>',canBeDisabled:!0},{id:"system-storage",permissions:["system.storage"],prefix:"sto",name:"System Storage",description:"Information about your system storage.",supportedBrowsers:["chromium","chrome","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/system-storage.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>nas</title><path d="M4,5C2.89,5 2,5.89 2,7V17C2,18.11 2.89,19 4,19H20C21.11,19 22,18.11 22,17V7C22,5.89 21.11,5 20,5H4M4.5,7A1,1 0 0,1 5.5,8A1,1 0 0,1 4.5,9A1,1 0 0,1 3.5,8A1,1 0 0,1 4.5,7M7,7H20V17H7V7M8,8V16H11V8H8M12,8V16H15V8H12M16,8V16H19V8H16M9,9H10V10H9V9M13,9H14V10H13V9M17,9H18V10H17V9Z" /></svg>',canBeDisabled:!0},{id:"window",prefix:"win",name:"Window",description:"Interact with chrome windows, for instance 'close other windows'",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/window.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>window-restore</title><path d="M4,8H8V4H20V16H16V20H4V8M16,8V14H18V6H10V8H16M6,12V18H14V12H6Z" /></svg>',canBeDisabled:!0},{id:"browsing-data",permissions:["browsingData","tabs"],name:"Browsing Data",description:"Manage your browsing data.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/browsing-data.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>',canBeDisabled:!0},{id:"history",permissions:["history"],prefix:"h",name:"History",description:"Search & interact with browser history.",providesTheme:!1,providesResults:!0,providesConfig:!0,file:"/plugins/history.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>history</title><path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3" /></svg>',canBeDisabled:!0},{id:"tab-and-group-actions",permissions:["tabs","tabGroups"],prefix:"tga",name:"Tab Group Actions",description:"Combined actions for tabs & groups, for instance group tabs by domain",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/tab-and-group-actions.js",canBeDisabled:!0},{id:"bob-light-theme",name:"Bob light theme",providesTheme:!0,providesResults:!1,providesConfig:!1,file:"/plugins/bob-light-theme.js",icon:'<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',canBeDisabled:!0},{id:"tab-cookies",permissions:["tabs","cookies"],hostPermissions:["https://*/*","http://*/*"],prefix:"tc",name:"Tab Cookies",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/tab-cookies.js",canBeDisabled:!0},{id:"bob-results",prefix:"bob",name:"Bob",description:"Internal Bob commands like open settings, reset settings ...",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/bob-results.js",icon:'<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16" height="16" rx="4" transform="matrix(-1 0 0 1 17 0)" fill="#FFDA58"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 8.5144 4.03833)" fill="white" stroke="black"/><circle cx="3.32268" cy="3.32268" r="3.82268" transform="matrix(-1 0 0 1 16.0798 4.03833)" fill="white" stroke="black"/></svg>',canBeDisabled:!0},{id:"commands",prefix:"c",name:"Commands",description:"Available commands from extensions.",supportedBrowsers:["chrome","chromium","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/commands.js",canBeDisabled:!0},{id:"clear-search-on-focus",name:"Clear search on window focus",description:"Clears the search field when focusing/opening bob.",providesTheme:!1,providesResults:!1,providesConfig:!1,file:"/plugins/clear-search-on-focus.js",canBeDisabled:!0},{id:"chatgpt",prefix:"gpt",name:"ChatGPT",description:"Start a chat with chatgpt",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/chatgpt.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>brain</title><path d="M21.33,12.91C21.42,14.46 20.71,15.95 19.44,16.86L20.21,18.35C20.44,18.8 20.47,19.33 20.27,19.8C20.08,20.27 19.69,20.64 19.21,20.8L18.42,21.05C18.25,21.11 18.06,21.14 17.88,21.14C17.37,21.14 16.89,20.91 16.56,20.5L14.44,18C13.55,17.85 12.71,17.47 12,16.9C11.5,17.05 11,17.13 10.5,17.13C9.62,17.13 8.74,16.86 8,16.34C7.47,16.5 6.93,16.57 6.38,16.56C5.59,16.57 4.81,16.41 4.08,16.11C2.65,15.47 1.7,14.07 1.65,12.5C1.57,11.78 1.69,11.05 2,10.39C1.71,9.64 1.68,8.82 1.93,8.06C2.3,7.11 3,6.32 3.87,5.82C4.45,4.13 6.08,3 7.87,3.12C9.47,1.62 11.92,1.46 13.7,2.75C14.12,2.64 14.56,2.58 15,2.58C16.36,2.55 17.65,3.15 18.5,4.22C20.54,4.75 22,6.57 22.08,8.69C22.13,9.8 21.83,10.89 21.22,11.82C21.29,12.18 21.33,12.54 21.33,12.91M16.33,11.5C16.9,11.57 17.35,12 17.35,12.57A1,1 0 0,1 16.35,13.57H15.72C15.4,14.47 14.84,15.26 14.1,15.86C14.35,15.95 14.61,16 14.87,16.07C20,16 19.4,12.87 19.4,12.82C19.34,11.39 18.14,10.27 16.71,10.33A1,1 0 0,1 15.71,9.33A1,1 0 0,1 16.71,8.33C17.94,8.36 19.12,8.82 20.04,9.63C20.09,9.34 20.12,9.04 20.12,8.74C20.06,7.5 19.5,6.42 17.25,6.21C16,3.25 12.85,4.89 12.85,5.81V5.81C12.82,6.04 13.06,6.53 13.1,6.56A1,1 0 0,1 14.1,7.56C14.1,8.11 13.65,8.56 13.1,8.56V8.56C12.57,8.54 12.07,8.34 11.67,8C11.19,8.31 10.64,8.5 10.07,8.56V8.56C9.5,8.61 9.03,8.21 9,7.66C8.92,7.1 9.33,6.61 9.88,6.56C10.04,6.54 10.82,6.42 10.82,5.79V5.79C10.82,5.13 11.07,4.5 11.5,4C10.58,3.75 9.59,4.08 8.59,5.29C6.75,5 6,5.25 5.45,7.2C4.5,7.67 4,8 3.78,9C4.86,8.78 5.97,8.87 7,9.25C7.5,9.44 7.78,10 7.59,10.54C7.4,11.06 6.82,11.32 6.3,11.13C5.57,10.81 4.75,10.79 4,11.07C3.68,11.34 3.68,11.9 3.68,12.34C3.68,13.08 4.05,13.77 4.68,14.17C5.21,14.44 5.8,14.58 6.39,14.57C6.24,14.31 6.11,14.04 6,13.76C5.81,13.22 6.1,12.63 6.64,12.44C7.18,12.25 7.77,12.54 7.96,13.08C8.36,14.22 9.38,15 10.58,15.13C11.95,15.06 13.17,14.25 13.77,13C14,11.62 15.11,11.5 16.33,11.5M18.33,18.97L17.71,17.67L17,17.83L18,19.08L18.33,18.97M13.68,10.36C13.7,9.83 13.3,9.38 12.77,9.33C12.06,9.29 11.37,9.53 10.84,10C10.27,10.58 9.97,11.38 10,12.19A1,1 0 0,0 11,13.19C11.57,13.19 12,12.74 12,12.19C12,11.92 12.07,11.65 12.23,11.43C12.35,11.33 12.5,11.28 12.66,11.28C13.21,11.31 13.68,10.9 13.68,10.36Z" /></svg>',canBeDisabled:!0},{id:"top-sites",permissions:["topSites"],prefix:"top",name:"Top Sites",description:"The top sites (i.e. most visited sites) that are displayed on the new tab page",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/top-sites.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>arrow-up-bold</title><path d="M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z" /></svg>',canBeDisabled:!0},{id:"system-cpu",permissions:["system.cpu"],prefix:"cpu",name:"System CPU",description:"Information about your system CPU.",supportedBrowsers:["chromium","chrome","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/system-cpu.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cpu-64-bit</title><path d="M9,3V5H7A2,2 0 0,0 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11H21V9H19V7A2,2 0 0,0 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5A1,1 0 0,1 11.5,12.25V14A1,1 0 0,1 10.5,15H8A1,1 0 0,1 7,14V10A1,1 0 0,1 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75" /></svg>',canBeDisabled:!0},{id:"downloads",permissions:["downloads"],prefix:"d",name:"Downloads",description:"List and manage downloads.",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/downloads.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>download</title><path d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z" /></svg>',canBeDisabled:!0},{id:"system-memory",permissions:["system.memory"],prefix:"mem",name:"System Memory",description:"Information about your system memory.",supportedBrowsers:["chromium","chrome","edg"],providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/system-memory.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cpu-64-bit</title><path d="M9,3V5H7A2,2 0 0,0 5,7V9H3V11H5V13H3V15H5V17A2,2 0 0,0 7,19H9V21H11V19H13V21H15V19H17A2,2 0 0,0 19,17V15H21V13H19V11H21V9H19V7A2,2 0 0,0 17,5H15V3H13V5H11V3M8,9H11.5V10.5H8.5V11.25H10.5A1,1 0 0,1 11.5,12.25V14A1,1 0 0,1 10.5,15H8A1,1 0 0,1 7,14V10A1,1 0 0,1 8,9M12.5,9H14V11H15.5V9H17V15H15.5V12.5H12.5M8.5,12.75V13.5H10V12.75" /></svg>',canBeDisabled:!0},{id:"google-new",prefix:"gn",name:"Google New",description:"Create new google docs, sheets, slides ...",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/google-new.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>google</title><path d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z" /></svg>',canBeDisabled:!0},{id:"tab-actions",permissions:["tabs"],prefix:"a",name:"Tab Actions",description:"Interact with browser tabs. Sort, merge, duplicate...",providesTheme:!1,providesResults:!0,providesConfig:!1,file:"/plugins/tab-actions.js",icon:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>gesture-tap-button</title><path d="M13 5C15.21 5 17 6.79 17 9C17 10.5 16.2 11.77 15 12.46V11.24C15.61 10.69 16 9.89 16 9C16 7.34 14.66 6 13 6S10 7.34 10 9C10 9.89 10.39 10.69 11 11.24V12.46C9.8 11.77 9 10.5 9 9C9 6.79 10.79 5 13 5M20 20.5C19.97 21.32 19.32 21.97 18.5 22H13C12.62 22 12.26 21.85 12 21.57L8 17.37L8.74 16.6C8.93 16.39 9.2 16.28 9.5 16.28H9.7L12 18V9C12 8.45 12.45 8 13 8S14 8.45 14 9V13.47L15.21 13.6L19.15 15.79C19.68 16.03 20 16.56 20 17.14V20.5M20 2H4C2.9 2 2 2.9 2 4V12C2 13.11 2.9 14 4 14H8V12L4 12L4 4H20L20 12H18V14H20V13.96L20.04 14C21.13 14 22 13.09 22 12V4C22 2.9 21.11 2 20 2Z" /></svg>',canBeDisabled:!0}],T=z.filter(s=>{var e;return s.supportedBrowsers?(e=s.supportedBrowsers)==null?void 0:e.includes(k):!0});let H=[];async function q(){H=[];const s=await A(),e=[];for(const i of T)s.pluginsEnabled[i.id]&&e.push(import(i.file).then(o=>({id:i.id,...o.default})));const t=await Promise.all(e);for(const i of t)H.push(i),i.provideResults}async function _(s){return await new Promise(e=>chrome.permissions.request({permissions:s.permissions,origins:s.hostPermissions},async t=>{if(!t){e(!1);return}await B({pluginsEnabled:{[s.id]:!0}}),e(!0)}))}async function $(s){await q();const e=[],t=H.filter(i=>i.id!==s.id).flatMap(i=>i.permissions);for(const i of s.permissions||[])t.includes(i)||e.push(i);return await new Promise(i=>chrome.permissions.remove({permissions:e,origins:s.hostPermissions},async o=>{if(!o){i(!1);return}await B({pluginsEnabled:{[s.id]:!1}}),i(!0)}))}let C;const J={results:{}};async function K(s){const e=await S();await chrome.storage.local.set({usage:x(e,s)})}async function S(){return C||(C=(await chrome.storage.local.get(["usage"])).usage||J),C}function b(s,e,t,i){const o=e.split(" "),r=[];let a=0;for(let n=0;n<o.length;n++){let l=0;for(let c=0;c<i.length;c++)if(o[n][l]===i[c]?l+=1:l=0,l===o[n].length){a+=o[n].length;let m=o[n].length-1;for(;m>=0;)r[c-m]=!0,m-=1;break}}return{matches:r,score:a}}function Y(s){const e=document.createElement("div");e.classList.add("tag-container");for(const t of s){const i=document.createElement("span");i.classList.add("tag"),i.classList.add(`tag-${t.type||"default"}`),t.html&&(i.innerHTML=t.html),t.text&&(i.innerText=t.text),e.appendChild(i)}return e}const d=class d{constructor(){p(this,"instanceId");p(this,"lastSearch");p(this,"rootEl");p(this,"titleEl");p(this,"descriptionEl");this.instanceId=d.lastInstanceId++,d.globalRegistry[this.instanceId]=this}description(){return""}options(){}tags(){return[]}append(){}prepend(){}static instanceFromId(e){return d.globalRegistry[e]}search(e){var t;return e.textLower===((t=this.lastSearch)==null?void 0:t.textLower)?this.lastSearch:(this.lastSearch={title:b(e.text,e.textLower,this.title(),this.title().toLowerCase()),description:b(e.text,e.textLower,this.description(),this.description().toLowerCase()),textLower:e.textLower},this.lastSearch)}makeFakeSearch(e,t){return this.lastSearch={title:b(e.text,e.textLower,this.title(),this.title().toLowerCase()),description:b(e.text,e.textLower,this.description(),this.description().toLowerCase()),textLower:e.textLower},t&&(this.lastSearch.title.score=t),this.lastSearch}emitShowOptionsEvent(){window.dispatchEvent(new CustomEvent("show-options-for-result",{detail:this}))}id(){return this.className()}className(){return this.constructor.name}onOptionsOpen(e){}async onSelect(e){let i=(await S()).results[this.id()];i||(i={c:0,l:0,t:""}),i.l=new Date().getTime(),i.c+=1,i.t=this.title(),await K({results:{[this.id()]:i}}),await this.run(e)}afterElementCreation(){}asHtmlElement(){var r,a,n;if(this.rootEl)return this.descriptionEl&&(this.descriptionEl.innerHTML="",this.descriptionEl.append(this.createMatchesElement(this.description(),(r=this.lastSearch)==null?void 0:r.description.matches))),this.titleEl&&(this.titleEl.innerHTML="",this.titleEl.append(this.createMatchesElement(this.title(),(a=this.lastSearch)==null?void 0:a.title.matches))),this.rootEl;this.rootEl=d.LiTemplate.cloneNode(!0),this.rootEl.setAttribute("data-instance-id",this.instanceId.toString());const e=document.createElement("div");e.classList.add("result-content");const t=this.prepend();if(t){const l=document.createElement("span");l.classList.add("result-prepend"),l.append(t.cloneNode(!0)),this.rootEl.append(l)}this.titleEl=this.makeTitleElement(),e.append(this.titleEl);const i=this.tags();if(i.length>0){const l=Y(i);e.append(l)}this.descriptionEl=this.makeDescriptionElement(),e.append(this.descriptionEl),this.rootEl.append(e);const o=this.append();if(o){const l=document.createElement("span");l.classList.add("result-append"),l.append(o.cloneNode(!0)),this.rootEl.append(l)}if((((n=this.options())==null?void 0:n.length)||0)>0){const l=d.OptionsTemplate.cloneNode(!0);l.addEventListener("click",c=>{c.stopImmediatePropagation(),this.emitShowOptionsEvent()}),this.rootEl.append(l)}return this.afterElementCreation(),this.rootEl}makeDescriptionElement(){var t;const e=document.createElement("div");return e.classList.add("result-description"),e.append(this.createMatchesElement(this.description(),(t=this.lastSearch)==null?void 0:t.description.matches)),e}createMatchesElement(e,t){const i=document.createDocumentFragment(),o=e.length,r=!!t;for(let a=0;a<o;a++)if(r&&t[a]){const n=d.HitTemplate.cloneNode();n.innerText=e[a],i.appendChild(n)}else i.appendChild(document.createTextNode(e[a]));return i}makeTitleElement(){var t;const e=document.createElement("div");return e.classList.add("result-title"),e.append(this.createMatchesElement(this.title(),(t=this.lastSearch)==null?void 0:t.title.matches)),e}};p(d,"LiTemplate",(()=>{const e=document.createElement("li");return e.classList.add("result"),e})()),p(d,"HitTemplate",(()=>{const e=document.createElement("span");return e.classList.add("result-hit"),e})()),p(d,"OptionsTemplate",(()=>{const e=document.createElement("span");return e.classList.add("result-options"),e.append(E(U)),e.title="Shift Enter",e})()),p(d,"lastInstanceId",0),p(d,"globalRegistry",{});let V=d;class Q extends V{constructor(e,t=!1){super(),this.plugin=e,this.enabled=t}async run(){}afterElementCreation(){var e,t,i;(e=this.rootEl)==null||e.addEventListener("click",async()=>{var o,r;this.enabled?await $(this.plugin)?(this.enabled=!1,(o=this.rootEl)==null||o.classList.remove("plugin-active")):alert("Plugin could not be disabled."):await _(this.plugin)?(this.enabled=!0,(r=this.rootEl)==null||r.classList.add("plugin-active")):alert("Plugin could not be enabled.")}),this.enabled&&((t=this.rootEl)==null||t.classList.add("plugin-active")),this.plugin.canBeDisabled||(i=this.rootEl)==null||i.classList.add("plugin-cant-disable")}tags(){const e=[];return this.plugin.providesTheme&&e.push({text:"Theme"}),this.plugin.providesResults&&e.push({text:"Results"}),this.plugin.canBeDisabled||e.push({text:"Required",type:"error"}),e}title(){return this.plugin.name}description(){return this.plugin.description||""}prepend(){return this.plugin.icon?E(this.plugin.icon):void 0}}(async()=>{var s;await((s=v.provideTheme)==null?void 0:s.call(v)),await X()})();async function X(){var t;const s=document.createElement("div");s.classList.add("plugins-container");const e=ee(T);for(const i of e)s.append(new Q(i,!1).asHtmlElement());(t=document.getElementById("plugins"))==null||t.append(s)}function ee(s){return s.sort((e,t)=>e.name>t.name?1:e.name<t.name?-1:0)}
