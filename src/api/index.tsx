import myAxios from './axios'
export const shopList = () => myAxios({url: 'api/shop', type: 'get', loading: true});
