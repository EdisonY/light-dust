const axios = require('axios')

axios.default.timeout = 5000
axios.default.baseUrl = ''
//axios.default.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

//请求拦截
// axios.interceptors.request.use(
//     config => {
//         const token = store.state.token;
//         token && (config.headers.Authorization = token);
//         return config;
//     },
//     error => {
//         return Promise.error(error);
//     }
// )

//响应拦截
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },

    error => {
        if (error) {
            // switch (error.response.status) {
            //     case 401:
            //     //
            //     break;
            //     default:
            //     //
            // }
            return Promise.reject(error);
        }else{
            console.log(error);
        }
    }
);

// 自定义判断元素类型JS
function toType (obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull (o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}

function apiAxios(method,url,params){
    return new Promise((resolve,reject) => {
        if (params) {
          params = filterNull(params)
        }
        axios({
          method: method,
          url: url,
          data: method === 'POST' || method === 'PUT' ? params : null,
          params: method === 'GET' || method === 'DELETE' ? params : null,
          baseURL: axios.default.baseUrl,
          withCredentials: false
      }).then(res => {
          resolve(res.data)
      }).catch(err => {
          reject(err)
      })
  })
}


// 返回在vue模板中的调用接口
export default {
    get: function (url, params) {
        return apiAxios('GET', url, params)
    },
    post: function (url, params) {
        return apiAxios('POST', url, params)
    },
    put: function (url, params) {
        return apiAxios('PUT', url, params)
    },
    delete: function (url, params) {
        return apiAxios('DELETE', url, params)
    }
}

















{}
