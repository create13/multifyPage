import DefaultHome from '../components/contentChild/defaultHome'
import MySubmitApproval from '../components/approval/mySubmitApproval'
import AnotherApproval from '../components/approval/anotherApproval'
import AttentionApproval from '../components/approval/attentionApproval'
import SubordinatesApproval from '../components/approval/subordinatesApproval'
import PageJump from '../components/approval/pageJump'
import FinishApproval from '../components/approval/finishApproval'
let routes = [
    {path: '/', component: DefaultHome, exact: true},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/anotherApproval', component: AnotherApproval},
    {path: '/attentionApproval', component: AttentionApproval},
    {path: '/subordinatesApproval', component: SubordinatesApproval},
    {path: '/pageJump', component: PageJump},
    {path: '/finishApproval', component: FinishApproval},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/mySubmitApproval', component: MySubmitApproval}
]
export default routes;