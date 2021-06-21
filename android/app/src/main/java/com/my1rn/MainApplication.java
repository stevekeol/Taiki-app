package com.my1rn;

import android.app.Application;
import android.content.Context;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

import com.my1rn.CustomToastPackage;  //customModule
import com.my1rn.ContainerEnginePackage; //customModule

// //@CONTAINER_ENGINE
// import com.weidian.lib.hera.config.HeraConfig;
// import com.weidian.lib.hera.main.HeraService;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          
          packages.add(new CustomToastPackage()); //在MainApplication中注册模块
          packages.add(new ContainerEnginePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());

    //@CONTAINER_ENGINE
    // 初始化框架配置，启动框架服务进程
    // HeraConfig config = new HeraConfig.Builder()
    //   // .setHostApiDispatcher(new HostApiDispatcher(this))
    //   .setDebug(true)
    //   .build();
    // HeraService.start(this.getApplicationContext(), config);
    
    // //@CONTAINER_ENGINE
    // //在主进程中初始化框架配置，启动框架服务进程
    // if (HeraTrace.isMainProcess(this)){
    //   HeraConfig config = new HeraConfig.Builder()
    //     .setHostApiDispatcher(new HostApiDispatcher(this)) // 自定义扩展API配置
    //     .setDebug(true) // 调试模式
    //     .build();
    //   HeraService.start(this.getApplicationContext(), config);
    // }

  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.my1rn.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
