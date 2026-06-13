import { getBrowserInfo } from "@cato-monitor-platform/browser-utils";
import { Transport } from "@cato-monitor-platform/core";

export class BrowserTransport implements Transport {
    constructor(private dsn: string) {
        // 初始化浏览器信息
    }
    send(data: Record<string, unknown>) {
        console.log('BrowserTransport data', data)
        const browserInfo = getBrowserInfo()
        const payload = {
            ...data,
            ...browserInfo,
        }
        fetch(this.dsn, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).catch((err) => {
            console.error('BrowserTransport send error', err)
        })
    }
}