package org.jianzhao.hydrogen;

import android.annotation.SuppressLint;
import android.content.res.Resources;
import android.os.Bundle;
import android.view.View;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import org.jianzhao.hydrogen.support.JavaScriptBridge;

import java.util.Objects;

public class MainActivity extends AppCompatActivity {

    private static final String DEUTERIUM = "https://deuterium.vercel.app/";

    private WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        // layout
        @SuppressLint("InflateParams")
        View layout = this.getLayoutInflater().inflate(R.layout.activity_main, null);
        layout.setPadding(0, this.getStatusBarHeight(), 0, 0);
        this.setContentView(layout);
        // webView
        this.initWebView();
        this.getWebView().loadUrl(DEUTERIUM);
    }

    public int getStatusBarHeight() {
        int height = 0;
        Resources resources = this.getApplicationContext().getResources();
        int resourceId = resources.getIdentifier("status_bar_height", "dimen", "android");
        if (resourceId > 0) {
            height = resources.getDimensionPixelSize(resourceId);
        }
        return height;
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