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


package com.my1rn.api.network;

import android.content.Context;
import android.text.TextUtils;
import android.util.Log;

import com.my1rn.api.AbsModule;
import com.my1rn.api.HeraApi;
import com.my1rn.config.AppConfig;
import com.my1rn.interfaces.IApiCallback;
import com.my1rn.trace.HeraTrace;
import com.my1rn.utils.OkHttpUtil;
import com.my1rn.utils.StorageUtil;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.File;
import java.io.IOException;
import java.util.Map;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Headers;
import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

/**
 * 上传文件api
 */
@HeraApi(names = {"uploadFile"})
public class UploadModule extends AbsModule {

    private String mTempDir;

    public UploadModule(Context context, AppConfig appConfig) {
        super(context);
        mTempDir = appConfig.getMiniAppTempPath(context);
    }

    @Override
    public void invoke(final String event, String params, final IApiCallback callback) {
        String url = "";
        String filePath = "";
        String name = "";
        JSONObject header = null;
        JSONObject formData = null;
        try {
            JSONObject jsonObject = new JSONObject(params);
            url = jsonObject.optString("url");
            filePath = jsonObject.optString("filePath");
            name = jsonObject.optString("name");
            header = jsonObject.optJSONObject("header");
            formData = jsonObject.optJSONObject("formData");
        } catch (Exception e) {
            Log.w(TAG, "parse params exception", e);
        }

        if (TextUtils.isEmpty(url) || TextUtils.isEmpty(filePath) || TextUtils.isEmpty(name)) {
            callback.onResult(packageResultData(event, RESULT_FAIL, null));
            return;
        }

        if (filePath.startsWith(StorageUtil.SCHEME_WDFILE)) {
            String tempFileName = filePath.substring(StorageUtil.SCHEME_WDFILE.length());
            filePath = new File(mTempDir, tempFileName).getAbsolutePath();
        } else if (filePath.startsWith(StorageUtil.SCHEME_FILE)) {
            filePath = filePath.substring(StorageUtil.SCHEME_FILE.length());
        }

        try {
            Map<String, String> reqParam = OkHttpUtil.parseJsonToMap(formData);
            Headers headers = Headers.of(OkHttpUtil.parseJsonToMap(header));
            File file = new File(filePath);
            MultipartBody.Builder bodyBuilder = new MultipartBody.Builder();
            bodyBuilder.setType(MultipartBody.FORM);
            bodyBuilder.addFormDataPart(name, file.getName(),
                    RequestBody.create(MediaType.parse("image/jpeg"), file));
            for (Map.Entry<String, String> entry : reqParam.entrySet()) {
                bodyBuilder.addFormDataPart(entry.getKey(), entry.getValue());
            }

            Request request = new Request.Builder()
                    .headers(headers)
                    .url(url)
                    .post(bodyBuilder.build())
                    .build();

            OkHttpUtil.enqueue(request, new Callback() {
                @Override
                public void onFailure(Call call, IOException e) {
                    final JSONObject data = new JSONObject();
                    try {
                        data.put("exception", e != null ? e.getMessage() : "upload onFailure");
                    } catch (Exception ex) {
                        HeraTrace.w(TAG, "upload failed, assemble exception message to json error!");
                    }
                    HANDLER.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onResult(packageResultData(event, RESULT_FAIL, data));
                        }
                    });
                }

                @Override
                public void onResponse(Call call, Response response) throws IOException {
                    final JSONObject data = new JSONObject();
                    try {
                        data.put("statusCode", response.code());
                        data.put("data", response.body().string());
                    } catch (JSONException e) {
                        HeraTrace.w(TAG, "upload success, assemble data to json error!");
                    }
                    HANDLER.post(new Runnable() {
                        @Override
                        public void run() {
                            callback.onResult(packageResultData(event, RESULT_OK, data));
                        }
                    });
                }
            });
        } catch (Exception e) {
            callback.onResult(packageResultData(event, RESULT_FAIL, null));
        }
    }
}
