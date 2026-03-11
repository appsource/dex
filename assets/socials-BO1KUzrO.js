import{c as O,a as _,i as I,j as S,O as h,s as W,R as f,t as T,b as c,f as C,u as F,x as D,y as U,C as d,k as P,o as u,z as A,S as v,B as N,M as R,T as x}from"./appkit-BbMK-Dzx.js";import{n as j,r as l,b as M,o as $,C as z}from"./index-s0S8Rlok.js";import"./wagmi-CT6UJGrP.js";import"./react-D-onyDnq.js";const q=O`
  :host {
    margin-top: ${({spacing:t})=>t[1]};
  }
  wui-separator {
    margin: ${({spacing:t})=>t[3]} calc(${({spacing:t})=>t[3]} * -1)
      ${({spacing:t})=>t[2]} calc(${({spacing:t})=>t[3]} * -1);
    width: calc(100% + ${({spacing:t})=>t[3]} * 2);
  }
`;var g=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let p=class extends I{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=S.state.connectors,this.authConnector=this.connectors.find(e=>e.type==="AUTH"),this.remoteFeatures=h.state.remoteFeatures,this.isPwaLoading=!1,this.hasExceededUsageLimit=W.state.plan.hasExceededUsageLimit,this.unsubscribe.push(S.subscribeKey("connectors",e=>{this.connectors=e,this.authConnector=this.connectors.find(o=>o.type==="AUTH")}),h.subscribeKey("remoteFeatures",e=>this.remoteFeatures=e))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var i;let e=((i=this.remoteFeatures)==null?void 0:i.socials)||[];const o=!!this.authConnector,r=e==null?void 0:e.length,n=f.state.view==="ConnectSocials";return(!o||!r)&&!n?null:(n&&!r&&(e=T.DEFAULT_SOCIALS),c` <wui-flex flexDirection="column" gap="2">
      ${e.map(s=>c`<wui-list-social
            @click=${()=>{this.onSocialClick(s)}}
            data-testid=${`social-selector-${s}`}
            name=${s}
            logo=${s}
            ?disabled=${this.isPwaLoading}
          ></wui-list-social>`)}
    </wui-flex>`)}async onSocialClick(e){if(this.hasExceededUsageLimit){f.push("UsageExceeded");return}e&&await M(e)}async handlePwaFrameLoad(){var e;if(C.isPWA()){this.isPwaLoading=!0;try{((e=this.authConnector)==null?void 0:e.provider)instanceof F&&await this.authConnector.provider.init()}catch(o){D.open({displayMessage:"Error loading embedded wallet in PWA",debugMessage:o.message},"error")}finally{this.isPwaLoading=!1}}}};p.styles=q;g([j()],p.prototype,"tabIdx",void 0);g([l()],p.prototype,"connectors",void 0);g([l()],p.prototype,"authConnector",void 0);g([l()],p.prototype,"remoteFeatures",void 0);g([l()],p.prototype,"isPwaLoading",void 0);g([l()],p.prototype,"hasExceededUsageLimit",void 0);p=g([_("w3m-social-login-list")],p);const B=O`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:t})=>t.md}
      ${({easings:t})=>t["ease-out-power-1"]};
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
`;var k=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let L=class extends I{constructor(){super(),this.unsubscribe=[],this.checked=U.state.isLegalCheckboxChecked,this.unsubscribe.push(U.subscribeKey("isLegalCheckboxChecked",e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){var E;const{termsConditionsUrl:e,privacyPolicyUrl:o}=h.state,r=(E=h.state.features)==null?void 0:E.legalCheckbox,s=!!(e||o)&&!!r&&!this.checked,a=s?-1:void 0;return c`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${["0","3","3","3"]}
        gap="01"
        class=${$(s?"disabled":void 0)}
      >
        <w3m-social-login-list tabIdx=${$(a)}></w3m-social-login-list>
      </wui-flex>
    `}};L.styles=B;k([l()],L.prototype,"checked",void 0);L=k([_("w3m-connect-socials-view")],L);const G=O`
  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }
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
  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all ${({easings:t})=>t["ease-out-power-2"]}
      ${({durations:t})=>t.lg};
  }
  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:t})=>t[4]};
  }
  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }
  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:t})=>t["ease-out-power-2"]} both;
  }
  .capitalize {
    text-transform: capitalize;
  }
`;var b=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let m=class extends I{constructor(){var o,r,n;super(),this.unsubscribe=[],this.socialProvider=(o=d.getAccountData())==null?void 0:o.socialProvider,this.socialWindow=(r=d.getAccountData())==null?void 0:r.socialWindow,this.error=!1,this.connecting=!1,this.message="Connect in the provider window",this.remoteFeatures=h.state.remoteFeatures,this.address=(n=d.getAccountData())==null?void 0:n.address,this.connectionsByNamespace=P.getConnections(d.state.activeChain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.authConnector=S.getAuthConnector(),this.handleSocialConnection=async i=>{var s;if((s=i.data)!=null&&s.resultUri)if(i.origin===z.SECURE_SITE_ORIGIN){window.removeEventListener("message",this.handleSocialConnection,!1);try{if(this.authConnector&&!this.connecting){this.connecting=!0;const a=this.parseURLError(i.data.resultUri);if(a){this.handleSocialError(a);return}this.closeSocialWindow(),this.updateMessage();const E=i.data.resultUri;this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}}),await P.connectExternal({id:this.authConnector.id,type:this.authConnector.type,socialUri:E},this.authConnector.chain),this.socialProvider&&(A.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}))}}catch(a){this.error=!0,this.updateMessage(),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:C.parseError(a)}})}}else f.goBack(),v.showError("Untrusted Origin"),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:"Untrusted Origin"}})},N.EmbeddedWalletAbortController.signal.addEventListener("abort",()=>{this.closeSocialWindow()}),this.unsubscribe.push(d.subscribeChainProp("accountState",i=>{var s;if(i&&(this.socialProvider=i.socialProvider,i.socialWindow&&(this.socialWindow=i.socialWindow),i.address)){const a=(s=this.remoteFeatures)==null?void 0:s.multiWallet;i.address!==this.address&&(this.hasMultipleConnections&&a?(f.replace("ProfileWallets"),v.showSuccess("New Wallet Added"),this.address=i.address):(R.state.open||h.state.enableEmbedded)&&R.close())}}),h.subscribeKey("remoteFeatures",i=>{this.remoteFeatures=i})),this.authConnector&&this.connectSocial()}disconnectedCallback(){this.unsubscribe.forEach(o=>o()),window.removeEventListener("message",this.handleSocialConnection,!1),!d.state.activeCaipAddress&&this.socialProvider&&!this.connecting&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}}),this.closeSocialWindow()}render(){return c`
      <wui-flex
        data-error=${$(this.error)}
        flexDirection="column"
        alignItems="center"
        .padding=${["10","5","5","5"]}
        gap="6"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo=${$(this.socialProvider)}></wui-logo>
          ${this.error?null:this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="lg-medium" color="primary"
            >Log in with
            <span class="capitalize">${this.socialProvider??"Social"}</span></wui-text
          >
          <wui-text align="center" variant="lg-regular" color=${this.error?"error":"secondary"}
            >${this.message}</wui-text
          ></wui-flex
        >
      </wui-flex>
    `}loaderTemplate(){const e=x.state.themeVariables["--w3m-border-radius-master"],o=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}parseURLError(e){try{const o="error=",r=e.indexOf(o);return r===-1?null:e.substring(r+o.length)}catch{return null}}connectSocial(){const e=setInterval(()=>{var o;(o=this.socialWindow)!=null&&o.closed&&(!this.connecting&&f.state.view==="ConnectingSocial"&&f.goBack(),clearInterval(e))},1e3);window.addEventListener("message",this.handleSocialConnection,!1)}updateMessage(){this.error?this.message="Something went wrong":this.connecting?this.message="Retrieving user data":this.message="Connect in the provider window"}handleSocialError(e){this.error=!0,this.updateMessage(),this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:e}}),this.closeSocialWindow()}closeSocialWindow(){this.socialWindow&&(this.socialWindow.close(),d.setAccountProp("socialWindow",void 0,d.state.activeChain))}};m.styles=G;b([l()],m.prototype,"socialProvider",void 0);b([l()],m.prototype,"socialWindow",void 0);b([l()],m.prototype,"error",void 0);b([l()],m.prototype,"connecting",void 0);b([l()],m.prototype,"message",void 0);b([l()],m.prototype,"remoteFeatures",void 0);m=b([_("w3m-connecting-social-view")],m);const V=O`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:t})=>t[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:t})=>t.xl};
    animation-timing-function: ${({easings:t})=>t["ease-out-power-2"]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  wui-logo {
    width: 80px;
    height: 80px;
    border-radius: ${({borderRadius:t})=>t[8]};
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:t})=>t[1]} * -1);
    bottom: calc(${({spacing:t})=>t[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:t})=>t.lg} ${({easings:t})=>t["ease-out-power-2"]},
      transform ${({durations:t})=>t.lg}
        ${({easings:t})=>t["ease-out-power-2"]};
    will-change: opacity, transform;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;var y=function(t,e,o,r){var n=arguments.length,i=n<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,o):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(i=(n<3?s(i):n>3?s(e,o,i):s(e,o))||i);return n>3&&i&&Object.defineProperty(e,o,i),i};let w=class extends I{constructor(){var e,o;super(),this.unsubscribe=[],this.timeout=void 0,this.socialProvider=(e=d.getAccountData())==null?void 0:e.socialProvider,this.uri=(o=d.getAccountData())==null?void 0:o.farcasterUrl,this.ready=!1,this.loading=!1,this.remoteFeatures=h.state.remoteFeatures,this.authConnector=S.getAuthConnector(),this.forceUpdate=()=>{this.requestUpdate()},this.unsubscribe.push(d.subscribeChainProp("accountState",r=>{this.socialProvider=r==null?void 0:r.socialProvider,this.uri=r==null?void 0:r.farcasterUrl,this.connectFarcaster()}),h.subscribeKey("remoteFeatures",r=>{this.remoteFeatures=r})),window.addEventListener("resize",this.forceUpdate)}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.timeout),window.removeEventListener("resize",this.forceUpdate),!d.state.activeCaipAddress&&this.socialProvider&&(this.uri||this.loading)&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_CANCELED",properties:{provider:this.socialProvider}})}render(){return this.onRenderProxy(),c`${this.platformTemplate()}`}platformTemplate(){return C.isMobile()?c`${this.mobileTemplate()}`:c`${this.desktopTemplate()}`}desktopTemplate(){return this.loading?c`${this.loadingTemplate()}`:c`${this.qrTemplate()}`}qrTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["0","5","5","5"]}
      gap="5"
    >
      <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

      <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
      ${this.copyTemplate()}
    </wui-flex>`}loadingTemplate(){return c`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["5","5","5","5"]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-logo logo="farcaster"></wui-logo>
          ${this.loaderTemplate()}
          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>
        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="md-medium" color="primary">
            Loading user data
          </wui-text>
          <wui-text align="center" variant="sm-regular" color="secondary">
            Please wait a moment while we load your data.
          </wui-text>
        </wui-flex>
      </wui-flex>
    `}mobileTemplate(){return c` <wui-flex
      flexDirection="column"
      alignItems="center"
      .padding=${["10","5","5","5"]}
      gap="5"
    >
      <wui-flex justifyContent="center" alignItems="center">
        <wui-logo logo="farcaster"></wui-logo>
        ${this.loaderTemplate()}
        <wui-icon-box
          color="error"
          icon="close"
          size="sm"
        ></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="2">
        <wui-text align="center" variant="md-medium" color="primary"
          >Continue in Farcaster</span></wui-text
        >
        <wui-text align="center" variant="sm-regular" color="secondary"
          >Accept connection request in the app</wui-text
        ></wui-flex
      >
      ${this.mobileLinkTemplate()}
    </wui-flex>`}loaderTemplate(){const e=x.state.themeVariables["--w3m-border-radius-master"],o=e?parseInt(e.replace("px",""),10):4;return c`<wui-loading-thumbnail radius=${o*9}></wui-loading-thumbnail>`}async connectFarcaster(){var e,o;if(this.authConnector)try{await((e=this.authConnector)==null?void 0:e.provider.connectFarcaster()),this.socialProvider&&(A.setConnectedSocialProvider(this.socialProvider),u.sendEvent({type:"track",event:"SOCIAL_LOGIN_REQUEST_USER_DATA",properties:{provider:this.socialProvider}})),this.loading=!0;const n=P.getConnections(this.authConnector.chain).length>0;await P.connectExternal(this.authConnector,this.authConnector.chain);const i=(o=this.remoteFeatures)==null?void 0:o.multiWallet;this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_SUCCESS",properties:{provider:this.socialProvider}}),this.loading=!1,n&&i?(f.replace("ProfileWallets"),v.showSuccess("New Wallet Added")):R.close()}catch(r){this.socialProvider&&u.sendEvent({type:"track",event:"SOCIAL_LOGIN_ERROR",properties:{provider:this.socialProvider,message:C.parseError(r)}}),f.goBack(),v.showError(r)}}mobileLinkTemplate(){return c`<wui-button
      size="md"
      ?loading=${this.loading}
      ?disabled=${!this.uri||this.loading}
      @click=${()=>{this.uri&&C.openHref(this.uri,"_blank")}}
    >
      Open farcaster</wui-button
    >`}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const e=this.getBoundingClientRect().width-40,o=x.state.themeVariables["--apkt-qr-color"]??x.state.themeVariables["--w3m-qr-color"];return c` <wui-qr-code
      size=${e}
      theme=${x.state.themeMode}
      uri=${this.uri}
      ?farcaster=${!0}
      data-testid="wui-qr-code"
      color=${$(o)}
    ></wui-qr-code>`}copyTemplate(){const e=!this.uri||!this.ready;return c`<wui-button
      .disabled=${e}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      <wui-icon size="sm" color="default" slot="iconRight" name="copy"></wui-icon>
      Copy link
    </wui-button>`}onCopyUri(){try{this.uri&&(C.copyToClopboard(this.uri),v.showSuccess("Link copied"))}catch{v.showError("Failed to copy")}}};w.styles=V;y([l()],w.prototype,"socialProvider",void 0);y([l()],w.prototype,"uri",void 0);y([l()],w.prototype,"ready",void 0);y([l()],w.prototype,"loading",void 0);y([l()],w.prototype,"remoteFeatures",void 0);w=y([_("w3m-connecting-farcaster-view")],w);export{L as W3mConnectSocialsView,w as W3mConnectingFarcasterView,m as W3mConnectingSocialView};
