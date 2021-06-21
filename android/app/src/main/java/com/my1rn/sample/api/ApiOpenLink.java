package com.my1rn.sample.api;

import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.text.TextUtils;

import com.my1rn.api.HeraApi;
import com.my1rn.remote.IHostApiCallback;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * 调用扩展api示例，打开链接
 */
@HeraApi(names = {"openLink"})
public class ApiOpenLink implements IHostApi {

    private Context mContext;

    public ApiOpenLink(Context context) {
        mContext = context;
    }

    @Override
    public void invoke(String event, String params, IHostApiCallback callback) {
        JSONObject paramJson;
        try {
            paramJson = new JSONObject(params);
        } catch (JSONException e) {
            paramJson = new JSONObject();
        }

        if ("openLink".equals(event)) {
            String url = paramJson.optString("url");
            if (!TextUtils.isEmpty(url)) {
                Intent intent = new Intent();
                intent.setAction(Intent.ACTION_VIEW);
                Uri uri = Uri.parse(url);
                intent.setData(uri);
                intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                mContext.startActivity(intent);
                callback.onResult(IHostApiCallback.SUCCEED, null);
            } else {
                callback.onResult(IHostApiCallback.FAILED, null);
            }
        }
    }
}
