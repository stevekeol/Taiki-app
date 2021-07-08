package com.my1rn;

import com.my1rn.config.HeraConfig;
import com.my1rn.main.HeraService;
import com.my1rn.trace.HeraTrace;

import android.view.View;
import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
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

  //初始化容器引擎
  @ReactMethod
  public void init() {
    //在主进程中初始化框架配置，启动框架服务进程
    if (HeraTrace.isMainProcess(reactContext)){
      HeraConfig config = new HeraConfig.Builder()
        .setHostApiDispatcher(new HostApiDispatcher(reactContext)) // 自定义扩展API配置
        .setDebug(true) // 调试模式
        .build();
      HeraService.start(reactContext.getApplicationContext(), config);
    }
  }

  //打开小程序
  @ReactMethod
  // public void openApplet(String userId, String appId, String appPath) {
  public void openApplet() {    

    final String userId = "123";//标识宿主App业务用户id
    final String appId = "demoapp";//小程序的id
    final String appPath = "";//小程序的本地存储路径

    //sdk内部会首先读取并解压appPath下的小程序包，若appPath为空，则读取并解压assets下以appId命名的zip文件
    //小程序解压后将存储在以appId命名的文件夹下
    
    System.out.println(userId);
    HeraService.launchHome(reactContext.getApplicationContext(), userId, appId, appPath);
  }
}