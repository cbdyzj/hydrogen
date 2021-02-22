package org.jianzhao.hydrogen;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;

import org.jianzhao.hydrogen.support.JavaScriptBridge;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String DEUTERIUM = "https://deuterium.vercel.app/";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        this.setContentView(R.layout.activity_main);
        this.initWebView();
        this.getWebView().loadUrl(DEUTERIUM);
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void initWebView() {
        WebView webView = this.findViewById(R.id.mainWebView);
        // settings
        WebSettings webSettings = webView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        webSettings.setDomStorageEnabled(true);
        // JavaScript Bridge
        JavaScriptBridge bridge = new JavaScriptBridge(this::getWebView);
        bridge.setListener(this::handleOnWebViewMessage);
        webView.addJavascriptInterface(bridge, "android");
        // add to context
        this.webView = webView;
    }

    private String handleOnWebViewMessage(String message) {
        return "OK";
    }

    private WebView getWebView() {
        return Objects.requireNonNull(this.webView, "this.webView is null");
    }

    @Override
    public void onBackPressed() {
        if (this.getWebView().canGoBack()) {
            this.getWebView().goBack();
        } else {
            super.onBackPressed();
        }
    }

}