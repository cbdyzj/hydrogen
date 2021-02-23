const bridge = {}

export function setListener(listener) {
    bridge.listener = listener
}

export function postMessage(message) {
    if (typeof window?.android?.onWebViewMessage === 'function') {
        return window.native.onWebViewMessage(message)
    }
}

window.onNativeMessage = function onNativeMessage(message) {
    if (typeof bridge.listener === 'function') {
        return bridge.listener(message)
    }
}