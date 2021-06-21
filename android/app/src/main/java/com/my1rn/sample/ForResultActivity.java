package com.my1rn.sample;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import androidx.annotation.Nullable;
import android.view.View;

import com.my1rn.R;

public class ForResultActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.for_result_activity);

        findViewById(R.id.set_result).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //设置要返回的数据
                Intent intent = new Intent();
                intent.putExtra("aaa", "111");
                intent.putExtra("bbb", "222");
                setResult(RESULT_OK, intent);
                finish();
            }
        });
    }

}
