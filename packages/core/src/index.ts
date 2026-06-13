export function init() {
    // 错误监控指标采集
    window.addEventListener('error', (event) => {
       console.log('error', event)
    })
    // 对于异步数据指标采集
    window.addEventListener('unhandledrejection', (event) => {
        console.log('unhandledrejection', event)
    })
    // 对于性能采集
    new PerformanceObserver((list) => {
       for(const entry of list.getEntries()){
        console.log('performance', entry)
       }
    }).observe({entryTypes: ['resource']})
}