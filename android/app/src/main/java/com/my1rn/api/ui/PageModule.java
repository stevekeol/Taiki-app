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


package com.my1rn.api.ui;

import android.content.Context;

import com.my1rn.api.AbsModule;
import com.my1rn.api.HeraApi;
import com.my1rn.interfaces.IApiCallback;
import com.my1rn.interfaces.OnEventListener;

/**
 * 页面跳转，导航栏设置，Toast或Loading对话框
 */
@HeraApi(names = {"showToast", "hideToast", "showLoading", "hideLoading",
        "switchTab", "navigateTo", "redirectTo", "reLaunch", "navigateBack",
        "setNavigationBarTitle", "setNavigationBarColor", "showNavigationBarLoading",
        "hideNavigationBarLoading", "startPullDownRefresh", "stopPullDownRefresh"})
public class PageModule extends AbsModule {

    private OnEventListener mListener;

    public PageModule(Context context, OnEventListener listener) {
        super(context);
        mListener = listener;
    }

    @Override
    public void invoke(String event, String params, IApiCallback callback) {
        boolean res = false;
        if (mListener != null) {
            res = mListener.onPageEvent(event, params);
        }

        int status = res ? RESULT_OK : RESULT_FAIL;
        callback.onResult(packageResultData(event, status, null));
    }
}
