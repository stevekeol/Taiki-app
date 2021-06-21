package com.my1rn;

import android.content.Context;

import com.my1rn.remote.IHostApiCallback;
import com.my1rn.remote.IHostApiDispatcher;
import com.my1rn.sample.api.HostApis;

/**
 * 宿主api的调用分发
 */
public class HostApiDispatcher implements IHostApiDispatcher {

    private HostApis mApis;

    public HostApiDispatcher(Context context) {
        mApis = new HostApis(context);
    }

    @Override
    public void dispatch(String event, String param, IHostApiCallback apiCallback) {
        mApis.invoke(event, param, apiCallback);
    }
}
