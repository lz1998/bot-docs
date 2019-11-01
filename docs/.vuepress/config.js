module.exports = {
    title: 'Bot 文档',
    description: 'QQ魔方机器人',
    themeConfig: {
        sidebar:[
            {
                title: '目录',
                children: [
                    '/function1/',
                    '/function2/'
                ]
            }
        ]
    },
    // TODO 打包后如果不部署在服务器上，直接本地打开html有问题，需要手动把/xxx改成xxx
    // configureWebpack: (config, isServer) => {
    //     config.output.publicPath='./'
    // }
}

