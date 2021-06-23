PS E:\Projects\Test\containerEngine\RN-Hera\android> npm run android

> my1rn@0.0.1 android E:\Projects\Test\containerEngine\RN-Hera
> react-native run-android

info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 901 file(s) to forward-jetify. Using 2 workers...
info JS server already running.
info Installing the app...

> Task :app:compileDebugJavaWithJavac FAILED
20 actionable tasks: 5 executed, 15 up-to-date
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:77: ����: �Ҳ�������
        View contentView = View.inflate(context, R.layout.hera_modal_dialog, null);
                                                         ^
  ����:   ���� hera_modal_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:78: ����: �Ҳ�������
        mTitleView = contentView.findViewById(R.id.dlg_title_view);
                                                  ^
  ����:   ���� dlg_title_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:79: ����: �Ҳ�������
        mButtonView = contentView.findViewById(R.id.dlg_btn_view);
                                                   ^
  ����:   ���� dlg_btn_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:80: ����: �Ҳ�������
        mTitle = (TextView) contentView.findViewById(R.id.dlg_title);
                                                         ^
  ����:   ���� dlg_title
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:81: ����: �Ҳ�������
        mMessage = (TextView) contentView.findViewById(R.id.dlg_msg);
                                                           ^
  ����:   ���� dlg_msg
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:82: ����: �Ҳ�������
        mBtnDivideLine = (ImageView) contentView.findViewById(R.id.line_v);
                                                                  ^
  ����:   ���� line_v
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:83: ����: �Ҳ�������
        mLeftBtn = (TextView) contentView.findViewById(R.id.dlg_left_btn);
                                                           ^
  ����:   ���� dlg_left_btn
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:84: ����: �Ҳ�������
        mRightBtn = (TextView) contentView.findViewById(R.id.dlg_right_btn);
                                                            ^
  ����:   ���� dlg_right_btn
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:67: ����: �Ҳ�������
        mContentView = (LinearLayout) View.inflate(context, R.layout.hera_action_sheet_dialog, null);
                                                                    ^
  ����:   ���� hera_action_sheet_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:69: ����: �Ҳ�������
        mLRPadding = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_lr_padding);
                                                                         ^
  ����:   ���� action_sheet_item_lr_padding
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:70: ����: �Ҳ�������
        mTBPadding = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_tb_padding);
                                                                         ^
  ����:   ���� action_sheet_item_tb_padding
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:71: ����: �Ҳ�������
        mTextSize = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_text_size);
                                                                        ^
  ����:   ���� action_sheet_item_text_size
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\main\HeraActivity.java:99: ����: �Ҳ�������
        setContentView(R.layout.hera_main_activity);
                               ^
  ����:   ���� hera_main_activity
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\main\HeraActivity.java:103: ����: �Ҳ�������
        mLoadingIndicator = (LoadingIndicator) findViewById(R.id.loading_indicator);
                                                                ^
  ����:   ���� loading_indicator
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:70: ����: �Ҳ�������
        mView = LayoutInflater.from(context).inflate(R.layout.hera_loading_indicator, this);
                                                             ^
  ����:   ���� hera_loading_indicator
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:71: ����: �Ҳ�������
        mTopIcon = (ImageView) findViewById(R.id.indicator_top_icon);
                                                ^
  ����:   ���� indicator_top_icon
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:72: ����: �Ҳ�������
        mTitle = (TextView) findViewById(R.id.indicator_title);
                                             ^
  ����:   ���� indicator_title
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:73: ����: �Ҳ�������
        ImageView indicator = (ImageView) findViewById(R.id.indicator_image);
                                                           ^
  ����:   ���� indicator_image
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:105: ����: �Ҳ�������
        inflate(context, R.layout.hera_page, this);
                                 ^
  ����:   ���� hera_page
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:106: ����: �Ҳ�������
        LinearLayout topLayout = (LinearLayout) findViewById(R.id.top_layout);
                                                                 ^
  ����:   ���� top_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:107: ����: �Ҳ�������
        LinearLayout bottomLayout = (LinearLayout) findViewById(R.id.bottom_layout);
                                                                    ^
  ����:   ���� bottom_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:108: ����: �Ҳ�������
        mWebLayout = (FrameLayout) findViewById(R.id.web_layout);
                                                    ^
  ����:   ���� web_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:109: ����: �Ҳ�������
        mToastView = (ToastView) findViewById(R.id.toast_view);
                                                  ^
  ����:   ���� toast_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:150: ����: �Ҳ�������
        mWebLayout = (FrameLayout) findViewById(R.id.web_layout);
                                                    ^
  ����:   ���� web_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\NavigationBar.java:75: ����: �Ҳ�������
        Drawable drawable = AppCompatResources.getDrawable(context, R.drawable.hera_ic_arrow_back);
                                                                              ^
  ����:   ���� hera_ic_arrow_back
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\NavigationBar.java:89: ����: �Ҳ�������
                getResources().getDrawable(R.drawable.hera_anim_navigation_loading));
                                                     ^
  ����:   ���� hera_anim_navigation_loading
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:90: ����: �Ҳ�������
        inflate(context, R.layout.hera_toast_view, this);
                                 ^
  ����:   ���� hera_toast_view
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:91: ����: �Ҳ�������
        mImage = (ImageView) findViewById(R.id.toast_image);
                                              ^
  ����:   ���� toast_image
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:92: ����: �Ҳ�������
        mLoading = (ProgressBar) findViewById(R.id.toast_loading);
                                                  ^
  ����:   ���� toast_loading
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:93: ����: �Ҳ�������
        mText = (TextView) findViewById(R.id.toast_text);
                                            ^
  ����:   ���� toast_text
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:118: ����: �Ҳ�������
            mImage.setImageResource(R.drawable.hera_success);
                                              ^
  ����:   ���� hera_success
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:63: ����: �Ҳ�������
        inflate(context, R.layout.hera_tab_item, this);
                                 ^
  ����:   ���� hera_tab_item
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:64: ����: �Ҳ�������
        mIcon = (ImageView) findViewById(R.id.item_icon);
                                             ^
  ����:   ���� item_icon
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:65: ����: �Ҳ�������
        mName = (TextView) findViewById(R.id.item_name);
                                            ^
  ����:   ���� item_name
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:84: ����: �Ҳ�������
            padding = getResources().getDimensionPixelSize(R.dimen.tab_bar_padding_l);
                                                                  ^
  ����:   ���� tab_bar_padding_l
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:85: ����: �Ҳ�������
            textSize = getResources().getDimensionPixelSize(R.dimen.tab_bar_text_size_l);
                                                                   ^
  ����:   ���� tab_bar_text_size_l
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:88: ����: �Ҳ�������
            padding = getResources().getDimensionPixelSize(R.dimen.tab_bar_padding_s);
                                                                  ^
  ����:   ���� tab_bar_padding_s
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:89: ����: �Ҳ�������
            textSize = getResources().getDimensionPixelSize(R.dimen.tab_bar_text_size_s);
                                                                   ^
  ����:   ���� tab_bar_text_size_s
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\decoding\BeepManager.java:92: ����: �Ҳ�������
      AssetFileDescriptor file = activity.getResources().openRawResourceFd(R.raw.beep);
                                                                            ^
  ����:   ���� raw
  λ��: �� R
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:103: ����: �Ҳ���
����
        setContentView(R.layout.hera_scancode_activity);
                               ^
  ����:   ���� hera_scancode_activity
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:105: ����: �Ҳ���
����
        View scan_back = findViewById(R.id.scan_back);
                                          ^
  ����:   ���� scan_back
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:114: ����: �Ҳ���
����
        viewfinderView = (AutoScannerView) findViewById(R.id.viewfinder_view);
                                                            ^
  ����:   ���� viewfinder_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:123: ����: �Ҳ���
