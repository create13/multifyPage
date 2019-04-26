import WTSHome from '../components/home'
import BoxContent from '../components/outBox/boxContent'
import MySubmitApproval from '../components/approval/mySubmitApproval'
let routes = [
    {path: '/Home', component: WTSHome, exact: true},
    {path: '/boxContent', component: BoxContent,routes: [
        {path: '/mySubmitApproval', component: MySubmitApproval}
    ]}
]
export default routes;