package com.my1rn.sample.api;

import com.my1rn.api.HeraApi;
import com.my1rn.remote.IHostApiCallback;

import org.json.JSONException;
import org.json.JSONObject;

/**
 * 调用扩展api示例，打开某个可返回结果的Activity
 */
@HeraApi(names = {"openPageForResult"})
public class ApiOpenPageForResult implements IHostApi {

    @Override
    public void invoke(String event, String params, IHostApiCallback callback) {
        //根据params参数打开指定页面，由小程序业务定义
        JSONObject resultJson = new JSONObject();
        try {//示例
            resultJson.put("package", "com.my1rn.sample");
            resultJson.put("name", "com.my1rn.sample.ForResultActivity");
            resultJson.put("params", params);
            callback.onResult(IHostApiCallback.PENDING, resultJson);
        } catch (JSONException e) {
            callback.onResult(IHostApiCallback.FAILED, null);
            return;
        }
        callback.onResult(IHostApiCallback.SUCCEED, resultJson);
    }
}
