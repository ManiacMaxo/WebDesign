module.exports = {
    name: 'bagun website',
    script: 'src/index.ts',
    watch: true,
    exp_backoff_restart_delay: 100,
    env: {
        NODE_ENV: 'production'
    }
}
