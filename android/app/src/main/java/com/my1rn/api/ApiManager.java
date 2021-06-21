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


package com.my1rn.api;

import android.app.Activity;
import android.content.Intent;

import com.my1rn.config.AppConfig;
import com.my1rn.interfaces.IApiCallback;
import com.my1rn.interfaces.OnEventListener;
import com.my1rn.remote.HostApiManager;

/**
 * Api管理者，负责api的分发调用
 */
public class ApiManager {

    private SdkApiManager mSdkApiManager;
    private HostApiManager mHostApiManager;

    public ApiManager(Activity activity, OnEventListener listener, AppConfig appConfig) {
        mSdkApiManager = new SdkApiManager(activity, listener, appConfig);
        mHostApiManager = new HostApiManager(activity);
    }

    /**
     * 处理api调用
     *
     * @param event    事件名称，即api名称
     * @param params   调用参数
     * @param callback 回调接口
     */
    public void invoke(String event, String params, IApiCallback callback) {
        if (mSdkApiManager != null && mSdkApiManager.invoke(event, params, callback)) {
            return;
        }
        if (mHostApiManager != null) {
            mHostApiManager.invoke(event, params, callback);
        }
    }

    /**
     * Activity结果回调
     *
     * @param requestCode 请求码
     * @param resultCode  结果码
     * @param data        结果数据
     */
    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (mSdkApiManager != null && mSdkApiManager.onActivityResult(requestCode, resultCode, data)) {
            return;
        }
        if (mHostApiManager != null) {
            mHostApiManager.onActivityResult(requestCode, resultCode, data);
        }
    }

    public void destroy() {
        if (mSdkApiManager != null) {
            mSdkApiManager.destroy();
        }
        if (mHostApiManager != null) {
            mHostApiManager.destroy();
        }
    }

}
