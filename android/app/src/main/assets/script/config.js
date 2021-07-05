/**
 * Created by pengguanfa on 2017/10/25.
 * 扩展api配置
 */
window.HeraConf = {
  extApi: [
    {
      name: 'testApi',
      fn: function (params) {
        this.showToast(params)
      },
      params: {
        title: ''
      }
    },
    {
      name: 'openPage',
      params: {
        name: '',
        param: {}
      }
    },
    {
      name: 'getCookie',
      params: {
        host: ''
      }
    },
    {
      name: 'openLink',
      params: {
        url: ''
      }
    }
  ]
}

window.HeraConf && window.HeraConf.extApi && (window.HeraExtApiConf = window.HeraConf.extApi)
