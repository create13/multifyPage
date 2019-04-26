import WTSHome from '../components/home'
import MySubmitApproval from '../components/approval/mySubmitApproval'
let routes = [
    {path: '/Home', component: WTSHome, exact: true},
    {path: '/MySubmitApproval', component: MySubmitApproval}
]
export default routes;