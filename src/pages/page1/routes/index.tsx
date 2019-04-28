import WTSHome from '../components/home'
import BoxContent from '../components/outBox/boxContent'
import DefaultHome from '../components/contentChild/defaultHome'
import MySubmitApproval from '../components/approval/mySubmitApproval'
let routes = [
    {path: '/WTSHome', component: WTSHome, exact: true},
    {path: '/', component: DefaultHome},
    {path: '/boxContent', component: BoxContent,
    children: [
            {path: '/mySubmitApproval', component: MySubmitApproval}
        ]
    }
]
export default routes;