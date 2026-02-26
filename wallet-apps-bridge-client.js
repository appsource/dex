(function () {
  var BRIDGE_SOURCE_HOST = 'swap.wallet.apps.bridge.host'
  var BRIDGE_SOURCE_CLIENT = 'swap.wallet.apps.bridge.client'
  var BRIDGE_HELLO = 'WALLET_APPS_BRIDGE_HELLO'
  var BRIDGE_REQUEST = 'WALLET_APPS_BRIDGE_REQUEST'
  var BRIDGE_RESPONSE = 'WALLET_APPS_BRIDGE_RESPONSE'
  var BRIDGE_READY = 'WALLET_APPS_BRIDGE_READY'
  var BRIDGE_EVENT = 'WALLET_APPS_BRIDGE_EVENT'

  if (typeof window === 'undefined' || window.parent === window) {
    return
  }

  var search = window.location && window.location.search ? window.location.search : ''
  var params = new URLSearchParams(search)
  var bridgeMode = params.get('walletBridge') === 'swaponline'

  var runtimeConfig = window.SO_DefinanceBridgeConfig || {}
  if (runtimeConfig && runtimeConfig.forceBridge === true) {
    bridgeMode = true
  }

  if (!bridgeMode) {
    return
  }

  var listeners = {}
  var pending = {}
  var requestCounter = 0
  var bridgeOrigin = '*'
  var bridgeReady = false
  var currentAccounts = []
  var currentChainId = null

  var normalizeOrigin = function (origin) {
    if (!origin || typeof origin !== 'string') {
      return ''
    }
    return origin.trim().toLowerCase()
  }

  var splitCsv = function (value) {
    if (!value || typeof value !== 'string') {
      return []
    }
    return value
      .split(',')
      .map(function (item) {
        return normalizeOrigin(item)
      })
      .filter(function (item) {
        return !!item
      })
  }

  var normalizeOriginList = function (input) {
    if (!input) {
      return []
    }

    if (Array.isArray(input)) {
      return input
        .map(function (item) {
          return normalizeOrigin(item)
        })
        .filter(function (item) {
          return !!item
        })
    }

    if (typeof input === 'string') {
      return splitCsv(input)
    }

    return []
  }

  var allowedOrigins = []
    .concat(normalizeOriginList(runtimeConfig.allowedHostOrigins))
    .concat(normalizeOriginList(window.SO_WalletAppsAllowedOrigins))
    .concat(normalizeOriginList(window.SO_Definance && window.SO_Definance.walletBridgeAllowedOrigins))
    .concat(splitCsv(params.get('walletBridgeAllowedOrigins')))

  var allowAnyHostOrigin = !!(
    runtimeConfig.allowAnyHostOrigin === true
    || params.get('walletBridgeAllowAnyOrigin') === '1'
  )

  var isPotentiallySafeOrigin = function (origin) {
    if (!origin) {
      return false
    }
    if (origin.indexOf('https://') === 0) {
      return true
    }
    return origin.indexOf('http://localhost') === 0
      || origin.indexOf('http://127.0.0.1') === 0
  }

  var isAllowedOrigin = function (origin) {
    var normalized = normalizeOrigin(origin)
    if (!normalized) {
      return false
    }

    if (allowAnyHostOrigin) {
      return isPotentiallySafeOrigin(normalized)
    }

    if (allowedOrigins.length > 0) {
      return allowedOrigins.indexOf(normalized) >= 0
    }

    return isPotentiallySafeOrigin(normalized)
  }

  var emit = function (eventName, payload) {
    if (!listeners[eventName]) {
      return
    }

    listeners[eventName].forEach(function (fn) {
      try {
        fn(payload)
      } catch (error) {
        // no-op by design
      }
    })
  }

  var on = function (eventName, fn) {
    if (!listeners[eventName]) {
      listeners[eventName] = []
    }

    listeners[eventName].push(fn)

    return provider
  }

  var removeListener = function (eventName, fn) {
    if (!listeners[eventName]) {
      return provider
    }

    listeners[eventName] = listeners[eventName].filter(function (listener) {
      return listener !== fn
    })

    return provider
  }

  var removeAllListeners = function (eventName) {
    if (eventName) {
      listeners[eventName] = []
    } else {
      listeners = {}
    }

    return provider
  }

  var postToHost = function (type, payload) {
    window.parent.postMessage(
      {
        source: BRIDGE_SOURCE_CLIENT,
        type: type,
        payload: payload,
      },
      bridgeOrigin
    )
  }

  var request = function (payload) {
    return new Promise(function (resolve, reject) {
      var method = payload && payload.method
      if (!method) {
        reject(new Error('WalletAppsBridge request requires method'))
        return
      }

      var requestId = 'wab-' + Date.now() + '-' + (++requestCounter)

      pending[requestId] = {
        resolve: resolve,
        reject: reject,
      }

      postToHost(BRIDGE_REQUEST, {
        requestId: requestId,
        method: method,
        params: payload.params,
      })

      setTimeout(function () {
        if (pending[requestId]) {
          delete pending[requestId]
          reject(new Error('WalletAppsBridge timeout'))
        }
      }, 30000)
    })
  }

  var provider = {
    isSwapWalletAppsBridge: true,
    isMetaMask: true,
    chainId: null,
    selectedAddress: null,
    request: request,
    enable: function () {
      return request({ method: 'eth_requestAccounts' })
    },
    isConnected: function () {
      return !!bridgeReady
    },
    on: on,
    removeListener: removeListener,
    removeAllListeners: removeAllListeners,
    send: function (methodOrPayload, params) {
      if (typeof methodOrPayload === 'string') {
        return request({ method: methodOrPayload, params: params })
      }

      return request(methodOrPayload)
    },
    sendAsync: function (payload, callback) {
      request(payload)
        .then(function (result) {
          if (typeof callback === 'function') {
            callback(null, {
              id: payload && payload.id ? payload.id : Date.now(),
              jsonrpc: '2.0',
              result: result,
            })
          }
        })
        .catch(function (error) {
          if (typeof callback === 'function') {
            callback(error)
          }
        })
    },
  }

  var injectProvider = function () {
    try {
      Object.defineProperty(window, 'ethereum', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: provider,
      })
    } catch (error) {
      window.ethereum = provider
    }

    if (!window.ethereum.providers) {
      window.ethereum.providers = [window.ethereum]
    }

    window.swapWalletAppsBridgeProvider = provider

    if (window.web3 && typeof window.web3 === 'object') {
      try {
        window.web3.currentProvider = provider
      } catch (error) {
        // no-op
      }
    } else {
      window.web3 = {
        currentProvider: provider,
      }
    }

    window.dispatchEvent(new Event('ethereum#initialized'))
  }

  var handleHostMessage = function (event) {
    if (event.source !== window.parent) {
      return
    }

    if (!isAllowedOrigin(event.origin)) {
      return
    }

    var data = event.data || {}

    if (data.source !== BRIDGE_SOURCE_HOST) {
      return
    }

    bridgeOrigin = event.origin || bridgeOrigin

    if (data.type === BRIDGE_READY) {
      bridgeReady = true

      var payload = data.payload || {}
      currentChainId = payload.chainId || null
      currentAccounts = Array.isArray(payload.accounts) ? payload.accounts : []
      provider.chainId = currentChainId
      provider.selectedAddress = currentAccounts[0] || null

      emit('bridgeReady', payload)
      emit('connect', { chainId: currentChainId })

      if (currentChainId) {
        emit('chainChanged', currentChainId)
      }
      emit('accountsChanged', currentAccounts)

      return
    }

    if (data.type === BRIDGE_RESPONSE) {
      var responsePayload = data.payload || {}
      var requestId = responsePayload.requestId

      if (!requestId || !pending[requestId]) {
        return
      }

      var item = pending[requestId]
      delete pending[requestId]

      if (responsePayload.error) {
        var err = new Error(responsePayload.error.message || 'WalletAppsBridge request failed')
        err.code = responsePayload.error.code
        item.reject(err)
      } else {
        item.resolve(responsePayload.result)
      }

      return
    }

    if (data.type === BRIDGE_EVENT) {
      var eventPayload = data.payload || {}
      if (!eventPayload.eventName) {
        return
      }

      if (eventPayload.eventName === 'chainChanged') {
        currentChainId = eventPayload.data || null
        provider.chainId = currentChainId
      }

      if (eventPayload.eventName === 'accountsChanged') {
        currentAccounts = Array.isArray(eventPayload.data) ? eventPayload.data : []
        provider.selectedAddress = currentAccounts[0] || null
        if (!currentAccounts.length) {
          emit('disconnect', { code: 4900, message: 'Wallet disconnected' })
        }
      }

      emit(eventPayload.eventName, eventPayload.data)
    }
  }

  window.addEventListener('message', handleHostMessage)

  var helloAttempts = 0
  var helloTimer = setInterval(function () {
    if (bridgeReady || helloAttempts > 30) {
      clearInterval(helloTimer)
      return
    }

    helloAttempts += 1
    postToHost(BRIDGE_HELLO, {
      version: '1.0.0',
      ua: navigator.userAgent,
      bridge: 'definance',
    })
  }, 750)

  postToHost(BRIDGE_HELLO, {
    version: '1.0.0',
    ua: navigator.userAgent,
    bridge: 'definance',
  })

  injectProvider()
})()
