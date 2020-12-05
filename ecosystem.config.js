// pm2 config

module.exports = {
    apps: [
        {
            script: 'src/index.js',
            watch: '.',
        },
        {
            script: './service-worker/',
            watch: ['./service-worker'],
        },
    ],
}
