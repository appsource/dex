const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PhArrowCircleDown-B305t-Sh.js","assets/property-C9JG5tag.js","assets/PhArrowClockwise-CJPxQhr_.js","assets/PhArrowDown-C4hT9BVu.js","assets/PhArrowLeft-Way4Cu-r.js","assets/PhArrowRight-Cp5ZME0F.js","assets/PhArrowSquareOut-NnrK69c5.js","assets/PhArrowsDownUp-BjBI4ckC.js","assets/PhArrowsLeftRight-CuLpbKRk.js","assets/PhArrowUp-Dph6j8rm.js","assets/PhArrowUpRight-BpJjRRRh.js","assets/PhArrowsClockwise-CFUT8X7R.js","assets/PhBank-Dchr4XQJ.js","assets/PhBrowser-dUu2TrC1.js","assets/PhCaretDown-78IuKU3V.js","assets/PhCaretLeft-_aiyH7n1.js","assets/PhCaretRight-8zJQEuDX.js","assets/PhCaretUp-CiCxKWwN.js","assets/PhCheck-CcADx8br.js","assets/PhCircleHalf-BYzSzd2h.js","assets/PhClock-UItiXeJq.js","assets/PhCompass-CUy3uA7t.js","assets/PhCopy-C-PDgSlZ.js","assets/PhCreditCard-CWRaUT6F.js","assets/PhCurrencyDollar-Cqla3AXT.js","assets/PhDesktop-BBIPrYLl.js","assets/PhDeviceMobile-BdsPaATg.js","assets/PhDotsThree-BMXCQl-0.js","assets/PhVault-l2PHF38a.js","assets/PhEnvelope-yUsis6yU.js","assets/PhFunnelSimple-Ba7BbWTp.js","assets/PhGlobe-DgLxBk5U.js","assets/PhIdentificationCard-Czjmq9Z3.js","assets/PhImage-BAJ_erz6.js","assets/PhInfo-Cr4DhVUE.js","assets/PhLightbulb-BX_7duTr.js","assets/PhMagnifyingGlass-Mygfryvz.js","assets/PhPaperPlaneRight-BeuCA660.js","assets/PhPlus-BMjcHjsT.js","assets/PhPower-CGffGmdb.js","assets/PhPuzzlePiece-wm_GpVSi.js","assets/PhQrCode-DRwRzXCH.js","assets/PhQuestion-M09j2U0T.js","assets/PhQuestionMark-BP9EMB6h.js","assets/PhSealCheck-BfG80yKn.js","assets/PhSignOut-C5YOWlPT.js","assets/PhSpinner-BXooDYzU.js","assets/PhTrash-Biq6rmmL.js","assets/PhUser-CAgZSpGe.js","assets/PhWallet-w25D16It.js","assets/PhWarning-DPEydIPw.js","assets/PhWarningCircle-BqjT745H.js","assets/PhX-s-SmVExa.js"])))=>i.map(i=>d[i]);
import{_ as D,bW as bn,h as xt,bX as Js,a_ as el,b5 as v,bY as tl,bK as Ma,bZ as Co,b_ as il,b$ as h,c0 as $o,c1 as za,c2 as Or,aY as Qi,f as nl,c3 as ol,r as rl,c4 as al,c5 as sl,c6 as ll}from"./wagmi-CT6UJGrP.js";import{r as cl}from"./react-D-onyDnq.js";import{C as g,o as V,R as C,j as O,S as Y,f as P,b2 as dl,z as dt,q,b3 as ul,b4 as hl,b5 as ir,b as l,w as j,d as ae,v as ie,r as B,a as b,i as k,c as N,Z as pl,U as ee,e as K,O as T,J as Ht,A as Q,M as ce,g as St,W as Et,t as ue,k as M,E as je,b6 as Ze,b7 as Un,b8 as fl,L as la,b9 as Be,ba as jr,bb as ct,a6 as We,a4 as ml,Q as Gn,s as J,bc as Ji,x as Ua,B as gl,y as Ft,u as wl,p as bl,T as Kn,X as Wr,Y as Br,bd as yl,be as vl,N as xl,a0 as nr,bf as Cl,bg as $l,bh as kl,bi as Sl,bj as Va,aK as ko,aP as Fa,aS as Ha}from"./appkit-BbMK-Dzx.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();var or={},ca=cl;or.createRoot=ca.createRoot,or.hydrateRoot=ca.hydrateRoot;function El(){try{return P.returnOpenHref(`${q.SECURE_SITE_SDK_ORIGIN}/loading`,"popupWindow","width=600,height=800,scrollbars=yes")}catch{throw new Error("Could not open social popup")}}async function _l(){C.push("ConnectingFarcaster");const e=O.getAuthConnector();if(e){const t=g.getAccountData();if(!(t!=null&&t.farcasterUrl))try{const{url:i}=await e.provider.getFarcasterUri();g.setAccountProp("farcasterUrl",i,g.state.activeChain)}catch(i){C.goBack(),Y.showError(i)}}}async function Al(e){C.push("ConnectingSocial");const t=O.getAuthConnector();let i=null;try{const o=setTimeout(()=>{throw new Error("Social login timed out. Please try again.")},45e3);if(t&&e){if(P.isTelegram()||(i=El()),i)g.setAccountProp("socialWindow",dl(i),g.state.activeChain);else if(!P.isTelegram())throw new Error("Could not create social popup");const{uri:r}=await t.provider.getSocialRedirectUri({provider:e});if(!r)throw i==null||i.close(),new Error("Could not fetch the social redirect uri");if(i&&(i.location.href=r),P.isTelegram()){dt.setTelegramSocialProvider(e);const n=P.formatTelegramSocialLoginUrl(r);P.openHref(n,"_top")}clearTimeout(o)}}catch(o){i==null||i.close();const r=P.parseError(o);Y.showError(r),V.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:e,message:r}})}}async function Il(e){g.setAccountProp("socialProvider",e,g.state.activeChain),V.sendEvent({type:"track",event:"SOCIAL_LOGIN_STARTED",properties:{provider:e}}),e==="farcaster"?await _l():await Al(e)}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Rl=new Set(["children","localName","ref","style","className"]),da=new WeakMap,ua=(e,t,i,o,r)=>{const n=r==null?void 0:r[t];n===void 0?(e[t]=i,i==null&&t in HTMLElement.prototype&&e.removeAttribute(t)):i!==o&&((a,s,c)=>{let u=da.get(a);u===void 0&&da.set(a,u=new Map);let p=u.get(s);c!==void 0?p===void 0?(u.set(s,p={handleEvent:c}),a.addEventListener(s,p)):p.handleEvent=c:p!==void 0&&(u.delete(s),a.removeEventListener(s,p))})(e,n,i)},So=({react:e,tagName:t,elementClass:i,events:o,displayName:r})=>{const n=new Set(Object.keys(o??{})),a=e.forwardRef((s,c)=>{const u=e.useRef(new Map),p=e.useRef(null),f={},w={};for(const[y,E]of Object.entries(s))Rl.has(y)?f[y==="className"?"class":y]=E:n.has(y)||y in i.prototype?w[y]=E:f[y]=E;return e.useLayoutEffect(()=>{if(p.current===null)return;const y=new Map;for(const E in w)ua(p.current,E,s[E],u.current.get(E),o),u.current.delete(E),y.set(E,s[E]);for(const[E,S]of u.current)ua(p.current,E,void 0,S,o);u.current=y}),e.useLayoutEffect(()=>{var y;(y=p.current)==null||y.removeAttribute("defer-hydration")},[]),f.suppressHydrationWarning=!0,e.createElement(t,{...f,ref:e.useCallback(y=>{p.current=y,typeof c=="function"?c(y):c!==null&&(c.current=y)},[c])})});return a.displayName=r??i.name,a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tl={attribute:!0,type:String,converter:hl,reflect:!1,hasChanged:ul},Nl=(e=Tl,t,i)=>{const{kind:o,metadata:r}=i;let n=globalThis.litPropertyMetadata.get(r);if(n===void 0&&globalThis.litPropertyMetadata.set(r,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),o==="accessor"){const{name:a}=i;return{set(s){const c=t.get.call(this);t.set.call(this,s),this.requestUpdate(a,c,e,!0,s)},init(s){return s!==void 0&&this.C(a,void 0,e,s),s}}}if(o==="setter"){const{name:a}=i;return function(s){const c=this[a];t.call(this,s),this.requestUpdate(a,c,e,!0,s)}}throw Error("Unsupported decorator location: "+o)};function d(e){return(t,i)=>typeof i=="object"?Nl(e,t,i):((o,r,n)=>{const a=r.hasOwnProperty(n);return r.constructor.createProperty(n,o),a?Object.getOwnPropertyDescriptor(r,n):void 0})(e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(e){return d({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=e=>e??ir;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Za=Symbol.for(""),Pl=e=>{if((e==null?void 0:e.r)===Za)return e==null?void 0:e._$litStatic$},Ll=e=>({_$litStatic$:e,r:Za}),ha=new Map,Ol=e=>(t,...i)=>{const o=i.length;let r,n;const a=[],s=[];let c,u=0,p=!1;for(;u<o;){for(c=t[u];u<o&&(n=i[u],(r=Pl(n))!==void 0);)c+=r+t[++u],p=!0;u!==o&&s.push(n),a.push(c),u++}if(u===o&&a.push(t[o]),p){const f=a.join("$$lit$$");(t=ha.get(f))===void 0&&(a.raw=a,ha.set(f,t=a)),i=s}return e(t,...i)},pa=Ol(l),jl=j`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
  <g clip-path="url(#clip0_87_33)">
    <path d="M23.9367 2.29447e-07H6.05917C5.26333 -0.000218805 4.47526 0.156384 3.73997 0.46086C3.00469 0.765337 2.33661 1.21172 1.77391 1.7745C1.21121 2.33727 0.764917 3.00542 0.460542 3.74074C0.156167 4.47607 -0.000327963 5.26417 5.16031e-07 6.06V23.9433C4.48257e-07 24.7389 0.156744 25.5267 0.461276 26.2617C0.765808 26.9967 1.21216 27.6645 1.77484 28.2269C2.33752 28.7894 3.0055 29.2355 3.74061 29.5397C4.47573 29.8439 5.26358 30.0003 6.05917 30H23.9417C25.5486 29.9996 27.0895 29.3609 28.2257 28.2245C29.3618 27.0881 30 25.5469 30 23.94V6.06C29.9993 4.45241 29.3602 2.91091 28.2232 1.77449C27.0861 0.638064 25.5443 -0.000220881 23.9367 2.29447e-07Z" fill="url(#paint0_linear_87_33)"/>
    <path d="M14.8708 6.89259L15.4783 5.84259C15.5679 5.68703 15.6873 5.55064 15.8296 5.44122C15.9719 5.3318 16.1344 5.25148 16.3078 5.20486C16.4812 5.15824 16.662 5.14622 16.8401 5.1695C17.0181 5.19277 17.1898 5.25088 17.3453 5.34051C17.5009 5.43013 17.6373 5.54952 17.7467 5.69186C17.8561 5.83419 17.9364 5.99669 17.9831 6.17006C18.0297 6.34344 18.0417 6.5243 18.0184 6.70232C17.9952 6.88034 17.9371 7.05203 17.8474 7.20759L11.9949 17.3401H16.2283C17.5999 17.3401 18.3691 18.9526 17.7724 20.0701H5.36159C5.18215 20.0707 5.00436 20.0359 4.83845 19.9675C4.67254 19.8992 4.5218 19.7986 4.39492 19.6718C4.26803 19.5449 4.16751 19.3941 4.09915 19.2282C4.03079 19.0623 3.99593 18.8845 3.99659 18.7051C3.99659 17.9476 4.60492 17.3401 5.36159 17.3401H8.84159L13.2958 9.61926L11.9041 7.20426C11.738 6.89096 11.7 6.52543 11.7982 6.18469C11.8963 5.84395 12.1229 5.5546 12.4301 5.37763C12.7374 5.20065 13.1014 5.14987 13.4454 5.23599C13.7893 5.3221 14.0864 5.53838 14.2741 5.83926L14.8708 6.89259ZM9.60659 21.4759L8.29409 23.7526C8.20446 23.9082 8.08506 24.0446 7.94271 24.1541C7.80035 24.2636 7.63783 24.344 7.46441 24.3906C7.291 24.4373 7.11009 24.4493 6.93202 24.4261C6.75395 24.4028 6.58221 24.3447 6.42659 24.2551C6.27097 24.1655 6.13454 24.0461 6.02506 23.9037C5.91559 23.7613 5.83523 23.5988 5.78857 23.4254C5.74191 23.252 5.72986 23.0711 5.75311 22.893C5.77637 22.715 5.83446 22.5432 5.92409 22.3876L6.89909 20.7001C8.00159 20.3584 8.89742 20.6209 9.60659 21.4759ZM20.9066 17.3476H24.4583C25.2158 17.3476 25.8233 17.9551 25.8233 18.7126C25.8233 19.4701 25.2149 20.0776 24.4583 20.0776H22.4858L23.8166 22.3876C24.1916 23.0443 23.9708 23.8726 23.3149 24.2551C23.0006 24.4359 22.6274 24.4845 22.2772 24.3903C21.927 24.2961 21.6286 24.0667 21.4474 23.7526C19.2058 19.8643 17.5216 16.9534 16.4041 15.0151C15.2608 13.0426 16.0783 11.0626 16.8841 10.3909C17.7799 11.9293 19.1191 14.2501 20.9074 17.3476H20.9066Z" fill="white"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_87_33" x1="15" y1="2.29447e-07" x2="15" y2="30" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB"/>
      <stop offset="1" stop-color="#2072F3"/>
    </linearGradient>
    <clipPath id="clip0_87_33">
      <rect width="30" height="30" fill="white"/>
    </clipPath>
  </defs>
</svg>`,Wl=j`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Bl=j`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 11">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="M7.862 4.86c.159-1.064-.652-1.637-1.76-2.018l.36-1.443-.879-.218-.35 1.404c-.23-.058-.468-.112-.703-.166l.352-1.413-.877-.219-.36 1.442a29.02 29.02 0 0 1-.56-.132v-.005l-1.21-.302-.234.938s.652.15.638.158c.356.089.42.324.41.51l-.41 1.644a.715.715 0 0 1 .09.03l-.092-.024-.574 2.302c-.044.108-.154.27-.402.208.008.013-.639-.16-.639-.16L.227 8.403l1.142.285c.213.053.42.109.626.161l-.363 1.459.877.218.36-1.443c.239.065.472.125.7.182l-.36 1.436.879.219.363-1.456c1.497.283 2.623.17 3.097-1.185.381-1.09-.02-1.719-.807-2.129.574-.132 1.006-.51 1.12-1.289ZM5.856 7.673c-.272 1.09-2.107.5-2.702.353l.482-1.933c.595.149 2.503.443 2.22 1.58Zm.271-2.829c-.247.992-1.775.488-2.27.365l.436-1.753c.496.124 2.092.354 1.834 1.388Z"
    />
  </svg>
`,Dl=j`<svg viewBox="0 0 32 32" fill="none">
<path d="M29.0612 10.0613L13.0612 26.0613C12.9218 26.2011 12.7563 26.3121 12.5739 26.3878C12.3916 26.4635 12.1961 26.5024 11.9987 26.5024C11.8013 26.5024 11.6058 26.4635 11.4235 26.3878C11.2411 26.3121 11.0756 26.2011 10.9362 26.0613L3.9362 19.0613C3.79667 18.9217 3.68599 18.7561 3.61047 18.5738C3.53496 18.3915 3.49609 18.1961 3.49609 17.9988C3.49609 17.8014 3.53496 17.606 3.61047 17.4237C3.68599 17.2414 3.79667 17.0758 3.9362 16.9363C4.07573 16.7967 4.24137 16.686 4.42367 16.6105C4.60598 16.535 4.80137 16.4962 4.9987 16.4962C5.19602 16.4962 5.39141 16.535 5.57372 16.6105C5.75602 16.686 5.92167 16.7967 6.0612 16.9363L11.9999 22.875L26.9387 7.93876C27.2205 7.65697 27.6027 7.49866 28.0012 7.49866C28.3997 7.49866 28.7819 7.65697 29.0637 7.93876C29.3455 8.22055 29.5038 8.60274 29.5038 9.00126C29.5038 9.39977 29.3455 9.78197 29.0637 10.0638L29.0612 10.0613Z" fill="currentColor"/>
</svg>
`,Ml=j`<svg width="30" height="30" viewBox="0 0 30 30" fill="none">
<path d="M14.9978 7.80003H27.4668C26.2032 5.61107 24.3857 3.79333 22.1968 2.52955C20.008 1.26577 17.525 0.600485 14.9975 0.600586C12.47 0.600687 9.98712 1.26617 7.79838 2.53012C5.60964 3.79408 3.79221 5.61197 2.52881 7.80103L8.76281 18.599L8.76881 18.598C8.13412 17.5044 7.79906 16.2628 7.79743 14.9983C7.79579 13.7339 8.12764 12.4914 8.7595 11.3961C9.39136 10.3008 10.3009 9.39159 11.3963 8.76005C12.4918 8.12851 13.7344 7.79702 14.9988 7.79903L14.9978 7.80003Z" fill="url(#paint0_linear_87_32)"/>
<path d="M21.237 18.5981L15.003 29.3961C17.5305 29.3961 20.0134 28.7308 22.2022 27.467C24.391 26.2032 26.2086 24.3854 27.4721 22.1965C28.7356 20.0075 29.4006 17.5245 29.4003 14.997C29.3999 12.4695 28.7342 9.9867 27.47 7.7981H15.002L15 7.8041C16.2642 7.80168 17.5067 8.13257 18.6022 8.76342C19.6977 9.39428 20.6076 10.3028 21.2401 11.3974C21.8726 12.492 22.2053 13.734 22.2048 14.9982C22.2042 16.2623 21.8704 17.504 21.237 18.5981Z" fill="url(#paint1_linear_87_32)"/>
<path d="M8.76502 18.601L2.53102 7.80298C1.26664 9.99172 0.600848 12.4748 0.600586 15.0025C0.600324 17.5302 1.2656 20.0134 2.52953 22.2024C3.79345 24.3914 5.61145 26.209 7.80071 27.4725C9.98998 28.736 12.4733 29.4008 15.001 29.4L21.236 18.602L21.232 18.598C20.6022 19.6941 19.6944 20.6049 18.6003 21.2383C17.5062 21.8717 16.2644 22.2055 15.0002 22.2059C13.7359 22.2063 12.4939 21.8733 11.3994 21.2406C10.3049 20.6079 9.39657 19.6977 8.76602 18.602L8.76502 18.601Z" fill="url(#paint2_linear_87_32)"/>
<path d="M14.9998 22.2C16.9094 22.2 18.7407 21.4415 20.091 20.0912C21.4412 18.741 22.1998 16.9096 22.1998 15C22.1998 13.0905 21.4412 11.2591 20.091 9.90888C18.7407 8.55862 16.9094 7.80005 14.9998 7.80005C13.0902 7.80005 11.2589 8.55862 9.90864 9.90888C8.55837 11.2591 7.7998 13.0905 7.7998 15C7.7998 16.9096 8.55837 18.741 9.90864 20.0912C11.2589 21.4415 13.0902 22.2 14.9998 22.2Z" fill="white"/>
<path d="M14.9998 20.7C16.5115 20.7 17.9614 20.0995 19.0303 19.0306C20.0993 17.9616 20.6998 16.5118 20.6998 15C20.6998 13.4883 20.0993 12.0385 19.0303 10.9695C17.9614 9.90058 16.5115 9.30005 14.9998 9.30005C13.4881 9.30005 12.0383 9.90058 10.9693 10.9695C9.90034 12.0385 9.2998 13.4883 9.2998 15C9.2998 16.5118 9.90034 17.9616 10.9693 19.0306C12.0383 20.0995 13.4881 20.7 14.9998 20.7Z" fill="#1A73E8"/>
<defs>
  <linearGradient id="paint0_linear_87_32" x1="3.29381" y1="2.99503" x2="38.0998" y2="2.99503" gradientUnits="userSpaceOnUse">
    <stop stop-color="#D93025"/>
    <stop offset="1" stop-color="#EA4335"/>
  </linearGradient>
  <linearGradient id="paint1_linear_87_32" x1="17.953" y1="29.1431" x2="34.194" y2="-0.298904" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FCC934"/>
    <stop offset="1" stop-color="#FBBC04"/>
  </linearGradient>
  <linearGradient id="paint2_linear_87_32" x1="22.873" y1="28.2" x2="6.63202" y2="-1.24102" gradientUnits="userSpaceOnUse">
    <stop stop-color="#1E8E3E"/>
    <stop offset="1" stop-color="#34A853"/>
  </linearGradient>
</defs>
</svg>`,zl=j`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M23 11.1962V10.5C23 7.365 18.2712 5 12 5C5.72875 5 1 7.365 1 10.5V15.5C1 18.1112 4.28125 20.1863 9 20.8075V21.5C9 24.635 13.7288 27 20 27C26.2712 27 31 24.635 31 21.5V16.5C31 13.9125 27.8225 11.835 23 11.1962ZM7 18.3587C4.55125 17.675 3 16.5487 3 15.5V13.7413C4.02 14.4637 5.38625 15.0463 7 15.4375V18.3587ZM17 15.4375C18.6138 15.0463 19.98 14.4637 21 13.7413V15.5C21 16.5487 19.4487 17.675 17 18.3587V15.4375ZM15 24.3587C12.5513 23.675 11 22.5487 11 21.5V20.9788C11.3287 20.9913 11.6613 21 12 21C12.485 21 12.9587 20.9837 13.4237 20.9562C13.9403 21.1412 14.4665 21.2981 15 21.4263V24.3587ZM15 18.7812C14.0068 18.928 13.004 19.0011 12 19C10.996 19.0011 9.99324 18.928 9 18.7812V15.8075C9.99472 15.9371 10.9969 16.0014 12 16C13.0031 16.0014 14.0053 15.9371 15 15.8075V18.7812ZM23 24.7812C21.0106 25.0729 18.9894 25.0729 17 24.7812V21.8C17.9944 21.9337 18.9967 22.0005 20 22C21.0031 22.0014 22.0053 21.9371 23 21.8075V24.7812ZM29 21.5C29 22.5487 27.4487 23.675 25 24.3587V21.4375C26.6138 21.0462 27.98 20.4637 29 19.7412V21.5Z" fill="currentColor"/>
</svg>
`,Ul=j` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,Vl=j`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,Fl=j`<svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 9 12"
>
  <path
    fill="var(--apkt-tokens-theme-textPrimary)"
    d="M4.666.001v4.435l3.748 1.675L4.666.001Zm0 0L.917 6.111l3.749-1.675V.001Zm0 8.984V12l3.75-5.19-3.75 2.176Zm0 3.014V8.985L.917 6.81 4.666 12Zm0-3.712 3.748-2.176-3.748-1.675v3.851Z"
  />
  <path fill="var(--apkt-tokens-theme-textPrimary)" d="m.917 6.111 3.749 2.176v-3.85L.917 6.11Z" />
</svg>`,Hl=j`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,Zl=j`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ql=j`<svg style="border-radius: 9999px; overflow: hidden;"  fill="none" viewBox="0 0 1000 1000">
  <rect width="1000" height="1000" rx="9999" ry="9999" fill="#855DCD"/>
  <path fill="#855DCD" d="M0 0h1000v1000H0V0Z" />
  <path
    fill="#fff"
    d="M320 248h354v504h-51.96V521.13h-.5c-5.76-63.8-59.31-113.81-124.54-113.81s-118.78 50-124.53 113.81h-.5V752H320V248Z"
  />
  <path
    fill="#fff"
    d="m225 320 21.16 71.46h17.9v289.09a16.29 16.29 0 0 0-16.28 16.24v19.49h-3.25a16.3 16.3 0 0 0-16.28 16.24V752h182.26v-19.48a16.22 16.22 0 0 0-16.28-16.24h-3.25v-19.5a16.22 16.22 0 0 0-16.28-16.23h-19.52V320H225Zm400.3 360.55a16.3 16.3 0 0 0-15.04 10.02 16.2 16.2 0 0 0-1.24 6.22v19.49h-3.25a16.29 16.29 0 0 0-16.27 16.24V752h182.24v-19.48a16.23 16.23 0 0 0-16.27-16.24h-3.25v-19.5a16.2 16.2 0 0 0-10.04-15 16.3 16.3 0 0 0-6.23-1.23v-289.1h17.9L775 320H644.82v360.55H625.3Z"
  />
</svg>`,Kl=j`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Gl=j`<svg fill="none" viewBox="0 0 40 40">
  <path
    fill="#4285F4"
    d="M32.74 20.3c0-.93-.08-1.81-.24-2.66H20.26v5.03h7a6 6 0 0 1-2.62 3.91v3.28h4.22c2.46-2.27 3.88-5.6 3.88-9.56Z"
  />
  <path
    fill="#34A853"
    d="M20.26 33a12.4 12.4 0 0 0 8.6-3.14l-4.22-3.28a7.74 7.74 0 0 1-4.38 1.26 7.76 7.76 0 0 1-7.28-5.36H8.65v3.36A12.99 12.99 0 0 0 20.26 33Z"
  />
  <path
    fill="#FBBC05"
    d="M12.98 22.47a7.79 7.79 0 0 1 0-4.94v-3.36H8.65a12.84 12.84 0 0 0 0 11.66l3.37-2.63.96-.73Z"
  />
  <path
    fill="#EA4335"
    d="M20.26 12.18a7.1 7.1 0 0 1 4.98 1.93l3.72-3.72A12.47 12.47 0 0 0 20.26 7c-5.08 0-9.47 2.92-11.6 7.17l4.32 3.36a7.76 7.76 0 0 1 7.28-5.35Z"
  />
</svg>`,Yl=j`<svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path d="M4.875 0C3.91082 0 2.96829 0.285914 2.1666 0.821586C1.36491 1.35726 0.740067 2.11863 0.371089 3.00942C0.00211226 3.90021 -0.094429 4.88041 0.093674 5.82607C0.281777 6.77172 0.746076 7.64036 1.42786 8.32215C2.10964 9.00393 2.97828 9.46823 3.92394 9.65633C4.86959 9.84443 5.84979 9.74789 6.74058 9.37891C7.63137 9.00994 8.39274 8.38509 8.92842 7.5834C9.46409 6.78171 9.75 5.83918 9.75 4.875C9.74864 3.58249 9.23458 2.34331 8.32064 1.42936C7.4067 0.515418 6.16751 0.00136492 4.875 0ZM4.6875 2.25C4.79875 2.25 4.90751 2.28299 5.00001 2.3448C5.09251 2.40661 5.16461 2.49446 5.20718 2.59724C5.24976 2.70002 5.2609 2.81312 5.23919 2.92224C5.21749 3.03135 5.16392 3.13158 5.08525 3.21025C5.00658 3.28891 4.90635 3.34249 4.79724 3.36419C4.68813 3.3859 4.57503 3.37476 4.47224 3.33218C4.36946 3.28961 4.28161 3.21751 4.2198 3.12501C4.15799 3.03251 4.125 2.92375 4.125 2.8125C4.125 2.66332 4.18427 2.52024 4.28975 2.41475C4.39524 2.30926 4.53832 2.25 4.6875 2.25ZM5.25 7.5C5.05109 7.5 4.86032 7.42098 4.71967 7.28033C4.57902 7.13968 4.5 6.94891 4.5 6.75V4.875C4.40055 4.875 4.30516 4.83549 4.23484 4.76516C4.16451 4.69484 4.125 4.59946 4.125 4.5C4.125 4.40054 4.16451 4.30516 4.23484 4.23484C4.30516 4.16451 4.40055 4.125 4.5 4.125C4.69891 4.125 4.88968 4.20402 5.03033 4.34467C5.17098 4.48532 5.25 4.67609 5.25 4.875V6.75C5.34946 6.75 5.44484 6.78951 5.51517 6.85983C5.58549 6.93016 5.625 7.02554 5.625 7.125C5.625 7.22446 5.58549 7.31984 5.51517 7.39017C5.44484 7.46049 5.34946 7.5 5.25 7.5Z" fill="#9A9A9A"/>
</svg>
`,Xl=j`<svg width="32" height="32" viewBox="0 0 32 32" fill="none">
<path d="M28.925 5.5425C28.925 5.5425 28.925 5.555 28.925 5.56125L21.65 29.5537C21.5399 29.9434 21.3132 30.2901 21.0004 30.5473C20.6876 30.8045 20.3036 30.9598 19.9 30.9925C19.8425 30.9975 19.785 31 19.7275 31C19.3493 31.0012 18.9786 30.8941 18.6592 30.6915C18.3398 30.4888 18.085 30.199 17.925 29.8563L13.375 20.5187C13.3295 20.4252 13.3143 20.3197 13.3315 20.2171C13.3488 20.1145 13.3976 20.0198 13.4713 19.9463L20.7113 12.7063C20.8909 12.5172 20.9895 12.2654 20.9862 12.0047C20.9829 11.7439 20.8778 11.4948 20.6934 11.3104C20.509 11.126 20.2599 11.0209 19.9991 11.0176C19.7383 11.0142 19.4866 11.1129 19.2975 11.2925L12.0538 18.5325C11.9802 18.6061 11.8855 18.655 11.7829 18.6722C11.6803 18.6895 11.5748 18.6743 11.4813 18.6287L2.13502 14.08C1.76954 13.9047 1.46598 13.6224 1.26454 13.2706C1.06311 12.9189 0.973316 12.5142 1.00707 12.1102C1.04082 11.7063 1.19652 11.3221 1.45354 11.0087C1.71056 10.6952 2.05676 10.4673 2.44627 10.355L26.4388 3.08H26.4575C26.7991 2.98403 27.1601 2.98066 27.5034 3.07025C27.8468 3.15984 28.1601 3.33916 28.4113 3.58981C28.6624 3.84045 28.8424 4.15341 28.9326 4.49656C29.0229 4.83971 29.0203 5.2007 28.925 5.5425Z" fill="currentColor"/>
</svg>
`,Ql=j` <svg width="27" height="30" viewBox="0 0 27 30" fill="none">
  <path d="M12.5395 14.3237L0.116699 27.5049V27.5188C0.251527 28.0177 0.49972 28.4788 0.841941 28.866C1.18416 29.2533 1.61117 29.5563 2.0897 29.7515C2.56823 29.9467 3.08536 30.0287 3.60081 29.9913C4.11625 29.9538 4.61609 29.7979 5.06139 29.5356L5.0975 29.512L19.0718 21.4519L12.5395 14.3237Z" fill="#EA4335"/>
  <path d="M25.103 12.0833L25.0919 12.0722L19.0611 8.57202L12.2607 14.6279L19.0847 21.4504L25.0919 17.9864C25.6229 17.6983 26.0665 17.2725 26.376 16.7537C26.6854 16.2349 26.8493 15.6422 26.8505 15.0381C26.8516 14.434 26.6899 13.8408 26.3824 13.3208C26.0749 12.8008 25.633 12.3734 25.103 12.0833Z" fill="#FBBC04"/>
  <path d="M0.116672 2.49553C0.047224 2.7761 0 3.05528 0 3.35946V26.6537C0 26.9565 0.0347234 27.237 0.116672 27.5162L12.959 14.6725L0.116672 2.49553Z" fill="#4285F4"/>
  <path d="M12.634 15.0001L19.0607 8.57198L5.0975 0.477133C4.65115 0.210463 4.14916 0.0506574 3.63079 0.0102139C3.11242 -0.0302296 2.59172 0.0497852 2.10941 0.244001C1.6271 0.438216 1.19625 0.741368 0.850556 1.12975C0.504864 1.51813 0.253698 1.98121 0.116699 2.48279L12.634 15.0001Z" fill="#34A853"/>
</svg>`,Jl=j`<svg width="75" height="20" viewBox="0 0 75 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6666 5.83334C11.6666 2.61168 14.2783 0 17.5 0H25.8334C29.055 0 31.6666 2.61168 31.6666 5.83334V14.1666C31.6666 17.3883 29.055 20 25.8334 20H17.5C14.2783 20 11.6666 17.3883 11.6666 14.1666V5.83334Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M19.5068 13.7499L22.4309 5.83331H23.2895L20.3654 13.7499H19.5068Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M0 5.41666C0 2.42513 2.42513 0 5.41666 0C8.40821 0 10.8334 2.42513 10.8334 5.41666V14.5833C10.8334 17.5748 8.40821 20 5.41666 20C2.42513 20 0 17.5748 0 14.5833V5.41666Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M4.89581 12.4997V11.458H5.93747V12.4997H4.89581Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M32.5 10C32.5 4.47715 36.6896 0 41.8578 0H65.6422C70.8104 0 75 4.47715 75 10C75 15.5229 70.8104 20 65.6422 20H41.8578C36.6896 20 32.5 15.5229 32.5 10Z" fill="var(--apkt-tokens-theme-foregroundTertiary)"/>
<path d="M61.7108 12.4475V7.82751H62.5266V8.52418C62.8199 8.01084 63.4157 7.70834 64.0757 7.70834C65.0749 7.70834 65.7715 8.34084 65.7715 9.56918V12.4475H64.9649V9.61503C64.9649 8.80831 64.5066 8.38668 63.8374 8.38668C63.1132 8.38668 62.5266 8.9642 62.5266 9.78001V12.4475H61.7108Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M56.5671 12.4475L55.7147 7.82748H56.4846L57.0896 11.6409L57.8871 9.12916H58.6479L59.4363 11.6134L60.0505 7.82748H60.8204L59.9679 12.4475H59.0513L58.2721 10.0458L57.4838 12.4475H56.5671Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M52.9636 12.5666C51.5611 12.5666 50.7361 11.5217 50.7361 10.1375C50.7361 8.76254 51.5611 7.70834 52.9636 7.70834C54.3661 7.70834 55.1911 8.76254 55.1911 10.1375C55.1911 11.5217 54.3661 12.5666 52.9636 12.5666ZM52.9636 11.8883C53.9719 11.8883 54.357 11.0266 54.357 10.1283C54.357 9.23914 53.9719 8.38668 52.9636 8.38668C51.9552 8.38668 51.5702 9.23914 51.5702 10.1283C51.5702 11.0266 51.9552 11.8883 52.9636 11.8883Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M47.8507 12.5666C46.494 12.5666 45.6415 11.5308 45.6415 10.1375C45.6415 8.75337 46.494 7.70834 47.8507 7.70834C48.9965 7.70834 50.0048 8.35917 49.8948 10.3483H46.4756C46.5398 11.2009 46.934 11.8975 47.8507 11.8975C48.4648 11.8975 48.8681 11.5217 49.0057 11.0908H49.8123C49.684 11.8609 48.9598 12.5666 47.8507 12.5666ZM46.494 9.73416H49.1065C49.0423 8.80831 48.6114 8.37751 47.8507 8.37751C47.0165 8.37751 46.604 8.98254 46.494 9.73416Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M41.7284 12.4475V7.82748H42.5625V8.60665C42.8559 8.09332 43.3601 7.82748 43.8825 7.82748H44.9917V8.60665H43.8184C43.0851 8.60665 42.5625 9.08331 42.5625 10.0092V12.4475H41.7284Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>

`,ec=j`
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 8">
    <path
      fill="var(--apkt-tokens-theme-textPrimary)"
      d="m9.524 6.307-1.51 1.584A.35.35 0 0 1 7.76 8H.604a.178.178 0 0 1-.161-.103.168.168 0 0 1 .033-.186l1.51-1.583a.35.35 0 0 1 .256-.11h7.154c.034 0 .068.01.096.029a.168.168 0 0 1 .032.26Zm-1.51-3.189a.35.35 0 0 0-.255-.109H.604a.178.178 0 0 0-.161.103.168.168 0 0 0 .033.186l1.51 1.583a.35.35 0 0 0 .256.11h7.154a.178.178 0 0 0 .16-.104.168.168 0 0 0-.032-.185l-1.51-1.584ZM.605 1.981H7.76a.357.357 0 0 0 .256-.11L9.525.289a.17.17 0 0 0 .032-.185.173.173 0 0 0-.16-.103H2.241a.357.357 0 0 0-.256.109L.476 1.692a.17.17 0 0 0-.033.185.178.178 0 0 0 .16.103Z"
    />
  </svg>
`,tc=j`<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M0 0h32v32H0z"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.034 15.252c4.975-2.167 8.293-3.596 9.953-4.287 4.74-1.971 5.725-2.314 6.366-2.325.142-.002.457.033.662.198.172.14.22.33.243.463.022.132.05.435.028.671-.257 2.7-1.368 9.248-1.933 12.27-.24 1.28-.71 1.708-1.167 1.75-.99.091-1.743-.655-2.703-1.284-1.502-.985-2.351-1.598-3.81-2.558-1.684-1.11-.592-1.721.368-2.718.252-.261 4.619-4.233 4.703-4.594.01-.045.02-.213-.08-.301-.1-.09-.246-.059-.353-.035-.15.034-2.55 1.62-7.198 4.758-.682.468-1.298.696-1.851.684-.61-.013-1.782-.344-2.653-.628-1.069-.347-1.918-.53-1.845-1.12.039-.308.462-.623 1.27-.944Z" fill="#fff"/>
  </g>
  <path d="M.5 16C.5 7.44 7.44.5 16 .5 24.56.5 31.5 7.44 31.5 16c0 8.56-6.94 15.5-15.5 15.5C7.44 31.5.5 24.56.5 16Z" stroke="#141414" stroke-opacity=".05"/>
  <defs>
    <linearGradient id="b" x1="1600" y1="0" x2="1600" y2="3176.27" gradientUnits="userSpaceOnUse">
      <stop stop-color="#2AABEE"/>
      <stop offset="1" stop-color="#229ED9"/>
    </linearGradient>
    <clipPath id="a">
      <path d="M0 16C0 7.163 7.163 0 16 0s16 7.163 16 16-7.163 16-16 16S0 24.837 0 16Z" fill="#fff"/>
    </clipPath>
  </defs>
</svg>`,qa=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
  <path d="M8.37651 0H1.62309C0.381381 0 -0.405611 1.33944 0.219059 2.42225L4.38701 9.64649C4.659 10.1182 5.3406 10.1182 5.61259 9.64649L9.78139 2.42225C10.4052 1.34117 9.61822 0 8.37736 0H8.37651ZM4.38362 7.48005L3.47591 5.72329L1.2857 1.80606C1.14121 1.55534 1.31968 1.23405 1.62225 1.23405H4.38278V7.4809L4.38362 7.48005ZM8.71221 1.80521L6.52284 5.72414L5.61513 7.48005V1.2332H8.37566C8.67823 1.2332 8.85669 1.55449 8.71221 1.80521Z" fill="var(--apkt-tokens-theme-textPrimary)" />
</svg>
`,ic=j`
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 64 64">
    <path fill="var(--apkt-tokens-theme-textPrimary)" d="M61.55 19.28c-3-2.77-7.15-7-10.53-10l-.2-.14a3.82 3.82 0 0 0-1.11-.62l0 0C41.56 7 3.63-.09 2.89 0a1.4 1.4 0 0 0-.58.22L2.12.37a2.23 2.23 0 0 0-.52.84l-.05.13v.71l0 .11C5.82 14.05 22.68 53 26 62.14c.2.62.58 1.8 1.29 1.86h.16c.38 0 2-2.14 2-2.14S58.41 26.74 61.34 23a9.46 9.46 0 0 0 1-1.48A2.41 2.41 0 0 0 61.55 19.28ZM36.88 23.37 49.24 13.12l7.25 6.68Zm-4.8-.67L10.8 5.26l34.43 6.35ZM34 27.27l21.78-3.51-24.9 30ZM7.91 7 30.3 26 27.06 53.78Z"/>
  </svg>
`,nc=j`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,oc=j`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,rc=j`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textPrimary)"/>
</svg>`,ac=j`
<svg xmlns="http://www.w3.org/2000/svg" width="89" height="89" viewBox="0 0 89 89" fill="none">
<path d="M60.0468 39.2502L65.9116 33.3854C52.6562 20.13 36.1858 20.13 22.9304 33.3854L28.7952 39.2502C38.8764 29.169 49.9725 29.169 60.0536 39.2502H60.0468Z" fill="var(--apkt-tokens-theme-textInvert)"/>
<path d="M58.0927 52.9146L44.415 39.2369L30.7373 52.9146L17.0596 39.2369L11.2017 45.0949L30.7373 64.6374L44.415 50.9597L58.0927 64.6374L77.6284 45.0949L71.7704 39.2369L58.0927 52.9146Z" fill="var(--apkt-tokens-theme-textInvert)"/>
</svg>`,sc=j`
<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_22274_4692)">
<path d="M0 6.64C0 4.17295 0 2.93942 0.525474 2.01817C0.880399 1.39592 1.39592 0.880399 2.01817 0.525474C2.93942 0 4.17295 0 6.64 0H9.36C11.8271 0 13.0606 0 13.9818 0.525474C14.6041 0.880399 15.1196 1.39592 15.4745 2.01817C16 2.93942 16 4.17295 16 6.64V9.36C16 11.8271 16 13.0606 15.4745 13.9818C15.1196 14.6041 14.6041 15.1196 13.9818 15.4745C13.0606 16 11.8271 16 9.36 16H6.64C4.17295 16 2.93942 16 2.01817 15.4745C1.39592 15.1196 0.880399 14.6041 0.525474 13.9818C0 13.0606 0 11.8271 0 9.36V6.64Z" fill="#C7B994"/>
<path d="M4.49038 5.76609C6.42869 3.86833 9.5713 3.86833 11.5096 5.76609L11.7429 5.99449C11.8398 6.08938 11.8398 6.24323 11.7429 6.33811L10.9449 7.11942C10.8964 7.16686 10.8179 7.16686 10.7694 7.11942L10.4484 6.80512C9.09617 5.48119 6.90381 5.48119 5.5516 6.80512L5.20782 7.14171C5.15936 7.18915 5.08079 7.18915 5.03234 7.14171L4.23434 6.3604C4.13742 6.26552 4.13742 6.11167 4.23434 6.01678L4.49038 5.76609ZM13.1599 7.38192L13.8702 8.07729C13.9671 8.17217 13.9671 8.32602 13.8702 8.4209L10.6677 11.5564C10.5708 11.6513 10.4137 11.6513 10.3168 11.5564L8.04388 9.33105C8.01965 9.30733 7.98037 9.30733 7.95614 9.33105L5.6833 11.5564C5.58638 11.6513 5.42925 11.6513 5.33234 11.5564L2.12982 8.42087C2.0329 8.32598 2.0329 8.17213 2.12982 8.07724L2.84004 7.38188C2.93695 7.28699 3.09408 7.28699 3.191 7.38188L5.46392 9.60726C5.48815 9.63098 5.52743 9.63098 5.55166 9.60726L7.82447 7.38188C7.92138 7.28699 8.07851 7.28699 8.17543 7.38187L10.4484 9.60726C10.4726 9.63098 10.5119 9.63098 10.5361 9.60726L12.809 7.38192C12.9059 7.28703 13.063 7.28703 13.1599 7.38192Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_22274_4692">
<path d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" fill="white"/>
</clipPath>
</defs>
</svg>
`,lc=j`
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="11" transform="matrix(-1 0 0 1 23 1)" fill="#202020"/>
<circle cx="11" cy="11" r="11.5" transform="matrix(-1 0 0 1 23 1)" stroke="#C7B994" stroke-opacity="0.7"/>
<path d="M15.4523 11.0686L16.7472 9.78167C13.8205 6.87297 10.1838 6.87297 7.25708 9.78167L8.55201 11.0686C10.7779 8.85645 13.2279 8.85645 15.4538 11.0686H15.4523Z" fill="#C7B994"/>
<path d="M15.0199 14.067L12 11.0656L8.98 14.067L5.96004 11.0656L4.66663 12.3511L8.98 16.6393L12 13.638L15.0199 16.6393L19.3333 12.3511L18.0399 11.0656L15.0199 14.067Z" fill="#C7B994"/>
</svg>
`,fa=j`<svg fill="none" viewBox="0 0 41 40">
  <g clip-path="url(#a)">
    <path fill="#000" d="M.8 0h40v40H.8z" />
    <path
      fill="#fff"
      d="m22.63 18.46 7.14-8.3h-1.69l-6.2 7.2-4.96-7.2H11.2l7.5 10.9-7.5 8.71h1.7l6.55-7.61 5.23 7.61h5.72l-7.77-11.31Zm-9.13-7.03h2.6l11.98 17.13h-2.6L13.5 11.43Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M.8 20a20 20 0 1 1 40 0 20 20 0 0 1-40 0Z" /></clipPath>
  </defs>
</svg>`,cc=ae`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    height: inherit;
    width: inherit;
    object-fit: contain;
    object-position: center;
  }
`;var yn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const dc={add:"ph-plus",allWallets:"ph-dots-three",arrowBottom:"ph-arrow-down",arrowBottomCircle:"ph-arrow-circle-down",arrowClockWise:"ph-arrow-clockwise",arrowLeft:"ph-arrow-left",arrowRight:"ph-arrow-right",arrowTop:"ph-arrow-up",arrowTopRight:"ph-arrow-up-right",bank:"ph-bank",bin:"ph-trash",browser:"ph-browser",card:"ph-credit-card",checkmarkBold:"ph-check",chevronBottom:"ph-caret-down",chevronLeft:"ph-caret-left",chevronRight:"ph-caret-right",chevronTop:"ph-caret-up",clock:"ph-clock",close:"ph-x",coinPlaceholder:"ph-circle-half",compass:"ph-compass",copy:"ph-copy",desktop:"ph-desktop",dollar:"ph-currency-dollar",download:"ph-vault",exclamationCircle:"ph-warning-circle",extension:"ph-puzzle-piece",externalLink:"ph-arrow-square-out",filters:"ph-funnel-simple",helpCircle:"ph-question",id:"ph-identification-card",image:"ph-image",info:"ph-info",lightbulb:"ph-lightbulb",mail:"ph-envelope",mobile:"ph-device-mobile",more:"ph-dots-three",networkPlaceholder:"ph-globe",nftPlaceholder:"ph-image",plus:"ph-plus",power:"ph-power",qrCode:"ph-qr-code",questionMark:"ph-question",refresh:"ph-arrow-clockwise",recycleHorizontal:"ph-arrows-clockwise",search:"ph-magnifying-glass",sealCheck:"ph-seal-check",send:"ph-paper-plane-right",signOut:"ph-sign-out",spinner:"ph-spinner",swapHorizontal:"ph-arrows-left-right",swapVertical:"ph-arrows-down-up",threeDots:"ph-dots-three",user:"ph-user",verify:"ph-seal-check",verifyFilled:"ph-seal-check",wallet:"ph-wallet",warning:"ph-warning",warningCircle:"ph-warning-circle",appStore:"",apple:"",bitcoin:"",coins:"",chromeStore:"",cursor:"",discord:"",ethereum:"",etherscan:"",facebook:"",farcaster:"",github:"",google:"",playStore:"",paperPlaneTitle:"",reown:"",solana:"",ton:"",tron:"",telegram:"",twitch:"",twitterIcon:"",twitter:"",walletConnect:"",walletConnectBrown:"",walletConnectLightBrown:"",x:"",infoSeal:"",checkmark:""},uc={"ph-arrow-circle-down":()=>D(()=>import("./PhArrowCircleDown-B305t-Sh.js"),__vite__mapDeps([0,1])),"ph-arrow-clockwise":()=>D(()=>import("./PhArrowClockwise-CJPxQhr_.js"),__vite__mapDeps([2,1])),"ph-arrow-down":()=>D(()=>import("./PhArrowDown-C4hT9BVu.js"),__vite__mapDeps([3,1])),"ph-arrow-left":()=>D(()=>import("./PhArrowLeft-Way4Cu-r.js"),__vite__mapDeps([4,1])),"ph-arrow-right":()=>D(()=>import("./PhArrowRight-Cp5ZME0F.js"),__vite__mapDeps([5,1])),"ph-arrow-square-out":()=>D(()=>import("./PhArrowSquareOut-NnrK69c5.js"),__vite__mapDeps([6,1])),"ph-arrows-down-up":()=>D(()=>import("./PhArrowsDownUp-BjBI4ckC.js"),__vite__mapDeps([7,1])),"ph-arrows-left-right":()=>D(()=>import("./PhArrowsLeftRight-CuLpbKRk.js"),__vite__mapDeps([8,1])),"ph-arrow-up":()=>D(()=>import("./PhArrowUp-Dph6j8rm.js"),__vite__mapDeps([9,1])),"ph-arrow-up-right":()=>D(()=>import("./PhArrowUpRight-BpJjRRRh.js"),__vite__mapDeps([10,1])),"ph-arrows-clockwise":()=>D(()=>import("./PhArrowsClockwise-CFUT8X7R.js"),__vite__mapDeps([11,1])),"ph-bank":()=>D(()=>import("./PhBank-Dchr4XQJ.js"),__vite__mapDeps([12,1])),"ph-browser":()=>D(()=>import("./PhBrowser-dUu2TrC1.js"),__vite__mapDeps([13,1])),"ph-caret-down":()=>D(()=>import("./PhCaretDown-78IuKU3V.js"),__vite__mapDeps([14,1])),"ph-caret-left":()=>D(()=>import("./PhCaretLeft-_aiyH7n1.js"),__vite__mapDeps([15,1])),"ph-caret-right":()=>D(()=>import("./PhCaretRight-8zJQEuDX.js"),__vite__mapDeps([16,1])),"ph-caret-up":()=>D(()=>import("./PhCaretUp-CiCxKWwN.js"),__vite__mapDeps([17,1])),"ph-check":()=>D(()=>import("./PhCheck-CcADx8br.js"),__vite__mapDeps([18,1])),"ph-circle-half":()=>D(()=>import("./PhCircleHalf-BYzSzd2h.js"),__vite__mapDeps([19,1])),"ph-clock":()=>D(()=>import("./PhClock-UItiXeJq.js"),__vite__mapDeps([20,1])),"ph-compass":()=>D(()=>import("./PhCompass-CUy3uA7t.js"),__vite__mapDeps([21,1])),"ph-copy":()=>D(()=>import("./PhCopy-C-PDgSlZ.js"),__vite__mapDeps([22,1])),"ph-credit-card":()=>D(()=>import("./PhCreditCard-CWRaUT6F.js"),__vite__mapDeps([23,1])),"ph-currency-dollar":()=>D(()=>import("./PhCurrencyDollar-Cqla3AXT.js"),__vite__mapDeps([24,1])),"ph-desktop":()=>D(()=>import("./PhDesktop-BBIPrYLl.js"),__vite__mapDeps([25,1])),"ph-device-mobile":()=>D(()=>import("./PhDeviceMobile-BdsPaATg.js"),__vite__mapDeps([26,1])),"ph-dots-three":()=>D(()=>import("./PhDotsThree-BMXCQl-0.js"),__vite__mapDeps([27,1])),"ph-vault":()=>D(()=>import("./PhVault-l2PHF38a.js"),__vite__mapDeps([28,1])),"ph-envelope":()=>D(()=>import("./PhEnvelope-yUsis6yU.js"),__vite__mapDeps([29,1])),"ph-funnel-simple":()=>D(()=>import("./PhFunnelSimple-Ba7BbWTp.js"),__vite__mapDeps([30,1])),"ph-globe":()=>D(()=>import("./PhGlobe-DgLxBk5U.js"),__vite__mapDeps([31,1])),"ph-identification-card":()=>D(()=>import("./PhIdentificationCard-Czjmq9Z3.js"),__vite__mapDeps([32,1])),"ph-image":()=>D(()=>import("./PhImage-BAJ_erz6.js"),__vite__mapDeps([33,1])),"ph-info":()=>D(()=>import("./PhInfo-Cr4DhVUE.js"),__vite__mapDeps([34,1])),"ph-lightbulb":()=>D(()=>import("./PhLightbulb-BX_7duTr.js"),__vite__mapDeps([35,1])),"ph-magnifying-glass":()=>D(()=>import("./PhMagnifyingGlass-Mygfryvz.js"),__vite__mapDeps([36,1])),"ph-paper-plane-right":()=>D(()=>import("./PhPaperPlaneRight-BeuCA660.js"),__vite__mapDeps([37,1])),"ph-plus":()=>D(()=>import("./PhPlus-BMjcHjsT.js"),__vite__mapDeps([38,1])),"ph-power":()=>D(()=>import("./PhPower-CGffGmdb.js"),__vite__mapDeps([39,1])),"ph-puzzle-piece":()=>D(()=>import("./PhPuzzlePiece-wm_GpVSi.js"),__vite__mapDeps([40,1])),"ph-qr-code":()=>D(()=>import("./PhQrCode-DRwRzXCH.js"),__vite__mapDeps([41,1])),"ph-question":()=>D(()=>import("./PhQuestion-M09j2U0T.js"),__vite__mapDeps([42,1])),"ph-question-circle":()=>D(()=>import("./PhQuestionMark-BP9EMB6h.js"),__vite__mapDeps([43,1])),"ph-seal-check":()=>D(()=>import("./PhSealCheck-BfG80yKn.js"),__vite__mapDeps([44,1])),"ph-sign-out":()=>D(()=>import("./PhSignOut-C5YOWlPT.js"),__vite__mapDeps([45,1])),"ph-spinner":()=>D(()=>import("./PhSpinner-BXooDYzU.js"),__vite__mapDeps([46,1])),"ph-trash":()=>D(()=>import("./PhTrash-Biq6rmmL.js"),__vite__mapDeps([47,1])),"ph-user":()=>D(()=>import("./PhUser-CAgZSpGe.js"),__vite__mapDeps([48,1])),"ph-wallet":()=>D(()=>import("./PhWallet-w25D16It.js"),__vite__mapDeps([49,1])),"ph-warning":()=>D(()=>import("./PhWarning-DPEydIPw.js"),__vite__mapDeps([50,1])),"ph-warning-circle":()=>D(()=>import("./PhWarningCircle-BqjT745H.js"),__vite__mapDeps([51,1])),"ph-x":()=>D(()=>import("./PhX-s-SmVExa.js"),__vite__mapDeps([52,1]))},hc={appStore:jl,apple:Wl,bitcoin:Bl,coins:zl,chromeStore:Ml,cursor:Ul,discord:Vl,ethereum:Fl,etherscan:Hl,facebook:Zl,farcaster:ql,github:Kl,google:Gl,playStore:Ql,paperPlaneTitle:Xl,reown:Jl,solana:ec,ton:qa,tron:ic,telegram:tc,twitch:nc,twitter:fa,twitterIcon:oc,walletConnect:rc,walletConnectInvert:ac,walletConnectBrown:lc,walletConnectLightBrown:sc,x:fa,infoSeal:Yl,checkmark:Dl},pc={"accent-primary":ie.tokens.core.iconAccentPrimary,"accent-certified":ie.tokens.core.iconAccentCertified,"foreground-secondary":ie.tokens.theme.foregroundSecondary,default:ie.tokens.theme.iconDefault,success:ie.tokens.core.iconSuccess,error:ie.tokens.core.iconError,warning:ie.tokens.core.iconWarning,inverse:ie.tokens.theme.iconInverse};let Zt=class extends k{constructor(){super(...arguments),this.size="md",this.name="copy",this.weight="bold",this.color="inherit"}render(){const t={xxs:"2",xs:"3",sm:"3",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7",inherit:"inherit"};this.style.cssText=`
      --local-width: ${this.size==="inherit"?"inherit":`var(--apkt-spacing-${t[this.size]})`};
      --local-color: ${this.color==="inherit"?"inherit":pc[this.color]}
    `;const i=dc[this.name];if(i&&i!==""){const o=uc[i];o&&o();const r=Ll(i);return pa`<${r} size=${{xxs:"0.5em",xs:"0.75em",sm:"0.75em",md:"1em",mdl:"1.25em",lg:"1.25em",xl:"1.5em",xxl:"1.75em"}[this.size]} weight="${this.weight}"></${r}>`}return hc[this.name]||pa``}};Zt.styles=[B,cc];yn([d()],Zt.prototype,"size",void 0);yn([d()],Zt.prototype,"name",void 0);yn([d()],Zt.prototype,"weight",void 0);yn([d()],Zt.prototype,"color",void 0);Zt=yn([b("wui-icon")],Zt);const fc=N`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    user-select: none;
    user-drag: none;
    -webkit-user-drag: none;
    -khtml-user-drag: none;
    -moz-user-drag: none;
    -o-user-drag: none;
  }

  :host([data-boxed='true']) {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-boxed='true']) img {
    width: 20px;
    height: 20px;
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  :host([data-full='true']) img {
    width: 100%;
    height: 100%;
  }

  :host([data-boxed='true']) wui-icon {
    width: 20px;
    height: 20px;
  }

  :host([data-icon='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }
`;var ot=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let De=class extends k{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0,this.boxed=!1,this.rounded=!1,this.fullSize=!1}render(){const t={inherit:"inherit",xxs:"2",xs:"3",sm:"4",md:"4",mdl:"5",lg:"5",xl:"6",xxl:"7","3xl":"8","4xl":"9","5xl":"10"};return this.style.cssText=`
      --local-width: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      --local-height: ${this.size?`var(--apkt-spacing-${t[this.size]});`:"100%"};
      `,this.dataset.boxed=this.boxed?"true":"false",this.dataset.rounded=this.rounded?"true":"false",this.dataset.full=this.fullSize?"true":"false",this.dataset.icon=this.iconColor||"inherit",this.icon?l`<wui-icon
        color=${this.iconColor||"inherit"}
        name=${this.icon}
        size="lg"
      ></wui-icon> `:this.logo?l`<wui-icon size="lg" color="inherit" name=${this.logo}></wui-icon> `:l`<img src=${R(this.src)} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};De.styles=[B,fc];ot([d()],De.prototype,"src",void 0);ot([d()],De.prototype,"logo",void 0);ot([d()],De.prototype,"icon",void 0);ot([d()],De.prototype,"iconColor",void 0);ot([d()],De.prototype,"alt",void 0);ot([d()],De.prototype,"size",void 0);ot([d({type:Boolean})],De.prototype,"boxed",void 0);ot([d({type:Boolean})],De.prototype,"rounded",void 0);ot([d({type:Boolean})],De.prototype,"fullSize",void 0);De=ot([b("wui-image")],De);const mc=ae`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 1.4s linear infinite;
    color: var(--local-color);
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;var Dr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let en=class extends k{constructor(){super(...arguments),this.color="primary",this.size="lg"}render(){const t={primary:ie.tokens.theme.textPrimary,secondary:ie.tokens.theme.textSecondary,tertiary:ie.tokens.theme.textTertiary,invert:ie.tokens.theme.textInvert,error:ie.tokens.core.textError,warning:ie.tokens.core.textWarning,"accent-primary":ie.tokens.core.textAccentPrimary};return this.style.cssText=`
      --local-color: ${this.color==="inherit"?"inherit":t[this.color]};
      `,this.dataset.size=this.size,l`<svg viewBox="0 0 16 17" fill="none">
      <path
        d="M8.75 2.65625V4.65625C8.75 4.85516 8.67098 5.04593 8.53033 5.18658C8.38968 5.32723 8.19891 5.40625 8 5.40625C7.80109 5.40625 7.61032 5.32723 7.46967 5.18658C7.32902 5.04593 7.25 4.85516 7.25 4.65625V2.65625C7.25 2.45734 7.32902 2.26657 7.46967 2.12592C7.61032 1.98527 7.80109 1.90625 8 1.90625C8.19891 1.90625 8.38968 1.98527 8.53033 2.12592C8.67098 2.26657 8.75 2.45734 8.75 2.65625ZM14 7.90625H12C11.8011 7.90625 11.6103 7.98527 11.4697 8.12592C11.329 8.26657 11.25 8.45734 11.25 8.65625C11.25 8.85516 11.329 9.04593 11.4697 9.18658C11.6103 9.32723 11.8011 9.40625 12 9.40625H14C14.1989 9.40625 14.3897 9.32723 14.5303 9.18658C14.671 9.04593 14.75 8.85516 14.75 8.65625C14.75 8.45734 14.671 8.26657 14.5303 8.12592C14.3897 7.98527 14.1989 7.90625 14 7.90625ZM11.3588 10.9544C11.289 10.8846 11.2062 10.8293 11.115 10.7915C11.0239 10.7538 10.9262 10.7343 10.8275 10.7343C10.7288 10.7343 10.6311 10.7538 10.54 10.7915C10.4488 10.8293 10.366 10.8846 10.2963 10.9544C10.2265 11.0241 10.1711 11.107 10.1334 11.1981C10.0956 11.2893 10.0762 11.387 10.0762 11.4856C10.0762 11.5843 10.0956 11.682 10.1334 11.7731C10.1711 11.8643 10.2265 11.9471 10.2963 12.0169L11.7106 13.4312C11.8515 13.5721 12.0426 13.6513 12.2419 13.6513C12.4411 13.6513 12.6322 13.5721 12.7731 13.4312C12.914 13.2904 12.9932 13.0993 12.9932 12.9C12.9932 12.7007 12.914 12.5096 12.7731 12.3687L11.3588 10.9544ZM8 11.9062C7.80109 11.9062 7.61032 11.9853 7.46967 12.1259C7.32902 12.2666 7.25 12.4573 7.25 12.6562V14.6562C7.25 14.8552 7.32902 15.0459 7.46967 15.1866C7.61032 15.3272 7.80109 15.4062 8 15.4062C8.19891 15.4062 8.38968 15.3272 8.53033 15.1866C8.67098 15.0459 8.75 14.8552 8.75 14.6562V12.6562C8.75 12.4573 8.67098 12.2666 8.53033 12.1259C8.38968 11.9853 8.19891 11.9062 8 11.9062ZM4.64125 10.9544L3.22688 12.3687C3.08598 12.5096 3.00682 12.7007 3.00682 12.9C3.00682 13.0993 3.08598 13.2904 3.22688 13.4312C3.36777 13.5721 3.55887 13.6513 3.75813 13.6513C3.95738 13.6513 4.14848 13.5721 4.28937 13.4312L5.70375 12.0169C5.84465 11.876 5.9238 11.6849 5.9238 11.4856C5.9238 11.2864 5.84465 11.0953 5.70375 10.9544C5.56285 10.8135 5.37176 10.7343 5.1725 10.7343C4.97324 10.7343 4.78215 10.8135 4.64125 10.9544ZM4.75 8.65625C4.75 8.45734 4.67098 8.26657 4.53033 8.12592C4.38968 7.98527 4.19891 7.90625 4 7.90625H2C1.80109 7.90625 1.61032 7.98527 1.46967 8.12592C1.32902 8.26657 1.25 8.45734 1.25 8.65625C1.25 8.85516 1.32902 9.04593 1.46967 9.18658C1.61032 9.32723 1.80109 9.40625 2 9.40625H4C4.19891 9.40625 4.38968 9.32723 4.53033 9.18658C4.67098 9.04593 4.75 8.85516 4.75 8.65625ZM4.2875 3.88313C4.1466 3.74223 3.95551 3.66307 3.75625 3.66307C3.55699 3.66307 3.3659 3.74223 3.225 3.88313C3.0841 4.02402 3.00495 4.21512 3.00495 4.41438C3.00495 4.61363 3.0841 4.80473 3.225 4.94562L4.64125 6.35813C4.78215 6.49902 4.97324 6.57818 5.1725 6.57818C5.37176 6.57818 5.56285 6.49902 5.70375 6.35813C5.84465 6.21723 5.9238 6.02613 5.9238 5.82688C5.9238 5.62762 5.84465 5.43652 5.70375 5.29563L4.2875 3.88313Z"
        fill="currentColor"
      />
    </svg>`}};en.styles=[B,mc];Dr([d()],en.prototype,"color",void 0);Dr([d()],en.prototype,"size",void 0);en=Dr([b("wui-loading-spinner")],en);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ka={ATTRIBUTE:1,CHILD:2},Ga=e=>(...t)=>({_$litDirective$:e,values:t});class Ya{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,o){this._$Ct=t,this._$AM=i,this._$Ci=o}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mr=Ga(class extends Ya{constructor(e){var t;if(super(e),e.type!==Ka.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(n=>n!=="")));for(const n in t)t[n]&&!((o=this.nt)!=null&&o.has(n))&&this.st.add(n);return this.render(t)}const i=e.element.classList;for(const n of this.st)n in t||(i.remove(n),this.st.delete(n));for(const n in t){const a=!!t[n];a===this.st.has(n)||(r=this.nt)!=null&&r.has(n)||(a?(i.add(n),this.st.add(n)):(i.remove(n),this.st.delete(n)))}return pl}}),gc=N`
  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  /* -- Headings --------------------------------------------------- */
  .wui-font-h1-regular-mono {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h1-regular {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h1-medium {
    font-size: ${({textSize:e})=>e.h1};
    line-height: ${({typography:e})=>e["h1-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h1-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-regular-mono {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h2-regular {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h2-medium {
    font-size: ${({textSize:e})=>e.h2};
    line-height: ${({typography:e})=>e["h2-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h2-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-regular-mono {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h3-regular {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h3-medium {
    font-size: ${({textSize:e})=>e.h3};
    line-height: ${({typography:e})=>e["h3-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h3-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-regular-mono {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h4-regular {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h4-medium {
    font-size: ${({textSize:e})=>e.h4};
    line-height: ${({typography:e})=>e["h4-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h4-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-regular-mono {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h5-regular {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h5-medium {
    font-size: ${({textSize:e})=>e.h5};
    line-height: ${({typography:e})=>e["h5-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h5-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-regular-mono {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-h6-regular {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-h6-medium {
    font-size: ${({textSize:e})=>e.h6};
    line-height: ${({typography:e})=>e["h6-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["h6-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-regular-mono {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-lg-regular {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-lg-medium {
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-regular-mono {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-md-regular {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-md-medium {
    font-size: ${({textSize:e})=>e.medium};
    line-height: ${({typography:e})=>e["md-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["md-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-regular-mono {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular-mono"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular-mono"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.mono};
  }

  .wui-font-sm-regular {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }

  .wui-font-sm-medium {
    font-size: ${({textSize:e})=>e.small};
    line-height: ${({typography:e})=>e["sm-medium"].lineHeight};
    letter-spacing: ${({typography:e})=>e["sm-medium"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.medium};
    font-family: ${({fontFamily:e})=>e.regular};
    font-feature-settings:
      'liga' off,
      'clig' off;
  }
`;var Di=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const wc={primary:ie.tokens.theme.textPrimary,secondary:ie.tokens.theme.textSecondary,tertiary:ie.tokens.theme.textTertiary,invert:ie.tokens.theme.textInvert,error:ie.tokens.core.textError,success:ie.tokens.core.textSuccess,warning:ie.tokens.core.textWarning,"accent-primary":ie.tokens.core.textAccentPrimary};let _t=class extends k{constructor(){super(...arguments),this.variant="md-regular",this.color="inherit",this.align="left",this.lineClamp=void 0,this.display="inline-flex"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`
      display: ${this.display};
      --local-align: ${this.align};
      --local-color: ${this.color==="inherit"?"inherit":wc[this.color??"primary"]};
      `,l`<slot class=${Mr(t)}></slot>`}};_t.styles=[B,gc];Di([d()],_t.prototype,"variant",void 0);Di([d()],_t.prototype,"color",void 0);Di([d()],_t.prototype,"align",void 0);Di([d()],_t.prototype,"lineClamp",void 0);Di([d()],_t.prototype,"display",void 0);_t=Di([b("wui-text")],_t);const bc=ae`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
    box-sizing: border-box;
  }
`;var Se=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let he=class extends k{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ee.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ee.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ee.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ee.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ee.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ee.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ee.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ee.getSpacingStyles(this.margin,3)};
      width: ${this.width};
    `,l`<slot></slot>`}};he.styles=[B,bc];Se([d()],he.prototype,"flexDirection",void 0);Se([d()],he.prototype,"flexWrap",void 0);Se([d()],he.prototype,"flexBasis",void 0);Se([d()],he.prototype,"flexGrow",void 0);Se([d()],he.prototype,"flexShrink",void 0);Se([d()],he.prototype,"alignItems",void 0);Se([d()],he.prototype,"justifyContent",void 0);Se([d()],he.prototype,"columnGap",void 0);Se([d()],he.prototype,"rowGap",void 0);Se([d()],he.prototype,"gap",void 0);Se([d()],he.prototype,"padding",void 0);Se([d()],he.prototype,"margin",void 0);Se([d()],he.prototype,"width",void 0);he=Se([b("wui-flex")],he);const yc=N`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
    border-radius: ${({borderRadius:e})=>e[16]};
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  :host([data-variant='generated']) {
    background: radial-gradient(
      var(--local-radial-circle),
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var vn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let qt=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0,this.size="xl"}render(){const t={inherit:"inherit",xxs:"3",xs:"5",sm:"6",md:"8",mdl:"8",lg:"10",xl:"16",xxl:"20"};return this.style.cssText=`
    --local-width: var(--apkt-spacing-${t[this.size??"xl"]});
    --local-height: var(--apkt-spacing-${t[this.size??"xl"]});
    `,l`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",l`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=ee.generateAvatarColors(this.address);return this.style.cssText+=`
 ${t}`,null}return this.dataset.variant="default",null}};qt.styles=[B,yc];vn([d()],qt.prototype,"imageSrc",void 0);vn([d()],qt.prototype,"alt",void 0);vn([d()],qt.prototype,"address",void 0);vn([d()],qt.prototype,"size",void 0);qt=vn([b("wui-avatar")],qt);const vc=N`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`;var qe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ie=class extends k{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address="",this.profileName="",this.charsStart=4,this.charsEnd=6}render(){return l`
      <button
        ?disabled=${this.disabled}
        class=${R(this.balance?void 0:"local-no-balance")}
        data-error=${R(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){const t=this.networkSrc?l`<wui-image src=${this.networkSrc}></wui-image>`:l` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return l`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${t}</wui-flex>
    </wui-flex>`}addressTemplate(){return l`<wui-text variant="md-regular" color="inherit">
      ${this.address?ee.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"}):null}
    </wui-text>`}balanceTemplate(){if(this.balance){const t=this.loading?l`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:l`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`;return l`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${t}</wui-flex
      >`}return null}};Ie.styles=[B,K,vc];qe([d()],Ie.prototype,"networkSrc",void 0);qe([d()],Ie.prototype,"avatarSrc",void 0);qe([d()],Ie.prototype,"balance",void 0);qe([d({type:Boolean})],Ie.prototype,"isUnsupportedChain",void 0);qe([d({type:Boolean})],Ie.prototype,"disabled",void 0);qe([d({type:Boolean})],Ie.prototype,"loading",void 0);qe([d()],Ie.prototype,"address",void 0);qe([d()],Ie.prototype,"profileName",void 0);qe([d()],Ie.prototype,"charsStart",void 0);qe([d()],Ie.prototype,"charsEnd",void 0);Ie=qe([b("wui-account-button")],Ie);var ve=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class xe extends k{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance="show",this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=T.state.allowUnsupportedChain?!0:g.state.activeChain?g.checkIfSupportedNetwork(g.state.activeChain):!0}connectedCallback(){super.connectedCallback(),this.setAccountData(g.getAccountData(this.namespace)),this.setNetworkData(g.getNetworkData(this.namespace))}firstUpdated(){const t=this.namespace;t?this.unsubscribe.push(g.subscribeChainProp("accountState",i=>{this.setAccountData(i)},t),g.subscribeChainProp("networkState",i=>{var o;this.setNetworkData(i),this.isSupported=g.checkIfSupportedNetwork(t,(o=i==null?void 0:i.caipNetwork)==null?void 0:o.caipNetworkId)},t)):this.unsubscribe.push(Ht.subscribeNetworkImages(()=>{this.networkImage=Q.getNetworkImage(this.network)}),g.subscribeKey("activeCaipAddress",i=>{this.caipAddress=i}),g.subscribeChainProp("accountState",i=>{this.setAccountData(i)}),g.subscribeKey("activeCaipNetwork",i=>{this.network=i,this.networkImage=Q.getNetworkImage(i),this.isSupported=i!=null&&i.chainNamespace?g.checkIfSupportedNetwork(i==null?void 0:i.chainNamespace):!0,this.fetchNetworkImage(i)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!g.state.activeChain)return null;const t=this.balance==="show",i=typeof this.balanceVal!="string",{formattedText:o}=P.parseBalance(this.balanceVal,this.balanceSymbol);return l`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${T.state.allowUnsupportedChain?!1:!this.isSupported}
        address=${R(P.getPlainAddress(this.caipAddress))}
        profileName=${R(this.profileName)}
        networkSrc=${R(this.networkImage)}
        avatarSrc=${R(this.profileImage)}
        balance=${t?o:""}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:""}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${i}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||T.state.allowUnsupportedChain?ce.open({namespace:this.namespace}):ce.open({view:"UnsupportedChain"})}async fetchNetworkImage(t){var i,o;(i=t==null?void 0:t.assets)!=null&&i.imageId&&(this.networkImage=await Q.fetchNetworkImage((o=t==null?void 0:t.assets)==null?void 0:o.imageId))}setAccountData(t){t&&(this.caipAddress=t.caipAddress,this.balanceVal=t.balance,this.balanceSymbol=t.balanceSymbol,this.profileName=t.profileName,this.profileImage=t.profileImage)}setNetworkData(t){t&&(this.network=t.caipNetwork,this.networkImage=Q.getNetworkImage(t.caipNetwork))}}ve([d({type:Boolean})],xe.prototype,"disabled",void 0);ve([d()],xe.prototype,"balance",void 0);ve([d()],xe.prototype,"charsStart",void 0);ve([d()],xe.prototype,"charsEnd",void 0);ve([d()],xe.prototype,"namespace",void 0);ve([m()],xe.prototype,"caipAddress",void 0);ve([m()],xe.prototype,"balanceVal",void 0);ve([m()],xe.prototype,"balanceSymbol",void 0);ve([m()],xe.prototype,"profileName",void 0);ve([m()],xe.prototype,"profileImage",void 0);ve([m()],xe.prototype,"network",void 0);ve([m()],xe.prototype,"networkImage",void 0);ve([m()],xe.prototype,"isSupported",void 0);let rr=class extends xe{};rr=ve([b("w3m-account-button")],rr);let Yn=class extends xe{};Yn=ve([b("appkit-account-button")],Yn);const xc=ae`
  :host {
    display: block;
    width: max-content;
  }
`;var Ke=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class ze extends k{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){var t;this.caipAddress=this.namespace?(t=g.getAccountData(this.namespace))==null?void 0:t.caipAddress:g.state.activeCaipAddress,this.namespace?this.unsubscribe.push(g.subscribeChainProp("accountState",i=>{this.caipAddress=i==null?void 0:i.caipAddress},this.namespace)):this.unsubscribe.push(g.subscribeKey("activeCaipAddress",i=>this.caipAddress=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.caipAddress?l`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${R(this.balance)}
            .charsStart=${R(this.charsStart)}
            .charsEnd=${R(this.charsEnd)}
            namespace=${R(this.namespace)}
          >
          </appkit-account-button>
        `:l`
          <appkit-connect-button
            size=${R(this.size)}
            label=${R(this.label)}
            loadingLabel=${R(this.loadingLabel)}
            namespace=${R(this.namespace)}
          ></appkit-connect-button>
        `}}ze.styles=xc;Ke([d({type:Boolean})],ze.prototype,"disabled",void 0);Ke([d()],ze.prototype,"balance",void 0);Ke([d()],ze.prototype,"size",void 0);Ke([d()],ze.prototype,"label",void 0);Ke([d()],ze.prototype,"loadingLabel",void 0);Ke([d()],ze.prototype,"charsStart",void 0);Ke([d()],ze.prototype,"charsEnd",void 0);Ke([d()],ze.prototype,"namespace",void 0);Ke([m()],ze.prototype,"caipAddress",void 0);let ar=class extends ze{};ar=Ke([b("w3m-button")],ar);let Xn=class extends ze{};Xn=Ke([b("appkit-button")],Xn);const Cc=N`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`;var xn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Kt=class extends k{constructor(){super(...arguments),this.size="md",this.variant="primary",this.loading=!1,this.text="Connect Wallet"}render(){return l`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){const t={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},i={primary:"invert",secondary:"accent-primary"};return this.loading?l`<wui-loading-spinner
      color=${i[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:l` <wui-text variant=${t[this.size]} color=${i[this.variant]}>
        ${this.text}
      </wui-text>`}};Kt.styles=[B,K,Cc];xn([d()],Kt.prototype,"size",void 0);xn([d()],Kt.prototype,"variant",void 0);xn([d({type:Boolean})],Kt.prototype,"loading",void 0);xn([d()],Kt.prototype,"text",void 0);Kt=xn([b("wui-connect-button")],Kt);var Lt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class Ot extends k{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=ce.state.open,this.loading=this.namespace?ce.state.loadingNamespaceMap.get(this.namespace):ce.state.loading,this.unsubscribe.push(ce.subscribe(t=>{this.open=t.open,this.loading=this.namespace?t.loadingNamespaceMap.get(this.namespace):t.loading}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-connect-button
        size=${R(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:""}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?ce.close():this.loading||ce.open({view:"Connect",namespace:this.namespace})}}Lt([d()],Ot.prototype,"size",void 0);Lt([d()],Ot.prototype,"label",void 0);Lt([d()],Ot.prototype,"loadingLabel",void 0);Lt([d()],Ot.prototype,"namespace",void 0);Lt([m()],Ot.prototype,"open",void 0);Lt([m()],Ot.prototype,"loading",void 0);let sr=class extends Ot{};sr=Lt([b("w3m-connect-button")],sr);let Qn=class extends Ot{};Qn=Lt([b("appkit-connect-button")],Qn);const $c=N`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} !important;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: relative;
  }

  :host([data-padding='2']) {
    padding: ${({spacing:e})=>e[2]} !important;
  }

  :host:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host > wui-icon {
    z-index: 10;
  }

  /* -- Colors --------------------------------------------------- */
  :host([data-color='accent-primary']) {
    color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  :host([data-color='accent-primary']):after {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  :host([data-color='default']),
  :host([data-color='secondary']) {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  :host([data-color='default']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-color='secondary']):after {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-color='success']) {
    color: ${({tokens:e})=>e.core.iconSuccess};
  }

  :host([data-color='success']):after {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  :host([data-color='error']) {
    color: ${({tokens:e})=>e.core.iconError};
  }

  :host([data-color='error']):after {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  :host([data-color='warning']) {
    color: ${({tokens:e})=>e.core.iconWarning};
  }

  :host([data-color='warning']):after {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  :host([data-color='inverse']) {
    color: ${({tokens:e})=>e.theme.iconInverse};
  }

  :host([data-color='inverse']):after {
    background-color: transparent;
  }
`;var Cn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Gt=class extends k{constructor(){super(...arguments),this.icon="copy",this.size="md",this.padding="1",this.color="default"}render(){return this.dataset.padding=this.padding,this.dataset.color=this.color,l`
      <wui-icon size=${R(this.size)} name=${this.icon} color="inherit"></wui-icon>
    `}};Gt.styles=[B,K,$c];Cn([d()],Gt.prototype,"icon",void 0);Cn([d()],Gt.prototype,"size",void 0);Cn([d()],Gt.prototype,"padding",void 0);Cn([d()],Gt.prototype,"color",void 0);Gt=Cn([b("wui-icon-box")],Gt);const kc=N`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`;var $n=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Yt=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size="lg"}render(){const t={sm:"sm-regular",md:"md-regular",lg:"lg-regular"};return l`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${t[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?l` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?l`<wui-image src=${this.imageSrc}></wui-image>`:l` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};Yt.styles=[B,K,kc];$n([d()],Yt.prototype,"imageSrc",void 0);$n([d({type:Boolean})],Yt.prototype,"isUnsupportedChain",void 0);$n([d({type:Boolean})],Yt.prototype,"disabled",void 0);$n([d()],Yt.prototype,"size",void 0);Yt=$n([b("wui-network-button")],Yt);const Sc=ae`
  :host {
    display: block;
    width: max-content;
  }
`;var bt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class rt extends k{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=g.state.activeCaipNetwork,this.networkImage=Q.getNetworkImage(this.network),this.caipAddress=g.state.activeCaipAddress,this.loading=ce.state.loading,this.isSupported=T.state.allowUnsupportedChain?!0:g.state.activeChain?g.checkIfSupportedNetwork(g.state.activeChain):!0,this.unsubscribe.push(Ht.subscribeNetworkImages(()=>{this.networkImage=Q.getNetworkImage(this.network)}),g.subscribeKey("activeCaipAddress",t=>{this.caipAddress=t}),g.subscribeKey("activeCaipNetwork",t=>{var i;this.network=t,this.networkImage=Q.getNetworkImage(t),this.isSupported=t!=null&&t.chainNamespace?g.checkIfSupportedNetwork(t.chainNamespace):!0,Q.fetchNetworkImage((i=t==null?void 0:t.assets)==null?void 0:i.imageId)}),ce.subscribeKey("loading",t=>this.loading=t))}firstUpdated(){var t,i;Q.fetchNetworkImage((i=(t=this.network)==null?void 0:t.assets)==null?void 0:i.imageId)}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.network?g.checkIfSupportedNetwork(this.network.chainNamespace):!0;return l`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${T.state.allowUnsupportedChain?!1:!t}
        imageSrc=${R(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!T.state.allowUnsupportedChain?"Switch Network":this.network.name:this.label?this.label:this.caipAddress?"Unknown Network":"Select Network"}onClick(){this.loading||(V.sendEvent({type:"track",event:"CLICK_NETWORKS"}),ce.open({view:"Networks"}))}}rt.styles=Sc;bt([d({type:Boolean})],rt.prototype,"disabled",void 0);bt([d({type:String})],rt.prototype,"label",void 0);bt([m()],rt.prototype,"network",void 0);bt([m()],rt.prototype,"networkImage",void 0);bt([m()],rt.prototype,"caipAddress",void 0);bt([m()],rt.prototype,"loading",void 0);bt([m()],rt.prototype,"isSupported",void 0);let lr=class extends rt{};lr=bt([b("w3m-network-button")],lr);let Jn=class extends rt{};Jn=bt([b("appkit-network-button")],Jn);const Ec="https://reown.com",_c=N`
  .reown-logo {
    height: 24px;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  a:hover {
    opacity: 0.9;
  }
`;var Ac=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let cr=class extends k{render(){return l`
      <a
        data-testid="ux-branding-reown"
        href=${Ec}
        rel="noreferrer"
        target="_blank"
        style="text-decoration: none;"
      >
        <wui-flex
          justifyContent="center"
          alignItems="center"
          gap="1"
          .padding=${["01","0","3","0"]}
        >
          <wui-text variant="sm-regular" color="inherit"> UX by </wui-text>
          <wui-icon name="reown" size="inherit" class="reown-logo"></wui-icon>
        </wui-flex>
      </a>
    `}};cr.styles=[B,K,_c];cr=Ac([b("wui-ux-by-reown")],cr);const Ic=N`
  :host wui-ux-by-reown {
    padding-top: 0;
  }

  :host wui-ux-by-reown.branding-only {
    padding-top: ${({spacing:e})=>e[3]};
  }

  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.core.textAccentPrimary};
    font-weight: 500;
  }
`;var Xa=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let eo=class extends k{constructor(){super(),this.unsubscribe=[],this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(T.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var n;const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state,o=(n=T.state.features)==null?void 0:n.legalCheckbox;return!t&&!i||o?l`
        <wui-flex flexDirection="column"> ${this.reownBrandingTemplate(!0)} </wui-flex>
      `:l`
      <wui-flex flexDirection="column">
        <wui-flex .padding=${["4","3","3","3"]} justifyContent="center">
          <wui-text color="secondary" variant="md-regular" align="center">
            By connecting your wallet, you agree to our <br />
            ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
          </wui-text>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state;return t&&i?"and":""}termsTemplate(){const{termsConditionsUrl:t}=T.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Terms of Service</a
    >`:null}privacyTemplate(){const{privacyPolicyUrl:t}=T.state;return t?l`<a href=${t} target="_blank" rel="noopener noreferrer"
      >Privacy Policy</a
    >`:null}reownBrandingTemplate(t=!1){var i;return(i=this.remoteFeatures)!=null&&i.reownBranding?t?l`<wui-ux-by-reown class="branding-only"></wui-ux-by-reown>`:l`<wui-ux-by-reown></wui-ux-by-reown>`:null}};eo.styles=[Ic];Xa([m()],eo.prototype,"remoteFeatures",void 0);eo=Xa([b("w3m-legal-footer")],eo);const Rc=N`
  button {
    border: none;
    background: transparent;
    height: 20px;
    padding: ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({spacing:e})=>e[1]};
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent'] {
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='secondary'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[data-variant='accent']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-variant='accent']:hover:enabled {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  button[disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var kn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Tc={sm:"sm-medium",md:"md-medium"},Nc={accent:"accent-primary",secondary:"secondary"};let Xt=class extends k{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.variant="accent",this.icon=void 0}render(){return l`
      <button ?disabled=${this.disabled} data-variant=${this.variant}>
        <slot name="iconLeft"></slot>
        <wui-text
          color=${Nc[this.variant]}
          variant=${Tc[this.size]}
        >
          <slot></slot>
        </wui-text>
        ${this.iconTemplate()}
      </button>
    `}iconTemplate(){return this.icon?l`<wui-icon name=${this.icon} size="sm"></wui-icon>`:null}};Xt.styles=[B,K,Rc];kn([d()],Xt.prototype,"size",void 0);kn([d({type:Boolean})],Xt.prototype,"disabled",void 0);kn([d()],Xt.prototype,"variant",void 0);kn([d()],Xt.prototype,"icon",void 0);Xt=kn([b("wui-link")],Xt);const Pc=ae``;var Lc=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let dr=class extends k{render(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state;return!t&&!i?null:l`
      <wui-flex
        .padding=${["4","3","3","3"]}
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="3"
      >
        <wui-text color="secondary" variant="md-regular" align="center">
          We work with the best providers to give you the lowest fees and best support. More options
          coming soon!
        </wui-text>

        ${this.howDoesItWorkTemplate()}
      </wui-flex>
    `}howDoesItWorkTemplate(){return l` <wui-link @click=${this.onWhatIsBuy.bind(this)}>
      <wui-icon size="xs" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
      How does it work?
    </wui-link>`}onWhatIsBuy(){V.sendEvent({type:"track",event:"SELECT_WHAT_IS_A_BUY",properties:{isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("WhatIsABuy")}};dr.styles=[Pc];dr=Lc([b("w3m-onramp-providers-footer")],dr);var ma={};const Vn={ACCOUNT_TABS:[{label:"Tokens"},{label:"Activity"}],SECURE_SITE_ORIGIN:(typeof process<"u"&&typeof ma<"u"?ma.NEXT_PUBLIC_SECURE_SITE_ORIGIN:void 0)||"https://secure.walletconnect.org",VIEW_DIRECTION:{Next:"next",Prev:"prev"},ANIMATION_DURATIONS:{HeaderText:120},VIEWS_WITH_LEGAL_FOOTER:["Connect","ConnectWallets","OnRampTokenSelect","OnRampFiatSelect","OnRampProviders"],VIEWS_WITH_DEFAULT_FOOTER:["Networks"]},xi={getTabsByNamespace(e){var i;return!!e&&e===q.CHAIN.EVM?((i=T.state.remoteFeatures)==null?void 0:i.activity)===!1?Vn.ACCOUNT_TABS.filter(o=>o.label!=="Activity"):Vn.ACCOUNT_TABS:[]},isValidReownName(e){return/^[a-zA-Z0-9]+$/gu.test(e)},isValidEmail(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/gu.test(e)},validateReownName(e){return e.replace(/\^/gu,"").toLowerCase().replace(/[^a-zA-Z0-9]/gu,"")},hasFooter(){var t;const e=C.state.view;if(Vn.VIEWS_WITH_LEGAL_FOOTER.includes(e)){const{termsConditionsUrl:i,privacyPolicyUrl:o}=T.state,r=(t=T.state.features)==null?void 0:t.legalCheckbox;return!(!i&&!o||r)}return Vn.VIEWS_WITH_DEFAULT_FOOTER.includes(e)}},Oc=N`
  :host {
    display: block;
  }

  div.container {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    height: auto;
    display: block;
  }

  div.container[status='hide'] {
    animation: fade-out;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: 0s;
  }

  div.container[status='show'] {
    animation: fade-in;
    animation-duration: var(--apkt-duration-dynamic);
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      filter: blur(6px);
    }
    to {
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes fade-out {
    from {
      opacity: 1;
      filter: blur(0px);
    }
    to {
      opacity: 0;
      filter: blur(6px);
    }
  }
`;var zr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ci=class extends k{constructor(){super(...arguments),this.resizeObserver=void 0,this.unsubscribe=[],this.status="hide",this.view=C.state.view}firstUpdated(){this.status=xi.hasFooter()?"show":"hide",this.unsubscribe.push(C.subscribeKey("view",t=>{this.view=t,this.status=xi.hasFooter()?"show":"hide",this.status==="hide"&&document.documentElement.style.setProperty("--apkt-footer-height","0px")})),this.resizeObserver=new ResizeObserver(t=>{for(const i of t)if(i.target===this.getWrapper()){const o=`${i.contentRect.height}px`;document.documentElement.style.setProperty("--apkt-footer-height",o)}}),this.resizeObserver.observe(this.getWrapper())}render(){return l`
      <div class="container" status=${this.status}>${this.templatePageContainer()}</div>
    `}templatePageContainer(){return xi.hasFooter()?l` ${this.templateFooter()}`:null}templateFooter(){switch(this.view){case"Networks":return this.templateNetworksFooter();case"Connect":case"ConnectWallets":case"OnRampFiatSelect":case"OnRampTokenSelect":return l`<w3m-legal-footer></w3m-legal-footer>`;case"OnRampProviders":return l`<w3m-onramp-providers-footer></w3m-onramp-providers-footer>`;default:return null}}templateNetworksFooter(){return l` <wui-flex
      class="footer-in"
      padding="3"
      flexDirection="column"
      gap="3"
      alignItems="center"
    >
      <wui-text variant="md-regular" color="secondary" align="center">
        Your connected wallet may not support some of the networks available for this dApp
      </wui-text>
      <wui-link @click=${this.onNetworkHelp.bind(this)}>
        <wui-icon size="sm" color="accent-primary" slot="iconLeft" name="helpCircle"></wui-icon>
        What is a network
      </wui-link>
    </wui-flex>`}onNetworkHelp(){V.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),C.push("WhatIsANetwork")}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.container")}};Ci.styles=[Oc];zr([m()],Ci.prototype,"status",void 0);zr([m()],Ci.prototype,"view",void 0);Ci=zr([b("w3m-footer")],Ci);const jc=N`
  :host {
    display: block;
    width: inherit;
  }
`;var Ur=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $i=class extends k{constructor(){super(),this.unsubscribe=[],this.viewState=C.state.view,this.history=C.state.history.join(","),this.unsubscribe.push(C.subscribeKey("view",()=>{this.history=C.state.history.join(","),document.documentElement.style.setProperty("--apkt-duration-dynamic","var(--apkt-durations-lg)")}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),document.documentElement.style.setProperty("--apkt-duration-dynamic","0s")}render(){return l`${this.templatePageContainer()}`}templatePageContainer(){return l`<w3m-router-container
      history=${this.history}
      .setView=${()=>{this.viewState=C.state.view}}
    >
      ${this.viewTemplate(this.viewState)}
    </w3m-router-container>`}viewTemplate(t){switch(t){case"AccountSettings":return l`<w3m-account-settings-view></w3m-account-settings-view>`;case"Account":return l`<w3m-account-view></w3m-account-view>`;case"AllWallets":return l`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"ApproveTransaction":return l`<w3m-approve-transaction-view></w3m-approve-transaction-view>`;case"BuyInProgress":return l`<w3m-buy-in-progress-view></w3m-buy-in-progress-view>`;case"ChooseAccountName":return l`<w3m-choose-account-name-view></w3m-choose-account-name-view>`;case"Connect":return l`<w3m-connect-view></w3m-connect-view>`;case"Create":return l`<w3m-connect-view walletGuide="explore"></w3m-connect-view>`;case"ConnectingWalletConnect":return l`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingWalletConnectBasic":return l`<w3m-connecting-wc-basic-view></w3m-connecting-wc-basic-view>`;case"ConnectingExternal":return l`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return l`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"ConnectWallets":return l`<w3m-connect-wallets-view></w3m-connect-wallets-view>`;case"ConnectSocials":return l`<w3m-connect-socials-view></w3m-connect-socials-view>`;case"ConnectingSocial":return l`<w3m-connecting-social-view></w3m-connecting-social-view>`;case"DataCapture":return l`<w3m-data-capture-view></w3m-data-capture-view>`;case"DataCaptureOtpConfirm":return l`<w3m-data-capture-otp-confirm-view></w3m-data-capture-otp-confirm-view>`;case"Downloads":return l`<w3m-downloads-view></w3m-downloads-view>`;case"EmailLogin":return l`<w3m-email-login-view></w3m-email-login-view>`;case"EmailVerifyOtp":return l`<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;case"EmailVerifyDevice":return l`<w3m-email-verify-device-view></w3m-email-verify-device-view>`;case"GetWallet":return l`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Networks":return l`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return l`<w3m-network-switch-view></w3m-network-switch-view>`;case"ProfileWallets":return l`<w3m-profile-wallets-view></w3m-profile-wallets-view>`;case"Transactions":return l`<w3m-transactions-view></w3m-transactions-view>`;case"OnRampProviders":return l`<w3m-onramp-providers-view></w3m-onramp-providers-view>`;case"OnRampTokenSelect":return l`<w3m-onramp-token-select-view></w3m-onramp-token-select-view>`;case"OnRampFiatSelect":return l`<w3m-onramp-fiat-select-view></w3m-onramp-fiat-select-view>`;case"UpgradeEmailWallet":return l`<w3m-upgrade-wallet-view></w3m-upgrade-wallet-view>`;case"UpdateEmailWallet":return l`<w3m-update-email-wallet-view></w3m-update-email-wallet-view>`;case"UpdateEmailPrimaryOtp":return l`<w3m-update-email-primary-otp-view></w3m-update-email-primary-otp-view>`;case"UpdateEmailSecondaryOtp":return l`<w3m-update-email-secondary-otp-view></w3m-update-email-secondary-otp-view>`;case"UnsupportedChain":return l`<w3m-unsupported-chain-view></w3m-unsupported-chain-view>`;case"Swap":return l`<w3m-swap-view></w3m-swap-view>`;case"SwapSelectToken":return l`<w3m-swap-select-token-view></w3m-swap-select-token-view>`;case"SwapPreview":return l`<w3m-swap-preview-view></w3m-swap-preview-view>`;case"WalletSend":return l`<w3m-wallet-send-view></w3m-wallet-send-view>`;case"WalletSendSelectToken":return l`<w3m-wallet-send-select-token-view></w3m-wallet-send-select-token-view>`;case"WalletSendPreview":return l`<w3m-wallet-send-preview-view></w3m-wallet-send-preview-view>`;case"WalletSendConfirmed":return l`<w3m-send-confirmed-view></w3m-send-confirmed-view>`;case"WhatIsABuy":return l`<w3m-what-is-a-buy-view></w3m-what-is-a-buy-view>`;case"WalletReceive":return l`<w3m-wallet-receive-view></w3m-wallet-receive-view>`;case"WalletCompatibleNetworks":return l`<w3m-wallet-compatible-networks-view></w3m-wallet-compatible-networks-view>`;case"WhatIsAWallet":return l`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"ConnectingMultiChain":return l`<w3m-connecting-multi-chain-view></w3m-connecting-multi-chain-view>`;case"WhatIsANetwork":return l`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"ConnectingFarcaster":return l`<w3m-connecting-farcaster-view></w3m-connecting-farcaster-view>`;case"SwitchActiveChain":return l`<w3m-switch-active-chain-view></w3m-switch-active-chain-view>`;case"RegisterAccountName":return l`<w3m-register-account-name-view></w3m-register-account-name-view>`;case"RegisterAccountNameSuccess":return l`<w3m-register-account-name-success-view></w3m-register-account-name-success-view>`;case"SmartSessionCreated":return l`<w3m-smart-session-created-view></w3m-smart-session-created-view>`;case"SmartSessionList":return l`<w3m-smart-session-list-view></w3m-smart-session-list-view>`;case"SIWXSignMessage":return l`<w3m-siwx-sign-message-view></w3m-siwx-sign-message-view>`;case"Pay":return l`<w3m-pay-view></w3m-pay-view>`;case"PayLoading":return l`<w3m-pay-loading-view></w3m-pay-loading-view>`;case"PayQuote":return l`<w3m-pay-quote-view></w3m-pay-quote-view>`;case"FundWallet":return l`<w3m-fund-wallet-view></w3m-fund-wallet-view>`;case"PayWithExchange":return l`<w3m-deposit-from-exchange-view></w3m-deposit-from-exchange-view>`;case"PayWithExchangeSelectAsset":return l`<w3m-deposit-from-exchange-select-asset-view></w3m-deposit-from-exchange-select-asset-view>`;case"UsageExceeded":return l`<w3m-usage-exceeded-view></w3m-usage-exceeded-view>`;case"SmartAccountSettings":return l`<w3m-smart-account-settings-view></w3m-smart-account-settings-view>`;default:return l`<w3m-connect-view></w3m-connect-view>`}}};$i.styles=[jc];Ur([m()],$i.prototype,"viewState",void 0);Ur([m()],$i.prototype,"history",void 0);$i=Ur([b("w3m-router")],$i);const Wc=N`
  button {
    background-color: transparent;
    padding: ${({spacing:e})=>e[1]};
  }

  button:focus-visible {
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button[data-variant='accent']:hover:enabled,
  button[data-variant='accent']:focus-visible {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button[data-variant='primary']:hover:enabled,
  button[data-variant='primary']:focus-visible,
  button[data-variant='secondary']:hover:enabled,
  button[data-variant='secondary']:focus-visible {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button[data-size='xs'] > wui-icon {
    width: 8px;
    height: 8px;
  }

  button[data-size='sm'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  button[data-size='xs'],
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  button[data-size='md'],
  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='md'] > wui-icon {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] > wui-icon {
    width: 20px;
    height: 20px;
  }

  button:disabled {
    background-color: transparent;
    cursor: not-allowed;
    opacity: 0.5;
  }

  button:hover:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
  }

  button:focus-visible:not(:disabled) {
    background-color: var(--wui-color-accent-glass-015);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-accent-100),
      0 0 0 4px var(--wui-color-accent-glass-020);
  }
`;var Mi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let At=class extends k{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="default",this.variant="accent"}render(){const t={accent:"accent-primary",primary:"inverse",secondary:"default"};return l`
      <button data-variant=${this.variant} ?disabled=${this.disabled} data-size=${this.size}>
        <wui-icon
          color=${t[this.variant]||this.iconColor}
          size=${this.size}
          name=${this.icon}
        ></wui-icon>
      </button>
    `}};At.styles=[B,K,Wc];Mi([d()],At.prototype,"size",void 0);Mi([d({type:Boolean})],At.prototype,"disabled",void 0);Mi([d()],At.prototype,"icon",void 0);Mi([d()],At.prototype,"iconColor",void 0);Mi([d()],At.prototype,"variant",void 0);At=Mi([b("wui-icon-link")],At);const Bc=N`
  :host {
    width: 100%;
  }

  :host([data-type='primary']) > button {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-type='secondary']) > button {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, scale;
  }

  wui-text {
    text-transform: capitalize;
  }

  wui-image {
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  @media (hover: hover) {
    :host([data-type='primary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host([data-type='secondary']) > button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Ee=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let pe=class extends k{constructor(){super(...arguments),this.type="primary",this.imageSrc="google",this.imageSize=void 0,this.loading=!1,this.boxColor="foregroundPrimary",this.disabled=!1,this.rightIcon=!0,this.boxed=!0,this.rounded=!1,this.fullSize=!1}render(){return this.dataset.rounded=this.rounded?"true":"false",this.dataset.type=this.type,l`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        tabindex=${R(this.tabIdx)}
      >
        <wui-flex gap="2" alignItems="center">
          ${this.templateLeftIcon()}
          <wui-flex gap="1">
            <slot></slot>
          </wui-flex>
        </wui-flex>
        ${this.templateRightIcon()}
      </button>
    `}templateLeftIcon(){return this.icon?l`<wui-image
        icon=${this.icon}
        iconColor=${R(this.iconColor)}
        ?boxed=${this.boxed}
        ?rounded=${this.rounded}
        boxColor=${this.boxColor}
      ></wui-image>`:l`<wui-image
      ?boxed=${this.boxed}
      ?rounded=${this.rounded}
      ?fullSize=${this.fullSize}
      size=${R(this.imageSize)}
      src=${this.imageSrc}
      boxColor=${this.boxColor}
    ></wui-image>`}templateRightIcon(){return this.rightIcon?this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:l`<wui-icon name="chevronRight" size="lg" color="default"></wui-icon>`:null}};pe.styles=[B,K,Bc];Ee([d()],pe.prototype,"type",void 0);Ee([d()],pe.prototype,"imageSrc",void 0);Ee([d()],pe.prototype,"imageSize",void 0);Ee([d()],pe.prototype,"icon",void 0);Ee([d()],pe.prototype,"iconColor",void 0);Ee([d({type:Boolean})],pe.prototype,"loading",void 0);Ee([d()],pe.prototype,"tabIdx",void 0);Ee([d()],pe.prototype,"boxColor",void 0);Ee([d({type:Boolean})],pe.prototype,"disabled",void 0);Ee([d({type:Boolean})],pe.prototype,"rightIcon",void 0);Ee([d({type:Boolean})],pe.prototype,"boxed",void 0);Ee([d({type:Boolean})],pe.prototype,"rounded",void 0);Ee([d({type:Boolean})],pe.prototype,"fullSize",void 0);pe=Ee([b("wui-list-item")],pe);const Dc=N`
  :host {
    width: var(--local-width);
  }

  button {
    width: var(--local-width);
    white-space: nowrap;
    column-gap: ${({spacing:e})=>e[2]};
    transition:
      scale ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: scale, background-color, border-radius;
    cursor: pointer;
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    padding: 0 ${({spacing:e})=>e[2]};
    height: 28px;
  }

  button[data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: 0 ${({spacing:e})=>e[4]};
    height: 38px;
  }

  button[data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: 0 ${({spacing:e})=>e[5]};
    height: 48px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-variant='accent-primary'] {
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='accent-secondary'] {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button[data-variant='neutral-primary'] {
    background-color: ${({tokens:e})=>e.theme.backgroundInvert};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='neutral-secondary'] {
    background-color: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='neutral-tertiary'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button[data-variant='error-primary'] {
    background-color: ${({tokens:e})=>e.core.textError};
    color: ${({tokens:e})=>e.theme.textInvert};
  }

  button[data-variant='error-secondary'] {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  button[data-variant='shade'] {
    background: var(--wui-color-gray-glass-002);
    color: var(--wui-color-fg-200);
    border: none;
    box-shadow: inset 0 0 0 1px var(--wui-color-gray-glass-005);
  }

  /* -- Focus states --------------------------------------------------- */
  button[data-size='sm']:focus-visible:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:focus-visible:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:focus-visible:enabled {
    border-radius: 48px;
  }
  button[data-variant='shade']:focus-visible:enabled {
    background: var(--wui-color-gray-glass-005);
    box-shadow:
      inset 0 0 0 1px var(--wui-color-gray-glass-010),
      0 0 0 4px var(--wui-color-gray-glass-002);
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button[data-size='sm']:hover:enabled {
      border-radius: 28px;
    }

    button[data-size='md']:hover:enabled {
      border-radius: 38px;
    }

    button[data-size='lg']:hover:enabled {
      border-radius: 48px;
    }

    button[data-variant='shade']:hover:enabled {
      background: var(--wui-color-gray-glass-002);
    }

    button[data-variant='shade']:active:enabled {
      background: var(--wui-color-gray-glass-005);
    }
  }

  button[data-size='sm']:active:enabled {
    border-radius: 28px;
  }

  button[data-size='md']:active:enabled {
    border-radius: 38px;
  }

  button[data-size='lg']:active:enabled {
    border-radius: 48px;
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    opacity: 0.3;
  }
`;var ui=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Mc={lg:"lg-regular-mono",md:"md-regular-mono",sm:"sm-regular-mono"},zc={lg:"md",md:"md",sm:"sm"};let ut=class extends k{constructor(){super(...arguments),this.size="lg",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="accent-primary"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
     `;const t=this.textVariant??Mc[this.size];return l`
      <button data-variant=${this.variant} data-size=${this.size} ?disabled=${this.disabled}>
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){if(this.loading){const t=zc[this.size],i=this.variant==="neutral-primary"||this.variant==="accent-primary"?"invert":"primary";return l`<wui-loading-spinner color=${i} size=${t}></wui-loading-spinner>`}return null}};ut.styles=[B,K,Dc];ui([d()],ut.prototype,"size",void 0);ui([d({type:Boolean})],ut.prototype,"disabled",void 0);ui([d({type:Boolean})],ut.prototype,"fullWidth",void 0);ui([d({type:Boolean})],ut.prototype,"loading",void 0);ui([d()],ut.prototype,"variant",void 0);ui([d()],ut.prototype,"textVariant",void 0);ut=ui([b("wui-button")],ut);const Uc=N`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`;var Eo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ki=class extends k{constructor(){super(...arguments),this.label="",this.description="",this.icon="wallet"}render(){return l`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};ki.styles=[B,K,Uc];Eo([d()],ki.prototype,"label",void 0);Eo([d()],ki.prototype,"description",void 0);Eo([d()],ki.prototype,"icon",void 0);ki=Eo([b("wui-notice-card")],ki);var Qa=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ur=class extends k{constructor(){super(),this.unsubscribe=[],this.socialProvider=dt.getConnectedSocialProvider(),this.socialUsername=dt.getConnectedSocialUsername(),this.namespace=g.state.activeChain,this.unsubscribe.push(g.subscribeKey("activeChain",t=>{this.namespace=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=O.getConnectorId(this.namespace),i=O.getAuthConnector();if(!i||t!==q.CONNECTOR_ID.AUTH)return this.style.cssText="display: none",null;const o=i.provider.getEmail()??"";return!o&&!this.socialUsername?(this.style.cssText="display: none",null):l`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??"mail"}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(o,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(o)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(t,i){i||C.push("UpdateEmailWallet",{email:t,redirectView:"Account"})}getAuthName(t){return this.socialUsername?this.socialProvider==="discord"&&this.socialUsername.endsWith("0")?this.socialUsername.slice(0,-1):this.socialUsername:t.length>30?`${t.slice(0,-3)}...`:t}};Qa([m()],ur.prototype,"namespace",void 0);ur=Qa([b("w3m-account-auth-button")],ur);var hi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ht=class extends k{constructor(){var t,i,o;super(),this.usubscribe=[],this.networkImages=Ht.state.networkImages,this.address=(t=g.getAccountData())==null?void 0:t.address,this.profileImage=(i=g.getAccountData())==null?void 0:i.profileImage,this.profileName=(o=g.getAccountData())==null?void 0:o.profileName,this.network=g.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=T.state.remoteFeatures,this.usubscribe.push(g.subscribeChainProp("accountState",r=>{r&&(this.address=r.address,this.profileImage=r.profileImage,this.profileName=r.profileName)}),g.subscribeKey("activeCaipNetwork",r=>{r!=null&&r.id&&(this.network=r)}),T.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var i,o,r;if(!this.address)throw new Error("w3m-account-settings-view: No account provided");const t=this.networkImages[((o=(i=this.network)==null?void 0:i.assets)==null?void 0:o.imageId)??""];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${["0","5","3","5"]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${R(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${ee.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${["6","4","3","4"]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${R(t)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${((r=this.network)==null?void 0:r.name)??"Unknown"}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){var n;const t=(n=this.network)==null?void 0:n.chainNamespace,i=O.getConnectorId(t),o=O.getAuthConnector();return!g.checkIfNamesSupported()||!o||i!==q.CONNECTOR_ID.AUTH||this.profileName?null:l`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){var r;const t=O.getConnectorId((r=this.network)==null?void 0:r.chainNamespace),i=O.getAuthConnector(),{origin:o}=location;return!i||t!==q.CONNECTOR_ID.AUTH||o.includes(ue.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){const t=g.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,o=t==null?void 0:t.find(({id:r})=>{var n;return r===((n=this.network)==null?void 0:n.id)});return i||!o}onCopyAddress(){try{this.address&&(P.copyToClopboard(this.address),Y.showSuccess("Address copied"))}catch{Y.showError("Failed to copy")}}smartAccountSettingsTemplate(){var n;const t=(n=this.network)==null?void 0:n.chainNamespace,i=g.checkIfSmartAccountEnabled(),o=O.getConnectorId(t);return!O.getAuthConnector()||o!==q.CONNECTOR_ID.AUTH||!i?null:l`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){C.push("ChooseAccountName")}onNetworks(){this.isAllowedNetworkSwitch()&&C.push("Networks")}async onDisconnect(){var t,i;try{this.disconnecting=!0;const o=(t=this.network)==null?void 0:t.chainNamespace,n=M.getConnections(o).length>0,a=o&&O.state.activeConnectorIds[o],s=(i=this.remoteFeatures)==null?void 0:i.multiWallet;await M.disconnect(s?{id:a,namespace:o}:{}),n&&s&&(C.push("ProfileWallets"),Y.showSuccess("Wallet deleted"))}catch{V.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onGoToUpgradeView(){V.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),C.push("UpgradeEmailWallet")}onSmartAccountSettings(){C.push("SmartAccountSettings")}};hi([m()],ht.prototype,"address",void 0);hi([m()],ht.prototype,"profileImage",void 0);hi([m()],ht.prototype,"profileName",void 0);hi([m()],ht.prototype,"network",void 0);hi([m()],ht.prototype,"disconnecting",void 0);hi([m()],ht.prototype,"remoteFeatures",void 0);ht=hi([b("w3m-account-settings-view")],ht);const Vc=N`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`;var Sn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Fc={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Hc={lg:"md",md:"sm",sm:"sm"};let Qt=class extends k{constructor(){super(...arguments),this.icon="mobile",this.size="md",this.label="",this.active=!1}render(){return l`
      <button data-active=${this.active}>
        ${this.icon?l`<wui-icon size=${Hc[this.size]} name=${this.icon}></wui-icon>`:""}
        <wui-text variant=${Fc[this.size]}> ${this.label} </wui-text>
      </button>
    `}};Qt.styles=[B,K,Vc];Sn([d()],Qt.prototype,"icon",void 0);Sn([d()],Qt.prototype,"size",void 0);Sn([d()],Qt.prototype,"label",void 0);Sn([d({type:Boolean})],Qt.prototype,"active",void 0);Qt=Sn([b("wui-tab-item")],Qt);const Zc=N`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e["01"]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`;var En=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Jt=class extends k{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size="md",this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((t,i)=>{var r;const o=i===this.activeTab;return l`
        <wui-tab-item
          @click=${()=>this.onTabClick(i)}
          icon=${t.icon}
          size=${this.size}
          label=${t.label}
          ?active=${o}
          data-active=${o}
          data-testid="tab-${(r=t.label)==null?void 0:r.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(t){this.activeTab=t,this.onTabChange(t)}};Jt.styles=[B,K,Zc];En([d({type:Array})],Jt.prototype,"tabs",void 0);En([d()],Jt.prototype,"onTabChange",void 0);En([d()],Jt.prototype,"size",void 0);En([m()],Jt.prototype,"activeTab",void 0);Jt=En([b("wui-tabs")],Jt);const qc=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    text-transform: uppercase;
    white-space: nowrap;
  }

  :host([data-variant='accent']) {
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  :host([data-variant='info']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='success']) {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
    color: ${({tokens:e})=>e.core.textSuccess};
  }

  :host([data-variant='warning']) {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
    color: ${({tokens:e})=>e.core.textWarning};
  }

  :host([data-variant='error']) {
    background-color: ${({tokens:e})=>e.core.backgroundError};
    color: ${({tokens:e})=>e.core.textError};
  }

  :host([data-variant='certified']) {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-size='md']) {
    height: 30px;
    padding: 0 ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='sm']) {
    height: 20px;
    padding: 0 ${({spacing:e})=>e[1]};
    border-radius: ${({borderRadius:e})=>e[1]};
  }
`;var _o=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Si=class extends k{constructor(){super(...arguments),this.variant="accent",this.size="md",this.icon=void 0}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t=this.size==="md"?"md-medium":"sm-medium",i=this.size==="md"?"md":"sm";return l`
      ${this.icon?l`<wui-icon size=${i} name=${this.icon}></wui-icon>`:null}
      <wui-text
        display="inline"
        data-variant=${this.variant}
        variant=${t}
        color="inherit"
      >
        <slot></slot>
      </wui-text>
    `}};Si.styles=[B,qc];_o([d()],Si.prototype,"variant",void 0);_o([d()],Si.prototype,"size",void 0);_o([d()],Si.prototype,"icon",void 0);Si=_o([b("wui-tag")],Si);const Kc=N`
  button {
    display: flex;
    align-items: center;
    height: 40px;
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    column-gap: ${({spacing:e})=>e[1]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  wui-image,
  .icon-box {
    width: ${({spacing:e})=>e[6]};
    height: ${({spacing:e})=>e[6]};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    flex: 1;
  }

  .icon-box {
    position: relative;
  }

  .icon-box[data-active='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .circle {
    position: absolute;
    left: 16px;
    top: 15px;
    width: 8px;
    height: 8px;
    background-color: ${({tokens:e})=>e.core.textSuccess};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 50%;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var Ge=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Re=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.enableGreenCircle=!0,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <button>
        ${this.leftImageTemplate()} ${this.textTemplate()} ${this.rightImageTemplate()}
      </button>
    `}leftImageTemplate(){const t=this.icon?l`<wui-icon
          size=${R(this.iconSize)}
          color="default"
          name=${this.icon}
          class="icon"
        ></wui-icon>`:l`<wui-image src=${this.imageSrc} alt=${this.alt}></wui-image>`;return l`
      <wui-flex
        alignItems="center"
        justifyContent="center"
        class="icon-box"
        data-active=${!!this.icon}
      >
        ${t}
        ${this.enableGreenCircle?l`<wui-flex class="circle"></wui-flex>`:null}
      </wui-flex>
    `}textTemplate(){return l`
      <wui-text variant="lg-regular" color="primary">
        ${ee.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
      </wui-text>
    `}rightImageTemplate(){return l`<wui-icon name="chevronBottom" size="sm" color="default"></wui-icon>`}};Re.styles=[B,K,Kc];Ge([d()],Re.prototype,"address",void 0);Ge([d()],Re.prototype,"profileName",void 0);Ge([d()],Re.prototype,"alt",void 0);Ge([d()],Re.prototype,"imageSrc",void 0);Ge([d()],Re.prototype,"icon",void 0);Ge([d()],Re.prototype,"iconSize",void 0);Ge([d({type:Boolean})],Re.prototype,"enableGreenCircle",void 0);Ge([d({type:Boolean})],Re.prototype,"loading",void 0);Ge([d({type:Number})],Re.prototype,"charsStart",void 0);Ge([d({type:Number})],Re.prototype,"charsEnd",void 0);Re=Ge([b("wui-wallet-switch")],Re);const Gc=N`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e["ease-out-power-1"]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`;var Ue=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ce=class extends k{constructor(){var t,i,o,r,n,a;super(),this.unsubscribe=[],this.caipAddress=(t=g.getAccountData())==null?void 0:t.caipAddress,this.address=P.getPlainAddress((i=g.getAccountData())==null?void 0:i.caipAddress),this.profileImage=(o=g.getAccountData())==null?void 0:o.profileImage,this.profileName=(r=g.getAccountData())==null?void 0:r.profileName,this.disconnecting=!1,this.balance=(n=g.getAccountData())==null?void 0:n.balance,this.balanceSymbol=(a=g.getAccountData())==null?void 0:a.balanceSymbol,this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.namespace=g.state.activeChain,this.activeConnectorIds=O.state.activeConnectorIds,this.unsubscribe.push(g.subscribeChainProp("accountState",s=>{this.address=P.getPlainAddress(s==null?void 0:s.caipAddress),this.caipAddress=s==null?void 0:s.caipAddress,this.balance=s==null?void 0:s.balance,this.balanceSymbol=s==null?void 0:s.balanceSymbol,this.profileName=s==null?void 0:s.profileName,this.profileImage=s==null?void 0:s.profileImage}),T.subscribeKey("features",s=>this.features=s),T.subscribeKey("remoteFeatures",s=>this.remoteFeatures=s),O.subscribeKey("activeConnectorIds",s=>{this.activeConnectorIds=s}),g.subscribeKey("activeChain",s=>this.namespace=s),g.subscribeKey("activeCaipNetwork",s=>{s!=null&&s.chainNamespace&&(this.namespace=s==null?void 0:s.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(!this.caipAddress||!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],i=t?O.getConnectorById(t):void 0,o=Q.getConnectorImage(i),{value:r,decimals:n,symbol:a}=P.parseBalance(this.balance,this.balanceSymbol);return l`<wui-flex
        flexDirection="column"
        .padding=${["0","5","4","5"]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${R(this.caipAddress)}
          address=${R(P.getPlainAddress(this.caipAddress))}
          imageSrc=${R(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${o}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${n}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${a}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${["0","3","3","3"]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){var n,a;if(!this.namespace)return null;const t=ue.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=!!((n=this.features)!=null&&n.receive),o=((a=this.remoteFeatures)==null?void 0:a.onramp)&&t,r=je.isPayWithExchangeEnabled();return!o&&!i&&!r?null:l`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){var i;return(((i=this.features)==null?void 0:i.walletFeaturesOrder)||ue.DEFAULT_FEATURES.walletFeaturesOrder).map(o=>{switch(o){case"onramp":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}activityTemplate(){var i;return this.namespace&&((i=this.remoteFeatures)==null?void 0:i.activity)&&ue.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?l` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){var o;const t=(o=this.remoteFeatures)==null?void 0:o.swaps,i=g.state.activeChain===q.CHAIN.EVM;return!t||!i?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){var r;const t=(r=this.features)==null?void 0:r.send,i=g.state.activeChain;if(!i)throw new Error("SendController:sendTemplate - namespace is required");const o=ue.SEND_SUPPORTED_NAMESPACES.includes(i);return!t||!o?null:l`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){const t=g.state.activeChain;if(!t)throw new Error("AuthCardTemplate:authCardTemplate - namespace is required");const i=O.getConnectorId(t),o=O.getAuthConnector(),{origin:r}=location;return!o||i!==q.CONNECTOR_ID.AUTH||r.includes(ue.SECURE_SITE)?null:l`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){C.push("FundWallet")}handleClickSwap(){C.push("Swap")}handleClickSend(){C.push("WalletSend")}explorerBtnTemplate(){var i;return((i=g.getAccountData())==null?void 0:i.addressExplorerUrl)?l`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){V.sendEvent({type:"track",event:"CLICK_TRANSACTIONS",properties:{isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("Transactions")}async onDisconnect(){var t;try{this.disconnecting=!0;const o=M.getConnections(this.namespace).length>0,r=this.namespace&&O.state.activeConnectorIds[this.namespace],n=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await M.disconnect(n?{id:r,namespace:this.namespace}:{}),o&&n&&(C.push("ProfileWallets"),Y.showSuccess("Wallet deleted"))}catch{V.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.showError("Failed to disconnect")}finally{this.disconnecting=!1}}onExplorer(){var i;const t=(i=g.getAccountData())==null?void 0:i.addressExplorerUrl;t&&P.openHref(t,"_blank")}onGoToUpgradeView(){V.sendEvent({type:"track",event:"EMAIL_UPGRADE_FROM_MODAL"}),C.push("UpgradeEmailWallet")}onGoToProfileWalletsView(){C.push("ProfileWallets")}};Ce.styles=Gc;Ue([m()],Ce.prototype,"caipAddress",void 0);Ue([m()],Ce.prototype,"address",void 0);Ue([m()],Ce.prototype,"profileImage",void 0);Ue([m()],Ce.prototype,"profileName",void 0);Ue([m()],Ce.prototype,"disconnecting",void 0);Ue([m()],Ce.prototype,"balance",void 0);Ue([m()],Ce.prototype,"balanceSymbol",void 0);Ue([m()],Ce.prototype,"features",void 0);Ue([m()],Ce.prototype,"remoteFeatures",void 0);Ue([m()],Ce.prototype,"namespace",void 0);Ue([m()],Ce.prototype,"activeConnectorIds",void 0);Ce=Ue([b("w3m-account-default-widget")],Ce);const Yc=N`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`;var Vr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let tn=class extends k{constructor(){super(...arguments),this.dollars="0",this.pennies="00"}render(){return l`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};tn.styles=[B,Yc];Vr([d()],tn.prototype,"dollars",void 0);Vr([d()],tn.prototype,"pennies",void 0);tn=Vr([b("wui-balance")],tn);const Xc=N`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var _n=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Qc={sm:"sm-regular",md:"md-regular"};let ei=class extends k{constructor(){super(...arguments),this.placement="top",this.variant="fill",this.size="md",this.message=""}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,l`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${Qc[this.size]}>${this.message}</wui-text>`}};ei.styles=[B,K,Xc];_n([d()],ei.prototype,"placement",void 0);_n([d()],ei.prototype,"variant",void 0);_n([d()],ei.prototype,"size",void 0);_n([d()],ei.prototype,"message",void 0);ei=_n([b("wui-tooltip")],ei);var hr;(function(e){e.approve="approved",e.bought="bought",e.borrow="borrowed",e.burn="burnt",e.cancel="canceled",e.claim="claimed",e.deploy="deployed",e.deposit="deposited",e.execute="executed",e.mint="minted",e.receive="received",e.repay="repaid",e.send="sent",e.sell="sold",e.stake="staked",e.trade="swapped",e.unstake="unstaked",e.withdraw="withdrawn"})(hr||(hr={}));const Jc=N`
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-no-images='true']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]} !important;
  }

  :host > wui-flex wui-image {
    display: block;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  .swap-fallback-container {
    position: absolute;
    inset: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .swap-fallback-container.first {
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-fallback-container.last {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }

  wui-flex.status-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    overflow: hidden;
    width: 16px;
    height: 16px;
  }
`;var jt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Je=class extends k{constructor(){super(...arguments),this.images=[],this.secondImage={type:void 0,url:""},this.failedImageUrls=new Set}handleImageError(t){return i=>{i.stopPropagation(),this.failedImageUrls.add(t),this.requestUpdate()}}render(){const[t,i]=this.images;this.images.length||(this.dataset.noImages="true");const o=(t==null?void 0:t.type)==="NFT",r=i!=null&&i.url?i.type==="NFT":o,n=o?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)",a=r?"var(--apkt-borderRadius-3)":"var(--apkt-borderRadius-5)";return this.style.cssText=`
    --local-left-border-radius: ${n};
    --local-right-border-radius: ${a};
    `,l`<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`}templateVisual(){const[t,i]=this.images;return this.images.length===2&&(t!=null&&t.url||i!=null&&i.url)?this.renderSwapImages(t,i):t!=null&&t.url&&!this.failedImageUrls.has(t.url)?this.renderSingleImage(t):(t==null?void 0:t.type)==="NFT"?this.renderPlaceholderIcon("nftPlaceholder"):this.renderPlaceholderIcon("coinPlaceholder")}renderSwapImages(t,i){return l`<div class="swap-images-container">
      ${t!=null&&t.url?this.renderImageOrFallback(t,"first",!0):null}
      ${i!=null&&i.url?this.renderImageOrFallback(i,"last",!0):null}
    </div>`}renderSingleImage(t){return this.renderImageOrFallback(t,void 0,!1)}renderImageOrFallback(t,i,o=!1){return t.url?this.failedImageUrls.has(t.url)?o&&i?this.renderFallbackIconInContainer(i):this.renderFallbackIcon():l`<wui-image
      src=${t.url}
      alt="Transaction image"
      @onLoadError=${this.handleImageError(t.url)}
    ></wui-image>`:null}renderFallbackIconInContainer(t){return l`<div class="swap-fallback-container ${t}">${this.renderFallbackIcon()}</div>`}renderFallbackIcon(){return l`<wui-icon
      size="xl"
      weight="regular"
      color="default"
      name="networkPlaceholder"
    ></wui-icon>`}renderPlaceholderIcon(t){return l`<wui-icon size="xl" weight="regular" color="default" name=${t}></wui-icon>`}templateIcon(){let t="accent-primary",i;return i=this.getIcon(),this.status&&(t=this.getStatusColor()),i?l`
      <wui-flex alignItems="center" justifyContent="center" class="status-box">
        <wui-icon-box size="sm" color=${t} icon=${i}></wui-icon-box>
      </wui-flex>
    `:null}getDirectionIcon(){switch(this.direction){case"in":return"arrowBottom";case"out":return"arrowTop";default:return}}getIcon(){return this.onlyDirectionIcon?this.getDirectionIcon():this.type==="trade"?"swapHorizontal":this.type==="approve"?"checkmark":this.type==="cancel"?"close":this.getDirectionIcon()}getStatusColor(){switch(this.status){case"confirmed":return"success";case"failed":return"error";case"pending":return"inverse";default:return"accent-primary"}}};Je.styles=[Jc];jt([d()],Je.prototype,"type",void 0);jt([d()],Je.prototype,"status",void 0);jt([d()],Je.prototype,"direction",void 0);jt([d({type:Boolean})],Je.prototype,"onlyDirectionIcon",void 0);jt([d({type:Array})],Je.prototype,"images",void 0);jt([d({type:Object})],Je.prototype,"secondImage",void 0);jt([m()],Je.prototype,"failedImageUrls",void 0);Je=jt([b("wui-transaction-visual")],Je);const e0=N`
  :host {
    width: 100%;
  }

  :host > wui-flex:first-child {
    align-items: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`;var Wt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let et=class extends k{constructor(){super(...arguments),this.type="approve",this.onlyDirectionIcon=!1,this.images=[]}render(){return l`
      <wui-flex>
        <wui-transaction-visual
          .status=${this.status}
          direction=${R(this.direction)}
          type=${this.type}
          .onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="1">
          <wui-text variant="lg-medium" color="primary">
            ${hr[this.type]||this.type}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="sm-medium" color="secondary"><span>${this.date}</span></wui-text>
      </wui-flex>
    `}templateDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[0];return t?l`
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}templateSecondDescription(){var i;const t=(i=this.descriptions)==null?void 0:i[1];return t?l`
          <wui-icon class="description-separator-icon" size="sm" name="arrowRight"></wui-icon>
          <wui-text variant="md-regular" color="secondary">
            <span>${t}</span>
          </wui-text>
        `:null}};et.styles=[B,e0];Wt([d()],et.prototype,"type",void 0);Wt([d({type:Array})],et.prototype,"descriptions",void 0);Wt([d()],et.prototype,"date",void 0);Wt([d({type:Boolean})],et.prototype,"onlyDirectionIcon",void 0);Wt([d()],et.prototype,"status",void 0);Wt([d()],et.prototype,"direction",void 0);Wt([d({type:Array})],et.prototype,"images",void 0);et=Wt([b("wui-transaction-list-item")],et);const t0=N`
  :host {
    display: block;
    background: linear-gradient(
      90deg,
      ${({tokens:e})=>e.theme.foregroundPrimary} 0%,
      ${({tokens:e})=>e.theme.foregroundSecondary} 50%,
      ${({tokens:e})=>e.theme.foregroundPrimary} 100%
    );
    background-size: 200% 100%;
    animation: shimmer 2s linear infinite;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  :host([data-rounded='true']) {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  @keyframes shimmer {
    0% {
      background-position: 100% 0;
    }
    100% {
      background-position: -100% 0;
    }
  }
`;var An=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ti=class extends k{constructor(){super(...arguments),this.width="",this.height="",this.variant="default",this.rounded=!1}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
    `,this.dataset.rounded=this.rounded?"true":"false",l`<slot></slot>`}};ti.styles=[t0];An([d()],ti.prototype,"width",void 0);An([d()],ti.prototype,"height",void 0);An([d()],ti.prototype,"variant",void 0);An([d({type:Boolean})],ti.prototype,"rounded",void 0);ti=An([b("wui-shimmer")],ti);const i0=N`
  wui-flex {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[128]};
  }

  .fallback-icon {
    color: ${({tokens:e})=>e.theme.iconInverse};
    border-radius: ${({borderRadius:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .direction-icon,
  .status-image {
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: ${({borderRadius:e})=>e[128]};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  .direction-icon {
    padding: ${({spacing:e})=>e["01"]};
    color: ${({tokens:e})=>e.core.iconSuccess};

    background-color: color-mix(
      in srgb,
      ${({tokens:e})=>e.core.textSuccess} 30%,
      ${({tokens:e})=>e.theme.backgroundPrimary} 70%
    );
  }

  /* -- Sizes --------------------------------------------------- */
  :host([data-size='sm']) > wui-image:not(.status-image),
  :host([data-size='sm']) > wui-flex {
    width: 24px;
    height: 24px;
  }

  :host([data-size='lg']) > wui-image:not(.status-image),
  :host([data-size='lg']) > wui-flex {
    width: 40px;
    height: 40px;
  }

  :host([data-size='sm']) .fallback-icon {
    height: 16px;
    width: 16px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='lg']) .fallback-icon {
    height: 32px;
    width: 32px;
    padding: ${({spacing:e})=>e[1]};
  }

  :host([data-size='sm']) .direction-icon,
  :host([data-size='sm']) .status-image {
    transform: translate(40%, 30%);
  }

  :host([data-size='lg']) .direction-icon,
  :host([data-size='lg']) .status-image {
    transform: translate(40%, 10%);
  }

  :host([data-size='sm']) .status-image {
    height: 14px;
    width: 14px;
  }

  :host([data-size='lg']) .status-image {
    height: 20px;
    width: 20px;
  }

  /* -- Crop effects --------------------------------------------------- */
  .swap-crop-left-image,
  .swap-crop-right-image {
    position: absolute;
    top: 0;
    bottom: 0;
  }

  .swap-crop-left-image {
    left: 0;
    clip-path: inset(0px calc(50% + 1.5px) 0px 0%);
  }

  .swap-crop-right-image {
    right: 0;
    clip-path: inset(0px 0px 0px calc(50% + 1.5px));
  }
`;var In=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Uo={sm:"xxs",lg:"md"};let ii=class extends k{constructor(){super(...arguments),this.type="approve",this.size="lg",this.statusImageUrl="",this.images=[]}render(){return l`<wui-flex>${this.templateVisual()} ${this.templateIcon()}</wui-flex>`}templateVisual(){switch(this.dataset.size=this.size,this.type){case"trade":return this.swapTemplate();case"fiat":return this.fiatTemplate();case"unknown":return this.unknownTemplate();default:return this.tokenTemplate()}}swapTemplate(){const[t,i]=this.images;return this.images.length===2&&(t||i)?l`
        <wui-image class="swap-crop-left-image" src=${t} alt="Swap image"></wui-image>
        <wui-image class="swap-crop-right-image" src=${i} alt="Swap image"></wui-image>
      `:t?l`<wui-image src=${t} alt="Swap image"></wui-image>`:null}fiatTemplate(){return l`<wui-icon
      class="fallback-icon"
      size=${Uo[this.size]}
      name="dollar"
    ></wui-icon>`}unknownTemplate(){return l`<wui-icon
      class="fallback-icon"
      size=${Uo[this.size]}
      name="questionMark"
    ></wui-icon>`}tokenTemplate(){const[t]=this.images;return t?l`<wui-image src=${t} alt="Token image"></wui-image> `:l`<wui-icon
      class="fallback-icon"
      name=${this.type==="nft"?"image":"coinPlaceholder"}
    ></wui-icon>`}templateIcon(){return this.statusImageUrl?l`<wui-image
        class="status-image"
        src=${this.statusImageUrl}
        alt="Status image"
      ></wui-image>`:l`<wui-icon
      class="direction-icon"
      size=${Uo[this.size]}
      name=${this.getTemplateIcon()}
    ></wui-icon>`}getTemplateIcon(){return this.type==="trade"?"arrowClockWise":"arrowBottom"}};ii.styles=[i0];In([d()],ii.prototype,"type",void 0);In([d()],ii.prototype,"size",void 0);In([d()],ii.prototype,"statusImageUrl",void 0);In([d({type:Array})],ii.prototype,"images",void 0);ii=In([b("wui-transaction-thumbnail")],ii);const n0=N`
  :host > wui-flex:first-child {
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var o0=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let pr=class extends k{render(){return l`
      <wui-flex alignItems="center" .padding=${["1","2","1","2"]}>
        <wui-shimmer width="40px" height="40px" rounded></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="124px" height="16px" rounded></wui-shimmer>
          <wui-shimmer width="60px" height="14px" rounded></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" rounded></wui-shimmer>
      </wui-flex>
    `}};pr.styles=[B,n0];pr=o0([b("wui-transaction-list-item-loader")],pr);const r0=N`
  :host {
    min-height: 100%;
  }

  .group-container[last-group='true'] {
    padding-bottom: ${({spacing:e})=>e[3]};
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }

  .emptyContainer {
    height: 100%;
  }
`;var pi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ga="last-transaction",a0=7;let pt=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.page="activity",this.caipAddress=g.state.activeCaipAddress,this.transactionsByYear=Ze.state.transactionsByYear,this.loading=Ze.state.loading,this.empty=Ze.state.empty,this.next=Ze.state.next,Ze.clearCursor(),this.unsubscribe.push(g.subscribeKey("activeCaipAddress",t=>{t&&this.caipAddress!==t&&(Ze.resetTransactions(),Ze.fetchTransactions(t)),this.caipAddress=t}),g.subscribeKey("activeCaipNetwork",()=>{this.updateTransactionView()}),Ze.subscribe(t=>{this.transactionsByYear=t.transactionsByYear,this.loading=t.loading,this.empty=t.empty,this.next=t.next}))}firstUpdated(){this.updateTransactionView(),this.createPaginationObserver()}updated(){this.setPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l` ${this.empty?null:this.templateTransactionsByYear()}
    ${this.loading?this.templateLoading():null}
    ${!this.loading&&this.empty?this.templateEmpty():null}`}updateTransactionView(){Ze.resetTransactions(),this.caipAddress&&Ze.fetchTransactions(P.getPlainAddress(this.caipAddress))}templateTransactionsByYear(){return Object.keys(this.transactionsByYear).sort().reverse().map(i=>{const o=parseInt(i,10),r=new Array(12).fill(null).map((n,a)=>{var u;const s=Un.getTransactionGroupTitle(o,a),c=(u=this.transactionsByYear[o])==null?void 0:u[a];return{groupTitle:s,transactions:c}}).filter(({transactions:n})=>n).reverse();return r.map(({groupTitle:n,transactions:a},s)=>{const c=s===r.length-1;return a?l`
          <wui-flex
            flexDirection="column"
            class="group-container"
            last-group="${c?"true":"false"}"
            data-testid="month-indexes"
          >
            <wui-flex
              alignItems="center"
              flexDirection="row"
              .padding=${["2","3","3","3"]}
            >
              <wui-text variant="md-medium" color="secondary" data-testid="group-title">
                ${n}
              </wui-text>
            </wui-flex>
            <wui-flex flexDirection="column" gap="2">
              ${this.templateTransactions(a,c)}
            </wui-flex>
          </wui-flex>
        `:null})})}templateRenderTransaction(t,i){const{date:o,descriptions:r,direction:n,images:a,status:s,type:c,transfers:u,isAllNFT:p}=this.getTransactionListItemProps(t);return l`
      <wui-transaction-list-item
        date=${o}
        .direction=${n}
        id=${i&&this.next?ga:""}
        status=${s}
        type=${c}
        .images=${a}
        .onlyDirectionIcon=${p||u.length===1}
        .descriptions=${r}
      ></wui-transaction-list-item>
    `}templateTransactions(t,i){return t.map((o,r)=>{const n=i&&r===t.length-1;return l`${this.templateRenderTransaction(o,n)}`})}emptyStateActivity(){return l`<wui-flex
      class="emptyContainer"
      flexGrow="1"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      .padding=${["10","5","10","5"]}
      gap="5"
      data-testid="empty-activity-state"
    >
      <wui-icon-box color="default" icon="wallet" size="xl"></wui-icon-box>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="lg-medium" color="primary">No Transactions yet</wui-text>
        <wui-text align="center" variant="lg-regular" color="secondary"
          >Start trading on dApps <br />
          to grow your wallet!</wui-text
        >
      </wui-flex>
    </wui-flex>`}emptyStateAccount(){return l`<wui-flex
      class="contentContainer"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="4"
      data-testid="empty-account-state"
    >
      <wui-icon-box icon="swapHorizontal" size="lg" color="default"></wui-icon-box>
      <wui-flex
        class="textContent"
        gap="2"
        flexDirection="column"
        justifyContent="center"
        flexDirection="column"
      >
        <wui-text variant="md-regular" align="center" color="primary">No activity yet</wui-text>
        <wui-text variant="sm-regular" align="center" color="secondary"
          >Your next transactions will appear here</wui-text
        >
      </wui-flex>
      <wui-link @click=${this.onReceiveClick.bind(this)}>Trade</wui-link>
    </wui-flex>`}templateEmpty(){return this.page==="account"?l`${this.emptyStateAccount()}`:l`${this.emptyStateActivity()}`}templateLoading(){return this.page==="activity"?l` <wui-flex flexDirection="column" width="100%">
        <wui-flex .padding=${["2","3","3","3"]}>
          <wui-shimmer width="70px" height="16px" rounded></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="2" width="100%">
          ${Array(a0).fill(l` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(t=>t)}
        </wui-flex>
      </wui-flex>`:null}onReceiveClick(){C.push("WalletReceive")}createPaginationObserver(){const{projectId:t}=T.state;this.paginationObserver=new IntersectionObserver(([i])=>{i!=null&&i.isIntersecting&&!this.loading&&(Ze.fetchTransactions(P.getPlainAddress(this.caipAddress)),V.sendEvent({type:"track",event:"LOAD_MORE_TRANSACTIONS",properties:{address:P.getPlainAddress(this.caipAddress),projectId:t,cursor:this.next,isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}))},{}),this.setPaginationObserver()}setPaginationObserver(){var i,o,r;(i=this.paginationObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(`#${ga}`);t&&((r=this.paginationObserver)==null||r.observe(t))}getTransactionListItemProps(t){var c,u,p;const i=fl.formatDate((c=t==null?void 0:t.metadata)==null?void 0:c.minedAt),o=Un.mergeTransfers((t==null?void 0:t.transfers)||[]),r=Un.getTransactionDescriptions(t,o),n=o==null?void 0:o[0],a=!!n&&(o==null?void 0:o.every(f=>!!f.nft_info)),s=Un.getTransactionImages(o);return{date:i,direction:n==null?void 0:n.direction,descriptions:r,isAllNFT:a,images:s,status:(u=t.metadata)==null?void 0:u.status,transfers:o,type:(p=t.metadata)==null?void 0:p.operationType}}};pt.styles=r0;pi([d()],pt.prototype,"page",void 0);pi([m()],pt.prototype,"caipAddress",void 0);pi([m()],pt.prototype,"transactionsByYear",void 0);pi([m()],pt.prototype,"loading",void 0);pi([m()],pt.prototype,"empty",void 0);pi([m()],pt.prototype,"next",void 0);pt=pi([b("w3m-activity-list")],pt);const s0=ae`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`;var l0=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fr=class extends k{render(){return l`<w3m-activity-list page="account"></w3m-activity-list>`}};fr.styles=s0;fr=l0([b("w3m-account-activity-widget")],fr);const c0=N`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`;var zi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let It=class extends k{constructor(){super(...arguments),this.icon="card",this.text="",this.description="",this.tag=void 0,this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?l`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?l`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};It.styles=[B,K,c0];zi([d()],It.prototype,"icon",void 0);zi([d()],It.prototype,"text",void 0);zi([d()],It.prototype,"description",void 0);zi([d()],It.prototype,"tag",void 0);zi([d({type:Boolean})],It.prototype,"disabled",void 0);It=zi([b("wui-list-description")],It);const d0=N`
  :host {
    width: 100%;
  }

  button {
    padding: ${({spacing:e})=>e[3]};
    display: flex;
    gap: ${({spacing:e})=>e[3]};
    justify-content: space-between;
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: transparent;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  button[data-clickable='false'] {
    pointer-events: none;
    background-color: transparent;
  }

  wui-image,
  wui-icon {
    width: ${({spacing:e})=>e[10]};
    height: ${({spacing:e})=>e[10]};
  }

  wui-image {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  .token-name-container {
    flex: 1;
  }
`;var fi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ft=class extends k{constructor(){super(...arguments),this.tokenName="",this.tokenImageUrl="",this.tokenValue=0,this.tokenAmount="0.0",this.tokenCurrency="",this.clickable=!1}render(){return l`
      <button data-clickable=${String(this.clickable)}>
        <wui-flex gap="2" alignItems="center">
          ${this.visualTemplate()}
          <wui-flex
            flexDirection="column"
            justifyContent="space-between"
            gap="1"
            class="token-name-container"
          >
            <wui-text variant="md-regular" color="primary" lineClamp="1">
              ${this.tokenName}
            </wui-text>
            <wui-text variant="sm-regular-mono" color="secondary">
              ${la.formatNumberToLocalString(this.tokenAmount,4)} ${this.tokenCurrency}
            </wui-text>
          </wui-flex>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          justifyContent="space-between"
          gap="1"
          alignItems="flex-end"
          width="auto"
        >
          <wui-text variant="md-regular-mono" color="primary"
            >$${this.tokenValue.toFixed(2)}</wui-text
          >
          <wui-text variant="sm-regular-mono" color="secondary">
            ${la.formatNumberToLocalString(this.tokenAmount,4)}
          </wui-text>
        </wui-flex>
      </button>
    `}visualTemplate(){return this.tokenName&&this.tokenImageUrl?l`<wui-image alt=${this.tokenName} src=${this.tokenImageUrl}></wui-image>`:l`<wui-icon name="coinPlaceholder" color="default"></wui-icon>`}};ft.styles=[B,K,d0];fi([d()],ft.prototype,"tokenName",void 0);fi([d()],ft.prototype,"tokenImageUrl",void 0);fi([d({type:Number})],ft.prototype,"tokenValue",void 0);fi([d()],ft.prototype,"tokenAmount",void 0);fi([d()],ft.prototype,"tokenCurrency",void 0);fi([d({type:Boolean})],ft.prototype,"clickable",void 0);ft=fi([b("wui-list-token")],ft);const u0=ae`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`;var Fr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nn=class extends k{constructor(){var t;super(),this.unsubscribe=[],this.tokenBalance=(t=g.getAccountData())==null?void 0:t.tokenBalance,this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(g.subscribeChainProp("accountState",i=>{this.tokenBalance=i==null?void 0:i.tokenBalance}),T.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`${this.tokenTemplate()}`}tokenTemplate(){var t;return this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>0?l`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:l` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.onramp?l`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:l``}tokenItemTemplate(){var t;return(t=this.tokenBalance)==null?void 0:t.map(i=>l`<wui-list-token
          tokenName=${i.name}
          tokenImageUrl=${i.iconUrl}
          tokenAmount=${i.quantity.numeric}
          tokenValue=${i.value}
          tokenCurrency=${i.symbol}
        ></wui-list-token>`)}onReceiveClick(){C.push("WalletReceive")}onBuyClick(){V.sendEvent({type:"track",event:"SELECT_BUY_CRYPTO",properties:{isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("OnRampProviders")}};nn.styles=u0;Fr([m()],nn.prototype,"tokenBalance",void 0);Fr([m()],nn.prototype,"remoteFeatures",void 0);nn=Fr([b("w3m-account-tokens-widget")],nn);const h0=ae`
  :host {
    width: 100%;
    display: block;
  }
`;var Hr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let on=class extends k{constructor(){super(),this.unsubscribe=[],this.text="",this.open=Be.state.open,this.unsubscribe.push(C.subscribeKey("view",()=>{Be.hide()}),ce.subscribeKey("open",t=>{t||Be.hide()}),Be.subscribeKey("open",t=>{this.open=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),Be.hide()}render(){return l`
      <div
        @pointermove=${this.onMouseEnter.bind(this)}
        @pointerleave=${this.onMouseLeave.bind(this)}
      >
        ${this.renderChildren()}
      </div>
    `}renderChildren(){return l`<slot></slot> `}onMouseEnter(){const t=this.getBoundingClientRect();if(!this.open){const i=document.querySelector("w3m-modal"),o={width:t.width,height:t.height,left:t.left,top:t.top};if(i){const r=i.getBoundingClientRect();o.left=t.left-(window.innerWidth-r.width)/2,o.top=t.top-(window.innerHeight-r.height)/2}Be.showTooltip({message:this.text,triggerRect:o,variant:"shade"})}}onMouseLeave(t){this.contains(t.relatedTarget)||Be.hide()}};on.styles=[h0];Hr([d()],on.prototype,"text",void 0);Hr([m()],on.prototype,"open",void 0);on=Hr([b("w3m-tooltip-trigger")],on);const p0=N`
  :host {
    pointer-events: none;
  }

  :host > wui-flex {
    display: var(--w3m-tooltip-display);
    opacity: var(--w3m-tooltip-opacity);
    padding: 9px ${({spacing:e})=>e[3]} 10px ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.backgroundPrimary};
    position: absolute;
    top: var(--w3m-tooltip-top);
    left: var(--w3m-tooltip-left);
    transform: translate(calc(-50% + var(--w3m-tooltip-parent-width)), calc(-100% - 8px));
    max-width: calc(var(--apkt-modal-width) - ${({spacing:e})=>e[5]});
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  :host([data-variant='shade']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  :host([data-variant='shade']) > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  :host([data-variant='fill']) > wui-flex {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
    color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var Rn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ni=class extends k{constructor(){super(),this.unsubscribe=[],this.open=Be.state.open,this.message=Be.state.message,this.triggerRect=Be.state.triggerRect,this.variant=Be.state.variant,this.unsubscribe.push(Be.subscribe(t=>{this.open=t.open,this.message=t.message,this.triggerRect=t.triggerRect,this.variant=t.variant}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){this.dataset.variant=this.variant;const t=this.triggerRect.top,i=this.triggerRect.left;return this.style.cssText=`
    --w3m-tooltip-top: ${t}px;
    --w3m-tooltip-left: ${i}px;
    --w3m-tooltip-parent-width: ${this.triggerRect.width/2}px;
    --w3m-tooltip-display: ${this.open?"flex":"none"};
    --w3m-tooltip-opacity: ${this.open?1:0};
    `,l`<wui-flex>
      <wui-icon data-placement="top" size="inherit" name="cursor"></wui-icon>
      <wui-text color="primary" variant="sm-regular">${this.message}</wui-text>
    </wui-flex>`}};ni.styles=[p0];Rn([m()],ni.prototype,"open",void 0);Rn([m()],ni.prototype,"message",void 0);Rn([m()],ni.prototype,"triggerRect",void 0);Rn([m()],ni.prototype,"variant",void 0);ni=Rn([b("w3m-tooltip")],ni);const f0=N`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`;var Ye=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Te=class extends k{constructor(){var t,i,o,r;super(...arguments),this.unsubscribe=[],this.network=g.state.activeCaipNetwork,this.profileName=(t=g.getAccountData())==null?void 0:t.profileName,this.address=(i=g.getAccountData())==null?void 0:i.address,this.currentTab=(o=g.getAccountData())==null?void 0:o.currentTab,this.tokenBalance=(r=g.getAccountData())==null?void 0:r.tokenBalance,this.features=T.state.features,this.namespace=g.state.activeChain,this.activeConnectorIds=O.state.activeConnectorIds,this.remoteFeatures=T.state.remoteFeatures}firstUpdated(){g.fetchTokenBalance(),this.unsubscribe.push(g.subscribeChainProp("accountState",t=>{t!=null&&t.address?(this.address=t.address,this.profileName=t.profileName,this.currentTab=t.currentTab,this.tokenBalance=t.tokenBalance):ce.close()}),O.subscribeKey("activeConnectorIds",t=>{this.activeConnectorIds=t}),g.subscribeKey("activeChain",t=>this.namespace=t),g.subscribeKey("activeCaipNetwork",t=>this.network=t),T.subscribeKey("features",t=>this.features=t),T.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw new Error("w3m-account-features-widget: No account provided");if(!this.namespace)return null;const t=this.activeConnectorIds[this.namespace],i=t?O.getConnectorById(t):void 0,{icon:o,iconSize:r}=this.getAuthData();return l`<wui-flex
      flexDirection="column"
      .padding=${["0","3","4","3"]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${o}
          iconSize=${r}
          alt=${i==null?void 0:i.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){var n;const t=((n=this.features)==null?void 0:n.walletFeaturesOrder)||ue.DEFAULT_FEATURES.walletFeaturesOrder;if(t.every(a=>{var s,c;return a==="send"||a==="receive"?!((s=this.features)!=null&&s[a]):a==="swaps"||a==="onramp"?!((c=this.remoteFeatures)!=null&&c[a]):!0}))return null;const o=t.map(a=>a==="receive"||a==="onramp"?"fund":a),r=[...new Set(o)];return l`<wui-flex gap="2">
      ${r.map(a=>{switch(a){case"fund":return this.fundWalletTemplate();case"swaps":return this.swapsTemplate();case"send":return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){var n,a;if(!this.namespace)return null;const t=ue.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),i=(n=this.features)==null?void 0:n.receive,o=((a=this.remoteFeatures)==null?void 0:a.onramp)&&t,r=je.isPayWithExchangeEnabled();return!o&&!i&&!r?null:l`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){var o;const t=(o=this.remoteFeatures)==null?void 0:o.swaps,i=g.state.activeChain===q.CHAIN.EVM;return!t||!i?null:l`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){var r;const t=(r=this.features)==null?void 0:r.send,i=g.state.activeChain,o=ue.SEND_SUPPORTED_NAMESPACES.includes(i);return!t||!o?null:l`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>g.fetchTokenBalance(t=>this.onTokenBalanceError(t)),1e4)}onTokenBalanceError(t){t instanceof Error&&t.cause instanceof Response&&t.cause.status===q.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?l`<w3m-account-activity-widget></w3m-account-activity-widget>`:l`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){var t;if(this.tokenBalance&&((t=this.tokenBalance)==null?void 0:t.length)>=0){const i=P.calculateBalance(this.tokenBalance),{dollars:o="0",pennies:r="00"}=P.formatTokenBalance(i);return l`<wui-balance dollars=${o} pennies=${r}></wui-balance>`}return l`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){const t=xi.getTabsByNamespace(g.state.activeChain);return t.length===0?null:l`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${t}
    ></wui-tabs>`}onTabChange(t){g.setAccountProp("currentTab",t,this.namespace)}onFundWalletClick(){C.push("FundWallet")}onSwapClick(){var t,i,o;(t=this.network)!=null&&t.caipNetworkId&&!ue.SWAP_SUPPORTED_NETWORKS.includes((i=this.network)==null?void 0:i.caipNetworkId)?C.push("UnsupportedChain",{swapUnsupportedChain:!0}):(V.sendEvent({type:"track",event:"OPEN_SWAP",properties:{network:((o=this.network)==null?void 0:o.caipNetworkId)||"",isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("Swap"))}getAuthData(){const t=dt.getConnectedSocialProvider(),i=dt.getConnectedSocialUsername(),o=O.getAuthConnector(),r=(o==null?void 0:o.provider.getEmail())??"";return{name:jr.getAuthName({email:r,socialUsername:i,socialProvider:t}),icon:t??"mail",iconSize:t?"xl":"md"}}onGoToProfileWalletsView(){C.push("ProfileWallets")}onSendClick(){var t;V.sendEvent({type:"track",event:"OPEN_SEND",properties:{network:((t=this.network)==null?void 0:t.caipNetworkId)||"",isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}}),C.push("WalletSend")}};Te.styles=f0;Ye([m()],Te.prototype,"watchTokenBalance",void 0);Ye([m()],Te.prototype,"network",void 0);Ye([m()],Te.prototype,"profileName",void 0);Ye([m()],Te.prototype,"address",void 0);Ye([m()],Te.prototype,"currentTab",void 0);Ye([m()],Te.prototype,"tokenBalance",void 0);Ye([m()],Te.prototype,"features",void 0);Ye([m()],Te.prototype,"namespace",void 0);Ye([m()],Te.prototype,"activeConnectorIds",void 0);Ye([m()],Te.prototype,"remoteFeatures",void 0);Te=Ye([b("w3m-account-wallet-features-widget")],Te);var Ja=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let to=class extends k{constructor(){super(),this.unsubscribe=[],this.namespace=g.state.activeChain,this.unsubscribe.push(g.subscribeKey("activeChain",t=>{this.namespace=t}))}render(){if(!this.namespace)return null;const t=O.getConnectorId(this.namespace),i=O.getAuthConnector();return l`
      ${i&&t===q.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return l`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return l`<w3m-account-default-widget></w3m-account-default-widget>`}};Ja([m()],to.prototype,"namespace",void 0);to=Ja([b("w3m-account-view")],to);const m0=N`
  :host {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-image='true']) {
    background-color: transparent;
  }

  :host > wui-flex {
    overflow: hidden;
    border-radius: inherit;
    border-radius: var(--local-border-radius);
  }

  :host([data-size='sm']) {
    width: 32px;
    height: 32px;
  }

  :host([data-size='md']) {
    width: 40px;
    height: 40px;
  }

  :host([data-size='lg']) {
    width: 56px;
    height: 56px;
  }

  :host([name='Extension'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid ${({colors:e})=>e.accent010};
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  wui-icon[data-parent-size='sm'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='md'] {
    width: 32px;
    height: 32px;
  }

  :host > wui-icon-box {
    position: absolute;
    overflow: hidden;
    right: -1px;
    bottom: -2px;
    z-index: 1;
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: 1px;
  }
`;var mi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mt=class extends k{constructor(){super(...arguments),this.size="md",this.name="",this.installed=!1,this.badgeSize="xs"}render(){let t="1";return this.size==="lg"?t="4":this.size==="md"?t="2":this.size==="sm"&&(t="1"),this.style.cssText=`
       --local-border-radius: var(--apkt-borderRadius-${t});
   `,this.dataset.size=this.size,this.imageSrc&&(this.dataset.image="true"),this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),l`
      <wui-flex justifyContent="center" alignItems="center"> ${this.templateVisual()} </wui-flex>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?l`<wui-icon size="md" color="default" name=${this.walletIcon}></wui-icon>`:l`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};mt.styles=[B,m0];mi([d()],mt.prototype,"size",void 0);mi([d()],mt.prototype,"name",void 0);mi([d()],mt.prototype,"imageSrc",void 0);mi([d()],mt.prototype,"walletIcon",void 0);mi([d({type:Boolean})],mt.prototype,"installed",void 0);mi([d()],mt.prototype,"badgeSize",void 0);mt=mi([b("wui-wallet-image")],mt);const g0=N`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var _e=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fe=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.content=[],this.alt="",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadge=void 0,this.iconBadgeSize="md",this.buttonVariant="neutral-primary",this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return l`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?l`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return l` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:l`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(t=>this.labelAndTagTemplate(t))}
      </wui-flex>
    `}labelAndTagTemplate({address:t,profileName:i,label:o,description:r,enableButton:n,buttonType:a,buttonLabel:s,buttonVariant:c,tagVariant:u,tagLabel:p,alignItems:f="flex-end"}){return l`
      <wui-flex justifyContent="space-between" alignItems=${f} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${o?l`<wui-text variant="sm-medium" color="secondary">${o}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${ee.getTruncateString({string:i||t,charsStart:i?16:this.charsStart,charsEnd:i?0:this.charsEnd,truncate:i?"end":"middle"})}
            </wui-text>

            ${u&&p?l`<wui-tag variant=${u} size="sm">${p}</wui-tag>`:null}
          </wui-flex>

          ${r?l`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${n?this.buttonTemplate({buttonType:a,buttonLabel:s,buttonVariant:c}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:t,buttonLabel:i,buttonVariant:o}){return l`
      <wui-button
        size="sm"
        variant=${o}
        @click=${t==="disconnect"?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${t==="disconnect"?"wui-active-profile-wallet-item-disconnect-button":"wui-active-profile-wallet-item-switch-button"}
      >
        ${i}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent("disconnect",{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("switch",{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent("externalLink",{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent("more",{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent("copy",{bubbles:!0,composed:!0}))}};fe.styles=[B,K,g0];_e([d()],fe.prototype,"address",void 0);_e([d()],fe.prototype,"profileName",void 0);_e([d({type:Array})],fe.prototype,"content",void 0);_e([d()],fe.prototype,"alt",void 0);_e([d()],fe.prototype,"imageSrc",void 0);_e([d()],fe.prototype,"icon",void 0);_e([d()],fe.prototype,"iconSize",void 0);_e([d()],fe.prototype,"iconBadge",void 0);_e([d()],fe.prototype,"iconBadgeSize",void 0);_e([d()],fe.prototype,"buttonVariant",void 0);_e([d({type:Boolean})],fe.prototype,"enableMoreButton",void 0);_e([d({type:Number})],fe.prototype,"charsStart",void 0);_e([d({type:Number})],fe.prototype,"charsEnd",void 0);fe=_e([b("wui-active-profile-wallet-item")],fe);const w0=N`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e["01"]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`;var we=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let se=class extends k{constructor(){super(...arguments),this.address="",this.profileName="",this.alt="",this.buttonLabel="",this.buttonVariant="accent-primary",this.imageSrc="",this.icon=void 0,this.iconSize="md",this.iconBadgeSize="md",this.rightIcon="signOut",this.rightIconSize="md",this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return l`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?l`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?l`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:l`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return l`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${ee.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?"end":"middle"})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return l`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${R(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent("buttonClick",{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent("iconClick",{bubbles:!0,composed:!0}))}};se.styles=[B,K,w0];we([d()],se.prototype,"address",void 0);we([d()],se.prototype,"profileName",void 0);we([d()],se.prototype,"alt",void 0);we([d()],se.prototype,"buttonLabel",void 0);we([d()],se.prototype,"buttonVariant",void 0);we([d()],se.prototype,"imageSrc",void 0);we([d()],se.prototype,"icon",void 0);we([d()],se.prototype,"iconSize",void 0);we([d()],se.prototype,"iconBadge",void 0);we([d()],se.prototype,"iconBadgeSize",void 0);we([d()],se.prototype,"rightIcon",void 0);we([d()],se.prototype,"rightIconSize",void 0);we([d({type:Boolean})],se.prototype,"loading",void 0);we([d({type:Number})],se.prototype,"charsStart",void 0);we([d({type:Number})],se.prototype,"charsEnd",void 0);se=we([b("wui-inactive-profile-wallet-item")],se);const b0=N`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: ${({tokens:e})=>e.theme.borderPrimary};
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 8px;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  :host([data-bg-color='primary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
  }

  :host([data-bg-color='secondary']) > wui-text {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var Zr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let rn=class extends k{constructor(){super(...arguments),this.text="",this.bgColor="primary"}render(){return this.dataset.bgColor=this.bgColor,l`${this.template()}`}template(){return this.text?l`<wui-text variant="md-regular" color="secondary">${this.text}</wui-text>`:null}};rn.styles=[B,b0];Zr([d()],rn.prototype,"text",void 0);Zr([d()],rn.prototype,"bgColor",void 0);rn=Zr([b("wui-separator")],rn);const Vo={getAuthData(e){var a,s;const t=e.connectorId===q.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};const i=((a=e==null?void 0:e.auth)==null?void 0:a.name)??dt.getConnectedSocialProvider(),o=((s=e==null?void 0:e.auth)==null?void 0:s.username)??dt.getConnectedSocialUsername(),r=O.getAuthConnector(),n=(r==null?void 0:r.provider.getEmail())??"";return{isAuth:!0,icon:i??"mail",iconSize:i?"xl":"md",name:t?jr.getAuthName({email:n,socialUsername:o,socialProvider:i}):void 0}}},y0=N`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`;var Ne=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Oe={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:"md",ICON:"lightbulb"},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Vt={eip155:"ethereum",solana:"solana",bip122:"bitcoin",ton:"ton",tron:"tron"},v0=[{namespace:"eip155",icon:Vt.eip155,label:"EVM"},{namespace:"solana",icon:Vt.solana,label:"Solana"},{namespace:"bip122",icon:Vt.bip122,label:"Bitcoin"},{namespace:"ton",icon:Vt.ton,label:"Ton"},{namespace:"tron",icon:Vt.tron,label:"Tron"}],x0={eip155:{title:"Add EVM Wallet",description:"Add your first EVM wallet"},solana:{title:"Add Solana Wallet",description:"Add your first Solana wallet"},bip122:{title:"Add Bitcoin Wallet",description:"Add your first Bitcoin wallet"},ton:{title:"Add TON Wallet",description:"Add your first TON wallet"},tron:{title:"Add TRON Wallet",description:"Add your first TRON wallet"}};let me=class extends k{constructor(){var t,i,o;super(),this.unsubscribers=[],this.currentTab=0,this.namespace=g.state.activeChain,this.namespaces=Array.from(g.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=O.state.activeConnectorIds,this.lastSelectedAddress="",this.lastSelectedConnectorId="",this.isSwitching=!1,this.caipNetwork=g.state.activeCaipNetwork,this.user=(t=g.getAccountData())==null?void 0:t.user,this.remoteFeatures=T.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=(i=g.getAccountData(this.namespace))==null?void 0:i.caipAddress,this.profileName=(o=g.getAccountData(this.namespace))==null?void 0:o.profileName,this.unsubscribers.push(M.subscribeKey("connections",()=>this.onConnectionsChange()),M.subscribeKey("recentConnections",()=>this.requestUpdate()),O.subscribeKey("activeConnectorIds",r=>{this.activeConnectorIds=r}),g.subscribeKey("activeCaipNetwork",r=>this.caipNetwork=r),g.subscribeChainProp("accountState",r=>{this.user=r==null?void 0:r.user}),T.subscribeKey("remoteFeatures",r=>this.remoteFeatures=r)),this.chainListener=g.subscribeChainProp("accountState",r=>{this.caipAddress=r==null?void 0:r.caipAddress,this.profileName=r==null?void 0:r.profileName},this.namespace)}disconnectedCallback(){var t,i;this.unsubscribers.forEach(o=>o()),(t=this.resizeObserver)==null||t.disconnect(),this.removeScrollListener(),(i=this.chainListener)==null||i.call(this)}firstUpdated(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".wallet-list");if(!t)return;const i=()=>this.updateScrollOpacity(t);requestAnimationFrame(i),t.addEventListener("scroll",i),this.resizeObserver=new ResizeObserver(i),this.resizeObserver.observe(t),i()}render(){const t=this.namespace;if(!t)throw new Error("Namespace is not set");return l`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(t)} ${this.renderConnections(t)}
        ${this.renderAddConnectionButton(t)}
      </wui-flex>
    `}renderTabs(){const t=this.namespaces.map(o=>v0.find(r=>r.namespace===o)).filter(Boolean);return t.length>1?l`
        <wui-tabs
          .onTabChange=${o=>this.handleTabChange(o)}
          .activeTab=${this.currentTab}
          .tabs=${t}
        ></wui-tabs>
      `:null}renderHeader(t){const o=this.getActiveConnections(t).flatMap(({accounts:r})=>r).length+(this.caipAddress?1:0);return l`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Vt[t]??Vt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${o>1?"Wallets":"Wallet"}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${o}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>M.disconnect({namespace:t})}
          ?disabled=${!this.hasAnyConnections(t)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(t){const i=this.hasAnyConnections(t);return l`
      <wui-flex flexDirection="column" class=${Mr({"wallet-list":!0,"active-wallets-box":i,"empty-wallet-list-box":!i})} rowgap="3">
        ${i?this.renderActiveConnections(t):this.renderEmptyState(t)}
      </wui-flex>
    `}renderActiveConnections(t){const i=this.getActiveConnections(t),o=this.activeConnectorIds[t],r=this.getPlainAddress();return l`
      ${r||o||i.length>0?l`<wui-flex
            flexDirection="column"
            .padding=${["4","0","4","0"]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(t)} ${this.renderActiveConnectionsList(t)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(t)}
    `}renderActiveProfile(t){const i=this.activeConnectorIds[t];if(!i)return null;const{connections:o}=ct.getConnectionsData(t),r=O.getConnectorById(i),n=Q.getConnectorImage(r),a=this.getPlainAddress();if(!a)return null;const s=t===q.CHAIN.BITCOIN,c=Vo.getAuthData({connectorId:i,accounts:[]}),u=this.getActiveConnections(t).flatMap(w=>w.accounts).length>0,p=o.find(w=>w.connectorId===i),f=p==null?void 0:p.accounts.filter(w=>!We.isLowerCaseMatch(w.address,a));return l`
      <wui-flex flexDirection="column" .padding=${["0","4","0","4"]}>
        <wui-active-profile-wallet-item
          address=${a}
          alt=${r==null?void 0:r.name}
          .content=${this.getProfileContent({address:a,connections:o,connectorId:i,namespace:t})}
          .charsStart=${Oe.ADDRESS_DISPLAY.START}
          .charsEnd=${Oe.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(a)?Oe.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(a)?Oe.BADGE.SIZE:void 0}
          imageSrc=${n}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(a)}
          @disconnect=${()=>this.handleDisconnect(t,i)}
          @switch=${()=>{s&&p&&(f!=null&&f[0])&&this.handleSwitchWallet(p,f[0].address,t)}}
          @externalLink=${()=>this.handleExternalLink(a)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${u?l`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(t){const i=this.getActiveConnections(t);return i.length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
        ${this.renderConnectionList(i,!1,t)}
      </wui-flex>
    `}renderRecentConnections(t){const{recentConnections:i}=ct.getConnectionsData(t);return i.flatMap(r=>r.accounts).length===0?null:l`
      <wui-flex flexDirection="column" .padding=${["0","2","0","2"]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${["0","2","0","2"]}>
          ${this.renderConnectionList(i,!0,t)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(t,i,o){return t.filter(r=>r.accounts.length>0).map((r,n)=>{const a=O.getConnectorById(r.connectorId),s=Q.getConnectorImage(a)??"",c=Vo.getAuthData(r);return r.accounts.map((u,p)=>{const f=n!==0||p!==0,w=this.isAccountLoading(r.connectorId,u.address);return l`
            <wui-flex flexDirection="column">
              ${f?l`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${u.address}
                alt=${r.connectorId}
                buttonLabel=${i?"Connect":"Switch"}
                buttonVariant=${i?"neutral-secondary":"accent-secondary"}
                rightIcon=${i?"bin":"power"}
                rightIconSize="sm"
                class=${i?"recent-connection":"active-connection"}
                data-testid=${i?"recent-connection":"active-connection"}
                imageSrc=${s}
                .iconBadge=${this.isSmartAccount(u.address)?Oe.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(u.address)?Oe.BADGE.SIZE:void 0}
                .icon=${c.icon}
                .iconSize=${c.iconSize}
                .loading=${w}
                .showBalance=${!1}
                .charsStart=${Oe.ADDRESS_DISPLAY.START}
                .charsEnd=${Oe.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(r,u.address,o)}
                @iconClick=${()=>this.handleWalletAction({connection:r,address:u.address,isRecentConnection:i,namespace:o})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(t){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(t))return null;const{title:i}=this.getChainLabelInfo(t);return l`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(t)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${i}</wui-text>
      </wui-list-item>
    `}renderEmptyState(t){const{title:i,description:o}=this.getChainLabelInfo(t);return l`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${o}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(t)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${i}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(t){var o,r,n;const i=this.namespaces[t];i&&((o=this.chainListener)==null||o.call(this),this.currentTab=this.namespaces.indexOf(i),this.namespace=i,this.caipAddress=(r=g.getAccountData(i))==null?void 0:r.caipAddress,this.profileName=(n=g.getAccountData(i))==null?void 0:n.profileName,this.chainListener=g.subscribeChainProp("accountState",a=>{this.caipAddress=a==null?void 0:a.caipAddress},i))}async handleSwitchWallet(t,i,o){var r;try{this.isSwitching=!0,this.lastSelectedConnectorId=t.connectorId,this.lastSelectedAddress=i,((r=this.caipNetwork)==null?void 0:r.chainNamespace)!==o&&(t!=null&&t.caipNetwork)&&(O.setFilterByNamespace(o),await g.switchActiveNetwork(t==null?void 0:t.caipNetwork)),await M.switchConnection({connection:t,address:i,namespace:o,closeModalOnConnect:!1,onChange({hasSwitchedAccount:a,hasSwitchedWallet:s}){s?Y.showSuccess("Wallet switched"):a&&Y.showSuccess("Account switched")}})}catch{Y.showError("Failed to switch wallet")}finally{this.isSwitching=!1}}handleWalletAction(t){const{connection:i,address:o,isRecentConnection:r,namespace:n}=t;r?(dt.deleteAddressFromConnection({connectorId:i.connectorId,address:o,namespace:n}),M.syncStorageConnections(),Y.showSuccess("Wallet deleted")):this.handleDisconnect(n,i.connectorId)}async handleDisconnect(t,i){try{await M.disconnect({id:i,namespace:t}),Y.showSuccess("Wallet disconnected")}catch{Y.showError("Failed to disconnect wallet")}}handleCopyAddress(t){P.copyToClopboard(t),Y.showSuccess("Address copied")}handleMore(){C.push("AccountSettings")}handleExternalLink(t){var o,r;const i=(r=(o=this.caipNetwork)==null?void 0:o.blockExplorers)==null?void 0:r.default.url;i&&P.openHref(`${i}/address/${t}`,"_blank")}handleAddConnection(t){O.setFilterByNamespace(t),C.push("Connect",{addWalletForNamespace:t})}getChainLabelInfo(t){return x0[t]??{title:"Add Wallet",description:"Add your first wallet"}}isSmartAccount(t){var o,r;if(!this.namespace)return!1;const i=(r=(o=this.user)==null?void 0:o.accounts)==null?void 0:r.find(n=>n.type==="smartAccount");return i&&t?We.isLowerCaseMatch(i.address,t):!1}getPlainAddress(){return this.caipAddress?P.getPlainAddress(this.caipAddress):void 0}getActiveConnections(t){const i=this.activeConnectorIds[t],{connections:o}=ct.getConnectionsData(t),[r]=o.filter(c=>We.isLowerCaseMatch(c.connectorId,i));if(!i)return o;const n=t===q.CHAIN.BITCOIN,{address:a}=this.caipAddress?ml.parseCaipAddress(this.caipAddress):{};let s=[...a?[a]:[]];return n&&r&&(s=r.accounts.map(c=>c.address)||[]),ct.excludeConnectorAddressFromConnections({connectorId:i,addresses:s,connections:o})}hasAnyConnections(t){const i=this.getActiveConnections(t),{recentConnections:o}=ct.getConnectionsData(t);return!!this.caipAddress||i.length>0||o.length>0}isAccountLoading(t,i){return We.isLowerCaseMatch(this.lastSelectedConnectorId,t)&&We.isLowerCaseMatch(this.lastSelectedAddress,i)&&this.isSwitching}getProfileContent(t){const{address:i,connections:o,connectorId:r,namespace:n}=t,[a]=o.filter(c=>We.isLowerCaseMatch(c.connectorId,r));if(n===q.CHAIN.BITCOIN&&(a!=null&&a.accounts.every(c=>typeof c.type=="string")))return this.getBitcoinProfileContent(a.accounts,i);const s=Vo.getAuthData({connectorId:r,accounts:[]});return[{address:i,tagLabel:"Active",tagVariant:"success",enableButton:!0,profileName:this.profileName,buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary",...s.isAuth?{description:this.isSmartAccount(i)?"Smart Account":"EOA Account"}:{}}]}getBitcoinProfileContent(t,i){const o=t.length>1,r=this.getPlainAddress();return t.map(n=>{const a=We.isLowerCaseMatch(n.address,r);let s="PAYMENT";return n.type==="ordinal"&&(s="ORDINALS"),{address:n.address,tagLabel:We.isLowerCaseMatch(n.address,i)?"Active":void 0,tagVariant:We.isLowerCaseMatch(n.address,i)?"success":void 0,enableButton:!0,...o?{label:s,alignItems:"flex-end",buttonType:a?"disconnect":"switch",buttonLabel:a?"Disconnect":"Switch",buttonVariant:a?"neutral-secondary":"accent-secondary"}:{alignItems:"center",buttonType:"disconnect",buttonLabel:"Disconnect",buttonVariant:"neutral-secondary"}}})}removeScrollListener(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");t&&t.removeEventListener("scroll",()=>this.handleConnectListScroll())}handleConnectListScroll(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".wallet-list");t&&this.updateScrollOpacity(t)}isMultiWalletEnabled(){var t;return!!((t=this.remoteFeatures)!=null&&t.multiWallet)}updateScrollOpacity(t){t.style.setProperty("--connect-scroll--top-opacity",Gn.interpolate([0,Oe.SCROLL_THRESHOLD],Oe.OPACITY_RANGE,t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",Gn.interpolate([0,Oe.SCROLL_THRESHOLD],Oe.OPACITY_RANGE,t.scrollHeight-t.scrollTop-t.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){const{connections:t}=ct.getConnectionsData(this.namespace);t.length===0&&C.reset("ProfileWallets")}this.requestUpdate()}};me.styles=y0;Ne([m()],me.prototype,"currentTab",void 0);Ne([m()],me.prototype,"namespace",void 0);Ne([m()],me.prototype,"namespaces",void 0);Ne([m()],me.prototype,"caipAddress",void 0);Ne([m()],me.prototype,"profileName",void 0);Ne([m()],me.prototype,"activeConnectorIds",void 0);Ne([m()],me.prototype,"lastSelectedAddress",void 0);Ne([m()],me.prototype,"lastSelectedConnectorId",void 0);Ne([m()],me.prototype,"isSwitching",void 0);Ne([m()],me.prototype,"caipNetwork",void 0);Ne([m()],me.prototype,"user",void 0);Ne([m()],me.prototype,"remoteFeatures",void 0);me=Ne([b("w3m-profile-wallets-view")],me);var Ui=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Rt=class extends k{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=g.state.activeCaipNetwork,this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.exchangesLoading=je.state.isLoading,this.exchanges=je.state.exchanges,this.unsubscribe.push(T.subscribeKey("features",t=>this.features=t),T.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),g.subscribeKey("activeCaipNetwork",t=>{this.activeCaipNetwork=t,this.setDefaultPaymentAsset()}),je.subscribeKey("isLoading",t=>this.exchangesLoading=t),je.subscribeKey("exchanges",t=>this.exchanges=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}async firstUpdated(){je.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await je.fetchExchanges())}render(){return l`
      <wui-flex flexDirection="column" .padding=${["1","3","3","3"]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;const t=await je.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),i=t.find(o=>o.metadata.symbol==="USDC")||t[0];i&&je.setPaymentAsset(i)}onrampTemplate(){var o;if(!this.activeCaipNetwork)return null;const t=(o=this.remoteFeatures)==null?void 0:o.onramp,i=ue.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!t||!i?null:l`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!je.isPayWithExchangeSupported()?null:l`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){var i;return!((i=this.features)!=null&&i.receive)?null:l`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `}onBuyCrypto(){C.push("OnRampProviders")}onReceive(){C.push("WalletReceive")}onDepositFromExchange(){var t;je.reset(),C.push("PayWithExchange",{redirectView:(t=C.state.data)==null?void 0:t.redirectView})}};Ui([m()],Rt.prototype,"activeCaipNetwork",void 0);Ui([m()],Rt.prototype,"features",void 0);Ui([m()],Rt.prototype,"remoteFeatures",void 0);Ui([m()],Rt.prototype,"exchangesLoading",void 0);Ui([m()],Rt.prototype,"exchanges",void 0);Rt=Ui([b("w3m-fund-wallet-view")],Rt);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Pp=e=>e===null||typeof e!="object"&&typeof e!="function",C0=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Yi=(e,t)=>{var o;const i=e._$AN;if(i===void 0)return!1;for(const r of i)(o=r._$AO)==null||o.call(r,t,!1),Yi(r,t);return!0},io=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while((i==null?void 0:i.size)===0)},es=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),S0(t)}};function $0(e){this._$AN!==void 0?(io(this),this._$AM=e,es(this)):this._$AM=e}function k0(e,t=!1,i=0){const o=this._$AH,r=this._$AN;if(r!==void 0&&r.size!==0)if(t)if(Array.isArray(o))for(let n=i;n<o.length;n++)Yi(o[n],!1),io(o[n]);else o!=null&&(Yi(o,!1),io(o));else Yi(this,e)}const S0=e=>{e.type==Ka.CHILD&&(e._$AP??(e._$AP=k0),e._$AQ??(e._$AQ=$0))};class E0 extends Ya{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,o){super._$AT(t,i,o),es(this),this.isConnected=t._$AU}_$AO(t,i=!0){var o,r;t!==this.isConnected&&(this.isConnected=t,t?(o=this.reconnected)==null||o.call(this):(r=this.disconnected)==null||r.call(this)),i&&(Yi(this,t),io(this))}setValue(t){if(C0(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tn=()=>new _0;class _0{}const Fo=new WeakMap,Nn=Ga(class extends E0{render(e){return ir}update(e,[t]){var o;const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=(o=e.options)==null?void 0:o.host,this.rt(this.ct=e.element)),ir}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Fo.get(t);i===void 0&&(i=new WeakMap,Fo.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){var e,t;return typeof this.G=="function"?(e=Fo.get(this.ht??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),A0=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`;var Ao=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ei=class extends k{constructor(){super(...arguments),this.inputElementRef=Tn(),this.checked=!1,this.disabled=!1,this.size="md"}render(){return l`
      <label data-size=${this.size}>
        <input
          ${Nn(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("switchChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};Ei.styles=[B,K,A0];Ao([d({type:Boolean})],Ei.prototype,"checked",void 0);Ao([d({type:Boolean})],Ei.prototype,"disabled",void 0);Ao([d()],Ei.prototype,"size",void 0);Ei=Ao([b("wui-toggle")],Ei);const I0=N`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`;var ts=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let no=class extends k{constructor(){super(...arguments),this.checked=!1}render(){return l`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(t){t.stopPropagation(),this.checked=t.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent("certifiedSwitchChange",{detail:this.checked,bubbles:!0,composed:!0}))}};no.styles=[B,K,I0];ts([d({type:Boolean})],no.prototype,"checked",void 0);no=ts([b("wui-certified-switch")],no);const R0=N`
  :host {
    position: relative;
    width: 100%;
    display: inline-flex;
    flex-direction: column;
    gap: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.textPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  .wui-input-text-container {
    position: relative;
    display: flex;
  }

  input {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: inherit;
    background: transparent;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[3]} ${({spacing:e})=>e[10]};
    font-size: ${({textSize:e})=>e.large};
    line-height: ${({typography:e})=>e["lg-regular"].lineHeight};
    letter-spacing: ${({typography:e})=>e["lg-regular"].letterSpacing};
    font-weight: ${({fontWeight:e})=>e.regular};
    font-family: ${({fontFamily:e})=>e.regular};
  }

  input[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[4]} ${({spacing:e})=>e[10]};
  }

  @media (hover: hover) and (pointer: fine) {
    input:hover:enabled {
      border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    }
  }

  input:disabled {
    cursor: unset;
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  input::placeholder {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  input:focus:enabled {
    border: 1px solid ${({tokens:e})=>e.theme.borderSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    -webkit-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    -moz-box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
    box-shadow: 0px 0px 0px 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  div.wui-input-text-container:has(input:disabled) {
    opacity: 0.5;
  }

  wui-icon.wui-input-text-left-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    left: ${({spacing:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  button.wui-input-text-submit-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    border-radius: ${({borderRadius:e})=>e[2]};
    color: ${({tokens:e})=>e.core.textAccentPrimary};
  }

  button.wui-input-text-submit-button:disabled {
    opacity: 1;
  }

  button.wui-input-text-submit-button.loading wui-icon {
    animation: spin 1s linear infinite;
  }

  button.wui-input-text-submit-button:hover {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  input:has(+ .wui-input-text-submit-button) {
    padding-right: ${({spacing:e})=>e[12]};
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  /* -- Keyframes --------------------------------------------------- */
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var Ve=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let $e=class extends k{constructor(){super(...arguments),this.inputElementRef=Tn(),this.disabled=!1,this.loading=!1,this.placeholder="",this.type="text",this.value="",this.size="md"}render(){return l` <div class="wui-input-text-container">
        ${this.templateLeftIcon()}
        <input
          data-size=${this.size}
          ${Nn(this.inputElementRef)}
          data-testid="wui-input-text"
          type=${this.type}
          enterkeyhint=${R(this.enterKeyHint)}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.dispatchInputChangeEvent.bind(this)}
          @keydown=${this.onKeyDown}
          .value=${this.value||""}
        />
        ${this.templateSubmitButton()}
        <slot class="wui-input-text-slot"></slot>
      </div>
      ${this.templateError()} ${this.templateWarning()}`}templateLeftIcon(){return this.icon?l`<wui-icon
        class="wui-input-text-left-icon"
        size="md"
        data-size=${this.size}
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}templateSubmitButton(){var t;return this.onSubmit?l`<button
        class="wui-input-text-submit-button ${this.loading?"loading":""}"
        @click=${(t=this.onSubmit)==null?void 0:t.bind(this)}
        ?disabled=${this.disabled||this.loading}
      >
        ${this.loading?l`<wui-icon name="spinner" size="md"></wui-icon>`:l`<wui-icon name="chevronRight" size="md"></wui-icon>`}
      </button>`:null}templateError(){return this.errorText?l`<wui-text variant="sm-regular" color="error">${this.errorText}</wui-text>`:null}templateWarning(){return this.warningText?l`<wui-text variant="sm-regular" color="warning">${this.warningText}</wui-text>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};$e.styles=[B,K,R0];Ve([d()],$e.prototype,"icon",void 0);Ve([d({type:Boolean})],$e.prototype,"disabled",void 0);Ve([d({type:Boolean})],$e.prototype,"loading",void 0);Ve([d()],$e.prototype,"placeholder",void 0);Ve([d()],$e.prototype,"type",void 0);Ve([d()],$e.prototype,"value",void 0);Ve([d()],$e.prototype,"errorText",void 0);Ve([d()],$e.prototype,"warningText",void 0);Ve([d()],$e.prototype,"onSubmit",void 0);Ve([d()],$e.prototype,"size",void 0);Ve([d({attribute:!1})],$e.prototype,"onKeyDown",void 0);$e=Ve([b("wui-input-text")],$e);const T0=N`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`;var is=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let oo=class extends k{constructor(){super(...arguments),this.inputComponentRef=Tn(),this.inputValue=""}render(){return l`
      <wui-input-text
        ${Nn(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?l`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(t){this.inputValue=t.detail||""}clearValue(){const t=this.inputComponentRef.value,i=t==null?void 0:t.inputElementRef.value;i&&(i.value="",this.inputValue="",i.focus(),i.dispatchEvent(new Event("input")))}};oo.styles=[B,T0];is([d()],oo.prototype,"inputValue",void 0);oo=is([b("wui-search-bar")],oo);const ns=j`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,N0=N`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`;var os=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ro=class extends k{constructor(){super(...arguments),this.type="wallet"}render(){return l`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?l` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${ns}`:l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ro.styles=[B,K,N0];os([d()],ro.prototype,"type",void 0);ro=os([b("wui-card-select-loader")],ro);const P0=ae`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var Fe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ke=class extends k{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&ee.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&ee.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&ee.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&ee.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&ee.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&ee.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&ee.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&ee.getSpacingStyles(this.margin,3)};
    `,l`<slot></slot>`}};ke.styles=[B,P0];Fe([d()],ke.prototype,"gridTemplateRows",void 0);Fe([d()],ke.prototype,"gridTemplateColumns",void 0);Fe([d()],ke.prototype,"justifyItems",void 0);Fe([d()],ke.prototype,"alignItems",void 0);Fe([d()],ke.prototype,"justifyContent",void 0);Fe([d()],ke.prototype,"alignContent",void 0);Fe([d()],ke.prototype,"columnGap",void 0);Fe([d()],ke.prototype,"rowGap",void 0);Fe([d()],ke.prototype,"gap",void 0);Fe([d()],ke.prototype,"padding",void 0);Fe([d()],ke.prototype,"margin",void 0);ke=Fe([b("wui-grid")],ke);const L0=N`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`;var at=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Me=class extends k{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId="",this.walletQuery="",this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var i,o;const t=((i=this.wallet)==null?void 0:i.badge_type)==="certified";return l`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${R(t?"certified":void 0)}
            >${(o=this.wallet)==null?void 0:o.name}</wui-text
          >
          ${t?l`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){var t,i;return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():l`
      <wui-wallet-image
        size="lg"
        imageSrc=${R(this.imageSrc)}
        name=${R((t=this.wallet)==null?void 0:t.name)}
        .installed=${((i=this.wallet)==null?void 0:i.installed)??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return l`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=Q.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await Q.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,V.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:C.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};Me.styles=L0;at([m()],Me.prototype,"visible",void 0);at([m()],Me.prototype,"imageSrc",void 0);at([m()],Me.prototype,"imageLoading",void 0);at([m()],Me.prototype,"isImpressed",void 0);at([d()],Me.prototype,"explorerId",void 0);at([d()],Me.prototype,"walletQuery",void 0);at([d()],Me.prototype,"certified",void 0);at([d()],Me.prototype,"displayIndex",void 0);at([d({type:Object})],Me.prototype,"wallet",void 0);Me=at([b("w3m-all-wallets-list-item")],Me);const O0=N`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-inout-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Pn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const wa="local-paginator";let oi=class extends k{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!J.state.wallets.length,this.wallets=J.state.wallets,this.mobileFullScreen=T.state.enableMobileFullScreen,this.unsubscribe.push(J.subscribeKey("wallets",t=>this.wallets=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(i=>i()),(t=this.paginationObserver)==null||t.disconnect()}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),l`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${["0","3","3","3"]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var i;this.loading=!0;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-grid");t&&(await J.fetchWalletsByPage({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.loading=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,i){return[...Array(t)].map(()=>l`
        <wui-card-select-loader type="wallet" id=${R(i)}></wui-card-select-loader>
      `)}walletsTemplate(){return Ji.getWalletConnectWallets(this.wallets).map((t,i)=>l`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${t.id}"
          @click=${()=>this.onConnectWallet(t)}
          .wallet=${t}
          explorerId=${t.id}
          certified=${this.badge==="certified"}
          displayIndex=${i}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:i,featured:o,count:r,mobileFilteredOutWalletsLength:n}=J.state,a=window.innerWidth<352?3:4,s=t.length+i.length;let u=Math.ceil(s/a)*a-s+a;return u-=t.length?o.length%a:0,r===0&&o.length>0?null:r===0||[...o,...t,...i].length<r-(n??0)?this.shimmerTemplate(u,wa):null}createPaginationObserver(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(`#${wa}`);t&&(this.paginationObserver=new IntersectionObserver(([o])=>{if(o!=null&&o.isIntersecting&&!this.loading){const{page:r,count:n,wallets:a}=J.state;a.length<n&&J.fetchWalletsByPage({page:r+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){O.selectWalletConnector(t)}};oi.styles=O0;Pn([m()],oi.prototype,"loading",void 0);Pn([m()],oi.prototype,"wallets",void 0);Pn([m()],oi.prototype,"badge",void 0);Pn([m()],oi.prototype,"mobileFullScreen",void 0);oi=Pn([b("w3m-all-wallets-list")],oi);const j0=ae`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;var Ln=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ri=class extends k{constructor(){super(...arguments),this.prevQuery="",this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=T.state.enableMobileFullScreen,this.query=""}render(){return this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.onSearch(),this.loading?l`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await J.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){const{search:t}=J.state,i=Ji.markWalletsAsInstalled(t),o=Ji.filterWalletsByWcSupport(i);return o.length?l`
      <wui-grid
        data-testid="wallet-list"
        .padding=${["0","3","3","3"]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${o.map((r,n)=>l`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(r)}
              .wallet=${r}
              data-testid="wallet-search-item-${r.id}"
              explorerId=${r.id}
              certified=${this.badge==="certified"}
              walletQuery=${this.query}
              displayIndex=${n}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:l`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(t){O.selectWalletConnector(t)}};ri.styles=j0;Ln([m()],ri.prototype,"loading",void 0);Ln([m()],ri.prototype,"mobileFullScreen",void 0);Ln([d()],ri.prototype,"query",void 0);Ln([d()],ri.prototype,"badge",void 0);ri=Ln([b("w3m-all-wallets-search")],ri);var qr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let an=class extends k{constructor(){super(...arguments),this.search="",this.badge=void 0,this.onDebouncedSearch=P.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return l`
      <wui-flex .padding=${["1","3","3","3"]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge==="certified"}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t||this.badge?l`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:l`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}onCertifiedSwitchChange(t){t.detail?(this.badge="certified",Y.showSvg("Only WalletConnect certified",{icon:"walletConnectBrown",iconColor:"accent-100"})):this.badge=void 0}qrButtonTemplate(){return P.isMobile()?l`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){C.push("ConnectingWalletConnect")}};qr([m()],an.prototype,"search",void 0);qr([m()],an.prototype,"badge",void 0);an=qr([b("w3m-all-wallets-view")],an);const W0=N`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`;var Vi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Tt=class extends k{constructor(){super(...arguments),this.text="",this.disabled=!1,this.size="lg",this.icon="copy",this.tabIdx=void 0}render(){this.dataset.size=this.size;const t=`${this.size}-regular`;return l`
      <button ?disabled=${this.disabled} tabindex=${R(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${t} color="primary">${this.text}</wui-text>
      </button>
    `}};Tt.styles=[B,K,W0];Vi([d()],Tt.prototype,"text",void 0);Vi([d({type:Boolean})],Tt.prototype,"disabled",void 0);Vi([d()],Tt.prototype,"size",void 0);Vi([d()],Tt.prototype,"icon",void 0);Vi([d()],Tt.prototype,"tabIdx",void 0);Tt=Vi([b("wui-list-button")],Tt);const B0=ae`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var On=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ai=class extends k{constructor(){super(...arguments),this.disabled=!1}render(){return l`
      <wui-input-text
        type="email"
        placeholder="Email"
        icon="mail"
        size="lg"
        .disabled=${this.disabled}
        .value=${this.value}
        data-testid="wui-email-input"
        tabIdx=${R(this.tabIdx)}
      ></wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?l`<wui-text variant="sm-regular" color="error">${this.errorMessage}</wui-text>`:null}};ai.styles=[B,B0];On([d()],ai.prototype,"errorMessage",void 0);On([d({type:Boolean})],ai.prototype,"disabled",void 0);On([d()],ai.prototype,"value",void 0);On([d()],ai.prototype,"tabIdx",void 0);ai=On([b("wui-email-input")],ai);const D0=N`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`;var gi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let gt=class extends k{constructor(){super(),this.unsubscribe=[],this.formRef=Tn(),this.email="",this.loading=!1,this.error="",this.remoteFeatures=T.state.remoteFeatures,this.hasExceededUsageLimit=J.state.plan.hasExceededUsageLimit,this.unsubscribe.push(T.subscribeKey("remoteFeatures",t=>{this.remoteFeatures=t}),J.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){var t;(t=this.formRef.value)==null||t.addEventListener("keydown",i=>{i.key==="Enter"&&this.onSubmitEmail(i)})}render(){const t=M.hasAnyConnection(q.CONNECTOR_ID.AUTH);return l`
      <form ${Nn(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${R(this.tabIdx)}
          ?disabled=${t||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?l`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?l`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?l`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(t){this.email=t.detail.trim(),this.error=""}async onSubmitEmail(t){var o;if(!xi.isValidEmail(this.email)){Ua.open({displayMessage:gl.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},"warning");return}if(!q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(r=>r===g.state.activeChain)){const r=g.getFirstCaipNetworkSupportsAuthConnector();if(r){C.push("SwitchNetwork",{network:r});return}}try{if(this.loading)return;this.loading=!0,t.preventDefault();const r=O.getAuthConnector();if(!r)throw new Error("w3m-email-login-widget: Auth connector not found");const{action:n}=await r.provider.connectEmail({email:this.email});if(V.sendEvent({type:"track",event:"EMAIL_SUBMITTED"}),n==="VERIFY_OTP")V.sendEvent({type:"track",event:"EMAIL_VERIFICATION_CODE_SENT"}),C.push("EmailVerifyOtp",{email:this.email});else if(n==="VERIFY_DEVICE")C.push("EmailVerifyDevice",{email:this.email});else if(n==="CONNECT"){const a=(o=this.remoteFeatures)==null?void 0:o.multiWallet;await M.connectExternal(r,g.state.activeChain),a?(C.replace("ProfileWallets"),Y.showSuccess("New Wallet Added")):C.replace("Account")}}catch(r){const n=P.parseError(r);n!=null&&n.includes("Invalid email")?this.error="Invalid email. Try again.":Y.showError(r)}finally{this.loading=!1}}onFocusEvent(){V.sendEvent({type:"track",event:"EMAIL_LOGIN_SELECTED"})}};gt.styles=D0;gi([d()],gt.prototype,"tabIdx",void 0);gi([m()],gt.prototype,"email",void 0);gi([m()],gt.prototype,"loading",void 0);gi([m()],gt.prototype,"error",void 0);gi([m()],gt.prototype,"remoteFeatures",void 0);gi([m()],gt.prototype,"hasExceededUsageLimit",void 0);gt=gi([b("w3m-email-login-widget")],gt);const M0=N`
  label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    user-select: none;
    column-gap: ${({spacing:e})=>e[2]};
  }

  label > input[type='checkbox'] {
    height: 0;
    width: 0;
    opacity: 0;
    position: absolute;
  }

  label > span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    border: 1px solid ${({colors:e})=>e.neutrals400};
    color: ${({colors:e})=>e.white};
    background-color: transparent;
    will-change: border-color, background-color;
  }

  label > span > wui-icon {
    opacity: 0;
    will-change: opacity;
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    color: ${({colors:e})=>e.white};
  }

  label > input[type='checkbox']:not(:checked) > span > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  label > input[type='checkbox']:checked + span > wui-icon {
    opacity: 1;
  }

  /* -- Sizes --------------------------------------------------- */
  label[data-size='lg'] > span {
    width: 24px;
    height: 24px;
    min-width: 24px;
    min-height: 24px;
    border-radius: ${({borderRadius:e})=>e[10]};
  }

  label[data-size='md'] > span {
    width: 20px;
    height: 20px;
    min-width: 20px;
    min-height: 20px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  label[data-size='sm'] > span {
    width: 16px;
    height: 16px;
    min-width: 16px;
    min-height: 16px;
    border-radius: ${({borderRadius:e})=>e[1]};
  }

  /* -- Focus states --------------------------------------------------- */
  label > input[type='checkbox']:focus-visible + span,
  label > input[type='checkbox']:focus + span {
    border: 1px solid ${({tokens:e})=>e.core.borderAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  label > input[type='checkbox']:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
    border: 1px solid transparent;
  }

  /* -- Hover states --------------------------------------------------- */
  input[type='checkbox']:not(:checked):not(:disabled) + span:hover {
    border: 1px solid ${({colors:e})=>e.neutrals700};
    background-color: ${({colors:e})=>e.neutrals800};
    box-shadow: none;
  }

  input[type='checkbox']:checked:not(:disabled) + span:hover {
    border: 1px solid transparent;
    background-color: ${({colors:e})=>e.accent080};
    box-shadow: none;
  }

  /* -- Disabled state --------------------------------------------------- */
  label > input[type='checkbox']:checked:disabled + span {
    border: 1px solid transparent;
    opacity: 0.3;
  }

  label > input[type='checkbox']:not(:checked):disabled + span {
    border: 1px solid ${({colors:e})=>e.neutrals700};
  }

  label:has(input[type='checkbox']:disabled) {
    cursor: auto;
  }

  label > input[type='checkbox']:disabled + span {
    cursor: not-allowed;
  }
`;var Io=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const z0={lg:"md",md:"sm",sm:"sm"};let _i=class extends k{constructor(){super(...arguments),this.inputElementRef=Tn(),this.checked=void 0,this.disabled=!1,this.size="md"}render(){const t=z0[this.size];return l`
      <label data-size=${this.size}>
        <input
          ${Nn(this.inputElementRef)}
          ?checked=${R(this.checked)}
          ?disabled=${this.disabled}
          type="checkbox"
          @change=${this.dispatchChangeEvent}
        />
        <span>
          <wui-icon name="checkmarkBold" size=${t}></wui-icon>
        </span>
        <slot></slot>
      </label>
    `}dispatchChangeEvent(){var t;this.dispatchEvent(new CustomEvent("checkboxChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.checked,bubbles:!0,composed:!0}))}};_i.styles=[B,M0];Io([d({type:Boolean})],_i.prototype,"checked",void 0);Io([d({type:Boolean})],_i.prototype,"disabled",void 0);Io([d()],_i.prototype,"size",void 0);_i=Io([b("wui-checkbox")],_i);const U0=N`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  wui-checkbox {
    padding: ${({spacing:e})=>e[3]};
  }
  a {
    text-decoration: none;
    color: ${({tokens:e})=>e.theme.textSecondary};
    font-weight: 500;
  }
`;var rs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ao=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=Ft.state.isLegalCheckboxChecked,this.unsubscribe.push(Ft.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state,o=(r=T.state.features)==null?void 0:r.legalCheckbox;return!t&&!i||!o?null:l`
      <wui-checkbox
        ?checked=${this.checked}
        @checkboxChange=${this.onCheckboxChange.bind(this)}
        data-testid="wui-checkbox"
      >
        <wui-text color="secondary" variant="sm-regular" align="left">
          I agree to our ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-checkbox>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state;return t&&i?"and":""}termsTemplate(){const{termsConditionsUrl:t}=T.state;return t?l`<a rel="noreferrer" target="_blank" href=${t}>terms of service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=T.state;return t?l`<a rel="noreferrer" target="_blank" href=${t}>privacy policy</a>`:null}onCheckboxChange(){Ft.setIsLegalCheckboxChecked(!this.checked)}};ao.styles=[U0];rs([m()],ao.prototype,"checked",void 0);ao=rs([b("w3m-legal-checkbox")],ao);const V0=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var as=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let so=class extends k{constructor(){super(...arguments),this.logo="google"}render(){return l`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};so.styles=[B,V0];as([d()],so.prototype,"logo",void 0);so=as([b("wui-logo")],so);const F0=N`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var jn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let si=class extends k{constructor(){super(...arguments),this.logo="google",this.name="Continue with google",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${R(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          <wui-image ?boxed=${!0} logo=${this.logo}></wui-image>
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}};si.styles=[B,K,F0];jn([d()],si.prototype,"logo",void 0);jn([d()],si.prototype,"name",void 0);jn([d()],si.prototype,"tabIdx",void 0);jn([d({type:Boolean})],si.prototype,"disabled",void 0);si=jn([b("wui-list-social")],si);const H0=N`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;var Ro=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ai=class extends k{constructor(){super(...arguments),this.logo="google",this.disabled=!1,this.tabIdx=void 0}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${R(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};Ai.styles=[B,K,H0];Ro([d()],Ai.prototype,"logo",void 0);Ro([d({type:Boolean})],Ai.prototype,"disabled",void 0);Ro([d()],Ai.prototype,"tabIdx",void 0);Ai=Ro([b("wui-logo-select")],Ai);const Z0=N`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Bt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const ba=2,ya=6;let tt=class extends k{constructor(){super(),this.unsubscribe=[],this.walletGuide="get-started",this.tabIdx=void 0,this.connectors=O.state.connectors,this.remoteFeatures=T.state.remoteFeatures,this.authConnector=this.connectors.find(t=>t.type==="AUTH"),this.isPwaLoading=!1,this.hasExceededUsageLimit=J.state.plan.hasExceededUsageLimit,this.unsubscribe.push(O.subscribeKey("connectors",t=>{this.connectors=t,this.authConnector=this.connectors.find(i=>i.type==="AUTH")}),T.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t),J.subscribeKey("plan",t=>this.hasExceededUsageLimit=t.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){var o;const t=this.walletGuide==="explore";let i=(o=this.remoteFeatures)==null?void 0:o.socials;return!i&&t?(i=ue.DEFAULT_SOCIALS,this.renderTopViewContent(i)):i?this.renderTopViewContent(i):null}renderTopViewContent(t){return t.length===2?l` <wui-flex gap="2">
        ${t.slice(0,ba).map(i=>l`<wui-logo-select
              data-testid=${`social-selector-${i}`}
              @click=${()=>{this.onSocialClick(i)}}
              logo=${i}
              tabIdx=${R(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:l` <wui-list-button
      data-testid=${`social-selector-${t[0]}`}
      @click=${()=>{this.onSocialClick(t[0])}}
      size="lg"
      icon=${R(t[0])}
      text=${`Continue with ${ee.capitalize(t[0])}`}
      tabIdx=${R(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){var r;let t=(r=this.remoteFeatures)==null?void 0:r.socials;const i=this.walletGuide==="explore";return(!this.authConnector||!t||t.length===0)&&i&&(t=ue.DEFAULT_SOCIALS),!t||t.length<=ba?null:t&&t.length>ya?l`<wui-flex gap="2">
        ${t.slice(1,ya-1).map(n=>l`<wui-logo-select
              data-testid=${`social-selector-${n}`}
              @click=${()=>{this.onSocialClick(n)}}
              logo=${n}
              tabIdx=${R(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${R(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:t?l`<wui-flex gap="2">
      ${t.slice(1,t.length).map(n=>l`<wui-logo-select
            data-testid=${`social-selector-${n}`}
            @click=${()=>{this.onSocialClick(n)}}
            logo=${n}
            tabIdx=${R(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){C.push("ConnectSocials")}async onSocialClick(t){if(this.hasExceededUsageLimit){C.push("UsageExceeded");return}if(!q.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(o=>o===g.state.activeChain)){const o=g.getFirstCaipNetworkSupportsAuthConnector();if(o){C.push("SwitchNetwork",{network:o});return}}t&&await Il(t)}async handlePwaFrameLoad(){var t;if(P.isPWA()){this.isPwaLoading=!0;try{((t=this.authConnector)==null?void 0:t.provider)instanceof wl&&await this.authConnector.provider.init()}catch(i){Ua.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:i.message},"error")}finally{this.isPwaLoading=!1}}}hasConnection(){return M.hasAnyConnection(q.CONNECTOR_ID.AUTH)}};tt.styles=Z0;Bt([d()],tt.prototype,"walletGuide",void 0);Bt([d()],tt.prototype,"tabIdx",void 0);Bt([m()],tt.prototype,"connectors",void 0);Bt([m()],tt.prototype,"remoteFeatures",void 0);Bt([m()],tt.prototype,"authConnector",void 0);Bt([m()],tt.prototype,"isPwaLoading",void 0);Bt([m()],tt.prototype,"hasExceededUsageLimit",void 0);tt=Bt([b("w3m-social-login-widget")],tt);const q0=N`
  :host {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: 2px;
  }
`;var ss=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Ho=4;let lo=class extends k{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Ho;return l`${this.walletImages.slice(0,Ho).map(({src:i,walletName:o})=>l`
          <wui-wallet-image
            size="sm"
            imageSrc=${i}
            name=${R(o)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Ho-this.walletImages.length)].map(()=>l` <wui-wallet-image size="sm" name=""></wui-wallet-image>`):null} `}};lo.styles=[B,q0];ss([d({type:Array})],lo.prototype,"walletImages",void 0);lo=ss([b("wui-all-wallets-image")],lo);const K0=N`
  :host {
    width: 100%;
  }

  button {
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  button > wui-wallet-image {
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  button:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-all-wallets='true']:hover:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent020};
  }

  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    opacity: 0.5;
    cursor: not-allowed;
  }

  button:disabled > wui-tag {
    background-color: ${({tokens:e})=>e.core.glass010};
    color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  wui-flex.namespace-icon {
    width: 16px;
    height: 16px;
    border-radius: ${({borderRadius:e})=>e.round};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.backgroundPrimary};
    transition: box-shadow var(--apkt-durations-lg) var(--apkt-easings-ease-out-power-2);
  }

  button:hover:enabled wui-flex.namespace-icon {
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex.namespace-icon > wui-icon {
    width: 10px;
    height: 10px;
  }

  wui-flex.namespace-icon:not(:first-child) {
    margin-left: -4px;
  }
`;var Ae=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const G0={eip155:"ethereum",solana:"solana",bip122:"bitcoin",polkadot:void 0,cosmos:void 0,sui:void 0,stacks:void 0,ton:"ton",tron:"tron"};let ge=class extends k{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.namespaces=[],this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100"}render(){return this.dataset.size=this.size,l`
      <button
        ?disabled=${this.disabled}
        data-all-wallets=${this.showAllWallets}
        tabindex=${R(this.tabIdx)}
      >
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-flex flexDirection="column" justifyContent="center" alignItems="flex-start" gap="1">
          <wui-text variant="lg-regular" color="inherit">${this.name}</wui-text>
          ${this.templateNamespaces()}
        </wui-flex>
        ${this.templateStatus()}
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}templateNamespaces(){var t;return(t=this.namespaces)!=null&&t.length?l`<wui-flex alignItems="center" gap="0">
        ${this.namespaces.map((i,o)=>{var r;return l`<wui-flex
              alignItems="center"
              justifyContent="center"
              zIndex=${(((r=this.namespaces)==null?void 0:r.length)??0)*2-o}
              class="namespace-icon"
            >
              <wui-icon
                name=${R(G0[i])}
                size="sm"
                color="default"
              ></wui-icon>
            </wui-flex>`})}
      </wui-flex>`:null}templateAllWallets(){return this.showAllWallets&&this.imageSrc?l` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?l` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?l`<wui-wallet-image
        size=${R(this.size==="sm"?"sm":"md")}
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?l`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.loading?l`<wui-loading-spinner size="lg" color="accent-primary"></wui-loading-spinner>`:this.tagLabel&&this.tagVariant?l`<wui-tag size="sm" variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:null}};ge.styles=[B,K,K0];Ae([d({type:Array})],ge.prototype,"walletImages",void 0);Ae([d()],ge.prototype,"imageSrc",void 0);Ae([d()],ge.prototype,"name",void 0);Ae([d()],ge.prototype,"size",void 0);Ae([d()],ge.prototype,"tagLabel",void 0);Ae([d()],ge.prototype,"tagVariant",void 0);Ae([d()],ge.prototype,"walletIcon",void 0);Ae([d()],ge.prototype,"tabIdx",void 0);Ae([d({type:Array})],ge.prototype,"namespaces",void 0);Ae([d({type:Boolean})],ge.prototype,"disabled",void 0);Ae([d({type:Boolean})],ge.prototype,"showAllWallets",void 0);Ae([d({type:Boolean})],ge.prototype,"loading",void 0);Ae([d({type:String})],ge.prototype,"loadingSpinnerColor",void 0);ge=Ae([b("wui-list-wallet")],ge);var Fi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let li=class extends k{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=O.state.connectors,this.count=J.state.count,this.filteredCount=J.state.filteredWallets.length,this.isFetchingRecommendedWallets=J.state.isFetchingRecommendedWallets,this.unsubscribe.push(O.subscribeKey("connectors",t=>this.connectors=t),J.subscribeKey("count",t=>this.count=t),J.subscribeKey("filteredWallets",t=>this.filteredCount=t.length),J.subscribeKey("isFetchingRecommendedWallets",t=>this.isFetchingRecommendedWallets=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.connectors.find(u=>u.id==="walletConnect"),{allWallets:i}=T.state;if(!t||i==="HIDE"||i==="ONLY_MOBILE"&&!P.isMobile())return null;const o=J.state.featured.length,r=this.count+o,n=r<10?r:Math.floor(r/10)*10,a=this.filteredCount>0?this.filteredCount:n;let s=`${a}`;this.filteredCount>0?s=`${this.filteredCount}`:a<r&&(s=`${a}+`);const c=M.hasAnyConnection(q.CONNECTOR_ID.WALLET_CONNECT);return l`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${s}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${R(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${c}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){var t;V.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),C.push("AllWallets",{redirectView:(t=C.state.data)==null?void 0:t.redirectView})}};Fi([d()],li.prototype,"tabIdx",void 0);Fi([m()],li.prototype,"connectors",void 0);Fi([m()],li.prototype,"count",void 0);Fi([m()],li.prototype,"filteredCount",void 0);Fi([m()],li.prototype,"isFetchingRecommendedWallets",void 0);li=Fi([b("w3m-all-wallets-widget")],li);const Y0=N`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var Hi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Nt=class extends k{constructor(){super(),this.unsubscribe=[],this.explorerWallets=J.state.explorerWallets,this.connections=M.state.connections,this.connectorImages=Ht.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(M.subscribeKey("connections",t=>this.connections=t),Ht.subscribeKey("connectorImages",t=>this.connectorImages=t),J.subscribeKey("explorerFilteredWallets",t=>{this.explorerWallets=t!=null&&t.length?t:J.state.explorerWallets}),J.subscribeKey("explorerWallets",t=>{var i;(i=this.explorerWallets)!=null&&i.length||(this.explorerWallets=t)})),P.isTelegram()&&P.isIos()&&(this.loadingTelegram=!M.state.wcUri,this.unsubscribe.push(M.subscribeKey("wcUri",t=>this.loadingTelegram=!t)))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return jr.connectorList().map((t,i)=>t.kind==="connector"?this.renderConnector(t,i):this.renderWallet(t,i))}getConnectorNamespaces(t){var i;return t.subtype==="walletConnect"?[]:t.subtype==="multiChain"?((i=t.connector.connectors)==null?void 0:i.map(o=>o.chain))||[]:[t.connector.chain]}renderConnector(t,i){var f,w;const o=t.connector,r=Q.getConnectorImage(o)||this.connectorImages[(o==null?void 0:o.imageId)??""],a=(this.connections.get(o.chain)??[]).some(y=>We.isLowerCaseMatch(y.connectorId,o.id));let s,c;t.subtype==="walletConnect"?(s="qr code",c="accent"):t.subtype==="injected"||t.subtype==="announced"?(s=a?"connected":"installed",c=a?"info":"success"):(s=void 0,c=void 0);const u=M.hasAnyConnection(q.CONNECTOR_ID.WALLET_CONNECT),p=t.subtype==="walletConnect"||t.subtype==="external"?u:!1;return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${R(r)}
        .installed=${!0}
        name=${o.name??"Unknown"}
        .tagVariant=${c}
        tagLabel=${R(s)}
        data-testid=${`wallet-selector-${o.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(t)}
        tabIdx=${R(this.tabIdx)}
        ?disabled=${p}
        rdnsId=${R(((f=o.explorerWallet)==null?void 0:f.rdns)||void 0)}
        walletRank=${R((w=o.explorerWallet)==null?void 0:w.order)}
        .namespaces=${this.getConnectorNamespaces(t)}
      >
      </w3m-list-wallet>
    `}onClickConnector(t){var o;const i=(o=C.state.data)==null?void 0:o.redirectView;if(t.subtype==="walletConnect"){O.setActiveConnector(t.connector),P.isMobile()?C.push("AllWallets"):C.push("ConnectingWalletConnect",{redirectView:i});return}if(t.subtype==="multiChain"){O.setActiveConnector(t.connector),C.push("ConnectingMultiChain",{redirectView:i});return}if(t.subtype==="injected"){O.setActiveConnector(t.connector),C.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}if(t.subtype==="announced"){if(t.connector.id==="walletConnect"){P.isMobile()?C.push("AllWallets"):C.push("ConnectingWalletConnect",{redirectView:i});return}C.push("ConnectingExternal",{connector:t.connector,redirectView:i,wallet:t.connector.explorerWallet});return}C.push("ConnectingExternal",{connector:t.connector,redirectView:i})}renderWallet(t,i){const o=t.wallet,r=Q.getWalletImage(o),a=M.hasAnyConnection(q.CONNECTOR_ID.WALLET_CONNECT),s=this.loadingTelegram,c=t.subtype==="recent"?"recent":void 0,u=t.subtype==="recent"?"info":void 0;return l`
      <w3m-list-wallet
        displayIndex=${i}
        imageSrc=${R(r)}
        name=${o.name??"Unknown"}
        @click=${()=>this.onClickWallet(t)}
        size="sm"
        data-testid=${`wallet-selector-${o.id}`}
        tabIdx=${R(this.tabIdx)}
        ?loading=${s}
        ?disabled=${a}
        rdnsId=${R(o.rdns||void 0)}
        walletRank=${R(o.order)}
        tagLabel=${R(c)}
        .tagVariant=${u}
      >
      </w3m-list-wallet>
    `}onClickWallet(t){var n;const i=(n=C.state.data)==null?void 0:n.redirectView,o=g.state.activeChain;if(t.subtype==="featured"){O.selectWalletConnector(t.wallet);return}if(t.subtype==="recent"){if(this.loadingTelegram)return;O.selectWalletConnector(t.wallet);return}if(t.subtype==="custom"){if(this.loadingTelegram)return;C.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i});return}if(this.loadingTelegram)return;const r=o?O.getConnector({id:t.wallet.id,namespace:o}):void 0;r?C.push("ConnectingExternal",{connector:r,redirectView:i}):C.push("ConnectingWalletConnect",{wallet:t.wallet,redirectView:i})}};Nt.styles=Y0;Hi([d({type:Number})],Nt.prototype,"tabIdx",void 0);Hi([m()],Nt.prototype,"explorerWallets",void 0);Hi([m()],Nt.prototype,"connections",void 0);Hi([m()],Nt.prototype,"connectorImages",void 0);Hi([m()],Nt.prototype,"loadingTelegram",void 0);Nt=Hi([b("w3m-connector-list")],Nt);var ls=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mr=class extends k{constructor(){super(...arguments),this.tabIdx=void 0}render(){return l`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${R(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${R(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};ls([d()],mr.prototype,"tabIdx",void 0);mr=ls([b("w3m-wallet-login-list")],mr);const X0=N`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`;var He=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Q0=470;let ye=class extends k{constructor(){var t,i;super(),this.unsubscribe=[],this.connectors=O.state.connectors,this.authConnector=this.connectors.find(o=>o.type==="AUTH"),this.features=T.state.features,this.remoteFeatures=T.state.remoteFeatures,this.enableWallets=T.state.enableWallets,this.noAdapters=g.state.noAdapters,this.walletGuide="get-started",this.checked=Ft.state.isLegalCheckboxChecked,this.isEmailEnabled=((t=this.remoteFeatures)==null?void 0:t.email)&&!g.state.noAdapters,this.isSocialEnabled=((i=this.remoteFeatures)==null?void 0:i.socials)&&this.remoteFeatures.socials.length>0&&!g.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(O.subscribeKey("connectors",o=>{this.connectors=o,this.authConnector=this.connectors.find(r=>r.type==="AUTH"),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),T.subscribeKey("features",o=>{this.features=o}),T.subscribeKey("remoteFeatures",o=>{this.remoteFeatures=o,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),T.subscribeKey("enableWallets",o=>this.enableWallets=o),g.subscribeKey("noAdapters",o=>this.setEmailAndSocialEnableCheck(o,this.remoteFeatures)),Ft.subscribeKey("isLegalCheckboxChecked",o=>this.checked=o))}disconnectedCallback(){var i,o;this.unsubscribe.forEach(r=>r()),(i=this.resizeObserver)==null||i.disconnect();const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");t==null||t.removeEventListener("scroll",this.handleConnectListScroll.bind(this))}firstUpdated(){var i,o;const t=(i=this.shadowRoot)==null?void 0:i.querySelector(".connect");t&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),t==null||t.addEventListener("scroll",this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),(o=this.resizeObserver)==null||o.observe(t),this.handleConnectListScroll())}render(){var w;const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state,o=(w=T.state.features)==null?void 0:w.legalCheckbox,a=!!(t||i)&&!!o&&this.walletGuide==="get-started"&&!this.checked,s={connect:!0,disabled:a},c=T.state.enableWalletGuide,u=this.enableWallets,p=this.isSocialEnabled||this.authConnector,f=a?-1:void 0;return l`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${["0","0","4","0"]}
          class=${Mr(s)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${p&&u&&c&&this.walletGuide==="get-started"?["0","3","0","3"]:["0","3","3","3"]}
          >
            ${this.renderConnectMethod(f)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){var t;return xi.hasFooter()||!((t=this.remoteFeatures)!=null&&t.reownBranding)?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(t,i){this.isEmailEnabled=(i==null?void 0:i.email)&&!t,this.isSocialEnabled=(i==null?void 0:i.socials)&&i.socials.length>0&&!t,this.remoteFeatures=i,this.noAdapters=t}checkIfAuthEnabled(t){const i=t.filter(r=>r.type===bl.CONNECTOR_TYPE_AUTH).map(r=>r.chain);return q.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(r=>i.includes(r))}renderConnectMethod(t){const i=Ji.getConnectOrderMethod(this.features,this.connectors);return l`${i.map((o,r)=>{switch(o){case"email":return l`${this.emailTemplate(t)} ${this.separatorTemplate(r,"email")}`;case"social":return l`${this.socialListTemplate(t)}
          ${this.separatorTemplate(r,"social")}`;case"wallet":return l`${this.walletListTemplate(t)}
          ${this.separatorTemplate(r,"wallet")}`;default:return null}})}`}checkMethodEnabled(t){switch(t){case"wallet":return this.enableWallets;case"social":return this.isSocialEnabled&&this.isAuthEnabled;case"email":return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(t){const o=Ji.getConnectOrderMethod(this.features,this.connectors)[t+1];return o?this.checkMethodEnabled(o)?o:this.checkIsThereNextMethod(t+1):void 0}separatorTemplate(t,i){const o=this.checkIsThereNextMethod(t),r=this.walletGuide==="explore";switch(i){case"wallet":return this.enableWallets&&o&&!r?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case"email":{const n=o==="social";return this.isAuthEnabled&&this.isEmailEnabled&&!n&&o?l`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case"social":{const n=o==="email";return this.isAuthEnabled&&this.isSocialEnabled&&!n&&o?l`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(t){return!this.isEmailEnabled||!this.isAuthEnabled?null:l`<w3m-email-login-widget tabIdx=${R(t)}></w3m-email-login-widget>`}socialListTemplate(t){return!this.isSocialEnabled||!this.isAuthEnabled?null:l`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${R(t)}
    ></w3m-social-login-widget>`}walletListTemplate(t){var s,c;const i=this.enableWallets,o=((s=this.features)==null?void 0:s.emailShowWallets)===!1,r=(c=this.features)==null?void 0:c.collapseWallets,n=o||r;return!i||(P.isTelegram()&&(P.isSafari()||P.isIos())&&M.connectWalletConnect().catch(u=>({})),this.walletGuide==="explore")?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&n?l`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${R(t)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:l`<w3m-wallet-login-list tabIdx=${R(t)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide==="explore"?null:l`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){var o;const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".connect");if(!t)return;t.scrollHeight>Q0?(t.style.setProperty("--connect-mask-image",`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),t.style.setProperty("--connect-scroll--top-opacity",Gn.interpolate([0,50],[0,1],t.scrollTop).toString()),t.style.setProperty("--connect-scroll--bottom-opacity",Gn.interpolate([0,50],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString())):(t.style.setProperty("--connect-mask-image","none"),t.style.setProperty("--connect-scroll--top-opacity","0"),t.style.setProperty("--connect-scroll--bottom-opacity","0"))}onContinueWalletClick(){C.push("ConnectWallets")}};ye.styles=X0;He([m()],ye.prototype,"connectors",void 0);He([m()],ye.prototype,"authConnector",void 0);He([m()],ye.prototype,"features",void 0);He([m()],ye.prototype,"remoteFeatures",void 0);He([m()],ye.prototype,"enableWallets",void 0);He([m()],ye.prototype,"noAdapters",void 0);He([d()],ye.prototype,"walletGuide",void 0);He([m()],ye.prototype,"checked",void 0);He([m()],ye.prototype,"isEmailEnabled",void 0);He([m()],ye.prototype,"isSocialEnabled",void 0);He([m()],ye.prototype,"isAuthEnabled",void 0);ye=He([b("w3m-connect-view")],ye);const J0=N`
  :host {
    display: block;
    width: 100px;
    height: 100px;
  }

  svg {
    width: 100px;
    height: 100px;
  }

  rect {
    fill: none;
    stroke: ${e=>e.colors.accent100};
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var cs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let co=class extends k{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,o=36-t,r=116+o,n=245+o,a=360+o*1.75;return l`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${r} ${n}"
          stroke-dashoffset=${a}
        />
      </svg>
    `}};co.styles=[B,J0];cs([d({type:Number})],co.prototype,"radius",void 0);co=cs([b("wui-loading-thumbnail")],co);const ed=N`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`;var To=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ii=class extends k{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return l`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Ii.styles=[B,K,ed];To([d({type:Boolean})],Ii.prototype,"disabled",void 0);To([d()],Ii.prototype,"label",void 0);To([d()],Ii.prototype,"buttonLabel",void 0);Ii=To([b("wui-cta-button")],Ii);const td=N`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`;var ds=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let uo=class extends k{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:i,play_store:o,chrome_store:r,homepage:n}=this.wallet,a=P.isMobile(),s=P.isIos(),c=P.isAndroid(),u=[i,o,n,r].filter(Boolean).length>1,p=ee.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return u&&!a?l`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${()=>C.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!u&&n?l`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:i&&s?l`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:o&&c?l`
        <wui-cta-button
          label=${`Don't have ${p}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&P.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&P.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&P.openHref(this.wallet.homepage,"_blank")}};uo.styles=[td];ds([d({type:Object})],uo.prototype,"wallet",void 0);uo=ds([b("w3m-mobile-download-links")],uo);const id=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`;var Xe=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};class le extends k{constructor(){var t,i,o,r,n;super(),this.wallet=(t=C.state.data)==null?void 0:t.wallet,this.connector=(i=C.state.data)==null?void 0:i.connector,this.timeout=void 0,this.secondaryBtnIcon="refresh",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Q.getConnectorImage(this.connector)??Q.getWalletImage(this.wallet),this.name=((o=this.wallet)==null?void 0:o.name)??((r=this.connector)==null?void 0:r.name)??"Wallet",this.isRetrying=!1,this.uri=M.state.wcUri,this.error=M.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel="Try again",this.secondaryLabel="Accept connection request in the wallet",this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(M.subscribeKey("wcUri",a=>{var s;this.uri=a,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),M.subscribeKey("wcError",a=>this.error=a)),(P.isTelegram()||P.isSafari())&&P.isIos()&&M.state.wcUri&&((n=this.onConnect)==null||n.call(this))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),M.setWcError(!1),clearTimeout(this.timeout)}render(){var o;(o=this.onRender)==null||o.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let i="";return this.label?i=this.label:(i=`Continue in ${this.name}`,this.error&&(i="Connection declined")),l`
      <wui-flex
        data-error=${R(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${R(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","0","0"]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?"error":"primary"}>
            ${i}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?l`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?l`
              <wui-flex .padding=${["0","5","5","5"]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){var t,i;M.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(i=this.onConnect)==null||i.call(this)}loaderTemplate(){const t=Kn.state.themeVariables["--w3m-border-radius-master"],i=t?parseInt(t.replace("px",""),10):4;return l`<wui-loading-thumbnail radius=${i*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(P.copyToClopboard(this.uri),Y.showSuccess("Link copied"))}catch{Y.showError("Failed to copy")}}}le.styles=id;Xe([m()],le.prototype,"isRetrying",void 0);Xe([m()],le.prototype,"uri",void 0);Xe([m()],le.prototype,"error",void 0);Xe([m()],le.prototype,"ready",void 0);Xe([m()],le.prototype,"showRetry",void 0);Xe([m()],le.prototype,"label",void 0);Xe([m()],le.prototype,"secondaryBtnLabel",void 0);Xe([m()],le.prototype,"secondaryLabel",void 0);Xe([m()],le.prototype,"isLoading",void 0);Xe([d({type:Boolean})],le.prototype,"isMobile",void 0);Xe([d()],le.prototype,"onRetry",void 0);var nd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let gr=class extends le{constructor(){var i,o,r,n,a;if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=M.getConnections((i=this.connector)==null?void 0:i.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=T.state.remoteFeatures,this.currentActiveConnectorId=O.state.activeConnectorIds[(o=this.connector)==null?void 0:o.chain],!this.connector)throw new Error("w3m-connecting-view: No connector provided");const t=(r=this.connector)==null?void 0:r.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:"browser",displayIndex:(n=this.wallet)==null?void 0:n.display_index,walletRank:(a=this.wallet)==null?void 0:a.order,view:C.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(O.subscribeKey("activeConnectorIds",s=>{var f;const c=s[t],u=(f=this.remoteFeatures)==null?void 0:f.multiWallet,{redirectView:p}=C.state.data??{};c!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&u?(C.replace("ProfileWallets"),Y.showSuccess("New Wallet Added")):p?C.replace(p):ce.close())}),M.subscribeKey("connections",this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(t=>t())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(this.connector.id!==q.CONNECTOR_ID.COINBASE_SDK||!this.error)&&await M.connectExternal(this.connector,this.connector.chain)}}catch(t){t instanceof Wr&&t.originalName===Br.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?V.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):V.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}onConnectionsChange(t){var i,o;if((i=this.connector)!=null&&i.chain&&t.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){const r=t.get(this.connector.chain)??[],n=(o=this.remoteFeatures)==null?void 0:o.multiWallet;if(r.length===0)C.replace("Connect");else{const a=ct.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(c=>c.accounts),s=ct.getConnectionsByConnectorId(r,this.connector.id).flatMap(c=>c.accounts);s.length===0?this.hasMultipleConnections&&n?(C.replace("ProfileWallets"),Y.showSuccess("Wallet deleted")):ce.close():!a.every(u=>s.some(p=>We.isLowerCaseMatch(u.address,p.address)))&&n&&C.replace("ProfileWallets")}}}isAlreadyConnected(t){return!!t&&this.connectionsByNamespace.some(i=>We.isLowerCaseMatch(i.connectorId,t.id))}};gr=nd([b("w3m-connecting-external-view")],gr);const od=ae`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`;var us=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let sn=class extends k{constructor(){super(),this.unsubscribe=[],this.activeConnector=O.state.activeConnector,this.unsubscribe.push(O.subscribeKey("activeConnector",t=>this.activeConnector=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${R(Q.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["0","3","0","3"]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${(t=this.activeConnector)==null?void 0:t.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${["2","0","2","0"]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){var t,i;return(i=(t=this.activeConnector)==null?void 0:t.connectors)==null?void 0:i.map((o,r)=>{var n;return o.name?l`
            <w3m-list-wallet
              displayIndex=${r}
              imageSrc=${R(Q.getChainImage(o.chain))}
              name=${q.CHAIN_NAME_MAP[o.chain]}
              @click=${()=>this.onConnector(o)}
              size="sm"
              data-testid="wui-list-chain-${o.chain}"
              rdnsId=${(n=o.explorerWallet)==null?void 0:n.rdns}
            ></w3m-list-wallet>
          `:null})}onConnector(t){var r,n,a,s;const i=(n=(r=this.activeConnector)==null?void 0:r.connectors)==null?void 0:n.find(c=>c.chain===t.chain),o=(a=C.state.data)==null?void 0:a.redirectView;if(!i){Y.showError("Failed to find connector");return}i.id==="walletConnect"?P.isMobile()?C.push("AllWallets"):C.push("ConnectingWalletConnect",{redirectView:o}):C.push("ConnectingExternal",{connector:i,redirectView:o,wallet:(s=this.activeConnector)==null?void 0:s.explorerWallet})}};sn.styles=od;us([m()],sn.prototype,"activeConnector",void 0);sn=us([b("w3m-connecting-multi-chain-view")],sn);var Kr=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ho=class extends k{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return l`
      <wui-flex justifyContent="center" .padding=${["0","0","4","0"]}>
        <wui-tabs .tabs=${t} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(i=>i==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:i==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:i==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:i==="web"?{label:"Webapp",icon:"browser",platform:"web"}:i==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:i})=>i),t}onTabChange(t){var o;const i=this.platformTabs[t];i&&((o=this.onSelectPlatfrom)==null||o.call(this,i))}};Kr([d({type:Array})],ho.prototype,"platforms",void 0);Kr([d()],ho.prototype,"onSelectPlatfrom",void 0);ho=Kr([b("w3m-connecting-header")],ho);var rd=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let va=class extends le{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:C.state.view}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=O.state,i=t.find(o=>{var r,n,a;return o.type==="ANNOUNCED"&&((r=o.info)==null?void 0:r.rdns)===((n=this.wallet)==null?void 0:n.rdns)||o.type==="INJECTED"||o.name===((a=this.wallet)==null?void 0:a.name)});if(i)await M.connectExternal(i,i.chain);else throw new Error("w3m-connecting-wc-browser: No connector found");ce.close()}catch(t){t instanceof Wr&&t.originalName===Br.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?V.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:t.message}}):V.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};va=rd([b("w3m-connecting-wc-browser")],va);var ad=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xa=class extends le{constructor(){var t;if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:C.state.view}})}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:i,name:o}=this.wallet,{redirect:r,href:n}=P.formatNativeUrl(i,this.uri);M.setWcLinking({name:o,href:n}),M.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};xa=ad([b("w3m-connecting-wc-desktop")],xa);var Zi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ci=class extends le{constructor(){var t;if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=T.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{ct.onConnectMobile(this.wallet)},!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.secondaryBtnLabel="Open",this.secondaryLabel=ue.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.onHandleURI(),this.unsubscribe.push(M.subscribeKey("wcUri",()=>{this.onHandleURI()})),V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:this.wallet.order,view:C.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){var t;this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onTryAgain(){var t;M.setWcError(!1),(t=this.onConnect)==null||t.call(this)}};Zi([m()],ci.prototype,"redirectDeeplink",void 0);Zi([m()],ci.prototype,"redirectUniversalLink",void 0);Zi([m()],ci.prototype,"target",void 0);Zi([m()],ci.prototype,"preferUniversalLinks",void 0);Zi([m()],ci.prototype,"isLoading",void 0);ci=Zi([b("w3m-connecting-wc-mobile")],ci);var Wn={},sd=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},hs={},Pe={};let Gr;const ld=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];Pe.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};Pe.getSymbolTotalCodewords=function(t){return ld[t]};Pe.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};Pe.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');Gr=t};Pe.isKanjiModeEnabled=function(){return typeof Gr<"u"};Pe.toSJIS=function(t){return Gr(t)};var No={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+i)}}e.isValid=function(o){return o&&typeof o.bit<"u"&&o.bit>=0&&o.bit<4},e.from=function(o,r){if(e.isValid(o))return o;try{return t(o)}catch{return r}}})(No);function ps(){this.buffer=[],this.length=0}ps.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let i=0;i<t;i++)this.putBit((e>>>t-i-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var cd=ps;function Bn(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Bn.prototype.set=function(e,t,i,o){const r=e*this.size+t;this.data[r]=i,o&&(this.reservedBit[r]=!0)};Bn.prototype.get=function(e,t){return this.data[e*this.size+t]};Bn.prototype.xor=function(e,t,i){this.data[e*this.size+t]^=i};Bn.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var dd=Bn,fs={};(function(e){const t=Pe.getSymbolSize;e.getRowColCoords=function(o){if(o===1)return[];const r=Math.floor(o/7)+2,n=t(o),a=n===145?26:Math.ceil((n-13)/(2*r-2))*2,s=[n-7];for(let c=1;c<r-1;c++)s[c]=s[c-1]-a;return s.push(6),s.reverse()},e.getPositions=function(o){const r=[],n=e.getRowColCoords(o),a=n.length;for(let s=0;s<a;s++)for(let c=0;c<a;c++)s===0&&c===0||s===0&&c===a-1||s===a-1&&c===0||r.push([n[s],n[c]]);return r}})(fs);var ms={};const ud=Pe.getSymbolSize,Ca=7;ms.getPositions=function(t){const i=ud(t);return[[0,0],[i-Ca,0],[0,i-Ca]]};var gs={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(r){return r!=null&&r!==""&&!isNaN(r)&&r>=0&&r<=7},e.from=function(r){return e.isValid(r)?parseInt(r,10):void 0},e.getPenaltyN1=function(r){const n=r.size;let a=0,s=0,c=0,u=null,p=null;for(let f=0;f<n;f++){s=c=0,u=p=null;for(let w=0;w<n;w++){let y=r.get(f,w);y===u?s++:(s>=5&&(a+=t.N1+(s-5)),u=y,s=1),y=r.get(w,f),y===p?c++:(c>=5&&(a+=t.N1+(c-5)),p=y,c=1)}s>=5&&(a+=t.N1+(s-5)),c>=5&&(a+=t.N1+(c-5))}return a},e.getPenaltyN2=function(r){const n=r.size;let a=0;for(let s=0;s<n-1;s++)for(let c=0;c<n-1;c++){const u=r.get(s,c)+r.get(s,c+1)+r.get(s+1,c)+r.get(s+1,c+1);(u===4||u===0)&&a++}return a*t.N2},e.getPenaltyN3=function(r){const n=r.size;let a=0,s=0,c=0;for(let u=0;u<n;u++){s=c=0;for(let p=0;p<n;p++)s=s<<1&2047|r.get(u,p),p>=10&&(s===1488||s===93)&&a++,c=c<<1&2047|r.get(p,u),p>=10&&(c===1488||c===93)&&a++}return a*t.N3},e.getPenaltyN4=function(r){let n=0;const a=r.data.length;for(let c=0;c<a;c++)n+=r.data[c];return Math.abs(Math.ceil(n*100/a/5)-10)*t.N4};function i(o,r,n){switch(o){case e.Patterns.PATTERN000:return(r+n)%2===0;case e.Patterns.PATTERN001:return r%2===0;case e.Patterns.PATTERN010:return n%3===0;case e.Patterns.PATTERN011:return(r+n)%3===0;case e.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2===0;case e.Patterns.PATTERN101:return r*n%2+r*n%3===0;case e.Patterns.PATTERN110:return(r*n%2+r*n%3)%2===0;case e.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2===0;default:throw new Error("bad maskPattern:"+o)}}e.applyMask=function(r,n){const a=n.size;for(let s=0;s<a;s++)for(let c=0;c<a;c++)n.isReserved(c,s)||n.xor(c,s,i(r,c,s))},e.getBestMask=function(r,n){const a=Object.keys(e.Patterns).length;let s=0,c=1/0;for(let u=0;u<a;u++){n(u),e.applyMask(u,r);const p=e.getPenaltyN1(r)+e.getPenaltyN2(r)+e.getPenaltyN3(r)+e.getPenaltyN4(r);e.applyMask(u,r),p<c&&(c=p,s=u)}return s}})(gs);var Po={};const Ct=No,Fn=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Hn=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Po.getBlocksCount=function(t,i){switch(i){case Ct.L:return Fn[(t-1)*4+0];case Ct.M:return Fn[(t-1)*4+1];case Ct.Q:return Fn[(t-1)*4+2];case Ct.H:return Fn[(t-1)*4+3];default:return}};Po.getTotalCodewordsCount=function(t,i){switch(i){case Ct.L:return Hn[(t-1)*4+0];case Ct.M:return Hn[(t-1)*4+1];case Ct.Q:return Hn[(t-1)*4+2];case Ct.H:return Hn[(t-1)*4+3];default:return}};var ws={},Lo={};const Xi=new Uint8Array(512),po=new Uint8Array(256);(function(){let t=1;for(let i=0;i<255;i++)Xi[i]=t,po[t]=i,t<<=1,t&256&&(t^=285);for(let i=255;i<512;i++)Xi[i]=Xi[i-255]})();Lo.log=function(t){if(t<1)throw new Error("log("+t+")");return po[t]};Lo.exp=function(t){return Xi[t]};Lo.mul=function(t,i){return t===0||i===0?0:Xi[po[t]+po[i]]};(function(e){const t=Lo;e.mul=function(o,r){const n=new Uint8Array(o.length+r.length-1);for(let a=0;a<o.length;a++)for(let s=0;s<r.length;s++)n[a+s]^=t.mul(o[a],r[s]);return n},e.mod=function(o,r){let n=new Uint8Array(o);for(;n.length-r.length>=0;){const a=n[0];for(let c=0;c<r.length;c++)n[c]^=t.mul(r[c],a);let s=0;for(;s<n.length&&n[s]===0;)s++;n=n.slice(s)}return n},e.generateECPolynomial=function(o){let r=new Uint8Array([1]);for(let n=0;n<o;n++)r=e.mul(r,new Uint8Array([1,t.exp(n)]));return r}})(ws);const bs=ws;function Yr(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}Yr.prototype.initialize=function(t){this.degree=t,this.genPoly=bs.generateECPolynomial(this.degree)};Yr.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const i=new Uint8Array(t.length+this.degree);i.set(t);const o=bs.mod(i,this.genPoly),r=this.degree-o.length;if(r>0){const n=new Uint8Array(this.degree);return n.set(o,r),n}return o};var hd=Yr,ys={},Dt={},Xr={};Xr.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var st={};const vs="[0-9]+",pd="[A-Z $%*+\\-./:]+";let ln="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";ln=ln.replace(/u/g,"\\u");const fd="(?:(?![A-Z0-9 $%*+\\-./:]|"+ln+`)(?:.|[\r
]))+`;st.KANJI=new RegExp(ln,"g");st.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");st.BYTE=new RegExp(fd,"g");st.NUMERIC=new RegExp(vs,"g");st.ALPHANUMERIC=new RegExp(pd,"g");const md=new RegExp("^"+ln+"$"),gd=new RegExp("^"+vs+"$"),wd=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");st.testKanji=function(t){return md.test(t)};st.testNumeric=function(t){return gd.test(t)};st.testAlphanumeric=function(t){return wd.test(t)};(function(e){const t=Xr,i=st;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(n,a){if(!n.ccBits)throw new Error("Invalid mode: "+n);if(!t.isValid(a))throw new Error("Invalid version: "+a);return a>=1&&a<10?n.ccBits[0]:a<27?n.ccBits[1]:n.ccBits[2]},e.getBestModeForData=function(n){return i.testNumeric(n)?e.NUMERIC:i.testAlphanumeric(n)?e.ALPHANUMERIC:i.testKanji(n)?e.KANJI:e.BYTE},e.toString=function(n){if(n&&n.id)return n.id;throw new Error("Invalid mode")},e.isValid=function(n){return n&&n.bit&&n.ccBits};function o(r){if(typeof r!="string")throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+r)}}e.from=function(n,a){if(e.isValid(n))return n;try{return o(n)}catch{return a}}})(Dt);(function(e){const t=Pe,i=Po,o=No,r=Dt,n=Xr,a=7973,s=t.getBCHDigit(a);function c(w,y,E){for(let S=1;S<=40;S++)if(y<=e.getCapacity(S,E,w))return S}function u(w,y){return r.getCharCountIndicator(w,y)+4}function p(w,y){let E=0;return w.forEach(function(S){const $=u(S.mode,y);E+=$+S.getBitsLength()}),E}function f(w,y){for(let E=1;E<=40;E++)if(p(w,E)<=e.getCapacity(E,y,r.MIXED))return E}e.from=function(y,E){return n.isValid(y)?parseInt(y,10):E},e.getCapacity=function(y,E,S){if(!n.isValid(y))throw new Error("Invalid QR Code version");typeof S>"u"&&(S=r.BYTE);const $=t.getSymbolTotalCodewords(y),A=i.getTotalCodewordsCount(y,E),x=($-A)*8;if(S===r.MIXED)return x;const I=x-u(S,y);switch(S){case r.NUMERIC:return Math.floor(I/10*3);case r.ALPHANUMERIC:return Math.floor(I/11*2);case r.KANJI:return Math.floor(I/13);case r.BYTE:default:return Math.floor(I/8)}},e.getBestVersionForData=function(y,E){let S;const $=o.from(E,o.M);if(Array.isArray(y)){if(y.length>1)return f(y,$);if(y.length===0)return 1;S=y[0]}else S=y;return c(S.mode,S.getLength(),$)},e.getEncodedBits=function(y){if(!n.isValid(y)||y<7)throw new Error("Invalid QR Code version");let E=y<<12;for(;t.getBCHDigit(E)-s>=0;)E^=a<<t.getBCHDigit(E)-s;return y<<12|E}})(ys);var xs={};const wr=Pe,Cs=1335,bd=21522,$a=wr.getBCHDigit(Cs);xs.getEncodedBits=function(t,i){const o=t.bit<<3|i;let r=o<<10;for(;wr.getBCHDigit(r)-$a>=0;)r^=Cs<<wr.getBCHDigit(r)-$a;return(o<<10|r)^bd};var $s={};const yd=Dt;function Ri(e){this.mode=yd.NUMERIC,this.data=e.toString()}Ri.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Ri.prototype.getLength=function(){return this.data.length};Ri.prototype.getBitsLength=function(){return Ri.getBitsLength(this.data.length)};Ri.prototype.write=function(t){let i,o,r;for(i=0;i+3<=this.data.length;i+=3)o=this.data.substr(i,3),r=parseInt(o,10),t.put(r,10);const n=this.data.length-i;n>0&&(o=this.data.substr(i),r=parseInt(o,10),t.put(r,n*3+1))};var vd=Ri;const xd=Dt,Zo=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Ti(e){this.mode=xd.ALPHANUMERIC,this.data=e}Ti.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Ti.prototype.getLength=function(){return this.data.length};Ti.prototype.getBitsLength=function(){return Ti.getBitsLength(this.data.length)};Ti.prototype.write=function(t){let i;for(i=0;i+2<=this.data.length;i+=2){let o=Zo.indexOf(this.data[i])*45;o+=Zo.indexOf(this.data[i+1]),t.put(o,11)}this.data.length%2&&t.put(Zo.indexOf(this.data[i]),6)};var Cd=Ti,$d=function(t){for(var i=[],o=t.length,r=0;r<o;r++){var n=t.charCodeAt(r);if(n>=55296&&n<=56319&&o>r+1){var a=t.charCodeAt(r+1);a>=56320&&a<=57343&&(n=(n-55296)*1024+a-56320+65536,r+=1)}if(n<128){i.push(n);continue}if(n<2048){i.push(n>>6|192),i.push(n&63|128);continue}if(n<55296||n>=57344&&n<65536){i.push(n>>12|224),i.push(n>>6&63|128),i.push(n&63|128);continue}if(n>=65536&&n<=1114111){i.push(n>>18|240),i.push(n>>12&63|128),i.push(n>>6&63|128),i.push(n&63|128);continue}i.push(239,191,189)}return new Uint8Array(i).buffer};const kd=$d,Sd=Dt;function Ni(e){this.mode=Sd.BYTE,typeof e=="string"&&(e=kd(e)),this.data=new Uint8Array(e)}Ni.getBitsLength=function(t){return t*8};Ni.prototype.getLength=function(){return this.data.length};Ni.prototype.getBitsLength=function(){return Ni.getBitsLength(this.data.length)};Ni.prototype.write=function(e){for(let t=0,i=this.data.length;t<i;t++)e.put(this.data[t],8)};var Ed=Ni;const _d=Dt,Ad=Pe;function Pi(e){this.mode=_d.KANJI,this.data=e}Pi.getBitsLength=function(t){return t*13};Pi.prototype.getLength=function(){return this.data.length};Pi.prototype.getBitsLength=function(){return Pi.getBitsLength(this.data.length)};Pi.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let i=Ad.toSJIS(this.data[t]);if(i>=33088&&i<=40956)i-=33088;else if(i>=57408&&i<=60351)i-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);i=(i>>>8&255)*192+(i&255),e.put(i,13)}};var Id=Pi,ks={exports:{}};(function(e){var t={single_source_shortest_paths:function(i,o,r){var n={},a={};a[o]=0;var s=t.PriorityQueue.make();s.push(o,0);for(var c,u,p,f,w,y,E,S,$;!s.empty();){c=s.pop(),u=c.value,f=c.cost,w=i[u]||{};for(p in w)w.hasOwnProperty(p)&&(y=w[p],E=f+y,S=a[p],$=typeof a[p]>"u",($||S>E)&&(a[p]=E,s.push(p,E),n[p]=u))}if(typeof r<"u"&&typeof a[r]>"u"){var A=["Could not find a path from ",o," to ",r,"."].join("");throw new Error(A)}return n},extract_shortest_path_from_predecessor_list:function(i,o){for(var r=[],n=o;n;)r.push(n),i[n],n=i[n];return r.reverse(),r},find_path:function(i,o,r){var n=t.single_source_shortest_paths(i,o,r);return t.extract_shortest_path_from_predecessor_list(n,r)},PriorityQueue:{make:function(i){var o=t.PriorityQueue,r={},n;i=i||{};for(n in o)o.hasOwnProperty(n)&&(r[n]=o[n]);return r.queue=[],r.sorter=i.sorter||o.default_sorter,r},default_sorter:function(i,o){return i.cost-o.cost},push:function(i,o){var r={value:i,cost:o};this.queue.push(r),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(ks);var Rd=ks.exports;(function(e){const t=Dt,i=vd,o=Cd,r=Ed,n=Id,a=st,s=Pe,c=Rd;function u(A){return unescape(encodeURIComponent(A)).length}function p(A,x,I){const _=[];let W;for(;(W=A.exec(I))!==null;)_.push({data:W[0],index:W.index,mode:x,length:W[0].length});return _}function f(A){const x=p(a.NUMERIC,t.NUMERIC,A),I=p(a.ALPHANUMERIC,t.ALPHANUMERIC,A);let _,W;return s.isKanjiModeEnabled()?(_=p(a.BYTE,t.BYTE,A),W=p(a.KANJI,t.KANJI,A)):(_=p(a.BYTE_KANJI,t.BYTE,A),W=[]),x.concat(I,_,W).sort(function(U,te){return U.index-te.index}).map(function(U){return{data:U.data,mode:U.mode,length:U.length}})}function w(A,x){switch(x){case t.NUMERIC:return i.getBitsLength(A);case t.ALPHANUMERIC:return o.getBitsLength(A);case t.KANJI:return n.getBitsLength(A);case t.BYTE:return r.getBitsLength(A)}}function y(A){return A.reduce(function(x,I){const _=x.length-1>=0?x[x.length-1]:null;return _&&_.mode===I.mode?(x[x.length-1].data+=I.data,x):(x.push(I),x)},[])}function E(A){const x=[];for(let I=0;I<A.length;I++){const _=A[I];switch(_.mode){case t.NUMERIC:x.push([_,{data:_.data,mode:t.ALPHANUMERIC,length:_.length},{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.ALPHANUMERIC:x.push([_,{data:_.data,mode:t.BYTE,length:_.length}]);break;case t.KANJI:x.push([_,{data:_.data,mode:t.BYTE,length:u(_.data)}]);break;case t.BYTE:x.push([{data:_.data,mode:t.BYTE,length:u(_.data)}])}}return x}function S(A,x){const I={},_={start:{}};let W=["start"];for(let F=0;F<A.length;F++){const U=A[F],te=[];for(let oe=0;oe<U.length;oe++){const Z=U[oe],re=""+F+oe;te.push(re),I[re]={node:Z,lastCount:0},_[re]={};for(let Le=0;Le<W.length;Le++){const be=W[Le];I[be]&&I[be].node.mode===Z.mode?(_[be][re]=w(I[be].lastCount+Z.length,Z.mode)-w(I[be].lastCount,Z.mode),I[be].lastCount+=Z.length):(I[be]&&(I[be].lastCount=Z.length),_[be][re]=w(Z.length,Z.mode)+4+t.getCharCountIndicator(Z.mode,x))}}W=te}for(let F=0;F<W.length;F++)_[W[F]].end=0;return{map:_,table:I}}function $(A,x){let I;const _=t.getBestModeForData(A);if(I=t.from(x,_),I!==t.BYTE&&I.bit<_.bit)throw new Error('"'+A+'" cannot be encoded with mode '+t.toString(I)+`.
 Suggested mode is: `+t.toString(_));switch(I===t.KANJI&&!s.isKanjiModeEnabled()&&(I=t.BYTE),I){case t.NUMERIC:return new i(A);case t.ALPHANUMERIC:return new o(A);case t.KANJI:return new n(A);case t.BYTE:return new r(A)}}e.fromArray=function(x){return x.reduce(function(I,_){return typeof _=="string"?I.push($(_,null)):_.data&&I.push($(_.data,_.mode)),I},[])},e.fromString=function(x,I){const _=f(x,s.isKanjiModeEnabled()),W=E(_),F=S(W,I),U=c.find_path(F.map,"start","end"),te=[];for(let oe=1;oe<U.length-1;oe++)te.push(F.table[U[oe]].node);return e.fromArray(y(te))},e.rawSplit=function(x){return e.fromArray(f(x,s.isKanjiModeEnabled()))}})($s);const Oo=Pe,qo=No,Td=cd,Nd=dd,Pd=fs,Ld=ms,br=gs,yr=Po,Od=hd,fo=ys,jd=xs,Wd=Dt,Ko=$s;function Bd(e,t){const i=e.size,o=Ld.getPositions(t);for(let r=0;r<o.length;r++){const n=o[r][0],a=o[r][1];for(let s=-1;s<=7;s++)if(!(n+s<=-1||i<=n+s))for(let c=-1;c<=7;c++)a+c<=-1||i<=a+c||(s>=0&&s<=6&&(c===0||c===6)||c>=0&&c<=6&&(s===0||s===6)||s>=2&&s<=4&&c>=2&&c<=4?e.set(n+s,a+c,!0,!0):e.set(n+s,a+c,!1,!0))}}function Dd(e){const t=e.size;for(let i=8;i<t-8;i++){const o=i%2===0;e.set(i,6,o,!0),e.set(6,i,o,!0)}}function Md(e,t){const i=Pd.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],n=i[o][1];for(let a=-2;a<=2;a++)for(let s=-2;s<=2;s++)a===-2||a===2||s===-2||s===2||a===0&&s===0?e.set(r+a,n+s,!0,!0):e.set(r+a,n+s,!1,!0)}}function zd(e,t){const i=e.size,o=fo.getEncodedBits(t);let r,n,a;for(let s=0;s<18;s++)r=Math.floor(s/3),n=s%3+i-8-3,a=(o>>s&1)===1,e.set(r,n,a,!0),e.set(n,r,a,!0)}function Go(e,t,i){const o=e.size,r=jd.getEncodedBits(t,i);let n,a;for(n=0;n<15;n++)a=(r>>n&1)===1,n<6?e.set(n,8,a,!0):n<8?e.set(n+1,8,a,!0):e.set(o-15+n,8,a,!0),n<8?e.set(8,o-n-1,a,!0):n<9?e.set(8,15-n-1+1,a,!0):e.set(8,15-n-1,a,!0);e.set(o-8,8,1,!0)}function Ud(e,t){const i=e.size;let o=-1,r=i-1,n=7,a=0;for(let s=i-1;s>0;s-=2)for(s===6&&s--;;){for(let c=0;c<2;c++)if(!e.isReserved(r,s-c)){let u=!1;a<t.length&&(u=(t[a]>>>n&1)===1),e.set(r,s-c,u),n--,n===-1&&(a++,n=7)}if(r+=o,r<0||i<=r){r-=o,o=-o;break}}}function Vd(e,t,i){const o=new Td;i.forEach(function(c){o.put(c.mode.bit,4),o.put(c.getLength(),Wd.getCharCountIndicator(c.mode,e)),c.write(o)});const r=Oo.getSymbolTotalCodewords(e),n=yr.getTotalCodewordsCount(e,t),a=(r-n)*8;for(o.getLengthInBits()+4<=a&&o.put(0,4);o.getLengthInBits()%8!==0;)o.putBit(0);const s=(a-o.getLengthInBits())/8;for(let c=0;c<s;c++)o.put(c%2?17:236,8);return Fd(o,e,t)}function Fd(e,t,i){const o=Oo.getSymbolTotalCodewords(t),r=yr.getTotalCodewordsCount(t,i),n=o-r,a=yr.getBlocksCount(t,i),s=o%a,c=a-s,u=Math.floor(o/a),p=Math.floor(n/a),f=p+1,w=u-p,y=new Od(w);let E=0;const S=new Array(a),$=new Array(a);let A=0;const x=new Uint8Array(e.buffer);for(let U=0;U<a;U++){const te=U<c?p:f;S[U]=x.slice(E,E+te),$[U]=y.encode(S[U]),E+=te,A=Math.max(A,te)}const I=new Uint8Array(o);let _=0,W,F;for(W=0;W<A;W++)for(F=0;F<a;F++)W<S[F].length&&(I[_++]=S[F][W]);for(W=0;W<w;W++)for(F=0;F<a;F++)I[_++]=$[F][W];return I}function Hd(e,t,i,o){let r;if(Array.isArray(e))r=Ko.fromArray(e);else if(typeof e=="string"){let u=t;if(!u){const p=Ko.rawSplit(e);u=fo.getBestVersionForData(p,i)}r=Ko.fromString(e,u||40)}else throw new Error("Invalid data");const n=fo.getBestVersionForData(r,i);if(!n)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=n;else if(t<n)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+n+`.
`);const a=Vd(t,i,r),s=Oo.getSymbolSize(t),c=new Nd(s);return Bd(c,t),Dd(c),Md(c,t),Go(c,i,0),t>=7&&zd(c,t),Ud(c,a),isNaN(o)&&(o=br.getBestMask(c,Go.bind(null,c,i))),br.applyMask(o,c),Go(c,i,o),{modules:c,version:t,errorCorrectionLevel:i,maskPattern:o,segments:r}}hs.create=function(t,i){if(typeof t>"u"||t==="")throw new Error("No input text");let o=qo.M,r,n;return typeof i<"u"&&(o=qo.from(i.errorCorrectionLevel,qo.M),r=fo.from(i.version),n=br.from(i.maskPattern),i.toSJISFunc&&Oo.setToSJISFunction(i.toSJISFunc)),Hd(t,r,o,n)};var Ss={},Qr={};(function(e){function t(i){if(typeof i=="number"&&(i=i.toString()),typeof i!="string")throw new Error("Color should be defined as hex string");let o=i.slice().replace("#","").split("");if(o.length<3||o.length===5||o.length>8)throw new Error("Invalid hex color: "+i);(o.length===3||o.length===4)&&(o=Array.prototype.concat.apply([],o.map(function(n){return[n,n]}))),o.length===6&&o.push("F","F");const r=parseInt(o.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:r&255,hex:"#"+o.slice(0,6).join("")}}e.getOptions=function(o){o||(o={}),o.color||(o.color={});const r=typeof o.margin>"u"||o.margin===null||o.margin<0?4:o.margin,n=o.width&&o.width>=21?o.width:void 0,a=o.scale||4;return{width:n,scale:n?4:a,margin:r,color:{dark:t(o.color.dark||"#000000ff"),light:t(o.color.light||"#ffffffff")},type:o.type,rendererOpts:o.rendererOpts||{}}},e.getScale=function(o,r){return r.width&&r.width>=o+r.margin*2?r.width/(o+r.margin*2):r.scale},e.getImageWidth=function(o,r){const n=e.getScale(o,r);return Math.floor((o+r.margin*2)*n)},e.qrToImageData=function(o,r,n){const a=r.modules.size,s=r.modules.data,c=e.getScale(a,n),u=Math.floor((a+n.margin*2)*c),p=n.margin*c,f=[n.color.light,n.color.dark];for(let w=0;w<u;w++)for(let y=0;y<u;y++){let E=(w*u+y)*4,S=n.color.light;if(w>=p&&y>=p&&w<u-p&&y<u-p){const $=Math.floor((w-p)/c),A=Math.floor((y-p)/c);S=f[s[$*a+A]?1:0]}o[E++]=S.r,o[E++]=S.g,o[E++]=S.b,o[E]=S.a}}})(Qr);(function(e){const t=Qr;function i(r,n,a){r.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=a,n.width=a,n.style.height=a+"px",n.style.width=a+"px"}function o(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(n,a,s){let c=s,u=a;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),a||(u=o()),c=t.getOptions(c);const p=t.getImageWidth(n.modules.size,c),f=u.getContext("2d"),w=f.createImageData(p,p);return t.qrToImageData(w.data,n,c),i(f,u,p),f.putImageData(w,0,0),u},e.renderToDataURL=function(n,a,s){let c=s;typeof c>"u"&&(!a||!a.getContext)&&(c=a,a=void 0),c||(c={});const u=e.render(n,a,c),p=c.type||"image/png",f=c.rendererOpts||{};return u.toDataURL(p,f.quality)}})(Ss);var Es={};const Zd=Qr;function ka(e,t){const i=e.a/255,o=t+'="'+e.hex+'"';return i<1?o+" "+t+'-opacity="'+i.toFixed(2).slice(1)+'"':o}function Yo(e,t,i){let o=e+t;return typeof i<"u"&&(o+=" "+i),o}function qd(e,t,i){let o="",r=0,n=!1,a=0;for(let s=0;s<e.length;s++){const c=Math.floor(s%t),u=Math.floor(s/t);!c&&!n&&(n=!0),e[s]?(a++,s>0&&c>0&&e[s-1]||(o+=n?Yo("M",c+i,.5+u+i):Yo("m",r,0),r=0,n=!1),c+1<t&&e[s+1]||(o+=Yo("h",a),a=0)):r++}return o}Es.render=function(t,i,o){const r=Zd.getOptions(i),n=t.modules.size,a=t.modules.data,s=n+r.margin*2,c=r.color.light.a?"<path "+ka(r.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",u="<path "+ka(r.color.dark,"stroke")+' d="'+qd(a,n,r.margin)+'"/>',p='viewBox="0 0 '+s+" "+s+'"',w='<svg xmlns="http://www.w3.org/2000/svg" '+(r.width?'width="'+r.width+'" height="'+r.width+'" ':"")+p+' shape-rendering="crispEdges">'+c+u+`</svg>
`;return typeof o=="function"&&o(null,w),w};const Kd=sd,vr=hs,_s=Ss,Gd=Es;function Jr(e,t,i,o,r){const n=[].slice.call(arguments,1),a=n.length,s=typeof n[a-1]=="function";if(!s&&!Kd())throw new Error("Callback required as last argument");if(s){if(a<2)throw new Error("Too few arguments provided");a===2?(r=i,i=t,t=o=void 0):a===3&&(t.getContext&&typeof r>"u"?(r=o,o=void 0):(r=o,o=i,i=t,t=void 0))}else{if(a<1)throw new Error("Too few arguments provided");return a===1?(i=t,t=o=void 0):a===2&&!t.getContext&&(o=i,i=t,t=void 0),new Promise(function(c,u){try{const p=vr.create(i,o);c(e(p,t,o))}catch(p){u(p)}})}try{const c=vr.create(i,o);r(null,e(c,t,o))}catch(c){r(c)}}Wn.create=vr.create;Wn.toCanvas=Jr.bind(null,_s.render);Wn.toDataURL=Jr.bind(null,_s.renderToDataURL);Wn.toString=Jr.bind(null,function(e,t,i){return Gd.render(e,i)});const Yd=.1,Sa=2.5,lt=7;function Xo(e,t,i){return e===t?!1:(e-t<0?t-e:e-t)<=i+Yd}function Xd(e,t){const i=Array.prototype.slice.call(Wn.create(e,{errorCorrectionLevel:t}).modules.data,0),o=Math.sqrt(i.length);return i.reduce((r,n,a)=>(a%o===0?r.push([n]):r[r.length-1].push(n))&&r,[])}const Qd={generate({uri:e,size:t,logoSize:i,padding:o=8,dotColor:r="var(--apkt-colors-black)"}){const a=[],s=Xd(e,"Q"),c=(t-2*o)/s.length,u=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];u.forEach(({x:S,y:$})=>{const A=(s.length-lt)*c*S+o,x=(s.length-lt)*c*$+o,I=.45;for(let _=0;_<u.length;_+=1){const W=c*(lt-_*2);a.push(j`
            <rect
              fill=${_===2?"var(--apkt-colors-black)":"var(--apkt-colors-white)"}
              width=${_===0?W-10:W}
              rx= ${_===0?(W-10)*I:W*I}
              ry= ${_===0?(W-10)*I:W*I}
              stroke=${r}
              stroke-width=${_===0?10:0}
              height=${_===0?W-10:W}
              x= ${_===0?x+c*_+10/2:x+c*_}
              y= ${_===0?A+c*_+10/2:A+c*_}
            />
          `)}});const p=Math.floor((i+25)/c),f=s.length/2-p/2,w=s.length/2+p/2-1,y=[];s.forEach((S,$)=>{S.forEach((A,x)=>{if(s[$][x]&&!($<lt&&x<lt||$>s.length-(lt+1)&&x<lt||$<lt&&x>s.length-(lt+1))&&!($>f&&$<w&&x>f&&x<w)){const I=$*c+c/2+o,_=x*c+c/2+o;y.push([I,_])}})});const E={};return y.forEach(([S,$])=>{var A;E[S]?(A=E[S])==null||A.push($):E[S]=[$]}),Object.entries(E).map(([S,$])=>{const A=$.filter(x=>$.every(I=>!Xo(x,I,c)));return[Number(S),A]}).forEach(([S,$])=>{$.forEach(A=>{a.push(j`<circle cx=${S} cy=${A} fill=${r} r=${c/Sa} />`)})}),Object.entries(E).filter(([S,$])=>$.length>1).map(([S,$])=>{const A=$.filter(x=>$.some(I=>Xo(x,I,c)));return[Number(S),A]}).map(([S,$])=>{$.sort((x,I)=>x<I?-1:1);const A=[];for(const x of $){const I=A.find(_=>_.some(W=>Xo(x,W,c)));I?I.push(x):A.push([x])}return[S,A.map(x=>[x[0],x[x.length-1]])]}).forEach(([S,$])=>{$.forEach(([A,x])=>{a.push(j`
              <line
                x1=${S}
                x2=${S}
                y1=${A}
                y2=${x}
                stroke=${r}
                stroke-width=${c/(Sa/2)}
                stroke-linecap="round"
              />
            `)})}),a}},Jd=N`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: 100%;
    background-color: ${({colors:e})=>e.white};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
  }

  :host {
    border-radius: ${({borderRadius:e})=>e[4]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([data-clear='true']) > wui-icon {
    display: none;
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    box-shadow: inset 0 0 0 4px ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }

  wui-icon > svg {
    width: inherit;
    height: inherit;
  }
`;var Mt=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let it=class extends k{constructor(){super(...arguments),this.uri="",this.size=500,this.theme="dark",this.imageSrc=void 0,this.alt=void 0,this.arenaClear=void 0,this.farcaster=void 0}render(){return this.dataset.theme=this.theme,this.dataset.clear=String(this.arenaClear),l`<wui-flex
      alignItems="center"
      justifyContent="center"
      class="wui-qr-code"
      direction="column"
      gap="4"
      width="100%"
      style="height: 100%"
    >
      ${this.templateVisual()} ${this.templateSvg()}
    </wui-flex>`}templateSvg(){return j`
      <svg viewBox="0 0 ${this.size} ${this.size}" width="100%" height="100%">
        ${Qd.generate({uri:this.uri,size:this.size,logoSize:this.arenaClear?0:this.size/4})}
      </svg>
    `}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:this.farcaster?l`<wui-icon
        class="farcaster"
        size="inherit"
        color="inherit"
        name="farcaster"
      ></wui-icon>`:l`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};it.styles=[B,Jd];Mt([d()],it.prototype,"uri",void 0);Mt([d({type:Number})],it.prototype,"size",void 0);Mt([d()],it.prototype,"theme",void 0);Mt([d()],it.prototype,"imageSrc",void 0);Mt([d()],it.prototype,"alt",void 0);Mt([d({type:Boolean})],it.prototype,"arenaClear",void 0);Mt([d({type:Boolean})],it.prototype,"farcaster",void 0);it=Mt([b("wui-qr-code")],it);const eu=N`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var As=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let mo=class extends le{constructor(){super(),this.basic=!1}firstUpdated(){var t,i,o;this.basic||V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:C.state.view}})}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.unsubscribe)==null||t.forEach(i=>i())}render(){return this.onRenderProxy(),l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","5","5","5"]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.wallet?this.wallet.name:void 0;M.setWcLinking(void 0),M.setRecentWallet(this.wallet);const i=Kn.state.themeVariables["--apkt-qr-color"]??Kn.state.themeVariables["--w3m-qr-color"];return l` <wui-qr-code
      theme=${Kn.state.themeMode}
      uri=${this.uri}
      imageSrc=${R(Q.getWalletImage(this.wallet))}
      color=${R(i)}
      alt=${R(t)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){const t=!this.uri||!this.ready;return l`<wui-button
      .disabled=${t}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};mo.styles=eu;As([d({type:Boolean})],mo.prototype,"basic",void 0);mo=As([b("w3m-connecting-wc-qrcode")],mo);var tu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ea=class extends k{constructor(){var t,i,o;if(super(),this.wallet=(t=C.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser",displayIndex:(i=this.wallet)==null?void 0:i.display_index,walletRank:(o=this.wallet)==null?void 0:o.order,view:C.state.view}})}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${R(Q.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ea=tu([b("w3m-connecting-wc-unsupported")],Ea);var Is=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let xr=class extends le{constructor(){var t,i;if(super(),this.isLoading=!0,!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel=ue.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon="externalLink",this.updateLoadingState(),this.unsubscribe.push(M.subscribeKey("wcUri",()=>{this.updateLoadingState()})),V.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web",displayIndex:(t=this.wallet)==null?void 0:t.display_index,walletRank:(i=this.wallet)==null?void 0:i.order,view:C.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:i,name:o}=this.wallet,{redirect:r,href:n}=P.formatUniversalUrl(i,this.uri);M.setWcLinking({name:o,href:n}),M.setRecentWallet(this.wallet),P.openHref(r,"_blank")}catch{this.error=!0}}};Is([m()],xr.prototype,"isLoading",void 0);xr=Is([b("w3m-connecting-wc-web")],xr);const iu=N`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`;var wi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let nt=class extends k{constructor(){var t;super(),this.wallet=(t=C.state.data)==null?void 0:t.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!T.state.siwx,this.remoteFeatures=T.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(T.subscribeKey("remoteFeatures",i=>this.remoteFeatures=i))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return T.state.enableMobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),l`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){var t;return!((t=this.remoteFeatures)!=null&&t.reownBranding)||!this.displayBranding?null:l`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(t=!1){var i,o;if(!(this.platform==="browser"||T.state.manualWCControl&&!t))try{const{wcPairingExpiry:r,status:n}=M.state,{redirectView:a}=C.state.data??{};if(t||T.state.enableEmbedded||P.isPairingExpired(r)||n==="connecting"){const s=M.getConnections(g.state.activeChain),c=(i=this.remoteFeatures)==null?void 0:i.multiWallet,u=s.length>0;await M.connectWalletConnect({cache:"never"}),this.isSiwxEnabled||(u&&c?(C.replace("ProfileWallets"),Y.showSuccess("New Wallet Added")):a?C.replace(a):ce.close())}}catch(r){if(r instanceof Error&&r.message.includes("An error occurred when attempting to switch chain")&&!T.state.enableNetworkSwitch&&g.state.activeChain){g.setActiveCaipNetwork(yl.getUnsupportedNetwork(`${g.state.activeChain}:${(o=g.state.activeCaipNetwork)==null?void 0:o.id}`)),g.showUnsupportedChainUI();return}r instanceof Wr&&r.originalName===Br.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?V.sendEvent({type:"track",event:"USER_REJECTED",properties:{message:r.message}}):V.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(r==null?void 0:r.message)??"Unknown"}}),M.setWcError(!0),Y.showError(r.message??"Connection error"),M.resetWcConnection(),C.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push("qrcode"),this.platform="qrcode";return}if(this.platform)return;const{mobile_link:t,desktop_link:i,webapp_link:o,injected:r,rdns:n}=this.wallet,a=r==null?void 0:r.map(({injected_id:S})=>S).filter(Boolean),s=[...n?[n]:a??[]],c=T.state.isUniversalProvider?!1:s.length,u=t,p=o,f=M.checkInstalled(s),w=c&&f,y=i&&!P.isMobile();w&&!g.state.noAdapters&&this.platforms.push("browser"),u&&this.platforms.push(P.isMobile()?"mobile":"qrcode"),p&&this.platforms.push("web"),y&&this.platforms.push("desktop");const E=vl.isCustomDeeplinkWallet(this.wallet.id,g.state.activeChain);!w&&c&&!g.state.noAdapters&&!E&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return l`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"web":return l`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case"desktop":return l`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"mobile":return l`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return l`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return l`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?l`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var o;const i=(o=this.shadowRoot)==null?void 0:o.querySelector("div");i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};nt.styles=iu;wi([m()],nt.prototype,"platform",void 0);wi([m()],nt.prototype,"platforms",void 0);wi([m()],nt.prototype,"isSiwxEnabled",void 0);wi([m()],nt.prototype,"remoteFeatures",void 0);wi([d({type:Boolean})],nt.prototype,"displayBranding",void 0);wi([d({type:Boolean})],nt.prototype,"basic",void 0);nt=wi([b("w3m-connecting-wc-view")],nt);var ea=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let cn=class extends k{constructor(){super(),this.unsubscribe=[],this.isMobile=P.isMobile(),this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(T.subscribeKey("remoteFeatures",t=>this.remoteFeatures=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){if(this.isMobile){const{featured:t,recommended:i}=J.state,{customWallets:o}=T.state,r=dt.getRecentWallets(),n=t.length||i.length||(o==null?void 0:o.length)||r.length;return l`<wui-flex flexDirection="column" gap="2" .margin=${["1","3","3","3"]}>
        ${n?l`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return l`<wui-flex flexDirection="column" .padding=${["0","0","4","0"]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${["0","3","0","3"]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){var t;return(t=this.remoteFeatures)!=null&&t.reownBranding?l` <wui-flex flexDirection="column" .padding=${["1","0","1","0"]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};ea([m()],cn.prototype,"isMobile",void 0);ea([m()],cn.prototype,"remoteFeatures",void 0);cn=ea([b("w3m-connecting-wc-basic-view")],cn);const nu=ae`
  .continue-button-container {
    width: 100%;
  }
`;var Rs=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let dn=class extends k{constructor(){super(...arguments),this.loading=!1}render(){return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${["0","0","4","0"]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{P.openHref(xl.URLS.FAQ,"_blank")}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return l` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${["0","6","0","6"]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return l`<wui-flex
      .padding=${["0","8","0","8"]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){C.push("RegisterAccountName"),V.sendEvent({type:"track",event:"OPEN_ENS_FLOW",properties:{isSmartAccount:St(g.state.activeChain)===Et.ACCOUNT_TYPES.SMART_ACCOUNT}})}};dn.styles=nu;Rs([m()],dn.prototype,"loading",void 0);dn=Rs([b("w3m-choose-account-name-view")],dn);var ou=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Cr=class extends k{constructor(){var t;super(...arguments),this.wallet=(t=C.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return l`
      <wui-flex gap="2" flexDirection="column" .padding=${["3","3","4","3"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?l`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?l`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?l`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?l`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(t){t.href&&this.wallet&&(V.sendEvent({type:"track",event:"GET_WALLET",properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:t.type}}),P.openHref(t.href,"_blank"))}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:"chrome_store"})}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&this.openStore({href:this.wallet.app_store,type:"app_store"})}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&this.openStore({href:this.wallet.play_store,type:"play_store"})}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&this.openStore({href:this.wallet.homepage,type:"homepage"})}};Cr=ou([b("w3m-downloads-view")],Cr);var ru=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const au="https://walletconnect.com/explorer";let $r=class extends k{render(){return l`
      <wui-flex flexDirection="column" .padding=${["0","3","3","3"]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{P.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:i}=J.state,{customWallets:o}=T.state;return[...i,...o??[],...t].slice(0,4).map((n,a)=>l`
        <w3m-list-wallet
          displayIndex=${a}
          name=${n.name??"Unknown"}
          tagVariant="accent"
          size="sm"
          imageSrc=${R(Q.getWalletImage(n))}
          @click=${()=>{this.onWalletClick(n)}}
        ></w3m-list-wallet>
      `)}onWalletClick(t){V.sendEvent({type:"track",event:"GET_WALLET",properties:{name:t.name,walletRank:void 0,explorerId:t.id,type:"homepage"}}),P.openHref(t.homepage??au,"_blank")}};$r=ru([b("w3m-get-wallet-view")],$r);const su=j`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" fill="#F7931A"/>
  <g clip-path="url(#clip0_1045_17)">
    <path d="M63.0394 39.7409C58.7654 56.8839 41.4024 67.3169 24.2574 63.0419C7.11937 58.7679 -3.31363 41.4039 0.962367 24.2619C5.23437 7.11686 22.5974 -3.31714 39.7374 0.956863C56.8814 5.23086 67.3134 22.5969 63.0394 39.7409Z" fill="#F7931A"/>
    <path d="M46.1092 27.4409C46.7462 23.1829 43.5042 20.8939 39.0712 19.3669L40.5092 13.5989L36.9982 12.7239L35.5982 18.3399C34.6752 18.1099 33.7272 17.8929 32.7852 17.6779L34.1952 12.0249L30.6862 11.1499L29.2472 16.9159C28.4832 16.7419 27.7332 16.5699 27.0052 16.3889L27.0092 16.3709L22.1672 15.1619L21.2332 18.9119C21.2332 18.9119 23.8382 19.5089 23.7832 19.5459C25.2052 19.9009 25.4622 20.8419 25.4192 21.5879L23.7812 28.1589C23.8792 28.1839 24.0062 28.2199 24.1462 28.2759C24.0292 28.2469 23.9042 28.2149 23.7752 28.1839L21.4792 37.3889C21.3052 37.8209 20.8642 38.4689 19.8702 38.2229C19.9052 38.2739 17.3182 37.5859 17.3182 37.5859L15.5752 41.6049L20.1442 42.7439C20.9942 42.9569 21.8272 43.1799 22.6472 43.3899L21.1942 49.2239L24.7012 50.0989L26.1402 44.3269C27.0982 44.5869 28.0282 44.8269 28.9382 45.0529L27.5042 50.7979L31.0152 51.6729L32.4682 45.8499C38.4552 46.9829 42.9572 46.5259 44.8522 41.1109C46.3792 36.7509 44.7762 34.2359 41.6262 32.5959C43.9202 32.0669 45.6482 30.5579 46.1092 27.4409ZM38.0872 38.6899C37.0022 43.0499 29.6612 40.6929 27.2812 40.1019L29.2092 32.3729C31.5892 32.9669 39.2212 34.1429 38.0872 38.6899ZM39.1732 27.3779C38.1832 31.3439 32.0732 29.3289 30.0912 28.8349L31.8392 21.8249C33.8212 22.3189 40.2042 23.2409 39.1732 27.3779Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_1045_17">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,lu=j`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,cu=j`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,du=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,uu=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,hu=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,pu=j`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="64" height="64" rx="30" fill="#1DC956"/>
  <rect x="0.5" y="0.5" width="63" height="63" rx="29.5" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M32.4053 19.8031C35.3901 19.8031 38.0431 20.8349 40.1619 22.8247L45.9656 17.0211C42.4465 13.7416 37.8773 11.7333 32.4053 11.7333C24.4829 11.7333 17.6475 16.2841 14.3127 22.9168L21.056 28.1493C22.6589 23.359 27.136 19.8031 32.4053 19.8031Z" fill="#1DC956" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M32.4053 52.2667C37.8773 52.2667 42.465 50.4611 45.8182 47.3658L39.2407 42.2623C37.4351 43.4783 35.1321 44.2153 32.4053 44.2153C27.136 44.2153 22.6589 40.6594 21.056 35.8691L14.3127 41.1016C17.6475 47.7159 24.4829 52.2667 32.4053 52.2667Z" fill="#2BEE6C"/>
  <path d="M21.056 35.8507L19.5636 36.993L14.3127 41.0832M39.2407 42.2623L45.8182 47.3658C42.465 50.4611 37.8773 52.2667 32.4053 52.2667C24.4829 52.2667 17.6475 47.7159 14.3127 41.1016L21.056 35.8691C22.6589 40.6594 27.136 44.2153 32.4053 44.2153C35.1321 44.2153 37.4351 43.4783 39.2407 42.2623Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M51.8613 32.4606C51.8613 31.0235 51.7323 29.6417 51.4928 28.3151H32.4053V36.1638H43.3124C42.8334 38.688 41.3963 40.8252 39.2407 42.2623L45.8181 47.3658C49.6503 43.8283 51.8613 38.6327 51.8613 32.4606Z" fill="#1FAD7E" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  <path d="M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" fill="#86F999"/>
  <path d="M21.056 35.8691L14.3127 41.1016M21.056 35.8507C20.6507 34.6347 20.4111 33.345 20.4111 32C20.4111 30.655 20.6507 29.3653 21.056 28.1493L14.3127 22.9169C12.9309 25.6437 12.1387 28.7205 12.1387 32C12.1387 35.2795 12.9309 38.3564 14.3127 41.0831L19.5636 36.993L21.056 35.8507Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
`,fu=j`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,mu=j`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31636)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58318 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58318 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9269C60.4784 58.4159 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4159 2.1019 55.9269C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#794CFF"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M40 39.4595C44.7824 36.693 48 31.5222 48 25.6C48 16.7634 40.8366 9.59998 32 9.59998C23.1634 9.59998 16 16.7634 16 25.6C16 31.5222 19.2176 36.693 24 39.4595V45.8144H40V39.4595Z" fill="#906EF7"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#906EF7"/>
    <path d="M24 45.8144V39.4595C19.2176 36.693 16 31.5222 16 25.6C16 16.7634 23.1634 9.59998 32 9.59998C40.8366 9.59998 48 16.7634 48 25.6C48 31.5222 44.7824 36.693 40 39.4595V45.8144M24 45.8144H40M24 45.8144V49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 49.9689C24 51.8192 24 52.7444 24.3941 53.4353C24.6603 53.902 25.0469 54.2886 25.5136 54.5548C26.2046 54.9489 27.1297 54.9489 28.98 54.9489H35.02C36.8703 54.9489 37.7954 54.9489 38.4864 54.5548C38.9531 54.2886 39.3397 53.902 39.6059 53.4353C40 52.7444 40 51.8192 40 49.9689V45.8144H24V49.9689Z" fill="#643CDD" stroke="white" stroke-width="2" stroke-linejoin="round"/>
    <path d="M29.6735 26.9101V29.1109H34.0753V26.9101C34.0753 25.6945 35.0607 24.7092 36.2762 24.7092C37.4917 24.7092 38.4771 25.6945 38.4771 26.9101C38.4771 28.1256 37.4917 29.1109 36.2762 29.1109H34.0753H29.6735H27.4726C26.2571 29.1109 25.2717 28.1256 25.2717 26.9101C25.2717 25.6945 26.2571 24.7092 27.4726 24.7092C28.6881 24.7092 29.6735 25.6945 29.6735 26.9101Z" fill="#906EF7"/>
    <path d="M29.6735 45.3183V26.9101C29.6735 25.6945 28.6881 24.7092 27.4726 24.7092V24.7092C26.2571 24.7092 25.2717 25.6945 25.2717 26.9101V26.9101C25.2717 28.1256 26.2571 29.1109 27.4726 29.1109H36.2762C37.4917 29.1109 38.4771 28.1256 38.4771 26.9101V26.9101C38.4771 25.6945 37.4917 24.7092 36.2762 24.7092V24.7092C35.0607 24.7092 34.0753 25.6945 34.0753 26.9101V45.3183" stroke="white" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31636">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,gu=j`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,wu=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,bu=j`<svg width="40" height="42" viewBox="0 0 40 42" fill="none">
<path opacity="0.7" d="M19.9526 41.9076L7.3877 34.655V26.1226L19.9526 33.3751V41.9076Z" fill="url(#paint0_linear_2113_32117)"/>
<path opacity="0.7" d="M19.9521 41.9076L32.5171 34.655V26.1226L19.9521 33.3751V41.9076Z" fill="url(#paint1_linear_2113_32117)"/>
<path opacity="0.7" d="M39.9095 7.34521V21.8562L32.5166 26.1225V11.6114L39.9095 7.34521Z" fill="url(#paint2_linear_2113_32117)"/>
<path d="M39.9099 7.34536L27.345 0.0927734L19.9521 4.359L32.5171 11.6116L39.9099 7.34536Z" fill="url(#paint3_linear_2113_32117)"/>
<path d="M0 7.34536L12.5649 0.0927734L19.9519 4.359L7.387 11.6116L0 7.34536Z" fill="#F969D3"/>
<path opacity="0.7" d="M0 7.34521V21.8562L7.387 26.1225V11.6114L0 7.34521Z" fill="url(#paint4_linear_2113_32117)"/>
<defs>
<linearGradient id="paint0_linear_2113_32117" x1="18.6099" y1="41.8335" x2="7.73529" y2="8.31842" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
<linearGradient id="paint1_linear_2113_32117" x1="26.2346" y1="26.1226" x2="26.2346" y2="41.9076" gradientUnits="userSpaceOnUse">
<stop stop-color="#719DED"/>
<stop offset="1" stop-color="#2545BE"/>
</linearGradient>
<linearGradient id="paint2_linear_2113_32117" x1="36.213" y1="7.34521" x2="36.213" y2="26.1225" gradientUnits="userSpaceOnUse">
<stop stop-color="#93EBFF"/>
<stop offset="1" stop-color="#197DDB"/>
</linearGradient>
<linearGradient id="paint3_linear_2113_32117" x1="29.931" y1="0.0927734" x2="38.2156" y2="14.8448" gradientUnits="userSpaceOnUse">
<stop stop-color="#F969D3"/>
<stop offset="1" stop-color="#4F51C0"/>
</linearGradient>
<linearGradient id="paint4_linear_2113_32117" x1="18.1251" y1="44.2539" x2="-7.06792" y2="15.2763" gradientUnits="userSpaceOnUse">
<stop stop-color="#E98ADA"/>
<stop offset="1" stop-color="#7E4DBD"/>
</linearGradient>
</defs>
</svg>`,yu=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,vu=j`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,xu=j`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,Cu=j`<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
<g clip-path="url(#clip0_13859_31161)">
  <path d="M0 24.8995C0 15.6481 0 11.0223 1.97053 7.56763C3.3015 5.2342 5.23468 3.30101 7.56812 1.97004C11.0228 -0.000488281 15.6485 -0.000488281 24.9 -0.000488281H35.1C44.3514 -0.000488281 48.9772 -0.000488281 52.4319 1.97004C54.7653 3.30101 56.6985 5.2342 58.0295 7.56763C60 11.0223 60 15.6481 60 24.8995V35.0995C60 44.351 60 48.9767 58.0295 52.4314C56.6985 54.7648 54.7653 56.698 52.4319 58.029C48.9772 59.9995 44.3514 59.9995 35.1 59.9995H24.9C15.6485 59.9995 11.0228 59.9995 7.56812 58.029C5.23468 56.698 3.3015 54.7648 1.97053 52.4314C0 48.9767 0 44.351 0 35.0995V24.8995Z" fill="#EB8B47"/>
  <path d="M0.5 24.8995C0.5 20.2647 0.50047 16.8216 0.744315 14.1045C0.987552 11.3941 1.46987 9.45455 2.40484 7.81536C3.69145 5.55971 5.56019 3.69096 7.81585 2.40435C9.45504 1.46938 11.3946 0.987064 14.105 0.743826C16.8221 0.499981 20.2652 0.499512 24.9 0.499512H35.1C39.7348 0.499512 43.1779 0.499981 45.895 0.743826C48.6054 0.987064 50.545 1.46938 52.1841 2.40435C54.4398 3.69096 56.3086 5.55971 57.5952 7.81536C58.5301 9.45455 59.0124 11.3941 59.2557 14.1045C59.4995 16.8216 59.5 20.2647 59.5 24.8995V35.0995C59.5 39.7343 59.4995 43.1774 59.2557 45.8945C59.0124 48.6049 58.5301 50.5445 57.5952 52.1837C56.3086 54.4393 54.4398 56.3081 52.1841 57.5947C50.545 58.5296 48.6054 59.012 45.895 59.2552C43.1779 59.499 39.7348 59.4995 35.1 59.4995H24.9C20.2652 59.4995 16.8221 59.499 14.105 59.2552C11.3946 59.012 9.45504 58.5296 7.81585 57.5947C5.56019 56.3081 3.69145 54.4393 2.40484 52.1837C1.46987 50.5445 0.987552 48.6049 0.744315 45.8945C0.50047 43.1774 0.5 39.7343 0.5 35.0995V24.8995Z" stroke="#141414" stroke-opacity="0.1"/>
  <path d="M13 26.0335C13 21.7838 13 19.659 14.0822 18.1694C14.4318 17.6883 14.8548 17.2653 15.3359 16.9157C16.8255 15.8335 18.9503 15.8335 23.2 15.8335H36.8C41.0497 15.8335 43.1745 15.8335 44.6641 16.9157C45.1452 17.2653 45.5682 17.6883 45.9178 18.1694C47 19.659 47 21.7838 47 26.0335V33.9668C47 38.2165 47 40.3414 45.9178 41.831C45.5682 42.312 45.1452 42.7351 44.6641 43.0846C43.1745 44.1668 41.0497 44.1668 36.8 44.1668H23.2C18.9503 44.1668 16.8255 44.1668 15.3359 43.0846C14.8548 42.7351 14.4318 42.312 14.0822 41.831C13 40.3414 13 38.2165 13 33.9668V26.0335Z" fill="#FF974C" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M39.5 36.667H36.6666" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M45.2 23.0645H14.8C14.0501 23.0645 13.6751 23.0645 13.4122 23.2554C13.3273 23.3171 13.2527 23.3918 13.191 23.4767C13 23.7395 13 24.1145 13 24.8645V27.2645C13 28.0144 13 28.3894 13.191 28.6522C13.2527 28.7371 13.3273 28.8118 13.4122 28.8735C13.6751 29.0645 14.0501 29.0645 14.8 29.0645H45.2C45.9499 29.0645 46.3249 29.0645 46.5878 28.8735C46.6727 28.8118 46.7473 28.7371 46.809 28.6522C47 28.3894 47 28.0144 47 27.2645V24.8645C47 24.1145 47 23.7395 46.809 23.4767C46.7473 23.3918 46.6727 23.3171 46.5878 23.2554C46.3249 23.0645 45.9499 23.0645 45.2 23.0645Z" fill="white" fill-opacity="0.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
  <clipPath id="clip0_13859_31161">
    <rect width="60" height="60" fill="white"/>
  </clipPath>
</defs>
</svg>`,$u=j`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_241_31635)">
    <path d="M0 26.5595C0 16.6913 0 11.7572 2.1019 8.07217C3.5216 5.58317 5.58366 3.52111 8.07266 2.10141C11.7577 -0.000488281 16.6918 -0.000488281 26.56 -0.000488281H37.44C47.3082 -0.000488281 52.2423 -0.000488281 55.9273 2.10141C58.4163 3.52111 60.4784 5.58317 61.8981 8.07217C64 11.7572 64 16.6913 64 26.5595V37.4395C64 47.3077 64 52.2418 61.8981 55.9268C60.4784 58.4158 58.4163 60.4779 55.9273 61.8976C52.2423 63.9995 47.3082 63.9995 37.44 63.9995H26.56C16.6918 63.9995 11.7577 63.9995 8.07266 61.8976C5.58366 60.4779 3.5216 58.4158 2.1019 55.9268C0 52.2418 0 47.3077 0 37.4395V26.5595Z" fill="#EB8B47"/>
    <path d="M0.5 26.5595C0.5 21.6163 0.50047 17.942 0.760736 15.0418C1.02039 12.1485 1.53555 10.0742 2.53621 8.3199C3.91155 5.90869 5.90917 3.91106 8.32039 2.53572C10.0747 1.53506 12.1489 1.01991 15.0423 0.760247C17.9425 0.499981 21.6168 0.499512 26.56 0.499512H37.44C42.3832 0.499512 46.0575 0.499981 48.9577 0.760247C51.8511 1.01991 53.9253 1.53506 55.6796 2.53572C58.0908 3.91106 60.0885 5.90869 61.4638 8.3199C62.4645 10.0742 62.9796 12.1485 63.2393 15.0418C63.4995 17.942 63.5 21.6163 63.5 26.5595V37.4395C63.5 42.3827 63.4995 46.057 63.2393 48.9572C62.9796 51.8506 62.4645 53.9248 61.4638 55.6791C60.0885 58.0903 58.0908 60.088 55.6796 61.4633C53.9253 62.464 51.8511 62.9791 48.9577 63.2388C46.0575 63.499 42.3832 63.4995 37.44 63.4995H26.56C21.6168 63.4995 17.9425 63.499 15.0423 63.2388C12.1489 62.9791 10.0747 62.464 8.32039 61.4633C5.90917 60.088 3.91155 58.0903 2.53621 55.6791C1.53555 53.9248 1.02039 51.8506 0.760736 48.9572C0.50047 46.057 0.5 42.3827 0.5 37.4395V26.5595Z" stroke="#141414" stroke-opacity="0.1"/>
    <path d="M28.1042 49.2329L13.1024 51.2077L15.0772 36.2059L37.1015 14.1815C39.2441 12.039 40.3154 10.9677 41.5718 10.624C42.4205 10.3918 43.3159 10.3918 44.1645 10.624C45.421 10.9677 46.4922 12.039 48.6348 14.1815L50.1286 15.6753C52.2711 17.8179 53.3424 18.8891 53.6861 20.1456C53.9183 20.9942 53.9183 21.8896 53.6861 22.7383C53.3424 23.9947 52.2711 25.066 50.1286 27.2086L28.1042 49.2329Z" fill="#FF974C" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M38.5962 20.5376L22.4199 36.7139" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M43.7727 25.714L27.5964 41.8903" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M22.3703 36.7635C19.3258 39.808 16.0198 36.6395 16.2616 35.0324" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5466 41.9399C24.5034 44.9831 28.155 48.7098 29.2738 48.0475" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M27.5468 41.9398C23.428 46.0586 18.2516 40.8822 22.3704 36.7634" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M15.8191 50.5214C15.4711 49.5823 14.728 48.8392 13.7889 48.4912" stroke="#E4E7E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M49.2862 29.5805L34.7275 15.0219" stroke="#E4E7E7" stroke-width="2" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_241_31635">
      <rect width="64" height="64" fill="white"/>
    </clipPath>
  </defs>
</svg>
`,ku=j`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,Su=j`<svg fill="none" viewBox="0 0 80 80">
  <g clip-path="url(#a)">
    <path fill="url(#b)" d="M40 80a40 40 0 1 0 0-80 40 40 0 0 0 0 80Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M79.5 40a39.5 39.5 0 1 1-79 0 39.5 39.5 0 0 1 79 0Z"
    />
    <path
      fill="#fff"
      d="m62.62 51.54-7.54 7.91a1.75 1.75 0 0 1-1.29.55H18.02a.9.9 0 0 1-.8-.52.84.84 0 0 1 .16-.92l7.55-7.92a1.75 1.75 0 0 1 1.28-.55h35.77a.87.87 0 0 1 .8.52.84.84 0 0 1-.16.93Zm-7.54-15.95a1.75 1.75 0 0 0-1.29-.54H18.02a.89.89 0 0 0-.8.51.84.84 0 0 0 .16.93l7.55 7.92a1.75 1.75 0 0 0 1.28.54h35.77a.89.89 0 0 0 .8-.51.84.84 0 0 0-.16-.93l-7.54-7.92ZM18.02 29.9h35.77a1.79 1.79 0 0 0 1.29-.54l7.54-7.92a.85.85 0 0 0 .16-.93.87.87 0 0 0-.8-.51H26.21a1.79 1.79 0 0 0-1.28.54l-7.55 7.92a.85.85 0 0 0-.16.93.89.89 0 0 0 .8.52Z"
    />
  </g>
  <defs>
    <linearGradient id="b" x1="6.75" x2="80.68" y1="81.91" y2="7.37" gradientUnits="userSpaceOnUse">
      <stop offset=".08" stop-color="#9945FF" />
      <stop offset=".3" stop-color="#8752F3" />
      <stop offset=".5" stop-color="#5497D5" />
      <stop offset=".6" stop-color="#43B4CA" />
      <stop offset=".72" stop-color="#28E0B9" />
      <stop offset=".97" stop-color="#19FB9B" />
    </linearGradient>
    <clipPath id="a"><path fill="#fff" d="M0 0h80v80H0z" /></clipPath>
  </defs>
</svg> `,Eu=j`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,_u=ae`
  :host {
    display: block;
    width: var(--local-size);
    height: var(--local-size);
  }

  :host svg {
    width: 100%;
    height: 100%;
  }
`;var ta=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Au={browser:lu,dao:cu,defi:du,defiAlt:uu,eth:hu,layers:fu,lock:gu,login:wu,network:yu,nft:vu,noun:xu,profile:ku,system:Eu,meld:bu,onrampCard:Cu,google:pu,pencil:$u,lightbulb:mu,solana:Su,ton:qa,bitcoin:su};let un=class extends k{constructor(){super(...arguments),this.name="browser",this.size="md"}render(){return this.style.cssText=`
       --local-size: var(--apkt-visual-size-${this.size});
   `,l`${Au[this.name]}`}};un.styles=[B,_u];ta([d()],un.prototype,"name",void 0);ta([d()],un.prototype,"size",void 0);un=ta([b("wui-visual")],un);var Ts=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let kr=class extends k{constructor(){super(...arguments),this.data=[]}render(){return l`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(t=>l`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${t.images.map(i=>l`<wui-visual size="sm" name=${i}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${t.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${t.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Ts([d({type:Array})],kr.prototype,"data",void 0);kr=Ts([b("w3m-help-widget")],kr);var Iu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Ru=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let Sr=class extends k{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Ru}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){V.sendEvent({type:"track",event:"CLICK_GET_WALLET_HELP"}),C.push("GetWallet")}};Sr=Iu([b("w3m-what-is-a-wallet-view")],Sr);const Tu=N`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`;var Ns=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let hn=class extends k{constructor(){super(),this.unsubscribe=[],this.checked=Ft.state.isLegalCheckboxChecked,this.unsubscribe.push(Ft.subscribeKey("isLegalCheckboxChecked",t=>{this.checked=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var c;const{termsConditionsUrl:t,privacyPolicyUrl:i}=T.state,o=(c=T.state.features)==null?void 0:c.legalCheckbox,n=!!(t||i)&&!!o,a=n&&!this.checked,s=a?-1:void 0;return l`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${n?["0","3","3","3"]:"3"}
        gap="2"
        class=${R(a?"disabled":void 0)}
      >
        <w3m-wallet-login-list tabIdx=${R(s)}></w3m-wallet-login-list>
      </wui-flex>
    `}};hn.styles=Tu;Ns([m()],hn.prototype,"checked",void 0);hn=Ns([b("w3m-connect-wallets-view")],hn);const Nu=N`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var Pu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Er=class extends k{render(){return l`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Er.styles=[B,Nu];Er=Pu([b("wui-loading-hexagon")],Er);const Lu=j`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,Ou=j`
  <svg fill="none" viewBox="0 0 36 40">
    <path
      d="M15.4 2.1a5.21 5.21 0 0 1 5.2 0l11.61 6.7a5.21 5.21 0 0 1 2.61 4.52v13.4c0 1.87-1 3.59-2.6 4.52l-11.61 6.7c-1.62.93-3.6.93-5.22 0l-11.6-6.7a5.21 5.21 0 0 1-2.61-4.51v-13.4c0-1.87 1-3.6 2.6-4.52L15.4 2.1Z"
    />
  </svg>
`,ju=N`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  :host([data-round='true']) {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: 100%;
    outline: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  svg > path {
    stroke: var(--local-stroke);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var bi=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let wt=class extends k{constructor(){super(...arguments),this.size="md",this.name="uknown",this.networkImagesBySize={sm:Ou,md:ns,lg:Lu},this.selected=!1,this.round=!1}render(){const t={sm:"4",md:"6",lg:"10"};return this.round?(this.dataset.round="true",this.style.cssText=`
      --local-width: var(--apkt-spacing-10);
      --local-height: var(--apkt-spacing-10);
      --local-icon-size: var(--apkt-spacing-4);
    `):this.style.cssText=`

      --local-path: var(--apkt-path-network-${this.size});
      --local-width:  var(--apkt-width-network-${this.size});
      --local-height:  var(--apkt-height-network-${this.size});
      --local-icon-size:  var(--apkt-spacing-${t[this.size]});
    `,l`${this.templateVisual()} ${this.svgTemplate()} `}svgTemplate(){return this.round?null:this.networkImagesBySize[this.size]}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:l`<wui-icon size="inherit" color="default" name="networkPlaceholder"></wui-icon>`}};wt.styles=[B,ju];bi([d()],wt.prototype,"size",void 0);bi([d()],wt.prototype,"name",void 0);bi([d({type:Object})],wt.prototype,"networkImagesBySize",void 0);bi([d()],wt.prototype,"imageSrc",void 0);bi([d({type:Boolean})],wt.prototype,"selected",void 0);bi([d({type:Boolean})],wt.prototype,"round",void 0);wt=bi([b("wui-network-image")],wt);const Wu=ae`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var ia=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Li=class extends k{constructor(){var t;super(),this.network=(t=C.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.getLabel(),i=this.getSubLabel();return l`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","10","5"]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${R(Q.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:l`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${t}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${i}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){const t=O.getConnectorId(g.state.activeChain);return O.getAuthConnector()&&t===q.CONNECTOR_ID.AUTH?"":this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet"}getLabel(){var o;const t=O.getConnectorId(g.state.activeChain);return O.getAuthConnector()&&t===q.CONNECTOR_ID.AUTH?`Switching to ${((o=this.network)==null?void 0:o.name)??"Unknown"} network...`:this.error?"Switch declined":"Approve in wallet"}onShowRetry(){var t;if(this.error&&!this.showRetry){this.showRetry=!0;const i=(t=this.shadowRoot)==null?void 0:t.querySelector("wui-button");i==null||i.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){var t;try{this.error=!1,g.state.activeChain!==((t=this.network)==null?void 0:t.chainNamespace)&&g.setIsSwitchingNamespace(!0),this.network&&(await g.switchActiveNetwork(this.network),await nr.isAuthenticated()&&C.goBack())}catch{this.error=!0}}};Li.styles=Wu;ia([m()],Li.prototype,"showRetry",void 0);ia([m()],Li.prototype,"error",void 0);Li=ia([b("w3m-network-switch-view")],Li);const Bu=N`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;var Dn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let di=class extends k{constructor(){super(...arguments),this.imageSrc=void 0,this.name="Ethereum",this.disabled=!1}render(){return l`
      <button ?disabled=${this.disabled} tabindex=${R(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?l`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:l`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};di.styles=[B,K,Bu];Dn([d()],di.prototype,"imageSrc",void 0);Dn([d()],di.prototype,"name",void 0);Dn([d()],di.prototype,"tabIdx",void 0);Dn([d({type:Boolean})],di.prototype,"disabled",void 0);di=Dn([b("wui-list-network")],di);const Du=ae`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`;var Mn=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Pt=class extends k{constructor(){super(),this.unsubscribe=[],this.network=g.state.activeCaipNetwork,this.requestedCaipNetworks=g.getCaipNetworks(),this.search="",this.onDebouncedSearch=P.debounce(t=>{this.search=t},100),this.unsubscribe.push(Ht.subscribeNetworkImages(()=>this.requestUpdate()),g.subscribeKey("activeCaipNetwork",t=>this.network=t),g.subscribe(()=>{this.requestedCaipNetworks=g.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${["0","3","3","3"]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return l`
      <wui-flex gap="2" .padding=${["0","3","3","3"]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}networksTemplate(){var o;const t=g.getAllApprovedCaipNetworkIds(),i=P.sortRequestedNetworks(t,this.requestedCaipNetworks);return this.search?this.filteredNetworks=i==null?void 0:i.filter(r=>{var n;return(n=r==null?void 0:r.name)==null?void 0:n.toLowerCase().includes(this.search.toLowerCase())}):this.filteredNetworks=i,(o=this.filteredNetworks)==null?void 0:o.map(r=>{var n;return l`
        <wui-list-network
          .selected=${((n=this.network)==null?void 0:n.id)===r.id}
          imageSrc=${R(Q.getNetworkImage(r))}
          type="network"
          name=${r.name??r.id}
          @click=${()=>this.onSwitchNetwork(r)}
          .disabled=${g.isCaipNetworkDisabled(r)}
          data-testid=${`w3m-network-switch-${r.name??r.id}`}
        ></wui-list-network>
      `})}onSwitchNetwork(t){Cl.onSwitchNetwork({network:t})}};Pt.styles=Du;Mn([m()],Pt.prototype,"network",void 0);Mn([m()],Pt.prototype,"requestedCaipNetworks",void 0);Mn([m()],Pt.prototype,"filteredNetworks",void 0);Mn([m()],Pt.prototype,"search",void 0);Pt=Mn([b("w3m-networks-view")],Pt);const Mu=N`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e["ease-out-power-2"]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e["01"]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`;var Ps=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const zu={eip155:"eth",solana:"solana",bip122:"bitcoin",polkadot:void 0};let pn=class extends k{constructor(){var t,i;super(...arguments),this.unsubscribe=[],this.switchToChain=(t=C.state.data)==null?void 0:t.switchToChain,this.caipNetwork=(i=C.state.data)==null?void 0:i.network,this.activeChain=g.state.activeChain}firstUpdated(){this.unsubscribe.push(g.subscribeKey("activeChain",t=>this.activeChain=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.switchToChain?q.CHAIN_NAME_MAP[this.switchToChain]:"supported";if(!this.switchToChain)return null;const i=q.CHAIN_NAME_MAP[this.switchToChain];return l`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["4","2","2","2"]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${R(zu[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${i}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${i}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${t} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(g.setIsSwitchingNamespace(!0),O.setFilterByNamespace(this.switchToChain),this.caipNetwork?await g.switchActiveNetwork(this.caipNetwork):g.setActiveNamespace(this.switchToChain),C.reset("Connect"))}};pn.styles=Mu;Ps([d()],pn.prototype,"activeChain",void 0);pn=Ps([b("w3m-switch-active-chain-view")],pn);var Uu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};const Vu=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let _r=class extends k{render(){return l`
      <wui-flex
        flexDirection="column"
        .padding=${["6","5","5","5"]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Vu}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{P.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};_r=Uu([b("w3m-what-is-a-network-view")],_r);const Fu=ae`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var na=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Oi=class extends k{constructor(){var t;super(),this.swapUnsupportedChain=(t=C.state.data)==null?void 0:t.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=T.state.remoteFeatures,this.unsubscribe.push(Ht.subscribeNetworkImages(()=>this.requestUpdate()),T.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${["3","5","2","5"]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?l`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:l`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){const t=g.getAllRequestedCaipNetworks(),i=g.getAllApprovedCaipNetworkIds(),o=P.sortRequestedNetworks(i,t);return(this.swapUnsupportedChain?o.filter(n=>ue.SWAP_SUPPORTED_NETWORKS.includes(n.caipNetworkId)):o).map(n=>l`
        <wui-list-network
          imageSrc=${R(Q.getNetworkImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onSwitchNetwork(n)}
        >
        </wui-list-network>
      `)}async onDisconnect(){var t;try{this.disconnecting=!0;const i=g.state.activeChain,r=M.getConnections(i).length>0,n=i&&O.state.activeConnectorIds[i],a=(t=this.remoteFeatures)==null?void 0:t.multiWallet;await M.disconnect(a?{id:n,namespace:i}:{}),r&&a&&(C.push("ProfileWallets"),Y.showSuccess("Wallet deleted"))}catch{V.sendEvent({type:"track",event:"DISCONNECT_ERROR",properties:{message:"Failed to disconnect"}}),Y.showError("Failed to disconnect")}finally{this.disconnecting=!1}}async onSwitchNetwork(t){const i=g.getActiveCaipAddress(),o=g.getAllApprovedCaipNetworkIds(),r=g.getNetworkProp("supportsAllNetworks",t.chainNamespace),n=C.state.data;i?o!=null&&o.includes(t.caipNetworkId)?await g.switchActiveNetwork(t):r?C.push("SwitchNetwork",{...n,network:t}):C.push("SwitchNetwork",{...n,network:t}):i||(g.setActiveCaipNetwork(t),C.push("Connect"))}};Oi.styles=Fu;na([m()],Oi.prototype,"disconnecting",void 0);na([m()],Oi.prototype,"remoteFeatures",void 0);Oi=na([b("w3m-unsupported-chain-view")],Oi);const Hu=N`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`;var jo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let ji=class extends k{constructor(){super(...arguments),this.icon="externalLink",this.text="",this.type="info"}render(){return l`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};ji.styles=[B,K,Hu];jo([d()],ji.prototype,"icon",void 0);jo([d()],ji.prototype,"text",void 0);jo([d()],ji.prototype,"type",void 0);ji=jo([b("wui-banner")],ji);const Zu=ae`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var qu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let go=class extends k{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return l` <wui-flex flexDirection="column" .padding=${["2","3","3","3"]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){const t=g.getAllRequestedCaipNetworks(),i=g.getAllApprovedCaipNetworkIds(),o=g.state.activeCaipNetwork,r=g.checkIfSmartAccountEnabled();let n=P.sortRequestedNetworks(i,t);if(r&&St(o==null?void 0:o.chainNamespace)===Et.ACCOUNT_TYPES.SMART_ACCOUNT){if(!o)return null;n=[o]}return n.filter(s=>s.chainNamespace===(o==null?void 0:o.chainNamespace)).map(s=>l`
        <wui-list-network
          imageSrc=${R(Q.getNetworkImage(s))}
          name=${s.name??"Unknown"}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};go.styles=Zu;go=qu([b("w3m-wallet-compatible-networks-view")],go);const Ku=N`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`;var Wo=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Wi=class extends k{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?"true":"false",l`${this.templateVisual()}`}templateVisual(){return this.imageSrc?l`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:l`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};Wi.styles=[B,Ku];Wo([d()],Wi.prototype,"imageSrc",void 0);Wo([d()],Wi.prototype,"alt",void 0);Wo([d({type:Boolean})],Wi.prototype,"borderRadiusFull",void 0);Wi=Wo([b("wui-visual-thumbnail")],Wi);const Gu=N`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;var Yu=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let Ar=class extends k{constructor(){var t,i,o;super(...arguments),this.dappImageUrl=(t=T.state.metadata)==null?void 0:t.icons,this.walletImageUrl=(o=(i=g.getAccountData())==null?void 0:i.connectedWalletInfo)==null?void 0:o.icon}firstUpdated(){var i;const t=(i=this.shadowRoot)==null?void 0:i.querySelectorAll("wui-visual-thumbnail");t!=null&&t[0]&&this.createAnimation(t[0],"translate(18px)"),t!=null&&t[1]&&this.createAnimation(t[1],"translate(-18px)")}render(){var t;return l`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${(t=this.dappImageUrl)==null?void 0:t[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(t,i){t.animate([{transform:"translateX(0px)"},{transform:i}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};Ar.styles=Gu;Ar=Yu([b("w3m-siwx-sign-message-thumbnails")],Ar);var oa=function(e,t,i,o){var r=arguments.length,n=r<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,i):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(n=(r<3?a(n):r>3?a(t,i,n):a(t,i))||n);return r>3&&n&&Object.defineProperty(t,i,n),n};let fn=class extends k{constructor(){var t;super(...arguments),this.dappName=(t=T.state.metadata)==null?void 0:t.name,this.isCancelling=!1,this.isSigning=!1}render(){return l`
      <wui-flex justifyContent="center" .padding=${["8","0","6","0"]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${["0","20","5","20"]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["0","10","4","10"]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["4","5","5","5"]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?"Cancelling...":"Cancel"}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await nr.requestSignMessage()}catch(t){if(t instanceof Error&&t.message.includes("OTP is required")){Y.showError({message:"Something went wrong. We need to verify your account again."}),C.replace("DataCapture");return}throw t}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await nr.cancelSignMessage().finally(()=>this.isCancelling=!1)}};oa([m()],fn.prototype,"isCancelling",void 0);oa([m()],fn.prototype,"isSigning",void 0);fn=oa([b("w3m-siwx-sign-message-view")],fn);const zf=Object.freeze(Object.defineProperty({__proto__:null,get AppKitAccountButton(){return Yn},get AppKitButton(){return Xn},get AppKitConnectButton(){return Qn},get AppKitNetworkButton(){return Jn},get W3mAccountButton(){return rr},get W3mAccountSettingsView(){return ht},get W3mAccountView(){return to},get W3mAllWalletsView(){return an},get W3mButton(){return ar},get W3mChooseAccountNameView(){return dn},get W3mConnectButton(){return sr},get W3mConnectView(){return ye},get W3mConnectWalletsView(){return hn},get W3mConnectingExternalView(){return gr},get W3mConnectingMultiChainView(){return sn},get W3mConnectingWcBasicView(){return cn},get W3mConnectingWcView(){return nt},get W3mDownloadsView(){return Cr},get W3mFooter(){return Ci},get W3mFundWalletView(){return Rt},get W3mGetWalletView(){return $r},get W3mNetworkButton(){return lr},get W3mNetworkSwitchView(){return Li},get W3mNetworksView(){return Pt},get W3mProfileWalletsView(){return me},get W3mRouter(){return $i},get W3mSIWXSignMessageView(){return fn},get W3mSwitchActiveChainView(){return pn},get W3mUnsupportedChainView(){return Oi},get W3mWalletCompatibleNetworksView(){return go},get W3mWhatIsANetworkView(){return _r},get W3mWhatIsAWalletView(){return Sr}},Symbol.toStringTag,{value:"Module"}));So({tagName:"appkit-button",elementClass:Xn,react:bn});So({tagName:"appkit-network-button",elementClass:Jn,react:bn});So({tagName:"appkit-connect-button",elementClass:Qn,react:bn});So({tagName:"appkit-account-button",elementClass:Yn,react:bn});let Qo;function Xu(e){return Qo||(Qo=new $l({...e,sdkVersion:P.generateSdkVersion(e.adapters??[],"react",kl)})),Qo}function Qe(e){return{formatters:void 0,fees:void 0,serializers:void 0,...e}}Qe({id:"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",name:"Solana",network:"solana-mainnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!1,chainNamespace:"solana",caipNetworkId:"solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp",deprecatedCaipNetworkId:"solana:4sGjMW1sUnHzSxGspuhpqLDx6wiyjNtZ"});Qe({id:"EtWTRABZaYq6iMfeYKouRu166VU2xqa1",name:"Solana Devnet",network:"solana-devnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1",deprecatedCaipNetworkId:"solana:8E9rvCKLFQia2Y35HXjjpWzj8weVo44K"});Qe({id:"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z",name:"Solana Testnet",network:"solana-testnet",nativeCurrency:{name:"Solana",symbol:"SOL",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Solscan",url:"https://solscan.io"}},testnet:!0,chainNamespace:"solana",caipNetworkId:"solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z"});Qe({id:"000000000019d6689c085ae165831e93",caipNetworkId:"bip122:000000000019d6689c085ae165831e93",chainNamespace:"bip122",name:"Bitcoin",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}}});Qe({id:"000000000933ea01ad0ee984209779ba",caipNetworkId:"bip122:000000000933ea01ad0ee984209779ba",chainNamespace:"bip122",name:"Bitcoin Testnet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});Qe({id:"00000008819873e925422c1ff0f99f7c",caipNetworkId:"bip122:00000008819873e925422c1ff0f99f7c",chainNamespace:"bip122",name:"Bitcoin Signet",nativeCurrency:{name:"Bitcoin",symbol:"BTC",decimals:8},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},testnet:!0});Qe({id:"-239",name:"TON",network:"ton-mainnet",nativeCurrency:{name:"TON",symbol:"TON",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tonscan",url:"https://tonscan.org"}},testnet:!1,chainNamespace:"ton",caipNetworkId:"ton:-239"});Qe({id:"-3",name:"TON Testnet",network:"ton-testnet",nativeCurrency:{name:"TON",symbol:"TON",decimals:9},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tonscan",url:"https://testnet.tonscan.org"}},testnet:!0,chainNamespace:"ton",caipNetworkId:"ton:-3"});Qe({id:"0x2b6653dc",name:"TRON",network:"tron-mainnet",nativeCurrency:{name:"TRX",symbol:"TRX",decimals:6},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tronscan",url:"https://tronscan.org"}},testnet:!1,chainNamespace:"tron",caipNetworkId:"tron:0x2b6653dc"});Qe({id:"0x94a9059e",name:"TRON Shasta",network:"tron-shasta",nativeCurrency:{name:"TRX",symbol:"TRX",decimals:6},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tronscan",url:"https://shasta.tronscan.org"}},testnet:!0,chainNamespace:"tron",caipNetworkId:"tron:0x94a9059e"});Qe({id:"0xcd8690dc",name:"TRON Nile",network:"tron-nile",nativeCurrency:{name:"TRX",symbol:"TRX",decimals:6},rpcUrls:{default:{http:["https://rpc.walletconnect.org/v1"]}},blockExplorers:{default:{name:"Tronscan",url:"https://nile.tronscan.org"}},testnet:!0,chainNamespace:"tron",caipNetworkId:"tron:0xcd8690dc"});const Ls="a23677c4af3139b4eccb52981f76ad94",Qu=new URLSearchParams(window.location.search).get("theme"),Os=Qu==="light"?"light":"dark";Os==="dark"?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark");const js=[Va,ko,Fa,Ha],Ws=new Sl({networks:js,projectId:Ls,transports:{[ko.id]:Js([xt("https://bsc-rpc.publicnode.com"),xt("https://1rpc.io/bnb"),xt("https://bsc-dataseed1.binance.org/")]),[Va.id]:xt("https://bsc-testnet-rpc.publicnode.com"),[Fa.id]:xt("https://ethereum-rpc.publicnode.com"),[Ha.id]:xt("https://polygon-bor-rpc.publicnode.com")}}),Bs=Ws.wagmiConfig;Xu({adapters:[Ws],networks:js,projectId:Ls,metadata:{name:"UniFactory DEX",description:"Decentralized Exchange powered by Uniswap V3",url:"https://appsource.github.io/dex",icons:["https://appsource.github.io/dex/favicon.png"]},themeMode:Os,features:{analytics:!1}});el(Bs);/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mn(){return mn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},mn.apply(this,arguments)}var $t;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})($t||($t={}));const _a="popstate";function Ju(e){e===void 0&&(e={});function t(r,n){let{pathname:a="/",search:s="",hash:c=""}=yi(r.location.hash.substr(1));return!a.startsWith("/")&&!a.startsWith(".")&&(a="/"+a),Ir("",{pathname:a,search:s,hash:c},n.state&&n.state.usr||null,n.state&&n.state.key||"default")}function i(r,n){let a=r.document.querySelector("base"),s="";if(a&&a.getAttribute("href")){let c=r.location.href,u=c.indexOf("#");s=u===-1?c:c.slice(0,u)}return s+"#"+(typeof n=="string"?n:wo(n))}function o(r,n){Bo(r.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(n)+")")}return t1(t,i,o,e)}function ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bo(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function e1(){return Math.random().toString(36).substr(2,8)}function Aa(e,t){return{usr:e.state,key:e.key,idx:t}}function Ir(e,t,i,o){return i===void 0&&(i=null),mn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yi(t):t,{state:i,key:t&&t.key||o||e1()})}function wo(e){let{pathname:t="/",search:i="",hash:o=""}=e;return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function yi(e){let t={};if(e){let i=e.indexOf("#");i>=0&&(t.hash=e.substr(i),e=e.substr(0,i));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function t1(e,t,i,o){o===void 0&&(o={});let{window:r=document.defaultView,v5Compat:n=!1}=o,a=r.history,s=$t.Pop,c=null,u=p();u==null&&(u=0,a.replaceState(mn({},a.state,{idx:u}),""));function p(){return(a.state||{idx:null}).idx}function f(){s=$t.Pop;let $=p(),A=$==null?null:$-u;u=$,c&&c({action:s,location:S.location,delta:A})}function w($,A){s=$t.Push;let x=Ir(S.location,$,A);i&&i(x,$),u=p()+1;let I=Aa(x,u),_=S.createHref(x);try{a.pushState(I,"",_)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;r.location.assign(_)}n&&c&&c({action:s,location:S.location,delta:1})}function y($,A){s=$t.Replace;let x=Ir(S.location,$,A);i&&i(x,$),u=p();let I=Aa(x,u),_=S.createHref(x);a.replaceState(I,"",_),n&&c&&c({action:s,location:S.location,delta:0})}function E($){let A=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof $=="string"?$:wo($);return x=x.replace(/ $/,"%20"),ne(A,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,A)}let S={get action(){return s},get location(){return e(r,a)},listen($){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(_a,f),c=$,()=>{r.removeEventListener(_a,f),c=null}},createHref($){return t(r,$)},createURL:E,encodeLocation($){let A=E($);return{pathname:A.pathname,search:A.search,hash:A.hash}},push:w,replace:y,go($){return a.go($)}};return S}var Ia;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ia||(Ia={}));function i1(e,t,i){return i===void 0&&(i="/"),n1(e,t,i)}function n1(e,t,i,o){let r=typeof t=="string"?yi(t):t,n=Bi(r.pathname||"/",i);if(n==null)return null;let a=Ds(e);o1(a);let s=null;for(let c=0;s==null&&c<a.length;++c){let u=m1(n);s=p1(a[c],u)}return s}function Ds(e,t,i,o){t===void 0&&(t=[]),i===void 0&&(i=[]),o===void 0&&(o="");let r=(n,a,s)=>{let c={relativePath:s===void 0?n.path||"":s,caseSensitive:n.caseSensitive===!0,childrenIndex:a,route:n};c.relativePath.startsWith("/")&&(ne(c.relativePath.startsWith(o),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(o.length));let u=kt([o,c.relativePath]),p=i.concat(c);n.children&&n.children.length>0&&(ne(n.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Ds(n.children,t,p,u)),!(n.path==null&&!n.index)&&t.push({path:u,score:u1(u,n.index),routesMeta:p})};return e.forEach((n,a)=>{var s;if(n.path===""||!((s=n.path)!=null&&s.includes("?")))r(n,a);else for(let c of Ms(n.path))r(n,a,c)}),t}function Ms(e){let t=e.split("/");if(t.length===0)return[];let[i,...o]=t,r=i.endsWith("?"),n=i.replace(/\?$/,"");if(o.length===0)return r?[n,""]:[n];let a=Ms(o.join("/")),s=[];return s.push(...a.map(c=>c===""?n:[n,c].join("/"))),r&&s.push(...a),s.map(c=>e.startsWith("/")&&c===""?"/":c)}function o1(e){e.sort((t,i)=>t.score!==i.score?i.score-t.score:h1(t.routesMeta.map(o=>o.childrenIndex),i.routesMeta.map(o=>o.childrenIndex)))}const r1=/^:[\w-]+$/,a1=3,s1=2,l1=1,c1=10,d1=-2,Ra=e=>e==="*";function u1(e,t){let i=e.split("/"),o=i.length;return i.some(Ra)&&(o+=d1),t&&(o+=s1),i.filter(r=>!Ra(r)).reduce((r,n)=>r+(r1.test(n)?a1:n===""?l1:c1),o)}function h1(e,t){return e.length===t.length&&e.slice(0,-1).every((o,r)=>o===t[r])?e[e.length-1]-t[t.length-1]:0}function p1(e,t,i){let{routesMeta:o}=e,r={},n="/",a=[];for(let s=0;s<o.length;++s){let c=o[s],u=s===o.length-1,p=n==="/"?t:t.slice(n.length)||"/",f=Rr({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),w=c.route;if(!f)return null;Object.assign(r,f.params),a.push({params:r,pathname:kt([n,f.pathname]),pathnameBase:v1(kt([n,f.pathnameBase])),route:w}),f.pathnameBase!=="/"&&(n=kt([n,f.pathnameBase]))}return a}function Rr(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=f1(e.path,e.caseSensitive,e.end),r=t.match(i);if(!r)return null;let n=r[0],a=n.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:o.reduce((u,p,f)=>{let{paramName:w,isOptional:y}=p;if(w==="*"){let S=s[f]||"";a=n.slice(0,n.length-S.length).replace(/(.)\/+$/,"$1")}const E=s[f];return y&&!E?u[w]=void 0:u[w]=(E||"").replace(/%2F/g,"/"),u},{}),pathname:n,pathnameBase:a,pattern:e}}function f1(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),Bo(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,s,c)=>(o.push({paramName:s,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),o]}function m1(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bo(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Bi(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let i=t.endsWith("/")?t.length-1:t.length,o=e.charAt(i);return o&&o!=="/"?null:e.slice(i)||"/"}const g1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,w1=e=>g1.test(e);function b1(e,t){t===void 0&&(t="/");let{pathname:i,search:o="",hash:r=""}=typeof e=="string"?yi(e):e,n;if(i)if(w1(i))n=i;else{if(i.includes("//")){let a=i;i=i.replace(/\/\/+/g,"/"),Bo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+i))}i.startsWith("/")?n=Ta(i.substring(1),"/"):n=Ta(i,t)}else n=t;return{pathname:n,search:x1(o),hash:C1(r)}}function Ta(e,t){let i=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?i.length>1&&i.pop():r!=="."&&i.push(r)}),i.length>1?i.join("/"):"/"}function Jo(e,t,i,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+i+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function y1(e){return e.filter((t,i)=>i===0||t.route.path&&t.route.path.length>0)}function ra(e,t){let i=y1(e);return t?i.map((o,r)=>r===i.length-1?o.pathname:o.pathnameBase):i.map(o=>o.pathnameBase)}function aa(e,t,i,o){o===void 0&&(o=!1);let r;typeof e=="string"?r=yi(e):(r=mn({},e),ne(!r.pathname||!r.pathname.includes("?"),Jo("?","pathname","search",r)),ne(!r.pathname||!r.pathname.includes("#"),Jo("#","pathname","hash",r)),ne(!r.search||!r.search.includes("#"),Jo("#","search","hash",r)));let n=e===""||r.pathname==="",a=n?"/":r.pathname,s;if(a==null)s=i;else{let f=t.length-1;if(!o&&a.startsWith("..")){let w=a.split("/");for(;w[0]==="..";)w.shift(),f-=1;r.pathname=w.join("/")}s=f>=0?t[f]:"/"}let c=b1(r,s),u=a&&a!=="/"&&a.endsWith("/"),p=(n||a===".")&&i.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const kt=e=>e.join("/").replace(/\/\/+/g,"/"),v1=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),x1=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,C1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function $1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const zs=["post","put","patch","delete"];new Set(zs);const k1=["get",...zs];new Set(k1);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gn(){return gn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},gn.apply(this,arguments)}const Do=v.createContext(null),Us=v.createContext(null),yt=v.createContext(null),Mo=v.createContext(null),zt=v.createContext({outlet:null,matches:[],isDataRoute:!1}),Vs=v.createContext(null);function S1(e,t){let{relative:i}=t===void 0?{}:t;qi()||ne(!1);let{basename:o,navigator:r}=v.useContext(yt),{hash:n,pathname:a,search:s}=zo(e,{relative:i}),c=a;return o!=="/"&&(c=a==="/"?o:kt([o,a])),r.createHref({pathname:c,search:s,hash:n})}function qi(){return v.useContext(Mo)!=null}function Ki(){return qi()||ne(!1),v.useContext(Mo).location}function Fs(e){v.useContext(yt).static||v.useLayoutEffect(e)}function Hs(){let{isDataRoute:e}=v.useContext(zt);return e?B1():E1()}function E1(){qi()||ne(!1);let e=v.useContext(Do),{basename:t,future:i,navigator:o}=v.useContext(yt),{matches:r}=v.useContext(zt),{pathname:n}=Ki(),a=JSON.stringify(ra(r,i.v7_relativeSplatPath)),s=v.useRef(!1);return Fs(()=>{s.current=!0}),v.useCallback(function(u,p){if(p===void 0&&(p={}),!s.current)return;if(typeof u=="number"){o.go(u);return}let f=aa(u,JSON.parse(a),n,p.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:kt([t,f.pathname])),(p.replace?o.replace:o.push)(f,p.state,p)},[t,o,a,n,e])}function zo(e,t){let{relative:i}=t===void 0?{}:t,{future:o}=v.useContext(yt),{matches:r}=v.useContext(zt),{pathname:n}=Ki(),a=JSON.stringify(ra(r,o.v7_relativeSplatPath));return v.useMemo(()=>aa(e,JSON.parse(a),n,i==="path"),[e,a,n,i])}function _1(e,t){return A1(e,t)}function A1(e,t,i,o){qi()||ne(!1);let{navigator:r}=v.useContext(yt),{matches:n}=v.useContext(zt),a=n[n.length-1],s=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Ki(),p;if(t){var f;let $=typeof t=="string"?yi(t):t;c==="/"||(f=$.pathname)!=null&&f.startsWith(c)||ne(!1),p=$}else p=u;let w=p.pathname||"/",y=w;if(c!=="/"){let $=c.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice($.length).join("/")}let E=i1(e,{pathname:y}),S=P1(E&&E.map($=>Object.assign({},$,{params:Object.assign({},s,$.params),pathname:kt([c,r.encodeLocation?r.encodeLocation($.pathname).pathname:$.pathname]),pathnameBase:$.pathnameBase==="/"?c:kt([c,r.encodeLocation?r.encodeLocation($.pathnameBase).pathname:$.pathnameBase])})),n,i,o);return t&&S?v.createElement(Mo.Provider,{value:{location:gn({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:$t.Pop}},S):S}function I1(){let e=W1(),t=$1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),i=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),i?v.createElement("pre",{style:r},i):null,null)}const R1=v.createElement(I1,null);class T1 extends v.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){console.error("React Router caught the following error during render",t,i)}render(){return this.state.error!==void 0?v.createElement(zt.Provider,{value:this.props.routeContext},v.createElement(Vs.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function N1(e){let{routeContext:t,match:i,children:o}=e,r=v.useContext(Do);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),v.createElement(zt.Provider,{value:t},o)}function P1(e,t,i,o){var r;if(t===void 0&&(t=[]),i===void 0&&(i=null),o===void 0&&(o=null),e==null){var n;if(!i)return null;if(i.errors)e=i.matches;else if((n=o)!=null&&n.v7_partialHydration&&t.length===0&&!i.initialized&&i.matches.length>0)e=i.matches;else return null}let a=e,s=(r=i)==null?void 0:r.errors;if(s!=null){let p=a.findIndex(f=>f.route.id&&(s==null?void 0:s[f.route.id])!==void 0);p>=0||ne(!1),a=a.slice(0,Math.min(a.length,p+1))}let c=!1,u=-1;if(i&&o&&o.v7_partialHydration)for(let p=0;p<a.length;p++){let f=a[p];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=p),f.route.id){let{loaderData:w,errors:y}=i,E=f.route.loader&&w[f.route.id]===void 0&&(!y||y[f.route.id]===void 0);if(f.route.lazy||E){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((p,f,w)=>{let y,E=!1,S=null,$=null;i&&(y=s&&f.route.id?s[f.route.id]:void 0,S=f.route.errorElement||R1,c&&(u<0&&w===0?(D1("route-fallback"),E=!0,$=null):u===w&&(E=!0,$=f.route.hydrateFallbackElement||null)));let A=t.concat(a.slice(0,w+1)),x=()=>{let I;return y?I=S:E?I=$:f.route.Component?I=v.createElement(f.route.Component,null):f.route.element?I=f.route.element:I=p,v.createElement(N1,{match:f,routeContext:{outlet:p,matches:A,isDataRoute:i!=null},children:I})};return i&&(f.route.ErrorBoundary||f.route.errorElement||w===0)?v.createElement(T1,{location:i.location,revalidation:i.revalidation,component:S,error:y,children:x(),routeContext:{outlet:null,matches:A,isDataRoute:!0}}):x()},null)}var Zs=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Zs||{}),qs=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qs||{});function L1(e){let t=v.useContext(Do);return t||ne(!1),t}function O1(e){let t=v.useContext(Us);return t||ne(!1),t}function j1(e){let t=v.useContext(zt);return t||ne(!1),t}function Ks(e){let t=j1(),i=t.matches[t.matches.length-1];return i.route.id||ne(!1),i.route.id}function W1(){var e;let t=v.useContext(Vs),i=O1(),o=Ks();return t!==void 0?t:(e=i.errors)==null?void 0:e[o]}function B1(){let{router:e}=L1(Zs.UseNavigateStable),t=Ks(qs.UseNavigateStable),i=v.useRef(!1);return Fs(()=>{i.current=!0}),v.useCallback(function(r,n){n===void 0&&(n={}),i.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,gn({fromRouteId:t},n)))},[e,t])}const Na={};function D1(e,t,i){Na[e]||(Na[e]=!0)}function M1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function z1(e){let{to:t,replace:i,state:o,relative:r}=e;qi()||ne(!1);let{future:n,static:a}=v.useContext(yt),{matches:s}=v.useContext(zt),{pathname:c}=Ki(),u=Hs(),p=aa(t,ra(s,n.v7_relativeSplatPath),c,r==="path"),f=JSON.stringify(p);return v.useEffect(()=>u(JSON.parse(f),{replace:i,state:o,relative:r}),[u,f,r,i,o]),null}function Gi(e){ne(!1)}function U1(e){let{basename:t="/",children:i=null,location:o,navigationType:r=$t.Pop,navigator:n,static:a=!1,future:s}=e;qi()&&ne(!1);let c=t.replace(/^\/*/,"/"),u=v.useMemo(()=>({basename:c,navigator:n,static:a,future:gn({v7_relativeSplatPath:!1},s)}),[c,s,n,a]);typeof o=="string"&&(o=yi(o));let{pathname:p="/",search:f="",hash:w="",state:y=null,key:E="default"}=o,S=v.useMemo(()=>{let $=Bi(p,c);return $==null?null:{location:{pathname:$,search:f,hash:w,state:y,key:E},navigationType:r}},[c,p,f,w,y,E,r]);return S==null?null:v.createElement(yt.Provider,{value:u},v.createElement(Mo.Provider,{children:i,value:S}))}function V1(e){let{children:t,location:i}=e;return _1(Tr(t),i)}new Promise(()=>{});function Tr(e,t){t===void 0&&(t=[]);let i=[];return v.Children.forEach(e,(o,r)=>{if(!v.isValidElement(o))return;let n=[...t,r];if(o.type===v.Fragment){i.push.apply(i,Tr(o.props.children,n));return}o.type!==Gi&&ne(!1),!o.props.index||!o.props.children||ne(!1);let a={id:o.props.id||n.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(a.children=Tr(o.props.children,n)),i.push(a)}),i}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bo(){return bo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},bo.apply(this,arguments)}function Gs(e,t){if(e==null)return{};var i={},o=Object.keys(e),r,n;for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&(i[r]=e[r]);return i}function F1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function H1(e,t){return e.button===0&&(!t||t==="_self")&&!F1(e)}const Z1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],q1=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],K1="6";try{window.__reactRouterVersion=K1}catch{}const G1=v.createContext({isTransitioning:!1}),Y1="startTransition",Pa=tl[Y1];function X1(e){let{basename:t,children:i,future:o,window:r}=e,n=v.useRef();n.current==null&&(n.current=Ju({window:r,v5Compat:!0}));let a=n.current,[s,c]=v.useState({action:a.action,location:a.location}),{v7_startTransition:u}=o||{},p=v.useCallback(f=>{u&&Pa?Pa(()=>c(f)):c(f)},[c,u]);return v.useLayoutEffect(()=>a.listen(p),[a,p]),v.useEffect(()=>M1(o),[o]),v.createElement(U1,{basename:t,children:i,location:s.location,navigationType:s.action,navigator:a,future:o})}const Q1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",J1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eh=v.forwardRef(function(t,i){let{onClick:o,relative:r,reloadDocument:n,replace:a,state:s,target:c,to:u,preventScrollReset:p,viewTransition:f}=t,w=Gs(t,Z1),{basename:y}=v.useContext(yt),E,S=!1;if(typeof u=="string"&&J1.test(u)&&(E=u,Q1))try{let I=new URL(window.location.href),_=u.startsWith("//")?new URL(I.protocol+u):new URL(u),W=Bi(_.pathname,y);_.origin===I.origin&&W!=null?u=W+_.search+_.hash:S=!0}catch{}let $=S1(u,{relative:r}),A=ih(u,{replace:a,state:s,target:c,preventScrollReset:p,relative:r,viewTransition:f});function x(I){o&&o(I),I.defaultPrevented||A(I)}return v.createElement("a",bo({},w,{href:E||$,onClick:S||n?o:x,ref:i,target:c}))}),er=v.forwardRef(function(t,i){let{"aria-current":o="page",caseSensitive:r=!1,className:n="",end:a=!1,style:s,to:c,viewTransition:u,children:p}=t,f=Gs(t,q1),w=zo(c,{relative:f.relative}),y=Ki(),E=v.useContext(Us),{navigator:S,basename:$}=v.useContext(yt),A=E!=null&&nh(w)&&u===!0,x=S.encodeLocation?S.encodeLocation(w).pathname:w.pathname,I=y.pathname,_=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;r||(I=I.toLowerCase(),_=_?_.toLowerCase():null,x=x.toLowerCase()),_&&$&&(_=Bi(_,$)||_);const W=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let F=I===x||!a&&I.startsWith(x)&&I.charAt(W)==="/",U=_!=null&&(_===x||!a&&_.startsWith(x)&&_.charAt(x.length)==="/"),te={isActive:F,isPending:U,isTransitioning:A},oe=F?o:void 0,Z;typeof n=="function"?Z=n(te):Z=[n,F?"active":null,U?"pending":null,A?"transitioning":null].filter(Boolean).join(" ");let re=typeof s=="function"?s(te):s;return v.createElement(eh,bo({},f,{"aria-current":oe,className:Z,ref:i,style:re,to:c,viewTransition:u}),typeof p=="function"?p(te):p)});var Nr;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Nr||(Nr={}));var La;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(La||(La={}));function th(e){let t=v.useContext(Do);return t||ne(!1),t}function ih(e,t){let{target:i,replace:o,state:r,preventScrollReset:n,relative:a,viewTransition:s}=t===void 0?{}:t,c=Hs(),u=Ki(),p=zo(e,{relative:a});return v.useCallback(f=>{if(H1(f,i)){f.preventDefault();let w=o!==void 0?o:wo(u)===wo(p);c(e,{replace:w,state:r,preventScrollReset:n,relative:a,viewTransition:s})}},[u,c,p,o,r,i,e,n,a,s])}function nh(e,t){t===void 0&&(t={});let i=v.useContext(G1);i==null&&ne(!1);let{basename:o}=th(Nr.useViewTransitionState),r=zo(e,{relative:t.relative});if(!i.isTransitioning)return!1;let n=Bi(i.currentLocation.pathname,o)||i.currentLocation.pathname,a=Bi(i.nextLocation.pathname,o)||i.nextLocation.pathname;return Rr(r.pathname,a)!=null||Rr(r.pathname,n)!=null}const oh="0x608060405234801561001057600080fd5b506004361061007d5760003560e01c8063ae55c8881161005b578063ae55c888146100c8578063be05133c146100e8578063cb965ae9146100fb578063f14805c31461011057600080fd5b806311d881b11461008257806328ce8638146100a0578063ac193f1a146100b5575b600080fd5b61008a610123565b6040516100979190610eea565b60405180910390f35b6100b36100ae36600461109f565b61027e565b005b6100b36100c33660046110f8565b61028a565b6100db6100d636600461109f565b61033e565b60405161009791906111ae565b6100b36100f636600461123c565b610362565b61010361042f565b6040516100979190611359565b6100b361011e3660046113cc565b610508565b60015460609060009067ffffffffffffffff81111561014457610144610f6a565b60405190808252806020026020018201604052801561018a57816020015b6040805180820190915260008152606060208201528152602001906001900390816101625790505b50905060005b60015481101561027857610248600182815481106101b0576101b0611430565b9060005260206000200180546101c59061145f565b80601f01602080910402602001604051908101604052809291908181526020018280546101f19061145f565b801561023e5780601f106102135761010080835404028352916020019161023e565b820191906000526020600020905b81548152906001019060200180831161022157829003601f168201915b5050505050610512565b82828151811061025a5761025a611430565b60200260200101819052508080610270906114dc565b915050610190565b50919050565b61028781610690565b50565b60008151116102fa576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4e4f5f4b4559530000000000000000000000000000000000000000000000000060448201526064015b60405180910390fd5b60005b815181101561033a5761032882828151811061031b5761031b611430565b6020026020010151610690565b80610332816114dc565b9150506102fd565b5050565b60408051808201909152600081526060602082015261035c82610512565b92915050565b60008151116103cd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600760248201527f4e4f5f444154410000000000000000000000000000000000000000000000000060448201526064016102f1565b60005b815181101561033a5761041d8282815181106103ee576103ee611430565b60200260200101516000015183838151811061040c5761040c611430565b602002602001015160200151610aa6565b80610427816114dc565b9150506103d0565b60606001805480602002602001604051908101604052809291908181526020016000905b828210156104ff5783829060005260206000200180546104729061145f565b80601f016020809104026020016040519081016040528092919081815260200182805461049e9061145f565b80156104eb5780601f106104c0576101008083540402835291602001916104eb565b820191906000526020600020905b8154815290600101906020018083116104ce57829003601f168201915b505050505081526020019060010190610453565b50505050905090565b61033a8282610aa6565b604080518082019091526000815260606020820152815182908190610593576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f5f56414c554500000000000000000000000000000000000000000000000060448201526064016102f1565b60405180604001604052806000866040516105ae9190611515565b90815260408051602092819003830190205473ffffffffffffffffffffffffffffffffffffffff168352519101906000906105ea908890611515565b908152602001604051809103902060010180546106069061145f565b80601f01602080910402602001604051908101604052809291908181526020018280546106329061145f565b801561067f5780601f106106545761010080835404028352916020019161067f565b820191906000526020600020905b81548152906001019060200180831161066257829003601f168201915b505050505081525092505050919050565b8051819081906106fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f5f56414c554500000000000000000000000000000000000000000000000060448201526064016102f1565b82600073ffffffffffffffffffffffffffffffffffffffff166000826040516107259190611515565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1614156107b3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f5f4f574e455200000000000000000000000000000000000000000000000060448201526064016102f1565b6000816040516107c39190611515565b908152604051908190036020019020543373ffffffffffffffffffffffffffffffffffffffff90911614610853576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e000000000000000000000000000000000000000000000060448201526064016102f1565b6000846040516108639190611515565b90815260405190819003602001902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016815560006108a76001830182610ce9565b50506001546108b557610aa0565b60018054141561096557836040516020016108d09190611515565b6040516020818303038152906040528051906020012060016000815481106108fa576108fa611430565b906000526020600020016040516020016109149190611531565b60405160208183030381529060405280519060200120141561096057600180548061094157610941611604565b60019003818190600052602060002001600061095d9190610ce9565b90555b610aa0565b6000805b600180546109779190611633565b811015610a67578560405160200161098f9190611515565b60405160208183030381529060405280519060200120600182815481106109b8576109b8611430565b906000526020600020016040516020016109d29190611531565b6040516020818303038152906040528051906020012014156109f357600191505b8115610a55576001610a05828261164a565b81548110610a1557610a15611430565b9060005260206000200160018281548110610a3257610a32611430565b90600052602060002001908054610a489061145f565b610a53929190610d23565b505b80610a5f816114dc565b915050610969565b508015610a9e576001805480610a7f57610a7f611604565b600190038181906000526020600020016000610a9b9190610ce9565b90555b505b50505050565b815182908190610b12576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e4f5f56414c554500000000000000000000000000000000000000000000000060448201526064016102f1565b600073ffffffffffffffffffffffffffffffffffffffff16600085604051610b3a9190611515565b9081526040519081900360200190205473ffffffffffffffffffffffffffffffffffffffff1614610c0a57600084604051610b759190611515565b908152604051908190036020019020543373ffffffffffffffffffffffffffffffffffffffff90911614610c05576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600960248201527f464f5242494444454e000000000000000000000000000000000000000000000060448201526064016102f1565b610c4e565b6001805480820182556000919091528451610c4c917fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf601906020870190610dae565b505b8251604051600090610c61908790611515565b908152602001604051809103902060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260200151600085604051610cc59190611515565b90815260200160405180910390206001019080519060200190610a9e929190610dae565b508054610cf59061145f565b6000825580601f10610d05575050565b601f0160209004906000526020600020908101906102879190610e22565b828054610d2f9061145f565b90600052602060002090601f016020900481019282610d515760008555610d9e565b82601f10610d625780548555610d9e565b82800160010185558215610d9e57600052602060002091601f016020900482015b82811115610d9e578254825591600101919060010190610d83565b50610daa929150610e22565b5090565b828054610dba9061145f565b90600052602060002090601f016020900481019282610ddc5760008555610d9e565b82601f10610df557805160ff1916838001178555610d9e565b82800160010185558215610d9e579182015b82811115610d9e578251825591602001919060010190610e07565b5b80821115610daa5760008155600101610e23565b60005b83811015610e52578181015183820152602001610e3a565b83811115610aa05750506000910152565b60008151808452610e7b816020860160208601610e37565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b73ffffffffffffffffffffffffffffffffffffffff81511682526000602082015160406020850152610ee26040850182610e63565b949350505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610f5d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0888603018452610f4b858351610ead565b94509285019290850190600101610f11565b5092979650505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040805190810167ffffffffffffffff81118282101715610fbc57610fbc610f6a565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff8111828210171561100957611009610f6a565b604052919050565b600082601f83011261102257600080fd5b813567ffffffffffffffff81111561103c5761103c610f6a565b61106d60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601610fc2565b81815284602083860101111561108257600080fd5b816020850160208301376000918101602001919091529392505050565b6000602082840312156110b157600080fd5b813567ffffffffffffffff8111156110c857600080fd5b610ee284828501611011565b600067ffffffffffffffff8211156110ee576110ee610f6a565b5060051b60200190565b6000602080838503121561110b57600080fd5b823567ffffffffffffffff8082111561112357600080fd5b818501915085601f83011261113757600080fd5b813561114a611145826110d4565b610fc2565b81815260059190911b8301840190848101908883111561116957600080fd5b8585015b838110156111a1578035858111156111855760008081fd5b6111938b89838a0101611011565b84525091860191860161116d565b5098975050505050505050565b6020815260006111c16020830184610ead565b9392505050565b6000604082840312156111da57600080fd5b6111e2610f99565b9050813573ffffffffffffffffffffffffffffffffffffffff8116811461120857600080fd5b8152602082013567ffffffffffffffff81111561122457600080fd5b61123084828501611011565b60208301525092915050565b6000602080838503121561124f57600080fd5b823567ffffffffffffffff8082111561126757600080fd5b818501915085601f83011261127b57600080fd5b8135611289611145826110d4565b81815260059190911b830184019084810190888311156112a857600080fd5b8585015b838110156111a1578035858111156112c45760008081fd5b86016040818c037fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0018113156112fa5760008081fd5b611302610f99565b89830135888111156113145760008081fd5b6113228e8c83870101611011565b8252509082013590878211156113385760008081fd5b6113468d8b848601016111c8565b818b0152855250509186019186016112ac565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b82811015610f5d577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526113ba858351610e63565b94509285019290850190600101611380565b600080604083850312156113df57600080fd5b823567ffffffffffffffff808211156113f757600080fd5b61140386838701611011565b9350602085013591508082111561141957600080fd5b50611426858286016111c8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600181811c9082168061147357607f821691505b60208210811415610278577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561150e5761150e6114ad565b5060010190565b60008251611527818460208701610e37565b9190910192915050565b600080835481600182811c91508083168061154d57607f831692505b6020808410821415611586577f4e487b710000000000000000000000000000000000000000000000000000000086526022600452602486fd5b81801561159a57600181146115c9576115f6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff008616895284890196506115f6565b60008a81526020902060005b868110156115ee5781548b8201529085019083016115d5565b505084890196505b509498975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600082821015611645576116456114ad565b500390565b6000821982111561165d5761165d6114ad565b50019056fea26469706673582212206d68b52887aebf96199744b42f4219bbf102a36ae9df5ea32e27cf310af954e164736f6c634300080c0033",yo=[{inputs:[{internalType:"string",name:"_key",type:"string"}],name:"getData",outputs:[{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"string",name:"info",type:"string"}],internalType:"struct IStorage.Data",name:"",type:"tuple"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"_key",type:"string"},{components:[{internalType:"address",name:"owner",type:"address"},{internalType:"string",name:"info",type:"string"}],internalType:"struct IStorage.Data",name:"_data",type:"tuple"}],name:"setKeyData",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"allKeys",outputs:[{internalType:"string[]",name:"",type:"string[]"}],stateMutability:"view",type:"function"}],Pr="definance",wn={56:{address:"0xa7472f384339D37EfE505a1A71619212495A973A",rpc:"https://bsc-rpc.publicnode.com"},97:{address:"0x91a0DCC7a78Da02244212D36eAFd9E0dBB3174B4",rpc:"https://bsc-testnet-rpc.publicnode.com"}},Ys=56,rh=Ma({chain:ko,transport:xt("https://bsc-rpc.publicnode.com")});function Xs(e){const t=wn[e];if(!t)return{client:rh,address:wn[Ys].address};const i=e===56?ko:{id:e,name:`Chain ${e}`,nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:[t.rpc]}}};return{client:Ma({chain:i,transport:xt(t.rpc)}),address:t.address}}const Lr=()=>window.location.hostname||document.location.host||"",ah=async(e,t=Ys)=>{try{const{client:i,address:o}=Xs(t),r=await i.readContract({address:o,abi:yo,functionName:"getData",args:[e.toLowerCase()]}),{owner:n,info:a}=r;if(!a||a==="{}"||a==="")return null;const c=JSON.parse(a)[Pr];return c?{admin:n,domain:e,projectName:c.projectName||"",brandColor:c.brandColor||"",backgroundColorDark:c.backgroundColorDark||"",backgroundColorLight:c.backgroundColorLight||"",textColorDark:c.textColorDark||"",textColorLight:c.textColorLight||"",logo:c.logo||"",favicon:c.favicon||"",contracts:c.contracts||{},tokenLists:c.tokenLists||{},addressesOfTokenLists:c.addressesOfTokenLists||[],navigationLinks:c.navigationLinks||[],defaultSwapCurrency:c.defaultSwapCurrency||{input:"",output:""},disableSourceCopyright:c.disableSourceCopyright||!1}:null}catch(i){return console.error("[Storage] fetchDomainData error:",i),null}},sh=async e=>{var y;const{domain:t,owner:i,chainId:o,data:r,writeContract:n,onStatus:a}=e,{client:s,address:c}=Xs(o);if(!wn[o])throw new Error(`No Storage contract configured for chain ${o}. Supported: ${Object.keys(wn).join(", ")}`);a==null||a("Reading existing config…");let u={};try{const E=await Promise.race([s.readContract({address:c,abi:yo,functionName:"getData",args:[t.toLowerCase()]}),new Promise(($,A)=>setTimeout(()=>A(new Error("Storage read timeout (10s)")),1e4))]),{info:S}=E;S&&(u=JSON.parse(S))}catch(E){if((y=E.message)!=null&&y.includes("timeout"))throw E}const p=u[Pr]||{},f={...u,[Pr]:{...p,...r,contracts:{...p.contracts||{},...r.contracts||{}}}};return a==null||a("Waiting for wallet signature…"),await n({address:c,abi:yo,functionName:"setKeyData",args:[t.toLowerCase(),{owner:i,info:JSON.stringify(f)}]})};function zn(){const e=Lr(),t=Co(),{data:i,isLoading:o,error:r}=il({queryKey:["storage-config",e,t],queryFn:()=>ah(e,t),staleTime:6e4,retry:2});return{config:i??null,loading:o,error:r,domain:e}}function lh({projectName:e}){const t=e||"UniFactory DEX";return h.jsx("header",{className:"border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950",children:h.jsxs("div",{className:"container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl",children:[h.jsxs("div",{className:"flex items-center gap-8",children:[h.jsx("span",{className:"font-bold text-lg text-gray-900 dark:text-white",children:t}),h.jsxs("nav",{className:"flex gap-1",children:[h.jsx(er,{to:"/swap",className:({isActive:i})=>`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i?"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white":"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"}`,children:"Swap"}),h.jsx(er,{to:"/pool",className:({isActive:i})=>`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i?"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white":"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"}`,children:"Pool"}),h.jsx(er,{to:"/admin",className:({isActive:i})=>`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${i?"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white":"text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800/50"}`,children:"Admin"})]})]}),h.jsx("appkit-button",{})]})})}const vo=e=>!!(e!=null&&e.quoter),ch=[{inputs:[{components:[{name:"tokenIn",type:"address"},{name:"tokenOut",type:"address"},{name:"amountIn",type:"uint256"},{name:"fee",type:"uint24"},{name:"sqrtPriceLimitX96",type:"uint160"}],name:"params",type:"tuple"}],name:"quoteExactInputSingle",outputs:[{name:"amountOut",type:"uint256"},{name:"sqrtPriceX96After",type:"uint160"},{name:"initializedTicksCrossed",type:"uint32"},{name:"gasEstimate",type:"uint256"}],stateMutability:"nonpayable",type:"function"}],dh=[{inputs:[{components:[{name:"tokenIn",type:"address"},{name:"tokenOut",type:"address"},{name:"fee",type:"uint24"},{name:"recipient",type:"address"},{name:"amountIn",type:"uint256"},{name:"amountOutMinimum",type:"uint256"},{name:"sqrtPriceLimitX96",type:"uint160"}],name:"params",type:"tuple"}],name:"exactInputSingle",outputs:[{name:"amountOut",type:"uint256"}],stateMutability:"payable",type:"function"}],tr=[{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{inputs:[{name:"account",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],stateMutability:"view",type:"function"}];function uh(){var p;const{address:e}=$o(),t=Co(),{config:i}=zn(),o=za(),{writeContractAsync:r}=Or(),[n,a]=v.useState({tokenIn:"",tokenOut:"",amountIn:"",amountOut:"",feeTier:3e3,loading:!1,error:null,txHash:null}),s=((p=i==null?void 0:i.contracts)==null?void 0:p[String(t)])||{},c=v.useCallback(async f=>{if(!s.quoter||!o||!vo(s))return null;try{const w=Qi(f.amountIn,f.tokenInDecimals);return(await o.simulateContract({address:s.quoter,abi:ch,functionName:"quoteExactInputSingle",args:[{tokenIn:f.tokenIn,tokenOut:f.tokenOut,amountIn:w,fee:f.fee,sqrtPriceLimitX96:BigInt(0)}]})).result[0]}catch(w){return console.error("[useSwap] getQuote error:",w),null}},[s,o]),u=v.useCallback(async f=>{if(!e||!s.router)throw new Error("Wallet not connected or router not configured");if(!vo(s))throw new Error("V3 router not configured for this chain");const w=Qi(f.amountIn,f.tokenInDecimals),y=f.slippageBps??50,E=f.amountOutMinimum*BigInt(1e4-y)/BigInt(1e4);if(!o)throw new Error("No public client");const S=await o.readContract({address:f.tokenIn,abi:tr,functionName:"allowance",args:[e,s.router]});if(S<w){if(S>BigInt(0)){const x=await r({address:f.tokenIn,abi:tr,functionName:"approve",args:[s.router,BigInt(0)]});await o.waitForTransactionReceipt({hash:x})}const A=await r({address:f.tokenIn,abi:tr,functionName:"approve",args:[s.router,w]});await o.waitForTransactionReceipt({hash:A})}return await r({address:s.router,abi:dh,functionName:"exactInputSingle",args:[{tokenIn:f.tokenIn,tokenOut:f.tokenOut,fee:f.fee,recipient:e,amountIn:w,amountOutMinimum:E,sqrtPriceLimitX96:BigInt(0)}]})},[e,s,o,r]);return{state:n,setState:a,getQuote:c,executeSwap:u,contracts:s,chainId:t}}function Oa({logoURI:e,symbol:t}){const[i,o]=v.useState(!1);return e&&!i?h.jsx("img",{src:e,alt:t,className:"w-5 h-5 rounded-full flex-shrink-0",onError:()=>o(!0)}):h.jsx("span",{className:"w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0 inline-flex items-center justify-center text-[9px] text-gray-600 dark:text-gray-300 font-bold",children:t.slice(0,2)})}function xo({label:e,value:t,onChange:i,tokenAddress:o,onTokenChange:r,tokenList:n,readOnly:a,loading:s}){const[c,u]=v.useState(!1),p=v.useRef(null),f=n.find(w=>w.address.toLowerCase()===o.toLowerCase());return v.useEffect(()=>{const w=y=>{p.current&&!p.current.contains(y.target)&&u(!1)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),h.jsxs("div",{className:"bg-gray-100 dark:bg-gray-900 rounded-2xl p-4 border border-gray-200 dark:border-gray-800",children:[h.jsx("div",{className:"flex justify-between items-center mb-2",children:h.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-400",children:e})}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("input",{type:"number",value:s?"":t,onChange:w=>i==null?void 0:i(w.target.value),readOnly:a,placeholder:s?"Loading...":"0.0",className:"flex-1 bg-transparent text-2xl font-medium text-gray-900 dark:text-white outline-none placeholder-gray-400 dark:placeholder-gray-600 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none",min:"0"}),h.jsx("div",{className:"relative flex-shrink-0",ref:p,children:n.length>0?h.jsxs(h.Fragment,{children:[h.jsxs("button",{type:"button",onClick:()=>u(w=>!w),className:"flex items-center gap-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm font-medium border border-gray-200 dark:border-gray-700 cursor-pointer min-w-[110px] transition-colors shadow-sm",children:[f?h.jsx(Oa,{logoURI:f.logoURI,symbol:f.symbol}):h.jsx("span",{className:"w-5 h-5 rounded-full bg-gray-200 dark:bg-gray-600 flex-shrink-0 inline-block"}),h.jsx("span",{className:"flex-1 text-left truncate max-w-[70px]",children:(f==null?void 0:f.symbol)||"Select"}),h.jsx("svg",{className:`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${c?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),c&&h.jsx("div",{className:"absolute right-0 top-full mt-1 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-auto max-h-52 min-w-[160px] shadow-xl",children:n.map(w=>h.jsxs("button",{type:"button",onClick:()=>{r(w.address),u(!1)},className:`flex items-center gap-2 w-full px-3 py-2.5 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${w.address.toLowerCase()===o.toLowerCase()?"bg-gray-100 dark:bg-gray-700":""}`,children:[h.jsx(Oa,{logoURI:w.logoURI,symbol:w.symbol}),h.jsxs("div",{children:[h.jsx("div",{className:"text-gray-900 dark:text-white font-medium",children:w.symbol}),h.jsxs("div",{className:"text-gray-400 dark:text-gray-500 text-xs font-mono",children:[w.address.slice(0,6),"…",w.address.slice(-4)]})]})]},w.address))})]}):h.jsx("input",{type:"text",value:o,onChange:w=>r(w.target.value),placeholder:"Token address",className:"bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 w-44"})})]}),f&&h.jsx("div",{className:"mt-1 text-xs text-gray-400 dark:text-gray-500 truncate",children:f.address})]})}const Zn=[{address:"0x703f112Bda4Cc6cb9c5FB4B2e6140f6D8374F10b",symbol:"WEENUS",decimals:18,logoURI:void 0},{address:"0x348236484ce96A293E210260b90bBFb228D6d1Fc",symbol:"USDT",decimals:6,logoURI:void 0}];function hh(){const{isConnected:e}=$o(),{config:t}=zn(),{getQuote:i,executeSwap:o,contracts:r,chainId:n}=uh(),[a,s]=v.useState(Zn[0].address),[c,u]=v.useState(Zn[1].address),[p,f]=v.useState(""),[w,y]=v.useState(""),[E,S]=v.useState(!1),[$,A]=v.useState(3e3),[x,I]=v.useState(!1),[_,W]=v.useState(!1),[F,U]=v.useState(null),[te,oe]=v.useState(null),Z=(()=>{var de;const z=(de=t==null?void 0:t.tokenLists)==null?void 0:de[String(n)];if(!z)return Zn;const G=[];return Object.values(z).forEach(vi=>{vi!=null&&vi.tokens&&vi.tokens.forEach(vt=>{G.find(Qs=>{var sa;return Qs.address.toLowerCase()===((sa=vt.address)==null?void 0:sa.toLowerCase())})||G.push({address:vt.address,symbol:vt.symbol,decimals:vt.decimals,logoURI:vt.logoURI})})}),G.length>0?G:Zn})(),re=z=>{var G;return((G=Z.find(de=>de.address.toLowerCase()===z.toLowerCase()))==null?void 0:G.decimals)??18},Le=vo(r),be=z=>{f(z),y(""),S(!0)},Ut=v.useCallback(async()=>{if(!p||!a||!c||a===c){y("");return}if(!Le){y("");return}I(!0),U(null);try{const z=await i({tokenIn:a,tokenInDecimals:re(a),tokenOut:c,amountIn:p,fee:$});if(z){const G=re(c);y(nl(z,G)),S(!1)}else y(""),S(!1),U("No liquidity for this pair/fee tier")}catch(z){U((z==null?void 0:z.message)||"Quote failed"),y(""),S(!1)}finally{I(!1)}},[p,a,c,$,Le,i]);v.useEffect(()=>{const z=setTimeout(Ut,500);return()=>clearTimeout(z)},[Ut]);const H=async()=>{if(!e){U("Connect wallet first");return}if(!(!p||!w)){W(!0),U(null),oe(null);try{const z=re(c),G=Qi(w,z),de=await o({tokenIn:a,tokenInDecimals:re(a),tokenOut:c,tokenOutDecimals:z,amountIn:p,amountOutMinimum:G,fee:$});oe(de),f(""),y("")}catch(z){U((z==null?void 0:z.shortMessage)||(z==null?void 0:z.message)||"Swap failed")}finally{W(!1)}}},L=()=>{s(c),u(a),f(""),y("")},X=!r.router;return h.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-4 max-w-md w-full mx-auto shadow-sm",children:[h.jsxs("div",{className:"flex items-center justify-between mb-4",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Swap"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx("span",{className:"text-xs text-gray-500",children:"Fee tier:"}),h.jsxs("select",{value:$,onChange:z=>A(Number(z.target.value)),className:"bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-lg px-2 py-1 border border-gray-200 dark:border-gray-700",children:[h.jsx("option",{value:500,children:"0.05%"}),h.jsx("option",{value:3e3,children:"0.3%"}),h.jsx("option",{value:1e4,children:"1%"})]})]})]}),X&&h.jsxs("div",{className:"mb-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-xl text-xs text-yellow-700 dark:text-yellow-300",children:["DEX not configured for this domain. Go to"," ",h.jsx("a",{href:"#/admin",className:"underline",children:"Admin"})," to set up contracts."]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(xo,{label:"You pay",value:p,onChange:be,tokenAddress:a,onTokenChange:s,tokenList:Z}),h.jsx("div",{className:"flex justify-center",children:h.jsx("button",{onClick:L,className:"bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 rounded-xl p-2 transition-colors",children:h.jsx("svg",{className:"w-5 h-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4"})})})}),h.jsx(xo,{label:"You receive",value:w,onChange:()=>{},tokenAddress:c,onTokenChange:u,tokenList:Z,readOnly:!0,loading:x})]}),F&&h.jsx("div",{className:"mt-3 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700/50 rounded-xl text-sm text-red-600 dark:text-red-300",children:F}),te&&h.jsxs("div",{className:"mt-3 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 rounded-xl text-sm text-green-700 dark:text-green-300",children:["Swap submitted!"," ",h.jsx("a",{href:`https://testnet.bscscan.com/tx/${te}`,target:"_blank",rel:"noopener noreferrer",className:"underline",children:"View on BSCScan"})]}),h.jsx("button",{onClick:H,disabled:!e||!p||!w||E||x||_||X,className:"mt-4 w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors text-lg",children:_?"Swapping...":e?X?"Not Configured":p?x||E?"Getting price...":"Swap":"Enter amount":"Connect Wallet"}),!Le&&r.router&&h.jsx("p",{className:"mt-2 text-center text-xs text-gray-500",children:"V2 mode — price quotes not available. V3 requires QuoterV2 contract."})]})}function ph(){return h.jsx("div",{className:"flex flex-col items-center",children:h.jsx(hh,{})})}const fh=[{inputs:[{components:[{name:"token0",type:"address"},{name:"token1",type:"address"},{name:"fee",type:"uint24"},{name:"tickLower",type:"int24"},{name:"tickUpper",type:"int24"},{name:"amount0Desired",type:"uint256"},{name:"amount1Desired",type:"uint256"},{name:"amount0Min",type:"uint256"},{name:"amount1Min",type:"uint256"},{name:"recipient",type:"address"},{name:"deadline",type:"uint256"}],name:"params",type:"tuple"}],name:"mint",outputs:[{name:"tokenId",type:"uint256"},{name:"liquidity",type:"uint128"},{name:"amount0",type:"uint256"},{name:"amount1",type:"uint256"}],stateMutability:"payable",type:"function"}],ja=[{inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"}],mh=-887220,gh=887220,wh=[{value:500,label:"0.05%",description:"Best for stable pairs",badge:null},{value:3e3,label:"0.3%",description:"Best for most pairs",badge:"Most common"},{value:1e4,label:"1%",description:"Best for exotic pairs",badge:null}],Wa=[{address:"0x703f112Bda4Cc6cb9c5FB4B2e6140f6D8374F10b",symbol:"WEENUS",decimals:18,logoURI:void 0},{address:"0x348236484ce96A293E210260b90bBFb228D6d1Fc",symbol:"USDT",decimals:6,logoURI:void 0}];function Ba({logoURI:e,symbol:t}){const[i,o]=v.useState(!1);return v.useEffect(()=>{o(!1)},[e]),e&&!i?h.jsx("img",{src:e,alt:t,className:"w-5 h-5 rounded-full flex-shrink-0",onError:()=>o(!0)}):h.jsx("span",{className:"w-5 h-5 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex-shrink-0 inline-flex items-center justify-center text-[8px] text-white font-bold",children:t.slice(0,2)})}function Da({value:e,onChange:t,tokenList:i}){const[o,r]=v.useState(!1),n=v.useRef(null),a=e?i.find(s=>s.address.toLowerCase()===e.toLowerCase()):void 0;return v.useEffect(()=>{const s=c=>{n.current&&!n.current.contains(c.target)&&r(!1)};return document.addEventListener("mousedown",s),()=>document.removeEventListener("mousedown",s)},[]),h.jsx("div",{className:"relative flex-1 min-w-0",ref:n,children:i.length>0?h.jsxs(h.Fragment,{children:[h.jsxs("button",{type:"button",onClick:()=>r(s=>!s),className:"w-full flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-2xl px-3 py-3 font-medium transition-colors border border-gray-200 dark:border-gray-700",children:[a?h.jsx(Ba,{logoURI:a.logoURI,symbol:a.symbol}):h.jsx("span",{className:"w-5 h-5 rounded-full bg-gray-300 dark:bg-gray-600 flex-shrink-0 inline-flex items-center justify-center text-[9px] text-gray-500 dark:text-gray-400 font-bold",children:"?"}),h.jsx("span",{className:"flex-1 text-left text-sm truncate min-w-0",children:(a==null?void 0:a.symbol)??"Select"}),h.jsx("svg",{className:`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform ${o?"rotate-180":""}`,fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:h.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})})]}),o&&h.jsx("div",{className:"absolute left-0 right-0 top-full mt-1 z-50 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-auto max-h-52 shadow-xl",children:i.map(s=>h.jsxs("button",{type:"button",onClick:()=>{t(s.address),r(!1)},className:`flex items-center gap-2.5 w-full px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-left ${s.address.toLowerCase()===e.toLowerCase()?"bg-gray-100 dark:bg-gray-700":""}`,children:[h.jsx(Ba,{logoURI:s.logoURI,symbol:s.symbol}),h.jsxs("div",{className:"min-w-0",children:[h.jsx("div",{className:"text-gray-900 dark:text-white font-medium",children:s.symbol}),h.jsxs("div",{className:"text-gray-400 text-xs font-mono truncate",children:[s.address.slice(0,6),"…",s.address.slice(-4)]})]})]},s.address))})]}):h.jsx("input",{type:"text",value:e,onChange:s=>t(s.target.value),placeholder:"Token address 0x...",className:"w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-2xl px-4 py-3 text-sm border border-gray-200 dark:border-gray-700 outline-none"})})}function qn({children:e}){return h.jsx("p",{className:"text-sm font-semibold text-gray-900 dark:text-white mb-3",children:e})}function bh(){var H;const{address:e,isConnected:t}=$o(),i=Co(),{config:o}=zn(),{writeContractAsync:r}=Or(),[n,a]=v.useState(""),[s,c]=v.useState(""),[u,p]=v.useState(""),[f,w]=v.useState(""),[y,E]=v.useState(3e3),[S,$]=v.useState(!0),[A,x]=v.useState(!1),[I,_]=v.useState(null),[W,F]=v.useState(null),U=((H=o==null?void 0:o.contracts)==null?void 0:H[String(i)])||{},te=vo(U),oe=!!U.positionManager,Z=(()=>{var z;const L=(z=o==null?void 0:o.tokenLists)==null?void 0:z[String(i)];if(!L)return Wa;const X=[];return Object.values(L).forEach(G=>{G!=null&&G.tokens&&G.tokens.forEach(de=>{X.find(vi=>{var vt;return vi.address.toLowerCase()===((vt=de.address)==null?void 0:vt.toLowerCase())})||X.push({address:de.address,symbol:de.symbol,decimals:de.decimals??18,logoURI:de.logoURI})})}),X.length>0?X:Wa})(),re=L=>{var X;return((X=Z.find(z=>z.address.toLowerCase()===L.toLowerCase()))==null?void 0:X.decimals)??18},Le=["USDT","WBTC"];v.useEffect(()=>{if(Z.length<2)return;const L=G=>Z.find(de=>de.symbol.toUpperCase()===G),X=L(Le[0])??Z[0],z=L(Le[1])??Z.find(G=>G.address!==X.address)??Z[1];a(G=>G||X.address),c(G=>G||z.address)},[Z.length]);const be=async()=>{if(e){if(!U.positionManager){_("NonfungiblePositionManager not configured. Add positionManager address in Admin.");return}x(!0),_(null),F(null);try{const L=U.positionManager,X=Qi(u,re(n)),z=Qi(f,re(s)),G=BigInt(Math.floor(Date.now()/1e3)+1200);await r({address:n,abi:ja,functionName:"approve",args:[L,X]}),await r({address:s,abi:ja,functionName:"approve",args:[L,z]});const de=await r({address:L,abi:fh,functionName:"mint",args:[{token0:n,token1:s,fee:y,tickLower:mh,tickUpper:gh,amount0Desired:X,amount1Desired:z,amount0Min:BigInt(0),amount1Min:BigInt(0),recipient:e,deadline:G}]});F(de)}catch(L){_((L==null?void 0:L.shortMessage)||(L==null?void 0:L.message)||"Add liquidity failed")}finally{x(!1)}}};if(!U.router)return h.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 max-w-md w-full mx-auto shadow-sm",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Add Liquidity"}),h.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl text-sm text-yellow-700 dark:text-yellow-300",children:["DEX contracts not configured for this domain. Go to"," ",h.jsx("a",{href:"#/admin",className:"underline font-medium",children:"Admin"})," to set up."]})]});if(!te)return h.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 max-w-md w-full mx-auto shadow-sm",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-4",children:"Add Liquidity"}),h.jsxs("div",{className:"p-4 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl text-sm text-yellow-700 dark:text-yellow-300",children:["V2 mode. Liquidity pools require V3 contracts (QuoterV2 + NonfungiblePositionManager). Add ",h.jsx("strong",{children:"Quoter"})," and ",h.jsx("strong",{children:"Position Manager"})," in"," ",h.jsx("a",{href:"#/admin",className:"underline font-medium",children:"Admin"}),"."]})]});const Ut=t&&n&&s&&u&&f&&!A&&oe;return h.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 w-full max-w-md mx-auto shadow-sm overflow-visible",children:[h.jsxs("div",{className:"flex items-center justify-between px-5 pt-5 pb-4 border-b border-gray-100 dark:border-gray-800",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white",children:"Add Liquidity"}),h.jsx("span",{className:"text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-lg",children:"V3"})]}),h.jsxs("div",{className:"px-5 pt-5 space-y-5",children:[h.jsxs("div",{children:[h.jsx(qn,{children:"Select pair"}),h.jsxs("div",{className:"flex items-center gap-2",children:[h.jsx(Da,{value:n,onChange:a,tokenList:Z}),h.jsx("div",{className:"flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 text-lg font-medium",children:"+"}),h.jsx(Da,{value:s,onChange:c,tokenList:Z})]})]}),h.jsxs("div",{children:[h.jsx(qn,{children:"Fee tier"}),h.jsx("div",{className:"grid grid-cols-3 gap-2",children:wh.map(L=>{const X=y===L.value;return h.jsxs("button",{type:"button",onClick:()=>E(L.value),className:`relative flex flex-col items-center gap-0.5 rounded-2xl px-2 py-3 border transition-all text-center ${X?"bg-blue-50 dark:bg-blue-900/30 border-blue-400 dark:border-blue-500":"bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"}`,children:[L.badge&&h.jsx("span",{className:"absolute -top-2 left-1/2 -translate-x-1/2 text-[10px] bg-blue-500 text-white rounded-full px-1.5 py-0.5 whitespace-nowrap font-medium",children:L.badge}),h.jsx("span",{className:`text-sm font-semibold ${X?"text-blue-600 dark:text-blue-400":"text-gray-900 dark:text-white"}`,children:L.label}),h.jsx("span",{className:"text-[10px] text-gray-400 dark:text-gray-500 leading-tight",children:L.description}),X&&h.jsx("span",{className:"mt-1 w-1.5 h-1.5 rounded-full bg-blue-500"})]},L.value)})})]}),h.jsxs("div",{children:[h.jsxs("div",{className:"flex items-center justify-between mb-3",children:[h.jsx(qn,{children:"Price range"}),h.jsx("button",{type:"button",onClick:()=>$(!0),className:`text-xs px-3 py-1 rounded-xl font-medium transition-colors ${S?"bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400":"text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`,children:"Full range"})]}),S?h.jsxs("div",{className:"rounded-2xl border border-dashed border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 p-4 text-center",children:[h.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500",children:"Your position will cover the entire price range"}),h.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mt-1",children:"0 ↔ ∞"})]}):h.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{label:"Min price",placeholder:"0"},{label:"Max price",placeholder:"∞"}].map(({label:L,placeholder:X})=>h.jsxs("div",{className:"rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 text-center",children:[h.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-1",children:L}),h.jsx("input",{type:"number",defaultValue:"",placeholder:X,className:"w-full bg-transparent text-gray-900 dark:text-white text-center text-sm font-medium outline-none placeholder-gray-300 dark:placeholder-gray-600"}),h.jsx("p",{className:"text-[10px] text-gray-400 dark:text-gray-500 mt-1",children:"Token1 per Token0"})]},L))}),!S&&h.jsx("button",{type:"button",onClick:()=>$(!1),className:"mt-1 text-xs text-blue-500 hover:text-blue-400 transition-colors",children:"Switch to custom range"})]}),h.jsxs("div",{children:[h.jsx(qn,{children:"Deposit amounts"}),!oe&&h.jsxs("div",{className:"mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-2xl text-xs text-yellow-700 dark:text-yellow-300",children:["Position Manager not configured."," ",h.jsx("a",{href:"#/admin",className:"underline font-medium",children:"Add in Admin"}),h.jsx("span",{className:"block mt-1 font-mono text-yellow-600 dark:text-yellow-500",children:"BSC Testnet: 0x427b…96c1"})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx(xo,{label:"",value:u,onChange:p,tokenAddress:n,onTokenChange:a,tokenList:Z}),h.jsx(xo,{label:"",value:f,onChange:w,tokenAddress:s,onTokenChange:c,tokenList:Z})]})]}),I&&h.jsx("div",{className:"p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700/50 rounded-2xl text-sm text-red-600 dark:text-red-300",children:I}),W&&h.jsxs("div",{className:"p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-2xl text-sm text-green-700 dark:text-green-300",children:["Position minted!"," ",h.jsx("a",{href:`https://testnet.bscscan.com/tx/${W}`,target:"_blank",rel:"noopener noreferrer",className:"underline font-medium",children:"View TX"})]})]}),h.jsx("div",{className:"px-5 pt-4 pb-5",children:h.jsx("button",{onClick:be,disabled:!Ut,className:"w-full bg-blue-600 hover:bg-blue-500 active:bg-blue-700 disabled:bg-gray-100 dark:disabled:bg-gray-800 disabled:text-gray-400 dark:disabled:text-gray-600 disabled:cursor-not-allowed text-white font-semibold py-4 rounded-2xl transition-colors text-base",children:A?"Adding liquidity...":t?oe?!u||!f?"Enter amounts":"Add liquidity":"Position Manager not configured":"Connect wallet"})})]})}function yh(){return h.jsx("div",{className:"flex flex-col items-center",children:h.jsx(bh,{})})}const vh=[{id:"pcs-testnet",dex:"PancakeSwap V3",network:"BSC Testnet",chainId:97,contracts:{factory:"0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865",router:"0x9a489505a00cE272eAa5e07Dba6491314CaE3796",quoter:"0xbC203d7f83677c7ed3F7acEc959963E7F4ECC5C2",positionManager:"0x427bF5b37357632377eCbEC9de3626C71A5396c1"}},{id:"pcs-mainnet",dex:"PancakeSwap V3",network:"BSC Mainnet",chainId:56,contracts:{factory:"0x0BFbCF9fa4f9C56B0F40a671Ad40E0805A091865",router:"0x13f4EA83D0bd40E75C8222255bc855a974568Dd4",quoter:"0xB048Bbc1Ee6b733FFfCFb9e9CeF7375518e25997",positionManager:"0x46A15B0b27311cedF172AB29E4f4766fbE7F4364"}},{id:"uni-eth",dex:"Uniswap V3",network:"Ethereum",chainId:1,contracts:{factory:"0x1F98431c8aD98523631AE4a59f267346ea31F984",router:"0xE592427A0AEce92De3Edee1F18E0157C05861564",quoter:"0x61fFE014bA17989E743c5F6cB21bF9697530B21e",positionManager:"0xC36442b4a4522E871399CD717aBDD847Ab11FE88"}}],xh=`# Deploy your own V3 contracts

## Option 1: script (BSC Testnet)
PRIVATE_KEY=0x... node scripts/register-testnet.cjs

## Option 2: Hardhat / Foundry
https://github.com/Uniswap/v3-core — deploy Factory
https://github.com/Uniswap/v3-periphery — deploy Router, QuoterV2, NonfungiblePositionManager

## BSC Testnet faucet
https://testnet.bnbchain.org/faucet-smart`;function Ch(){var Ut;const{address:e,isConnected:t}=$o(),i=Co(),{config:o,domain:r}=zn(),{writeContractAsync:n}=Or(),{deployContractAsync:a}=ol(),s=za(),c=((Ut=o==null?void 0:o.contracts)==null?void 0:Ut[String(i)])||{},[u,p]=v.useState({factory:c.factory||"",router:c.router||"",quoter:c.quoter||"",positionManager:c.positionManager||""}),[f,w]=v.useState({projectName:(o==null?void 0:o.projectName)||"",brandColor:(o==null?void 0:o.brandColor)||"#2172E5",logo:(o==null?void 0:o.logo)||""}),[y,E]=v.useState(!1),[S,$]=v.useState(""),[A,x]=v.useState(null),[I,_]=v.useState(!1),[W,F]=v.useState(!1),[U,te]=v.useState(!1),[oe,Z]=v.useState(null),re=!!wn[i],Le=async()=>{if(!(!e||!s)){te(!0),x(null);try{const H=await a({abi:yo,bytecode:oh,args:[]}),L=await s.waitForTransactionReceipt({hash:H});L.contractAddress&&Z(L.contractAddress)}catch(H){x((H==null?void 0:H.shortMessage)||(H==null?void 0:H.message)||"Deploy failed")}finally{te(!1)}}},be=async()=>{if(!e){x("Connect wallet to save");return}if(!re){x(`Chain ${i} not supported. Switch to BSC Mainnet (56) or BSC Testnet (97).`);return}const H=[{key:"factory",label:"Factory"},{key:"router",label:"Router"},{key:"quoter",label:"Quoter"},{key:"positionManager",label:"Position Manager"}];for(const{key:L,label:X}of H){const z=u[L];if(z&&!rl(z)){x(`Invalid address for ${X}: "${z}"`);return}}E(!0),x(null),_(!1),$("");try{await sh({domain:r||Lr(),owner:e,chainId:i,data:{projectName:f.projectName,brandColor:f.brandColor,logo:f.logo,contracts:{[String(i)]:{factory:u.factory||void 0,router:u.router||void 0,quoter:u.quoter||void 0,positionManager:u.positionManager||void 0}}},writeContract:L=>n(L),onStatus:L=>$(L)}),_(!0),$(""),setTimeout(()=>_(!1),5e3)}catch(L){x((L==null?void 0:L.shortMessage)||(L==null?void 0:L.message)||"Save failed"),$("")}finally{E(!1)}};return h.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 p-6 max-w-lg w-full mx-auto shadow-sm",children:[h.jsx("h2",{className:"text-lg font-semibold text-gray-900 dark:text-white mb-1",children:"Admin Panel"}),h.jsxs("p",{className:"text-xs text-gray-500 mb-6",children:["Domain: ",h.jsx("span",{className:"text-gray-300 font-mono",children:r||Lr()}),(o==null?void 0:o.admin)&&h.jsxs("span",{className:"ml-3",children:["Owner: ",h.jsxs("span",{className:"text-gray-300 font-mono text-xs",children:[o.admin.slice(0,6),"…",o.admin.slice(-4)]})]})]}),h.jsxs("section",{className:"mb-6",children:[h.jsxs("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:["Contracts — Chain ",i]}),!re&&!oe&&h.jsxs("div",{className:"mb-3 p-3 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-700/50 rounded-xl text-xs text-yellow-700 dark:text-yellow-300",children:[h.jsxs("p",{className:"mb-2",children:["Chain ",i," has no Storage contract yet."]}),h.jsx("p",{className:"mb-3 text-yellow-600 dark:text-yellow-400",children:"You can deploy one — we'll add it to the supported list after you send us the address."}),h.jsx("button",{type:"button",onClick:Le,disabled:!t||U,className:"w-full bg-yellow-500 hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-xl transition-colors text-xs",children:U?"Deploying Storage contract…":"Deploy Storage contract on this chain"})]}),oe&&h.jsxs("div",{className:"mb-3 p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/50 rounded-xl text-xs",children:[h.jsx("p",{className:"text-green-700 dark:text-green-400 font-medium mb-2",children:"✓ Storage contract deployed!"}),h.jsxs("p",{className:"text-gray-600 dark:text-gray-400 mb-1",children:["Address on chain ",i,":"]}),h.jsx("code",{className:"block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg px-2 py-1.5 font-mono text-[11px] break-all cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors",onClick:()=>navigator.clipboard.writeText(oe),title:"Click to copy",children:oe}),h.jsxs("p",{className:"mt-2 text-yellow-600 dark:text-yellow-500",children:["Send this address to the team — we'll add chain ",i," to the supported list."]})]}),h.jsxs("div",{className:"mb-3",children:[h.jsx("p",{className:"text-xs text-gray-400 dark:text-gray-500 mb-2",children:"Known deployments:"}),h.jsxs("div",{className:"flex flex-wrap gap-2",children:[vh.map(H=>{const L=H.chainId===i;return h.jsxs("button",{type:"button",onClick:()=>p(H.contracts),className:`text-xs rounded-lg px-3 py-1.5 font-medium border transition-colors ${L?"bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-700 hover:bg-blue-100 dark:hover:bg-blue-900/50":"bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"}`,children:[H.dex,h.jsx("span",{className:`ml-1.5 ${L?"text-blue-400 dark:text-blue-500":"text-gray-400 dark:text-gray-500"}`,children:H.network})]},H.id)}),h.jsx("button",{type:"button",onClick:()=>F(H=>!H),className:"text-xs rounded-lg px-3 py-1.5 font-medium border border-dashed border-gray-300 dark:border-gray-600 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 transition-colors",children:"Deploy your own ↗"})]})]}),W&&h.jsxs("div",{className:"mb-3 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl",children:[h.jsxs("div",{className:"flex items-center justify-between mb-2",children:[h.jsx("span",{className:"text-xs font-medium text-gray-700 dark:text-gray-300",children:"Deploy your own V3 contracts"}),h.jsx("button",{type:"button",onClick:()=>F(!1),className:"text-gray-400 hover:text-gray-600 text-xs",children:"✕"})]}),h.jsx("pre",{className:"text-[11px] text-gray-600 dark:text-gray-400 whitespace-pre-wrap leading-relaxed font-mono overflow-x-auto",children:xh})]}),h.jsx("div",{className:"space-y-3",children:[{key:"factory",label:"Factory",hint:"UniswapV3Factory / PancakeV3Factory"},{key:"router",label:"Router",hint:"SwapRouter02"},{key:"quoter",label:"Quoter (V3)",hint:"QuoterV2 — enables V3 price quotes"},{key:"positionManager",label:"Position Manager",hint:"NonfungiblePositionManager"}].map(({key:H,label:L,hint:X})=>h.jsxs("div",{children:[h.jsxs("label",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1 block",children:[L,h.jsx("span",{className:"ml-2 text-gray-400 dark:text-gray-600",children:X})]}),h.jsx("input",{value:u[H],onChange:z=>p(G=>({...G,[H]:z.target.value})),placeholder:"0x...",className:"w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 font-mono"})]},H))})]}),h.jsxs("section",{className:"mb-6",children:[h.jsx("h3",{className:"text-sm font-medium text-gray-700 dark:text-gray-300 mb-3",children:"Branding"}),h.jsxs("div",{className:"space-y-3",children:[h.jsxs("div",{children:[h.jsx("label",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1 block",children:"Project Name"}),h.jsx("input",{value:f.projectName,onChange:H=>w(L=>({...L,projectName:H.target.value})),placeholder:"My DEX",className:"w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm border border-gray-200 dark:border-gray-700"})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1 block",children:"Brand Color"}),h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("input",{type:"color",value:f.brandColor,onChange:H=>w(L=>({...L,brandColor:H.target.value})),className:"w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"}),h.jsx("input",{value:f.brandColor,onChange:H=>w(L=>({...L,brandColor:H.target.value})),placeholder:"#2172E5",className:"flex-1 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm border border-gray-200 dark:border-gray-700 font-mono"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"text-xs text-gray-500 dark:text-gray-400 mb-1 block",children:"Logo URL"}),h.jsx("input",{value:f.logo,onChange:H=>w(L=>({...L,logo:H.target.value})),placeholder:"https://...",className:"w-full bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-3 py-2 text-sm border border-gray-200 dark:border-gray-700"})]})]})]}),A&&h.jsx("div",{className:"mb-4 p-3 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700/50 rounded-xl text-sm text-red-600 dark:text-red-300",children:A}),I&&h.jsx("div",{className:"mb-4 p-3 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700/50 rounded-xl text-sm text-green-700 dark:text-green-300",children:"✓ Config saved to BSC Storage!"}),h.jsx("button",{onClick:be,disabled:!t||y||!re,className:"w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:text-gray-400 dark:disabled:text-gray-500 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-2xl transition-colors",children:y?S||"Saving…":t?re?"Save Configuration":`Chain ${i} not supported`:"Connect Wallet to Save"}),h.jsxs("p",{className:"mt-3 text-xs text-gray-400 dark:text-gray-500 text-center",children:["Saves to BSC ",i===97?"Testnet":"Mainnet"," Storage. Only domain owner can update."]})]})}function $h(){return h.jsx("div",{className:"flex flex-col items-center",children:h.jsx(Ch,{})})}function kh(){const{config:e,loading:t}=zn();return e!=null&&e.brandColor&&document.documentElement.style.setProperty("--brand-color",e.brandColor),e!=null&&e.projectName&&(document.title=e.projectName),h.jsxs("div",{className:"min-h-screen flex flex-col",children:[h.jsx(lh,{projectName:e==null?void 0:e.projectName}),h.jsx("main",{className:"flex-1 container mx-auto px-4 py-8 max-w-2xl",children:t?h.jsx("div",{className:"flex items-center justify-center h-64",children:h.jsx("div",{className:"text-gray-400",children:"Loading DEX configuration..."})}):h.jsxs(V1,{children:[h.jsx(Gi,{path:"/",element:h.jsx(z1,{to:"/swap",replace:!0})}),h.jsx(Gi,{path:"/swap",element:h.jsx(ph,{})}),h.jsx(Gi,{path:"/pool",element:h.jsx(yh,{})}),h.jsx(Gi,{path:"/admin",element:h.jsx($h,{})})]})})]})}function Sh(){return h.jsx(X1,{children:h.jsx(kh,{})})}const Eh=new al({defaultOptions:{queries:{staleTime:3e4,retry:1}}});or.createRoot(document.getElementById("root")).render(h.jsx(bn.StrictMode,{children:h.jsx(sl,{config:Bs,children:h.jsx(ll,{client:Eh,children:h.jsx(Sh,{})})})}));export{Vn as C,xi as H,Nn as a,Il as b,Ga as c,Pp as d,Tn as e,E0 as f,Mr as g,$d as h,Rd as i,zf as j,d as n,R as o,m as r};
