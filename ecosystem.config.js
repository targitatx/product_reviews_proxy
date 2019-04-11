module.exports = {
  apps: [{
    name: 'tutorial-2',
    script: './server/server.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-3-19-71-180.us-east-2.compute.amazonaws.com',
      key: '~/.ssh/dvcProductReviews.pem',
      ref: 'origin/master',
      repo: 'https://github.com/targitatx/product_reviews_proxy.git',
      path: '/home/ubuntu/product_reviews_proxy',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}