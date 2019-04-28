import WTSHome from '../components/home'
import BoxContent from '../components/outBox/boxContent'
import DefaultHome from '../components/contentChild/defaultHome'
import MySubmitApproval from '../components/approval/mySubmitApproval'
let routes = [
    {path: '/WTSHome', component: WTSHome, exact: true},
    {path: '*', component: BoxContent},
    {path: '/boxContent', component: BoxContent,
        routes: [
            {path: '/boxContent', component: DefaultHome},
            {path: '/mySubmitApproval', component: MySubmitApproval}
        ]
    }
]
export default routes;