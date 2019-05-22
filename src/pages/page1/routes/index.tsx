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
import TestPage2 from '#/page2/components/testPage2'
import Loading from '@/baseComponent/outBox/loading'
import Login from '../components/login'
import Main from '../components/main'
let routes = [
    {path: '/login', component: Login},
    {path: '/main', component: Main, children:[
        {path: '/main', component: DefaultHome, exact: true},
        {path: '/main/mySubmitApproval', component: MySubmitApproval},
        {path: '/main/anotherApproval', component: AnotherApproval},
        {path: '/main/attentionApproval', component: AttentionApproval},
        {path: '/main/subordinatesApproval', component: SubordinatesApproval},
        {path: '/main/pageJump', component: PageJump},
        {path: '/main/finishApproval', component: FinishApproval},
        {path: '/main/redirectProject', component: RedirectProject},
        {path: '/main/testTabs', component: TestTabs},
        {path: '/main/testPage2', component: TestPage2},
        {path: '/main/loading', component: Loading},
        {path: '/main/newsApproval/:titleId', component: NewsApproval},
    ]},
    {component: NoMatch}

]
export default routes;