����
        SurfaceView surfaceView = (SurfaceView) findViewById(R.id.preview_view);
                                                                 ^
  ����:   ���� preview_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:271: ����: �Ҳ���
����
            AssetFileDescriptor file = getResources().openRawResourceFd(R.raw.beep);
                                                                         ^
  ����:   ���� raw
  λ��: �� R
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\AutoScannerView.java:145: ����: �Ҳ�������
                canvas.drawBitmap(((BitmapDrawable) (getResources().getDrawable(R.drawable.hera_scancode_scanline))).getBitmap(), null, lineRect, linePaint);
                                                                                          ^
  ����:   ���� hera_scancode_scanline
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:84: ����: �Ҳ�������
        maskColor = resources.getColor(R.color.viewfinder_mask);
                                              ^
  ����:   ���� viewfinder_mask
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:85: ����: �Ҳ�������
        resultColor = resources.getColor(R.color.result_view);
                                                ^
  ����:   ���� result_view
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:86: ����: �Ҳ�������
        frameColor = resources.getColor(R.color.viewfinder_frame);
                                               ^
  ����:   ���� viewfinder_frame
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:87: ����: �Ҳ�������
        laserColor = resources.getColor(R.color.viewfinder_laser);
                                               ^
  ����:   ���� viewfinder_laser
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:88: ����: �Ҳ�������
        resultPointColor = resources.getColor(R.color.possible_result_points);
                                                     ^
  ����:   ���� possible_result_points
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\utils\UIUtil.java:23: ����: �Ҳ�������
    private static final int FAKE_STATUS_BAR_VIEW_ID = R.id.fake_status_bar_view;
                                                           ^
  ����:   ���� fake_status_bar_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:47: ����: �Ҳ�������
        super(context, R.style.TransparentDialog);
                              ^
  ����:   ���� TransparentDialog
  λ��: �� style
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:56: ����: �Ҳ�������
        setContentView(R.layout.hera_loading_dialog);
                               ^
  ����:   ���� hera_loading_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:57: ����: �Ҳ�������
        mTextView = (TextView) findViewById(R.id.loading_message);
                                                ^
  ����:   ���� loading_message
  λ��: �� id
