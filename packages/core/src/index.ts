import { Transport } from './transport'
import { MonitoringOptions } from './types'
export type { Transport } from './transport'
export type {Integration} from './types'
export type {MonitoringOptions} from './types'

// 通过插件体系设计并接入
// 获取当前传输层协议

export let getTransport: () => Transport | null = () => null

export class Monitor {
    private transport: Transport | null = null // 会在对应上报宿主环境中初始化
    constructor(private options: MonitoringOptions) {
        // 初始化插件体系
    }
    init(transport: Transport) {
        this.transport = transport // 完成宿主的传输协议初始化
        getTransport = () => this.transport

        // 按序注册插件
        this.options.integrations?.forEach(integration => {
            integration.init(transport)
        })
    }
    reportMessage(message: string) {
        this.transport?.send({type: 'message', message})
    }
    
    reportEvent(event: unknown) {
        this.transport?.send({type: 'event', event})
    }
}