# 在ReactNative项目中集成Hera的原生模块

> 两者的编译模式不一致。RN是利用react.gradle(内部封装了android/iOS的编译差异)，后者是gradle。两者版本也不一致

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

3. ContainerEngine.java中

+ `HeraTrace.isMainProcess(this)`