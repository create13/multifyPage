import DefaultHome from '@/pages/openapi/views/contentChild/defaultHome'
import DocumentCenter from '@/pages/openapi/views/approval/documentCenter'
import ErrorCode from '@/pages/openapi/views/approval/errorCode'
import TypeDetails from '@/pages/openapi/views/approval/typeDetails'
import NoMatch from '@/baseComponent/redirect/noMatch'
// import TypeDescription from '@/pages/openapi/views/approval/typeDescription'
import TypeFixed from '@/pages/openapi/views/approval/typeFixed'
import ClaimList from '@/pages/openapi/views/approval/claimList'
import TabsControl from '@/pages/openapi/views/approval/tabsControl'
import ApiTest from '@/pages/openapi/views/approval/apiTest'
import Main from '../views/main'
import ApiDocument from '@/pages/openapi/views/approval/apiDocument'
import CustomField from '@/pages/openapi/views/approval/customField'
import SdkDirections from '@/pages/openapi/views/approval/sdkDirections'
import ExportInterface from '@/pages/openapi/views/export/exportInterface'
let routes = [
    {path: '/apiTest/:apiId/:projectId', component: ApiTest},
    {path: '/', component: Main, children:[
        {path: '/', component: DefaultHome, exact: true},
        {path: '/documentCenter', component: DocumentCenter},
        {path: '/sdkDirections', component: SdkDirections},
        {path: '/errorCode/:errorId', component: ErrorCode},
        // {path: '/typeDescription', component: TypeDescription},
        {path: '/apiDocument/:apiId', component: ApiDocument},
        {path: '/claimList', component: ClaimList},
        {path: '/tabsControl', component: TabsControl},
        {path: '/typeDetails/:typeId/:moduleId', component: TypeDetails},
        {path: '/typeFixed', component: TypeFixed},
        {path: '/customField/:customId/:customType/:customDes/:moduleName', component: CustomField},
        {path: '/exportInterface', component: ExportInterface}
    ]},
    {component: NoMatch}

]
export default routes;