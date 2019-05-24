import axios from 'axios'
import qs from 'qs'
const myAxios = function (options:ajaxOption) {
    let promise: any;
    return new Promise((resolve, reject) => {
        if (options.type.toUpperCase() === 'GET') {
            let paramsStr = '';
            if (options.params && Object.keys(options.params).length > 0) {
                Object.keys(options.params).forEach((key: any) => {
                    paramsStr += `${key} = ${options.params[key]}&`
                })
            } else {
                paramsStr = ''
            }
            if (paramsStr !== '') {
                paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'));
                options.url = `${options.url}?${paramsStr}`
            }
            promise = axios.get(options.url);
        } else if (options.type.toUpperCase() === 'POST') {
            promise = axios.post(options.url, options.params);
        } else if (options.type.toUpperCase() === 'PUT') {
            promise = axios.put(options.url, qs.stringify(options.params));
        } else if (options.type.toUpperCase() === 'DELETE') {
            promise = axios.delete(options.url, options.params);
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