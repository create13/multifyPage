import myAxios from './axios'
export const shopList = () => myAxios({url: 'api/shop', type: 'get', loading: true});
export const blueData = () => myAxios({url: 'http://mock-api.com/3Egd0XgM.mock/blueData.do', params:{name:'lee'}, type:'put',loading: false})
export const addData = () => myAxios({url: 'http://mock-api.com/3Egd0XgM.mock/addBlue.do', type:'delete',loading: false})