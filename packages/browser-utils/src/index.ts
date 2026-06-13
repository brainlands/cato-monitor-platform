import { Metrics } from './integrations/metrcs'

export { Metrics }
// 获取浏览器信息
export type BrowserInfo = {
    userAgent: string
    platform: string
    referrer: string
    path: string
}
export function getBrowserInfo(): BrowserInfo {
    return {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        referrer: document.referrer,
        path: location.pathname,
    }
}