ע: ĳЩ�����ļ�ʹ�û�����ѹ�ʱ�� API��
ע: �й���ϸ��Ϣ, ��ʹ�� -Xlint:deprecation ���±��롣
54 ������

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:compileDebugJavaWithJavac'.
> Compilation failed; see the compiler error output for details.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 7s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.
Error: Command failed: gradlew.bat app:installDebug -PreactNativeDevServerPort=8081
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:77: ����: �Ҳ�������
        View contentView = View.inflate(context, R.layout.hera_modal_dialog, null);
                                                         ^
  ����:   ���� hera_modal_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:78: ����: �Ҳ�������
        mTitleView = contentView.findViewById(R.id.dlg_title_view);
                                                  ^
  ����:   ���� dlg_title_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:79: ����: �Ҳ�������
        mButtonView = contentView.findViewById(R.id.dlg_btn_view);
                                                   ^
  ����:   ���� dlg_btn_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:80: ����: �Ҳ�������
        mTitle = (TextView) contentView.findViewById(R.id.dlg_title);
                                                         ^
  ����:   ���� dlg_title
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:81: ����: �Ҳ�������
        mMessage = (TextView) contentView.findViewById(R.id.dlg_msg);
                                                           ^
  ����:   ���� dlg_msg
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:82: ����: �Ҳ�������
        mBtnDivideLine = (ImageView) contentView.findViewById(R.id.line_v);
                                                                  ^
  ����:   ���� line_v
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:83: ����: �Ҳ�������
        mLeftBtn = (TextView) contentView.findViewById(R.id.dlg_left_btn);
                                                           ^
  ����:   ���� dlg_left_btn
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ModalDialog.java:84: ����: �Ҳ�������
        mRightBtn = (TextView) contentView.findViewById(R.id.dlg_right_btn);
                                                            ^
  ����:   ���� dlg_right_btn
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:67: ����: �Ҳ�������
        mContentView = (LinearLayout) View.inflate(context, R.layout.hera_action_sheet_dialog, null);
                                                                    ^
  ����:   ���� hera_action_sheet_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:69: ����: �Ҳ�������
        mLRPadding = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_lr_padding);
                                                                         ^
  ����:   ���� action_sheet_item_lr_padding
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:70: ����: �Ҳ�������
        mTBPadding = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_tb_padding);
                                                                         ^
  ����:   ���� action_sheet_item_tb_padding
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ActionSheetDialog.java:71: ����: �Ҳ�������
        mTextSize = context.getResources().getDimensionPixelSize(R.dimen.action_sheet_item_text_size);
                                                                        ^
  ����:   ���� action_sheet_item_text_size
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\main\HeraActivity.java:99: ����: �Ҳ�������
        setContentView(R.layout.hera_main_activity);
                               ^
  ����:   ���� hera_main_activity
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\main\HeraActivity.java:103: ����: �Ҳ�������
        mLoadingIndicator = (LoadingIndicator) findViewById(R.id.loading_indicator);
                                                                ^
  ����:   ���� loading_indicator
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:70: ����: �Ҳ�������
        mView = LayoutInflater.from(context).inflate(R.layout.hera_loading_indicator, this);
                                                             ^
  ����:   ���� hera_loading_indicator
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:71: ����: �Ҳ�������
        mTopIcon = (ImageView) findViewById(R.id.indicator_top_icon);
                                                ^
  ����:   ���� indicator_top_icon
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:72: ����: �Ҳ�������
        mTitle = (TextView) findViewById(R.id.indicator_title);
                                             ^
  ����:   ���� indicator_title
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingIndicator.java:73: ����: �Ҳ�������
        ImageView indicator = (ImageView) findViewById(R.id.indicator_image);
                                                           ^
  ����:   ���� indicator_image
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:105: ����: �Ҳ�������
        inflate(context, R.layout.hera_page, this);
                                 ^
  ����:   ���� hera_page
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:106: ����: �Ҳ�������
        LinearLayout topLayout = (LinearLayout) findViewById(R.id.top_layout);
                                                                 ^
  ����:   ���� top_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:107: ����: �Ҳ�������
        LinearLayout bottomLayout = (LinearLayout) findViewById(R.id.bottom_layout);
                                                                    ^
  ����:   ���� bottom_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:108: ����: �Ҳ�������
        mWebLayout = (FrameLayout) findViewById(R.id.web_layout);
                                                    ^
  ����:   ���� web_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:109: ����: �Ҳ�������
        mToastView = (ToastView) findViewById(R.id.toast_view);
                                                  ^
  ����:   ���� toast_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\Page.java:150: ����: �Ҳ�������
        mWebLayout = (FrameLayout) findViewById(R.id.web_layout);
                                                    ^
  ����:   ���� web_layout
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\NavigationBar.java:75: ����: �Ҳ�������
        Drawable drawable = AppCompatResources.getDrawable(context, R.drawable.hera_ic_arrow_back);
                                                                              ^
  ����:   ���� hera_ic_arrow_back
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\NavigationBar.java:89: ����: �Ҳ�������
                getResources().getDrawable(R.drawable.hera_anim_navigation_loading));
                                                     ^
  ����:   ���� hera_anim_navigation_loading
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:90: ����: �Ҳ�������
        inflate(context, R.layout.hera_toast_view, this);
                                 ^
  ����:   ���� hera_toast_view
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:91: ����: �Ҳ�������
        mImage = (ImageView) findViewById(R.id.toast_image);
                                              ^
  ����:   ���� toast_image
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:92: ����: �Ҳ�������
        mLoading = (ProgressBar) findViewById(R.id.toast_loading);
                                                  ^
  ����:   ���� toast_loading
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:93: ����: �Ҳ�������
        mText = (TextView) findViewById(R.id.toast_text);
                                            ^
  ����:   ���� toast_text
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\ToastView.java:118: ����: �Ҳ�������
            mImage.setImageResource(R.drawable.hera_success);
                                              ^
  ����:   ���� hera_success
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:63: ����: �Ҳ�������
        inflate(context, R.layout.hera_tab_item, this);
                                 ^
  ����:   ���� hera_tab_item
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:64: ����: �Ҳ�������
        mIcon = (ImageView) findViewById(R.id.item_icon);
                                             ^
  ����:   ���� item_icon
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:65: ����: �Ҳ�������
        mName = (TextView) findViewById(R.id.item_name);
                                            ^
  ����:   ���� item_name
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:84: ����: �Ҳ�������
            padding = getResources().getDimensionPixelSize(R.dimen.tab_bar_padding_l);
                                                                  ^
  ����:   ���� tab_bar_padding_l
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:85: ����: �Ҳ�������
            textSize = getResources().getDimensionPixelSize(R.dimen.tab_bar_text_size_l);
                                                                   ^
  ����:   ���� tab_bar_text_size_l
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:88: ����: �Ҳ�������
            padding = getResources().getDimensionPixelSize(R.dimen.tab_bar_padding_s);
                                                                  ^
  ����:   ���� tab_bar_padding_s
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\page\view\TabItemView.java:89: ����: �Ҳ�������
            textSize = getResources().getDimensionPixelSize(R.dimen.tab_bar_text_size_s);
                                                                   ^
  ����:   ���� tab_bar_text_size_s
  λ��: �� dimen
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\decoding\BeepManager.java:92: ����: �Ҳ�������
      AssetFileDescriptor file = activity.getResources().openRawResourceFd(R.raw.beep);
                                                                            ^
  ����:   ���� raw
  λ��: �� R
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:103: ����: �Ҳ���
����
        setContentView(R.layout.hera_scancode_activity);
                               ^
  ����:   ���� hera_scancode_activity
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:105: ����: �Ҳ���
����
        View scan_back = findViewById(R.id.scan_back);
                                          ^
  ����:   ���� scan_back
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:114: ����: �Ҳ���
����
        viewfinderView = (AutoScannerView) findViewById(R.id.viewfinder_view);
                                                            ^
  ����:   ���� viewfinder_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:123: ����: �Ҳ���
