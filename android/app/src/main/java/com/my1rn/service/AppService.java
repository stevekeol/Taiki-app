//
// Copyright (c) 2017, weidian.com
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
//
// * Redistributions of source code must retain the above copyright notice, this
// list of conditions and the following disclaimer.
//
// * Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation
// and/or other materials provided with the distribution.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
// DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
// FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
// DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
// SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
// CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
// OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//


package com.my1rn.service;

import android.content.Context;
import android.widget.LinearLayout;

import com.my1rn.api.ApiCallback;
import com.my1rn.api.ApiManager;
import com.my1rn.config.AppConfig;
import com.my1rn.interfaces.IBridgeHandler;
import com.my1rn.interfaces.OnEventListener;
import com.my1rn.service.view.ServiceWebView;
import com.my1rn.trace.HeraTrace;
import com.my1rn.utils.FileUtil;
import com.my1rn.utils.JsonUtil;

import java.io.File;


/**
 * appservice层，小程序运行的基石，即framework的运行时
 */
public class AppService extends LinearLayout implements IBridgeHandler {

    private static final String TAG = "AppService";

    private OnEventListener mEventListener;
    private ServiceWebView mServiceWebView;
    private AppConfig mAppConfig;
    private ApiManager mApiManager;


    public AppService(Context context, OnEventListener listener,
                      AppConfig appConfig, ApiManager apiManager) {
        super(context);
        mEventListener = listener;
        mAppConfig = appConfig;
        mApiManager = apiManager;

        mServiceWebView = new ServiceWebView(context);
        mServiceWebView.setJsHandler(this);
        addView(mServiceWebView, new LayoutParams(LayoutParams.MATCH_PARENT,
                LayoutParams.MATCH_PARENT));
    }

    @Override
    protected void onAttachedToWindow() {
        super.onAttachedToWindow();
        // 从小程序目录中加载 service.html 文件
        File serviceFile = new File(mAppConfig.getMiniAppSourcePath(getContext()),
                "service.html");
        String servicePath = FileUtil.toUriString(serviceFile);

        System.out.println("service.html will be loaded.");

        // 在WebView中加载小程序编译后的入口html页面
        mServiceWebView.loadUrl(servicePath);
    }

    @Override
    protected void onDetachedFromWindow() {
        super.onDetachedFromWindow();
        removeAllViews();
        mServiceWebView.destroy();
    }

    @Override
    public void handlePublish(String event, String params, String viewIds) {
        HeraTrace.d(TAG, String.format("service handlePublish(), event=%s, params=%s, viewIds=%s",
                event, params, viewIds));
        if ("custom_event_serviceReady".equals(event)) {
            onEventServiceReady(params);
        } else if ("custom_event_appDataChange".equals(event)) {
            onEventAppDataChanged(event, params, viewIds);
        } else if ("custom_event_H5_LOG_MSG".equals(event)) {
            HeraTrace.d(params);
        } else if (event.contains("custom_event_canvas")) {
            onEventAppDataChanged(event, params, viewIds);
        }
    }

    @Override
    public void handleInvoke(String event, String params, String callbackId) {
        HeraTrace.d(TAG, String.format("api invoke, event=%s, params=%s, callbackId=%s",
                event, params, callbackId));
        ApiCallback apiCallback = new ApiCallback(event, callbackId) {
            @Override
            public void onResult(String result) {
                HeraTrace.d(TAG, String.format("api callback, event=%s, result=%s, callbackId=%s",
                        getEvent(), result, getCallbackId()));
                String jsFun = getInvokeCallbackJS(getCallbackId(), result);
                HeraTrace.d(TAG, String.format("[invokeCallback]%s", jsFun));

                System.out.println("jsFun will be loaded.");
                
                mServiceWebView.loadUrl(jsFun);
            }
        };

        mApiManager.invoke(event, params, apiCallback);
    }

    private String getInvokeCallbackJS(String callbackId, String data) {
        return String.format("javascript:ServiceJSBridge.invokeCallbackHandler(%s,%s)",
                callbackId, data);
    }

    /**
     * service.html加载完成，初始化应用的配置信息
     */
    private void onEventServiceReady(String params) {
        //初始化应用配置信息
        mAppConfig.initConfig(params);
        if (mEventListener != null) {
            mEventListener.onServiceReady();
        }
    }

    /**
     * 页面数据改变事件
     *
     * @param event   事件名称
     * @param params  参数
     * @param viewIds 视图id数组字符串
     */
    private void onEventAppDataChanged(String event, String params, String viewIds) {
        if (mEventListener != null) {
            //转Page层订阅处理器处理
            mEventListener.notifyPageSubscribeHandler(event, params,
                    JsonUtil.parseToIntArray(viewIds));
        }
    }

    /**
     * Service层的订阅处理器处理事件
     *
     * @param event  事件名称
     * @param params 参数
     * @param viewId 视图id
     */
    public void subscribeHandler(String event, String params, int viewId) {
        HeraTrace.d(TAG, String.format("service subscribeHandler('%s',%s,%s)", event, params, viewId));
        String jsFun = String.format("javascript:ServiceJSBridge.subscribeHandler('%s',%s,%s)",
                event, params, viewId);
        mServiceWebView.loadUrl(jsFun);
    }
}
