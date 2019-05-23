interface socketLimit {
    url: string,
    port: string
}
interface ajaxOption {
    url: string,
    params?: any = {},
    type: string,
    loading: boolean
}