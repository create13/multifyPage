import {language} from '@/api/index'
const mulLanguage = (fileName: string) => {
    language({
        serviceName: 'wts',
        companyCode: 10001,
        lanType: fileName
    }).then((res: any) => {
        console.log('res', res)
    }).catch((err: any) => {
        console.log('err', err)
    })
}
export default mulLanguage;