import axios from 'axios'
const myAxios = function (options:ajaxOption) {
    let promise: any;
    return new Promise((resolve, reject) => {
        if (options.type.toUpperCase() === 'GET') {
            let paramsStr = '';
            Object.keys(options.params).forEach((key: any) => {
                paramsStr += `${key} = ${options.params[key]}&`
            })
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
            }
            options.url = `${options.url}?${paramsStr}`
            promise = axios.get(options.url);
        } else if (options.type.toUpperCase() === 'POST') {
            promise = axios.post(options.url, options.params);
        }
        if (options.loading) {
            
        }
        promise.then((res: any) => {
            resolve(res);
        }).catch((err: any) => {
            reject(err)
        })
    })
}
export default myAxios;