����
        SurfaceView surfaceView = (SurfaceView) findViewById(R.id.preview_view);
                                                                 ^
  ����:   ���� preview_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\activity\ScanCaptureActivity.java:271: ����: �Ҳ���
����
            AssetFileDescriptor file = getResources().openRawResourceFd(R.raw.beep);
                                                                         ^
  ����:   ���� raw
  λ��: �� R
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\AutoScannerView.java:145: ����: �Ҳ�������
                canvas.drawBitmap(((BitmapDrawable) (getResources().getDrawable(R.drawable.hera_scancode_scanline))).getBitmap(), null, lineRect, linePaint);
                                                                                          ^
  ����:   ���� hera_scancode_scanline
  λ��: �� drawable
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:84: ����: �Ҳ�������
        maskColor = resources.getColor(R.color.viewfinder_mask);
                                              ^
  ����:   ���� viewfinder_mask
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:85: ����: �Ҳ�������
        resultColor = resources.getColor(R.color.result_view);
                                                ^
  ����:   ���� result_view
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:86: ����: �Ҳ�������
        frameColor = resources.getColor(R.color.viewfinder_frame);
                                               ^
  ����:   ���� viewfinder_frame
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:87: ����: �Ҳ�������
        laserColor = resources.getColor(R.color.viewfinder_laser);
                                               ^
  ����:   ���� viewfinder_laser
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\scancode\ui\view\ViewfinderView.java:88: ����: �Ҳ�������
        resultPointColor = resources.getColor(R.color.possible_result_points);
                                                     ^
  ����:   ���� possible_result_points
  λ��: �� color
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\utils\UIUtil.java:23: ����: �Ҳ�������
    private static final int FAKE_STATUS_BAR_VIEW_ID = R.id.fake_status_bar_view;
                                                           ^
  ����:   ���� fake_status_bar_view
  λ��: �� id
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:47: ����: �Ҳ�������
        super(context, R.style.TransparentDialog);
                              ^
  ����:   ���� TransparentDialog
  λ��: �� style
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:56: ����: �Ҳ�������
        setContentView(R.layout.hera_loading_dialog);
                               ^
  ����:   ���� hera_loading_dialog
  λ��: �� layout
