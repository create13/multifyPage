// import WTSHome from '../components/home'
import BoxContent from '../components/outBox/boxContent'
import DefaultHome from '../components/contentChild/defaultHome'
import MySubmitApproval from '../components/approval/mySubmitApproval'
let routes = [
    {path: '/', component: DefaultHome, exact: true},
    {path: '/boxContent', component: BoxContent},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/mySubmitApproval', component: MySubmitApproval}
]
export default routes;