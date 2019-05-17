import DefaultHome from '#/page1/components/contentChild/defaultHome'
import MySubmitApproval from '#/page1/components/approval/mySubmitApproval'
import AnotherApproval from '#/page1/components/approval/anotherApproval'
import AttentionApproval from '#/page1/components/approval/attentionApproval'
import SubordinatesApproval from '#/page1/components/approval/subordinatesApproval'
import PageJump from '#/page1/components/approval/pageJump'
import FinishApproval from '#/page1/components/approval/finishApproval'
import NewsApproval from '#/page1/components/approval/newsApproval'
import RedirectProject from '#/page1/components/approval/redirectProject'
import TestTabs from '#/page1/components/approval/testTabs'
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