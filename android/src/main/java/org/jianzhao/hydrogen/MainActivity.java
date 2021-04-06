package org.jianzhao.hydrogen;

import android.annotation.SuppressLint;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.jianzhao.hydrogen.support.JavaScriptBridge;
import org.jianzhao.hydrogen.support.SystemWindowUtils;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String HYDROGEN = "https://hydrogen-cbdyzj.vercel.app/";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // layout
        @SuppressLint("InflateParams")
        View layout = this.getLayoutInflater().inflate(R.layout.activity_main, null);
        int statusBarHeight = SystemWindowUtils.getStatusBarHeight(this);
        layout.setPadding(0, statusBarHeight, 0, 0);
        this.setContentView(layout);
        // webView
        this.initWebView();
        this.getWebView().loadUrl(HYDROGEN);
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
        Toast.makeText(this, message, Toast.LENGTH_SHORT).show();
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