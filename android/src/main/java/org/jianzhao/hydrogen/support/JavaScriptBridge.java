package org.jianzhao.hydrogen.support;

import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebView;

import java.util.function.Function;
import java.util.function.Supplier;

public class JavaScriptBridge {

    private Function<String, String> listener = Function.identity();

    private final Supplier<WebView> webViewSupplier;

    public JavaScriptBridge(Supplier<WebView> webViewSupplier) {
        this.webViewSupplier = webViewSupplier;
    }

    @JavascriptInterface
    public String onWebViewMessage(String message) {
        return this.listener.apply(message);
    }

    public void postMessage(String message, ValueCallback<String> callback) {
        String script = String.format("window.onNativeMessage('%s')", message);

        WebView webView = this.webViewSupplier.get();
        webView.post(() -> webView.evaluateJavascript(script, callback));
    }

    public void setListener(Function<String, String> listener) {
        this.listener = listener;
    }
}
