import { Metrics } from '@cato-monitor-platform/browser-utils'
import { Errors } from './integrations/errorsIntegration'
import { BrowserTransport } from './transport'
import {Monitor, type Integration, type MonitoringOptions} from '@cato-monitor-platform/core'



export function init(options: MonitoringOptions) {
    const monitoring = new Monitor(options)
    const transport = new BrowserTransport(options.dsn)
    monitoring.init(transport)

    new Errors(transport).init()
    new Metrics(transport).init()
    return monitoring
}
