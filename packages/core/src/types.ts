import { Transport } from './transport'

export default interface IIntegration {
    init(transport: Transport): void
}
export class Integration implements IIntegration {
    private transport: Transport | null = null
    init(transport: Transport) {
        // 初始化插件体系
        this.transport = transport
    }
}

/**
 * 监控相关配置
 */

export interface MonitoringOptions {
    dsn: string
    integrations?: IIntegration[]
}
