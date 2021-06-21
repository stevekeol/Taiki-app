package com.my1rn.sample.api;

import com.my1rn.remote.IHostApiCallback;

public interface IHostApi {

    void invoke(String event, String params, IHostApiCallback callback);
}