E:\Projects\Test\containerEngine\RN-Hera\android\app\src\main\java\com\my1rn\widget\LoadingDialog.java:57: ����: �Ҳ�������
        mTextView = (TextView) findViewById(R.id.loading_message);
                                                ^
  ����:   ���� loading_message
  λ��: �� id
ע: ĳЩ�����ļ�ʹ�û�����ѹ�ʱ�� API��
ע: �й���ϸ��Ϣ, ��ʹ�� -Xlint:deprecation ���±��롣
54 ������

FAILURE: Build failed with an exception.

* What went wrong:
Execution failed for task ':app:compileDebugJavaWithJavac'.
> Compilation failed; see the compiler error output for details.

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 7s

    at makeError (E:\Projects\Test\containerEngine\RN-Hera\node_modules\execa\index.js:174:9)
    at E:\Projects\Test\containerEngine\RN-Hera\node_modules\execa\index.js:278:16
    at processTicksAndRejections (internal/process/task_queues.js:97:5)
    at async runOnAllDevices (E:\Projects\Test\containerEngine\RN-Hera\node_modules\@react-native-community\cli-platform-android\build\commands\runAndroid\runOnAllDevices.js:94:5)
    at async Command.handleAction (E:\Projects\Test\containerEngine\RN-Hera\node_modules\@react-native-community\cli\build\index.js:186:9)
info Run CLI with --verbose flag for more details.
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! my1rn@0.0.1 android: `react-native run-android`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the my1rn@0.0.1 android script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\BFChainer\AppData\Roaming\npm-cache\_logs\2021-06-22T08_42_31_083Z-debug.log
PS E:\Projects\Test\containerEngine\RN-Hera\android>