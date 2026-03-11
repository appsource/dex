import{c as I,a as A,i as D,C as $,K as s,L as h,b as c,t as V,P as W,o as O,R as S,f as z,M,g as F,W as Q,r as B,e as K,Q as E}from"./appkit-BbMK-Dzx.js";import{r as a,n as w}from"./index-s0S8Rlok.js";import"./index-LmbNiI05.js";import"./wagmi-CT6UJGrP.js";import"./react-D-onyDnq.js";const q=I`
  :host {
    width: 100%;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    cursor: pointer;
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    padding-top: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[2]};
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} + ${({borderRadius:e})=>e[1]}
    );
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-row-title {
    white-space: nowrap;
  }

  .details-row.provider-free-row {
    padding-right: ${({spacing:e})=>e[2]};
  }
`;var b=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const H=V.CONVERT_SLIPPAGE_TOLERANCE;let g=class extends D{constructor(){var t;super(),this.unsubscribe=[],this.networkName=(t=$.state.activeCaipNetwork)==null?void 0:t.name,this.detailsOpen=!1,this.sourceToken=s.state.sourceToken,this.toToken=s.state.toToken,this.toTokenAmount=s.state.toTokenAmount,this.sourceTokenPriceInUSD=s.state.sourceTokenPriceInUSD,this.toTokenPriceInUSD=s.state.toTokenPriceInUSD,this.priceImpact=s.state.priceImpact,this.maxSlippage=s.state.maxSlippage,this.networkTokenSymbol=s.state.networkTokenSymbol,this.inputError=s.state.inputError,this.unsubscribe.push(s.subscribe(o=>{this.sourceToken=o.sourceToken,this.toToken=o.toToken,this.toTokenAmount=o.toTokenAmount,this.priceImpact=o.priceImpact,this.maxSlippage=o.maxSlippage,this.sourceTokenPriceInUSD=o.sourceTokenPriceInUSD,this.toTokenPriceInUSD=o.toTokenPriceInUSD,this.inputError=o.inputError}))}render(){const t=this.toTokenAmount&&this.maxSlippage?h.bigNumber(this.toTokenAmount).minus(this.maxSlippage).toString():null;if(!this.sourceToken||!this.toToken||this.inputError)return null;const o=this.sourceTokenPriceInUSD&&this.toTokenPriceInUSD?1/this.toTokenPriceInUSD*this.sourceTokenPriceInUSD:0;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="01" class="details-container">
        <wui-flex flexDirection="column">
          <button @click=${this.toggleDetails.bind(this)}>
            <wui-flex justifyContent="space-between" .padding=${["0","2","0","2"]}>
              <wui-flex justifyContent="flex-start" flexGrow="1" gap="2">
                <wui-text variant="sm-regular" color="primary">
                  1 ${this.sourceToken.symbol} =
                  ${h.formatNumberToLocalString(o,3)}
                  ${this.toToken.symbol}
                </wui-text>
                <wui-text variant="sm-regular" color="secondary">
                  $${h.formatNumberToLocalString(this.sourceTokenPriceInUSD)}
                </wui-text>
              </wui-flex>
              <wui-icon name="chevronBottom"></wui-icon>
            </wui-flex>
          </button>
          ${this.detailsOpen?c`
                <wui-flex flexDirection="column" gap="2" class="details-content-container">
                  ${this.priceImpact?c` <wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Price impact
                            </wui-text>
                            <w3m-tooltip-trigger
                              text="Price impact reflects the change in market price due to your trade"
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${h.formatNumberToLocalString(this.priceImpact,3)}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  ${this.maxSlippage&&this.sourceToken.symbol?c`<wui-flex flexDirection="column" gap="2">
                        <wui-flex
                          justifyContent="space-between"
                          alignItems="center"
                          class="details-row"
                        >
                          <wui-flex alignItems="center" gap="2">
                            <wui-text
                              class="details-row-title"
                              variant="sm-regular"
                              color="secondary"
                            >
                              Max. slippage
                            </wui-text>
                            <w3m-tooltip-trigger
                              text=${`Max slippage sets the minimum amount you must receive for the transaction to proceed. ${t?`Transaction will be reversed if you receive less than ${h.formatNumberToLocalString(t,6)} ${this.toToken.symbol} due to price changes.`:""}`}
                            >
                              <wui-icon size="sm" color="default" name="info"></wui-icon>
                            </w3m-tooltip-trigger>
                          </wui-flex>
                          <wui-flex>
                            <wui-text variant="sm-regular" color="secondary">
                              ${h.formatNumberToLocalString(this.maxSlippage,6)}
                              ${this.toToken.symbol} ${H}%
                            </wui-text>
                          </wui-flex>
                        </wui-flex>
                      </wui-flex>`:null}
                  <wui-flex flexDirection="column" gap="2">
                    <wui-flex
                      justifyContent="space-between"
                      alignItems="center"
                      class="details-row provider-free-row"
                    >
                      <wui-flex alignItems="center" gap="2">
                        <wui-text class="details-row-title" variant="sm-regular" color="secondary">
                          Provider fee
                        </wui-text>
                      </wui-flex>
                      <wui-flex>
                        <wui-text variant="sm-regular" color="secondary">0.85%</wui-text>
                      </wui-flex>
                    </wui-flex>
                  </wui-flex>
                </wui-flex>
              `:null}
        </wui-flex>
      </wui-flex>
    `}toggleDetails(){this.detailsOpen=!this.detailsOpen}};g.styles=[q];b([a()],g.prototype,"networkName",void 0);b([w()],g.prototype,"detailsOpen",void 0);b([a()],g.prototype,"sourceToken",void 0);b([a()],g.prototype,"toToken",void 0);b([a()],g.prototype,"toTokenAmount",void 0);b([a()],g.prototype,"sourceTokenPriceInUSD",void 0);b([a()],g.prototype,"toTokenPriceInUSD",void 0);b([a()],g.prototype,"priceImpact",void 0);b([a()],g.prototype,"maxSlippage",void 0);b([a()],g.prototype,"networkTokenSymbol",void 0);b([a()],g.prototype,"inputError",void 0);g=b([A("w3m-swap-details")],g);const G=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    position: relative;
  }

  wui-shimmer.market-value {
    opacity: 0;
  }

  :host > wui-flex > svg.input_mask {
    position: absolute;
    inset: 0;
    z-index: 5;
  }

  :host wui-flex .input_mask__border,
  :host wui-flex .input_mask__background {
    transition: fill ${({durations:e})=>e.md}
      ${({easings:e})=>e["ease-out-power-1"]};
    will-change: fill;
  }

  :host wui-flex .input_mask__border {
    fill: ${({tokens:e})=>e.core.glass010};
  }

  :host wui-flex .input_mask__background {
    fill: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var N=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let L=class extends D{constructor(){super(...arguments),this.target="sourceToken"}render(){return c`
      <wui-flex class justifyContent="space-between">
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
          gap="1"
        >
          <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}templateTokenSelectButton(){return c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-shimmer width="80px" height="40px" rounded variant="light"></wui-shimmer>
      </wui-flex>
    `}};L.styles=[G];N([w()],L.prototype,"target",void 0);L=N([A("w3m-swap-input-skeleton")],L);const Y=I`
  :host > wui-flex {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-radius: ${({borderRadius:e})=>e[5]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    padding: ${({spacing:e})=>e[5]};
    padding-right: ${({spacing:e})=>e[3]};
    width: 100%;
    height: 100px;
    box-sizing: border-box;
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    position: relative;
    transition: box-shadow ${({easings:e})=>e["ease-out-power-1"]}
      ${({durations:e})=>e.lg};
    will-change: background-color;
  }

  :host wui-flex.focus {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.core.glass010};
  }

  :host > wui-flex .swap-input,
  :host > wui-flex .swap-token-button {
    z-index: 10;
  }

  :host > wui-flex .swap-input {
    -webkit-mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
    mask-image: linear-gradient(
      270deg,
      transparent 0px,
      transparent 8px,
      black 24px,
      black 25px,
      black 32px,
      black 100%
    );
  }

  :host > wui-flex .swap-input input {
    background: none;
    border: none;
    height: 42px;
    width: 100%;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    letter-spacing: -1.28px;
    outline: none;
    caret-color: ${({tokens:e})=>e.core.textAccentPrimary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    padding: 0px;
  }

  :host > wui-flex .swap-input input:focus-visible {
    outline: none;
  }

  :host > wui-flex .swap-input input::-webkit-outer-spin-button,
  :host > wui-flex .swap-input input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  .max-value-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: ${({tokens:e})=>e.core.glass010};
    padding-left: 0px;
  }

  .market-value {
    min-height: 18px;
  }
`;var T=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};const Z=5e-5;let k=class extends D{constructor(){super(...arguments),this.focused=!1,this.price=0,this.target="sourceToken",this.onSetAmount=null,this.onSetMaxValue=null}render(){const t=this.marketValue||"0",o=h.bigNumber(t).gt("0");return c`
      <wui-flex
        class="${this.focused?"focus":""}"
        justifyContent="space-between"
        alignItems="center"
      >
        <wui-flex
          flex="1"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          class="swap-input"
        >
          <input
            data-testid="swap-input-${this.target}"
            @focusin=${()=>this.onFocusChange(!0)}
            @focusout=${()=>this.onFocusChange(!1)}
            ?disabled=${this.disabled}
            value=${this.value||""}
            @input=${this.dispatchInputChangeEvent}
            @keydown=${this.handleKeydown}
            placeholder="0"
            type="text"
            inputmode="decimal"
            pattern="[0-9,.]*"
          />
          <wui-text class="market-value" variant="sm-regular" color="secondary">
            ${o?`$${h.formatNumberToLocalString(this.marketValue,2)}`:null}
          </wui-text>
        </wui-flex>
        ${this.templateTokenSelectButton()}
      </wui-flex>
    `}handleKeydown(t){return W.numericInputKeyDown(t,this.value,o=>{var i;return(i=this.onSetAmount)==null?void 0:i.call(this,this.target,o)})}dispatchInputChangeEvent(t){if(!this.onSetAmount)return;const o=t.target.value.replace(/[^0-9.]/gu,"");o===","||o==="."?this.onSetAmount(this.target,"0."):o.endsWith(",")?this.onSetAmount(this.target,o.replace(",",".")):this.onSetAmount(this.target,o)}setMaxValueToInput(){var t;(t=this.onSetMaxValue)==null||t.call(this,this.target,this.balance)}templateTokenSelectButton(){return this.token?c`
      <wui-flex
        class="swap-token-button"
        flexDirection="column"
        alignItems="flex-end"
        justifyContent="center"
        gap="1"
      >
        <wui-token-button
          data-testid="swap-input-token-${this.target}"
          text=${this.token.symbol}
          imageSrc=${this.token.logoUri}
          @click=${this.onSelectToken.bind(this)}
        >
        </wui-token-button>
        <wui-flex alignItems="center" gap="1"> ${this.tokenBalanceTemplate()} </wui-flex>
      </wui-flex>
    `:c` <wui-button
        data-testid="swap-select-token-button-${this.target}"
        class="swap-token-button"
        size="md"
        variant="neutral-secondary"
        @click=${this.onSelectToken.bind(this)}
      >
        Select token
      </wui-button>`}tokenBalanceTemplate(){const t=h.multiply(this.balance,this.price),o=t?t==null?void 0:t.gt(Z):!1;return c`
      ${o?c`<wui-text variant="sm-regular" color="secondary">
            ${h.formatNumberToLocalString(this.balance,2)}
          </wui-text>`:null}
      ${this.target==="sourceToken"?this.tokenActionButtonTemplate(o):null}
    `}tokenActionButtonTemplate(t){return t?c` <button class="max-value-button" @click=${this.setMaxValueToInput.bind(this)}>
        <wui-text color="accent-primary" variant="sm-medium">Max</wui-text>
      </button>`:c` <button class="max-value-button" @click=${this.onBuyToken.bind(this)}>
      <wui-text color="accent-primary" variant="sm-medium">Buy</wui-text>
    </button>`}onFocusChange(t){this.focused=t}onSelectToken(){O.sendEvent({type:"track",event:"CLICK_SELECT_TOKEN_TO_SWAP"}),S.push("SwapSelectToken",{target:this.target})}onBuyToken(){S.push("OnRampProviders")}};k.styles=[Y];T([w()],k.prototype,"focused",void 0);T([w()],k.prototype,"balance",void 0);T([w()],k.prototype,"value",void 0);T([w()],k.prototype,"price",void 0);T([w()],k.prototype,"marketValue",void 0);T([w()],k.prototype,"disabled",void 0);T([w()],k.prototype,"target",void 0);T([w()],k.prototype,"token",void 0);T([w()],k.prototype,"onSetAmount",void 0);T([w()],k.prototype,"onSetMaxValue",void 0);k=T([A("w3m-swap-input")],k);const J=I`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .action-button {
    width: 100%;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .action-button:disabled {
    border-color: 1px solid ${({tokens:e})=>e.core.glass010};
  }

  .swap-inputs-container {
    position: relative;
  }

  wui-icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[10]} !important;
    border: 4px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3;
  }

  .replace-tokens-button-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: ${({spacing:e})=>e[2]};
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var m=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let p=class extends D{subscribe({resetSwapState:t,initializeSwapState:o}){return()=>{$.subscribeKey("activeCaipNetwork",i=>this.onCaipNetworkChange({newCaipNetwork:i,resetSwapState:t,initializeSwapState:o})),$.subscribeChainProp("accountState",i=>{this.onCaipAddressChange({newCaipAddress:i==null?void 0:i.caipAddress,resetSwapState:t,initializeSwapState:o})})}}constructor(){var t,o,i;super(),this.unsubscribe=[],this.initialParams=(t=S.state.data)==null?void 0:t.swap,this.detailsOpen=!1,this.caipAddress=(o=$.getAccountData())==null?void 0:o.caipAddress,this.caipNetworkId=(i=$.state.activeCaipNetwork)==null?void 0:i.caipNetworkId,this.initialized=s.state.initialized,this.loadingQuote=s.state.loadingQuote,this.loadingPrices=s.state.loadingPrices,this.loadingTransaction=s.state.loadingTransaction,this.sourceToken=s.state.sourceToken,this.sourceTokenAmount=s.state.sourceTokenAmount,this.sourceTokenPriceInUSD=s.state.sourceTokenPriceInUSD,this.toToken=s.state.toToken,this.toTokenAmount=s.state.toTokenAmount,this.toTokenPriceInUSD=s.state.toTokenPriceInUSD,this.inputError=s.state.inputError,this.fetchError=s.state.fetchError,this.lastTokenPriceUpdate=0,this.minTokenPriceUpdateInterval=1e4,this.visibilityChangeHandler=()=>{document!=null&&document.hidden?(clearInterval(this.interval),this.interval=void 0):this.startTokenPriceInterval()},this.startTokenPriceInterval=()=>{this.interval&&Date.now()-this.lastTokenPriceUpdate<this.minTokenPriceUpdateInterval||(this.lastTokenPriceUpdate&&Date.now()-this.lastTokenPriceUpdate>this.minTokenPriceUpdateInterval&&this.fetchTokensAndValues(),clearInterval(this.interval),this.interval=setInterval(()=>{this.fetchTokensAndValues()},this.minTokenPriceUpdateInterval))},this.watchTokensAndValues=()=>{!this.sourceToken||!this.toToken||(this.subscribeToVisibilityChange(),this.startTokenPriceInterval())},this.onDebouncedGetSwapCalldata=z.debounce(async()=>{await s.swapTokens()},200),this.subscribe({resetSwapState:!0,initializeSwapState:!1})(),this.unsubscribe.push(this.subscribe({resetSwapState:!1,initializeSwapState:!0}),M.subscribeKey("open",r=>{r||s.resetState()}),S.subscribeKey("view",r=>{r.includes("Swap")||s.resetValues()}),s.subscribe(r=>{this.initialized=r.initialized,this.loadingQuote=r.loadingQuote,this.loadingPrices=r.loadingPrices,this.loadingTransaction=r.loadingTransaction,this.sourceToken=r.sourceToken,this.sourceTokenAmount=r.sourceTokenAmount,this.sourceTokenPriceInUSD=r.sourceTokenPriceInUSD,this.toToken=r.toToken,this.toTokenAmount=r.toTokenAmount,this.toTokenPriceInUSD=r.toTokenPriceInUSD,this.inputError=r.inputError,this.fetchError=r.fetchError,r.sourceToken&&r.toToken&&this.watchTokensAndValues()}))}async firstUpdated(){s.initializeState(),this.watchTokensAndValues(),await this.handleSwapParameters()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval),document==null||document.removeEventListener("visibilitychange",this.visibilityChangeHandler)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.initialized?this.templateSwap():this.templateLoading()}
      </wui-flex>
    `}subscribeToVisibilityChange(){document==null||document.removeEventListener("visibilitychange",this.visibilityChangeHandler),document==null||document.addEventListener("visibilitychange",this.visibilityChangeHandler)}fetchTokensAndValues(){s.getNetworkTokenPrice(),s.getMyTokensWithBalance(),s.swapTokens(),this.lastTokenPriceUpdate=Date.now()}templateSwap(){return c`
      <wui-flex flexDirection="column" gap="3">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          ${this.templateTokenInput("sourceToken",this.sourceToken)}
          ${this.templateTokenInput("toToken",this.toToken)} ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateDetails()} ${this.templateActionButton()}
      </wui-flex>
    `}actionButtonLabel(){const t=!this.sourceTokenAmount||this.sourceTokenAmount==="0";return this.fetchError?"Swap":!this.sourceToken||!this.toToken?"Select token":t?"Enter amount":this.inputError?this.inputError:"Review swap"}templateReplaceTokensButton(){return c`
      <wui-flex class="replace-tokens-button-container">
        <wui-icon-box
          @click=${this.onSwitchTokens.bind(this)}
          icon="recycleHorizontal"
          size="md"
          variant="default"
        ></wui-icon-box>
      </wui-flex>
    `}templateLoading(){return c`
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" alignItems="center" gap="2" class="swap-inputs-container">
          <w3m-swap-input-skeleton target="sourceToken"></w3m-swap-input-skeleton>
          <w3m-swap-input-skeleton target="toToken"></w3m-swap-input-skeleton>
          ${this.templateReplaceTokensButton()}
        </wui-flex>
        ${this.templateActionButton()}
      </wui-flex>
    `}templateTokenInput(t,o){var u,v;const i=(u=s.state.myTokensWithBalance)==null?void 0:u.find(U=>(U==null?void 0:U.address)===(o==null?void 0:o.address)),r=t==="toToken"?this.toTokenAmount:this.sourceTokenAmount,n=t==="toToken"?this.toTokenPriceInUSD:this.sourceTokenPriceInUSD,l=h.parseLocalStringToNumber(r)*n;return c`<w3m-swap-input
      .value=${t==="toToken"?this.toTokenAmount:this.sourceTokenAmount}
      .disabled=${t==="toToken"}
      .onSetAmount=${this.handleChangeAmount.bind(this)}
      target=${t}
      .token=${o}
      .balance=${(v=i==null?void 0:i.quantity)==null?void 0:v.numeric}
      .price=${i==null?void 0:i.price}
      .marketValue=${l}
      .onSetMaxValue=${this.onSetMaxValue.bind(this)}
    ></w3m-swap-input>`}onSetMaxValue(t,o){const i=h.bigNumber(o||"0");this.handleChangeAmount(t,i.gt(0)?i.toFixed(20):"0")}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}handleChangeAmount(t,o){s.clearError(),t==="sourceToken"?s.setSourceTokenAmount(o):s.setToTokenAmount(o),this.onDebouncedGetSwapCalldata()}templateActionButton(){const t=!this.toToken||!this.sourceToken,o=!this.sourceTokenAmount||this.sourceTokenAmount==="0",i=this.loadingQuote||this.loadingPrices||this.loadingTransaction,r=i||t||o||this.inputError;return c` <wui-flex gap="2">
      <wui-button
        data-testid="swap-action-button"
        class="action-button"
        fullWidth
        size="lg"
        borderRadius="xs"
        variant="accent-primary"
        ?loading=${!!i}
        ?disabled=${!!r}
        @click=${this.onSwapPreview.bind(this)}
      >
        ${this.actionButtonLabel()}
      </wui-button>
    </wui-flex>`}async onSwitchTokens(){await s.switchTokens()}async onSwapPreview(){var t,o;this.fetchError&&await s.swapTokens(),O.sendEvent({type:"track",event:"INITIATE_SWAP",properties:{network:this.caipNetworkId||"",swapFromToken:((t=this.sourceToken)==null?void 0:t.symbol)||"",swapToToken:((o=this.toToken)==null?void 0:o.symbol)||"",swapFromAmount:this.sourceTokenAmount||"",swapToAmount:this.toTokenAmount||"",isSmartAccount:F($.state.activeChain)===Q.ACCOUNT_TYPES.SMART_ACCOUNT}}),S.push("SwapPreview")}async handleSwapParameters(){this.initialParams&&(s.state.initialized||await new Promise(o=>{const i=s.subscribeKey("initialized",r=>{r&&(i==null||i(),o())})}),await this.setSwapParameters(this.initialParams))}async setSwapParameters({amount:t,fromToken:o,toToken:i}){(!s.state.tokens||!s.state.myTokensWithBalance)&&await new Promise(l=>{const u=s.subscribeKey("myTokensWithBalance",v=>{v&&v.length>0&&(u==null||u(),l())});setTimeout(()=>{u==null||u(),l()},5e3)});const r=[...s.state.tokens||[],...s.state.myTokensWithBalance||[]];if(o){const n=r.find(l=>l.symbol.toLowerCase()===o.toLowerCase());n&&s.setSourceToken(n)}if(i){const n=r.find(l=>l.symbol.toLowerCase()===i.toLowerCase());n&&s.setToToken(n)}t&&!isNaN(Number(t))&&s.setSourceTokenAmount(t)}onCaipAddressChange({newCaipAddress:t,resetSwapState:o,initializeSwapState:i}){this.caipAddress!==t&&(this.caipAddress=t,o&&s.resetState(),i&&s.initializeState())}onCaipNetworkChange({newCaipNetwork:t,resetSwapState:o,initializeSwapState:i}){this.caipNetworkId!==(t==null?void 0:t.caipNetworkId)&&(this.caipNetworkId=t==null?void 0:t.caipNetworkId,o&&s.resetState(),i&&s.initializeState())}};p.styles=J;m([w({type:Object})],p.prototype,"initialParams",void 0);m([a()],p.prototype,"interval",void 0);m([a()],p.prototype,"detailsOpen",void 0);m([a()],p.prototype,"caipAddress",void 0);m([a()],p.prototype,"caipNetworkId",void 0);m([a()],p.prototype,"initialized",void 0);m([a()],p.prototype,"loadingQuote",void 0);m([a()],p.prototype,"loadingPrices",void 0);m([a()],p.prototype,"loadingTransaction",void 0);m([a()],p.prototype,"sourceToken",void 0);m([a()],p.prototype,"sourceTokenAmount",void 0);m([a()],p.prototype,"sourceTokenPriceInUSD",void 0);m([a()],p.prototype,"toToken",void 0);m([a()],p.prototype,"toTokenAmount",void 0);m([a()],p.prototype,"toTokenPriceInUSD",void 0);m([a()],p.prototype,"inputError",void 0);m([a()],p.prototype,"fetchError",void 0);m([a()],p.prototype,"lastTokenPriceUpdate",void 0);p=m([A("w3m-swap-view")],p);const X=I`
  :host > wui-flex:first-child {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  .preview-container,
  .details-container {
    width: 100%;
  }

  .token-image {
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
    border-radius: 12px;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .token-item {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]};
    height: 40px;
    border: none;
    border-radius: 80px;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    cursor: pointer;
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .token-item:hover {
    background: ${({tokens:e})=>e.core.glass010};
  }

  .preview-token-details-container {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .action-buttons-container {
    width: 100%;
    gap: ${({spacing:e})=>e[2]};
  }

  .action-buttons-container > button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 48px;
    border-radius: ${({borderRadius:e})=>e[4]};
    border: none;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  .action-buttons-container > button:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }

  .action-button > wui-loading-spinner {
    display: inline-block;
  }

  .cancel-button:hover,
  .action-button:hover {
    cursor: pointer;
  }

  .action-buttons-container > wui-button.cancel-button {
    flex: 2;
  }

  .action-buttons-container > wui-button.action-button {
    flex: 4;
  }

  .action-buttons-container > button.action-button > wui-text {
    color: white;
  }

  .details-container > wui-flex {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[3]};
    width: 100%;
  }

  .details-container > wui-flex > button {
    border: none;
    background: none;
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
    transition: background ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background;
  }

  .details-container > wui-flex > button:hover {
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .details-content-container {
    padding: ${({spacing:e})=>e[2]};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .details-content-container > wui-flex {
    width: 100%;
  }

  .details-row {
    width: 100%;
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[5]};
    border-radius: ${({borderRadius:e})=>e[3]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
  }
`;var f=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let d=class extends D{constructor(){var t;super(),this.unsubscribe=[],this.detailsOpen=!0,this.approvalTransaction=s.state.approvalTransaction,this.swapTransaction=s.state.swapTransaction,this.sourceToken=s.state.sourceToken,this.sourceTokenAmount=s.state.sourceTokenAmount??"",this.sourceTokenPriceInUSD=s.state.sourceTokenPriceInUSD,this.balanceSymbol=(t=$.getAccountData())==null?void 0:t.balanceSymbol,this.toToken=s.state.toToken,this.toTokenAmount=s.state.toTokenAmount??"",this.toTokenPriceInUSD=s.state.toTokenPriceInUSD,this.caipNetwork=$.state.activeCaipNetwork,this.inputError=s.state.inputError,this.loadingQuote=s.state.loadingQuote,this.loadingApprovalTransaction=s.state.loadingApprovalTransaction,this.loadingBuildTransaction=s.state.loadingBuildTransaction,this.loadingTransaction=s.state.loadingTransaction,this.unsubscribe.push($.subscribeChainProp("accountState",o=>{(o==null?void 0:o.balanceSymbol)!==this.balanceSymbol&&S.goBack()}),$.subscribeKey("activeCaipNetwork",o=>{this.caipNetwork!==o&&(this.caipNetwork=o)}),s.subscribe(o=>{this.approvalTransaction=o.approvalTransaction,this.swapTransaction=o.swapTransaction,this.sourceToken=o.sourceToken,this.toToken=o.toToken,this.toTokenPriceInUSD=o.toTokenPriceInUSD,this.sourceTokenAmount=o.sourceTokenAmount??"",this.toTokenAmount=o.toTokenAmount??"",this.inputError=o.inputError,o.inputError&&S.goBack(),this.loadingQuote=o.loadingQuote,this.loadingApprovalTransaction=o.loadingApprovalTransaction,this.loadingBuildTransaction=o.loadingBuildTransaction,this.loadingTransaction=o.loadingTransaction}))}firstUpdated(){s.getTransaction(),this.refreshTransaction()}disconnectedCallback(){this.unsubscribe.forEach(t=>t==null?void 0:t()),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" .padding=${["0","4","4","4"]} gap="3">
        ${this.templateSwap()}
      </wui-flex>
    `}refreshTransaction(){this.interval=setInterval(()=>{s.getApprovalLoadingState()||s.getTransaction()},1e4)}templateSwap(){var v,U,j,R;const t=`${h.formatNumberToLocalString(parseFloat(this.sourceTokenAmount))} ${(v=this.sourceToken)==null?void 0:v.symbol}`,o=`${h.formatNumberToLocalString(parseFloat(this.toTokenAmount))} ${(U=this.toToken)==null?void 0:U.symbol}`,i=parseFloat(this.sourceTokenAmount)*this.sourceTokenPriceInUSD,r=parseFloat(this.toTokenAmount)*this.toTokenPriceInUSD,n=h.formatNumberToLocalString(i),l=h.formatNumberToLocalString(r),u=this.loadingQuote||this.loadingBuildTransaction||this.loadingTransaction||this.loadingApprovalTransaction;return c`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        <wui-flex class="preview-container" flexDirection="column" alignItems="flex-start" gap="4">
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Send</wui-text>
              <wui-text variant="md-regular" color="primary">$${n}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${t}
              imageSrc=${(j=this.sourceToken)==null?void 0:j.logoUri}
            >
            </wui-token-button>
          </wui-flex>
          <wui-icon name="recycleHorizontal" color="default" size="md"></wui-icon>
          <wui-flex
            class="preview-token-details-container"
            alignItems="center"
            justifyContent="space-between"
            gap="4"
          >
            <wui-flex flexDirection="column" alignItems="flex-start" gap="01">
              <wui-text variant="sm-regular" color="secondary">Receive</wui-text>
              <wui-text variant="md-regular" color="primary">$${l}</wui-text>
            </wui-flex>
            <wui-token-button
              flexDirection="row-reverse"
              text=${o}
              imageSrc=${(R=this.toToken)==null?void 0:R.logoUri}
            >
            </wui-token-button>
          </wui-flex>
        </wui-flex>

        ${this.templateDetails()}

        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="2">
          <wui-icon size="sm" color="default" name="info"></wui-icon>
          <wui-text variant="sm-regular" color="secondary">Review transaction carefully</wui-text>
        </wui-flex>

        <wui-flex
          class="action-buttons-container"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          gap="2"
        >
          <wui-button
            class="cancel-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="neutral-secondary"
            @click=${this.onCancelTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="secondary">Cancel</wui-text>
          </wui-button>
          <wui-button
            class="action-button"
            fullWidth
            size="lg"
            borderRadius="xs"
            variant="accent-primary"
            ?loading=${u}
            ?disabled=${u}
            @click=${this.onSendTransaction.bind(this)}
          >
            <wui-text variant="md-medium" color="invert"> ${this.actionButtonLabel()} </wui-text>
          </wui-button>
        </wui-flex>
      </wui-flex>
    `}templateDetails(){return!this.sourceToken||!this.toToken||this.inputError?null:c`<w3m-swap-details .detailsOpen=${this.detailsOpen}></w3m-swap-details>`}actionButtonLabel(){return this.loadingApprovalTransaction?"Approving...":this.approvalTransaction?"Approve":"Swap"}onCancelTransaction(){S.goBack()}onSendTransaction(){this.approvalTransaction?s.sendTransactionForApproval(this.approvalTransaction):s.sendTransactionForSwap(this.swapTransaction)}};d.styles=X;f([a()],d.prototype,"interval",void 0);f([a()],d.prototype,"detailsOpen",void 0);f([a()],d.prototype,"approvalTransaction",void 0);f([a()],d.prototype,"swapTransaction",void 0);f([a()],d.prototype,"sourceToken",void 0);f([a()],d.prototype,"sourceTokenAmount",void 0);f([a()],d.prototype,"sourceTokenPriceInUSD",void 0);f([a()],d.prototype,"balanceSymbol",void 0);f([a()],d.prototype,"toToken",void 0);f([a()],d.prototype,"toTokenAmount",void 0);f([a()],d.prototype,"toTokenPriceInUSD",void 0);f([a()],d.prototype,"caipNetwork",void 0);f([a()],d.prototype,"inputError",void 0);f([a()],d.prototype,"loadingQuote",void 0);f([a()],d.prototype,"loadingApprovalTransaction",void 0);f([a()],d.prototype,"loadingBuildTransaction",void 0);f([a()],d.prototype,"loadingTransaction",void 0);d=f([A("w3m-swap-preview-view")],d);const ee=I`
  :host {
    width: 100%;
    height: 60px;
    min-height: 60px;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    color: ${({tokens:e})=>e.theme.foregroundSecondary};
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color, opacity;
  }

  @media (hover: hover) and (pointer: fine) {
    :host > wui-flex:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    :host > wui-flex:active {
      background-color: ${({tokens:e})=>e.core.glass010};
    }
  }

  :host([disabled]) > wui-flex {
    opacity: 0.6;
  }

  :host([disabled]) > wui-flex:hover {
    background-color: transparent;
  }

  :host > wui-flex > wui-flex {
    flex: 1;
  }

  :host > wui-flex > wui-image,
  :host > wui-flex > .token-item-image-placeholder {
    width: 40px;
    max-width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[20]};
    position: relative;
  }

  :host > wui-flex > .token-item-image-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host > wui-flex > wui-image::after,
  :host > wui-flex > .token-item-image-placeholder::after {
    position: absolute;
    content: '';
    inset: 0;
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    border-radius: ${({borderRadius:e})=>e[8]};
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: ${({borderRadius:e})=>e[2]};
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }
`;var C=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let P=class extends D{constructor(){super(),this.observer=new IntersectionObserver(()=>{}),this.imageSrc=void 0,this.name=void 0,this.symbol=void 0,this.price=void 0,this.amount=void 0,this.visible=!1,this.imageError=!1,this.observer=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?this.visible=!0:this.visible=!1})},{threshold:.1})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){var o;if(!this.visible)return null;const t=this.amount&&this.price?(o=h.multiply(this.price,this.amount))==null?void 0:o.toFixed(3):null;return c`
      <wui-flex alignItems="center">
        ${this.visualTemplate()}
        <wui-flex flexDirection="column" gap="1">
          <wui-flex justifyContent="space-between">
            <wui-text variant="md-medium" color="primary" lineClamp="1">${this.name}</wui-text>
            ${t?c`
                  <wui-text variant="md-medium" color="primary">
                    $${h.formatNumberToLocalString(t,3)}
                  </wui-text>
                `:null}
          </wui-flex>
          <wui-flex justifyContent="space-between">
            <wui-text variant="sm-regular" color="secondary" lineClamp="1">${this.symbol}</wui-text>
            ${this.amount?c`<wui-text variant="sm-regular" color="secondary">
                  ${h.formatNumberToLocalString(this.amount,5)}
                </wui-text>`:null}
          </wui-flex>
        </wui-flex>
      </wui-flex>
    `}visualTemplate(){return this.imageError?c`<wui-flex class="token-item-image-placeholder">
        <wui-icon name="image" color="inherit"></wui-icon>
      </wui-flex>`:this.imageSrc?c`<wui-image
        width="40"
        height="40"
        src=${this.imageSrc}
        @onLoadError=${this.imageLoadError}
      ></wui-image>`:null}imageLoadError(){this.imageError=!0}};P.styles=[B,K,ee];C([w()],P.prototype,"imageSrc",void 0);C([w()],P.prototype,"name",void 0);C([w()],P.prototype,"symbol",void 0);C([w()],P.prototype,"price",void 0);C([w()],P.prototype,"amount",void 0);C([a()],P.prototype,"visible",void 0);C([a()],P.prototype,"imageError",void 0);P=C([A("wui-token-list-item")],P);const te=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    cursor: pointer;
    height: 100%;
    width: 100%;
    display: flex;
    column-gap: ${({spacing:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[4]};
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;var oe=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let _=class extends D{render(){return c`
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="1">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-flex flexDirection="column" gap="1" alignItems="flex-end">
          <wui-shimmer width="24px" height="12px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="32px" height="12px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
      </wui-flex>
    `}};_.styles=[B,te];_=oe([A("wui-token-list-item-loader")],_);const ie=I`
  :host {
    --tokens-scroll--top-opacity: 0;
    --tokens-scroll--bottom-opacity: 1;
    --suggested-tokens-scroll--left-opacity: 0;
    --suggested-tokens-scroll--right-opacity: 1;
  }

  :host > wui-flex:first-child {
    overflow-y: hidden;
    overflow-x: hidden;
    scrollbar-width: none;
    scrollbar-height: none;
  }

  :host > wui-flex:first-child::-webkit-scrollbar {
    display: none;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  .suggested-tokens-container {
    overflow-x: auto;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--suggested-tokens-scroll--left-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--suggested-tokens-scroll--right-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--suggested-tokens-scroll--right-opacity))) 100%
    );
  }

  .suggested-tokens-container::-webkit-scrollbar {
    display: none;
  }

  .tokens-container {
    border-top: 1px solid ${({tokens:e})=>e.core.glass010};
    height: 100%;
    max-height: 390px;
  }

  .tokens {
    width: 100%;
    overflow-y: auto;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--tokens-scroll--top-opacity))) 1px,
      black 50px,
      black 90px,
      black calc(100% - 90px),
      black calc(100% - 50px),
      rgba(155, 155, 155, calc(1 - var(--tokens-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--tokens-scroll--bottom-opacity))) 100%
    );
  }

  .network-search-input,
  .select-network-button {
    height: 40px;
  }

  .select-network-button {
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[3]};
    padding: ${({spacing:e})=>e[2]};
    align-items: center;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
  }

  .select-network-button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .select-network-button > wui-image {
    width: 26px;
    height: 26px;
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }
`;var y=function(e,t,o,i){var r=arguments.length,n=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,o):i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,o,i);else for(var u=e.length-1;u>=0;u--)(l=e[u])&&(n=(r<3?l(n):r>3?l(t,o,n):l(t,o))||n);return r>3&&n&&Object.defineProperty(t,o,n),n};let x=class extends D{constructor(){var t;super(),this.unsubscribe=[],this.targetToken=(t=S.state.data)==null?void 0:t.target,this.sourceToken=s.state.sourceToken,this.sourceTokenAmount=s.state.sourceTokenAmount,this.toToken=s.state.toToken,this.myTokensWithBalance=s.state.myTokensWithBalance,this.popularTokens=s.state.popularTokens,this.suggestedTokens=s.state.suggestedTokens,this.tokensLoading=s.state.tokensLoading,this.searchValue="",this.unsubscribe.push(s.subscribe(o=>{this.sourceToken=o.sourceToken,this.toToken=o.toToken,this.myTokensWithBalance=o.myTokensWithBalance,this.popularTokens=o.popularTokens,this.suggestedTokens=o.suggestedTokens,this.tokensLoading=o.tokensLoading}))}async firstUpdated(){await s.getTokenList()}updated(){var i,r;const t=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container");t==null||t.addEventListener("scroll",this.handleSuggestedTokensScroll.bind(this));const o=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");o==null||o.addEventListener("scroll",this.handleTokenListScroll.bind(this))}disconnectedCallback(){var i,r;super.disconnectedCallback();const t=(i=this.renderRoot)==null?void 0:i.querySelector(".suggested-tokens-container"),o=(r=this.renderRoot)==null?void 0:r.querySelector(".tokens");t==null||t.removeEventListener("scroll",this.handleSuggestedTokensScroll.bind(this)),o==null||o.removeEventListener("scroll",this.handleTokenListScroll.bind(this)),clearInterval(this.interval)}render(){return c`
      <wui-flex flexDirection="column" gap="3">
        ${this.templateSearchInput()} ${this.templateSuggestedTokens()} ${this.templateTokens()}
      </wui-flex>
    `}onSelectToken(t){this.targetToken==="sourceToken"?s.setSourceToken(t):(s.setToToken(t),this.sourceToken&&this.sourceTokenAmount&&s.swapTokens()),S.goBack()}templateSearchInput(){return c`
      <wui-flex .padding=${["1","3","0","3"]} gap="2">
        <wui-input-text
          data-testid="swap-select-token-search-input"
          class="network-search-input"
          size="sm"
          placeholder="Search token"
          icon="search"
          .value=${this.searchValue}
          @inputChange=${this.onSearchInputChange.bind(this)}
        ></wui-input-text>
      </wui-flex>
    `}templateMyTokens(){const t=this.myTokensWithBalance?Object.values(this.myTokensWithBalance):[],o=this.filterTokensWithText(t,this.searchValue);return(o==null?void 0:o.length)>0?c`<wui-flex justifyContent="flex-start" padding="2">
          <wui-text variant="md-medium" color="secondary">Your tokens</wui-text>
        </wui-flex>
        ${o.map(i=>{var n,l,u;const r=i.symbol===((n=this.sourceToken)==null?void 0:n.symbol)||i.symbol===((l=this.toToken)==null?void 0:l.symbol);return c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              ?disabled=${r}
              symbol=${i.symbol}
              price=${i==null?void 0:i.price}
              amount=${(u=i==null?void 0:i.quantity)==null?void 0:u.numeric}
              imageSrc=${i.logoUri}
              @click=${()=>{r||this.onSelectToken(i)}}
            >
            </wui-token-list-item>
          `})}`:null}templateAllTokens(){const t=this.popularTokens?this.popularTokens:[],o=this.filterTokensWithText(t,this.searchValue);return this.tokensLoading?c`
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
        <wui-token-list-item-loader></wui-token-list-item-loader>
      `:(o==null?void 0:o.length)>0?c`
        ${o.map(i=>c`
            <wui-token-list-item
              data-testid="swap-select-token-item-${i.symbol}"
              name=${i.name}
              symbol=${i.symbol}
              imageSrc=${i.logoUri}
              @click=${()=>this.onSelectToken(i)}
            >
            </wui-token-list-item>
          `)}
      `:null}templateTokens(){return c`
      <wui-flex class="tokens-container">
        <wui-flex class="tokens" .padding=${["0","2","2","2"]} flexDirection="column">
          ${this.templateMyTokens()}
          <wui-flex justifyContent="flex-start" padding="3">
            <wui-text variant="md-medium" color="secondary">Tokens</wui-text>
          </wui-flex>
          ${this.templateAllTokens()}
        </wui-flex>
      </wui-flex>
    `}templateSuggestedTokens(){const t=this.suggestedTokens?this.suggestedTokens.slice(0,8):null;return this.tokensLoading?c`
        <wui-flex
          class="suggested-tokens-container"
          .padding=${["0","3","0","3"]}
          gap="2"
        >
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
          <wui-token-button loading></wui-token-button>
        </wui-flex>
      `:t?c`
      <wui-flex
        class="suggested-tokens-container"
        .padding=${["0","3","0","3"]}
        gap="2"
      >
        ${t.map(o=>c`
            <wui-token-button
              text=${o.symbol}
              imageSrc=${o.logoUri}
              @click=${()=>this.onSelectToken(o)}
            >
            </wui-token-button>
          `)}
      </wui-flex>
    `:null}onSearchInputChange(t){this.searchValue=t.detail}handleSuggestedTokensScroll(){var o;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".suggested-tokens-container");t&&(t.style.setProperty("--suggested-tokens-scroll--left-opacity",E.interpolate([0,100],[0,1],t.scrollLeft).toString()),t.style.setProperty("--suggested-tokens-scroll--right-opacity",E.interpolate([0,100],[0,1],t.scrollWidth-t.scrollLeft-t.offsetWidth).toString()))}handleTokenListScroll(){var o;const t=(o=this.renderRoot)==null?void 0:o.querySelector(".tokens");t&&(t.style.setProperty("--tokens-scroll--top-opacity",E.interpolate([0,100],[0,1],t.scrollTop).toString()),t.style.setProperty("--tokens-scroll--bottom-opacity",E.interpolate([0,100],[0,1],t.scrollHeight-t.scrollTop-t.offsetHeight).toString()))}filterTokensWithText(t,o){return t.filter(i=>`${i.symbol} ${i.name} ${i.address}`.toLowerCase().includes(o.toLowerCase())).sort((i,r)=>{const n=`${i.symbol} ${i.name} ${i.address}`.toLowerCase(),l=`${r.symbol} ${r.name} ${r.address}`.toLowerCase(),u=n.indexOf(o.toLowerCase()),v=l.indexOf(o.toLowerCase());return u-v})}};x.styles=ie;y([a()],x.prototype,"interval",void 0);y([a()],x.prototype,"targetToken",void 0);y([a()],x.prototype,"sourceToken",void 0);y([a()],x.prototype,"sourceTokenAmount",void 0);y([a()],x.prototype,"toToken",void 0);y([a()],x.prototype,"myTokensWithBalance",void 0);y([a()],x.prototype,"popularTokens",void 0);y([a()],x.prototype,"suggestedTokens",void 0);y([a()],x.prototype,"tokensLoading",void 0);y([a()],x.prototype,"searchValue",void 0);x=y([A("w3m-swap-select-token-view")],x);export{d as W3mSwapPreviewView,x as W3mSwapSelectTokenView,p as W3mSwapView};
