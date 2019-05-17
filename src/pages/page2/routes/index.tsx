import DefaultHome from '../components/contentChild/defaultHome'
import MySubmitApproval from '../components/approval/mySubmitApproval'
import AnotherApproval from '../components/approval/anotherApproval'
import AttentionApproval from '../components/approval/attentionApproval'
import SubordinatesApproval from '../components/approval/subordinatesApproval'
import PageJump from '../components/approval/pageJump'
import FinishApproval from '../components/approval/finishApproval'
import NewsApproval from '../components/approval/newsApproval'
import RedirectProject from '../components/approval/redirectProject'
import TestTabs from '../components/approval/testTabs'
import NoMatch from '@/baseComponent/redirect/noMatch'
let routes = [
    {path: '/', component: DefaultHome, exact: true},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/anotherApproval/:id', component: AnotherApproval},
    {path: '/attentionApproval', component: AttentionApproval},
    {path: '/subordinatesApproval', component: SubordinatesApproval},
    {path: '/pageJump', component: PageJump},
    {path: '/finishApproval', component: FinishApproval, children: [
        // {path: '/finishApproval/newsApproval/:titleId', component: NewsApproval}
    ]},
    {path: '/redirectProject', component: RedirectProject},
    {path: '/testTabs', component: TestTabs},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/mySubmitApproval', component: MySubmitApproval},
    {path: '/newsApproval/:titleId', component: NewsApproval},
    {component: NoMatch}

]
export default routes;