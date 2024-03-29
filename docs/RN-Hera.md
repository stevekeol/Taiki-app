# 在ReactNative项目中集成Hera的原生模块

> 两者的编译模式不一致。RN是利用react.gradle(内部封装了android/iOS的编译差异)，后者是gradle。两者版本也不一致

## 零散笔记

- 区分RN项目在Android端的安装: 取决于/android/app/build.gradle中
```md
{
  android {
    defaultConfig {
      ...
      applicationId "com.xxx"
      ...
    }
  }
}
```









## 坑

1. android(hera) -> androidX(RN) 时，import导入各个包的差异:

  ```build.gradle
  dependencies{
    implementation "androidx.swiperefreshlayout:swiperefreshlayout:1.0.0" // For Hera
    implementation "me.iwf.photopicker:PhotoPicker:+" // For Hera
    implementation "com.android.support:support-annotations:+" // For Hera
    implementation "com.android.support:appcompat-v7:23.1.1" // For Hera
    implementation "com.github.bumptech.glide:glide:4.8.0" // For Hera
    implementation "com.google.zxing:core:3.2.0" // For Hera
  }

  ```

  ```java
  // import android.support.annotation.Nullable;
  import androidx.annotation.Nullable;

  // import android.support.v7.app.AppCompatActivity;
  import androidx.appcompat.app.AppCompatActivity;

  // android.support.v4.widget.SwipeRefreshLayout：
  androidx.swiperefreshlayout.widget.SwipeRefreshLayout
  依赖项 implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.0.0'

  // import android.support.v7.widget.Toolbar; 
  import androidx.appcompat.widget.Toolbar;
  依赖项 'com.android.support:appcompat-v7:23.1.1'

  // import android.support.v7.content.res.AppCompatResources;
  import androidx.appcompat.content.res.AppCompatResources;
  ```

2. R.java文件中缺少hera.page等
```java
...
id {
  ...
  public static int fake_status_bar_view=0x7f0e002f; //按序增加即可
}

...
layout {
  public static int hera_page=0x7f03004f; //按序增加即可
}
```

3. npm run android时，报错： Execution failed for task ':app:mergeProjectDexDebug'.

+ /android/app/build.gradle 中 defaultConfig { multiDexEnabled true }

> Task :app:mergeProjectDexDebug FAILED 其实我怀疑就是手写了R.java文件导致的。其实不必手动添加R.java。只需要将hera中java/res中相关资源文件复制到rn对应位置即可。

4. Task :app:processDebugResources FAILED；Execution failed for task ':app:processDebugResources'.

> 还是资源文件 java/res的问题

5. 资源文件怎么定义，怎么使用?
+ 定义已经知道了;
+ 使用的话，getString(R.string.cancel)，其中R是否需要刻意引入? 如果需要的话，ReactNativ中如何生成R.java，生成的位置在哪?如何引入

> import com.my1rn.R(好像甚至都不需要引入); 然后getContext().getString(R.string.app_name);

6. RN+Hera已经可以编译打包，在点击进入Hera按钮时，android应用闪退。

+ (可能)

> Android开发如何进入调试模式: AndroidStudio中，Run App即可。然后在实体机器上操作，闪退导致的原因，会打印在AndroidStudio中。

> 此时我闪退的原因是: `android.content.ActivityNotFoundException: Unable to find explicit activity class {com.my1rn/com.my1rn.main.HeraActivity}; have you declared this activity in your AndroidManifest.xml?`

> 在AndroidManifest.xml中添加<Activity HeraActivity...>即可

> 随即又报错：`E/libc: Access denied finding property "ro.vendor.df.effect.conflict"`

+ 可能是读取demoapp.zip不合法
+ android -> androidX时包导入有问题

> 1. build.gradle中defaultConfig中增加`ndk.abiFilters 'armeabi-v7a','arm64-v8a','x86','x86_64'`

> 2. 