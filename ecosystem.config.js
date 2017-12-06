module.exports = {
  apps: [{
    name: 'Web',
    script: 'server.js'
  }],

  deploy: {
    production: {
      user: 'misena',
      host: '128.199.219.104',
      port: '2323',
      ref: 'origin/master',
      repo: 'git@github.com:le-binh/cqpbot_frontend.git',
      path: '/home/misena/web',
      'ssh_options': ['StrictHostKeyChecking=no', 'PasswordAuthentication=no'],
      'post-deploy': 'npm install && npm run build && pm2 startOrRestart ecosystem.config.js && source /home/misena/kill8080.sh'
    }
  }
}
