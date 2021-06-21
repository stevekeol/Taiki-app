package com.my1rn;

import com.my1rn.config.HeraConfig;
import com.my1rn.main.HeraService;
import com.my1rn.trace.HeraTrace;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class ContainerEngine extends ReactContextBaseJavaModule {
  private static ReactApplicationContext reactContext;

  public ContainerEngine(ReactApplicationContext context) {
    super(context);
    reactContext = context;
  }

  @Override
  public String getName() {
    return "ContainerEngine";
  }

  // @ReactMethod
  // public void bootstrap() {
  //   //在主进程中初始化框架配置，启动框架服务进程
  //   if (HeraTrace.isMainProcess(this)){
  //     HeraConfig config = new HeraConfig.Builder()
  //       .setHostApiDispatcher(new HostApiDispatcher(this))
  //       .setDebug(true)
  //       .build();
  //     HeraService.start(this.getApplicationContext(), config);
  //   }
  // }

  // //打开小程序
  // @ReactMethod
  // public void open() {
  //   final String userId = "123";//标识宿主App业务用户id
  //   final String appId = "demoapp";//小程序的id
  //   final String appPath = "";//小程序的本地存储路径

  //   HeraService.launchHome(getApplicationContext(), userId, appId, appPath);    
  // }
}