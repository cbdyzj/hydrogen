package org.jianzhao.hydrogen;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import org.jianzhao.hydrogen.support.JavaScriptBridge;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String DEUTERIUM = "https://deuterium.vercel.app/";
    private static final String NATRIUM = "https://natrium.herokuapp.com/";

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
        // WebView client
        webView.setWebViewClient(new WebViewClient());
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
        Toast.makeText(this, message, Toast.LENGTH_LONG).show();
        if ("hydrogen".equals(message)) {
            WebView webView = this.getWebView();
            webView.post(() -> webView.loadUrl(NATRIUM));
        }
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