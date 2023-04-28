const path = require('path')

module.exports = {
  hooks: {
    'pre-commit': 'lint-staged',
  },
  config: {
    path: path.join(__dirname, '_'),
  },
}
