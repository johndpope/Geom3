const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./webpack/main');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'lib'),
};

const pkg = require('./package.json');

const fileName = 'geom3.js';
const minfileName = 'geom3.min.js';

const common =  {
  entry: {
    app: path.join(PATHS.app, 'main.js')
  },
  output: {
    path: PATHS.build,
    //filename: '[name].js',
    filename: fileName,
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]?[loaders]',
    library: 'Geom3',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: []
};

var config;

switch(process.env.npm_lifecycle_event) {
  case 'build':
    config = merge(
      common,
      parts.babel(PATHS.app),
      {
        devtool: 'source-map',
        output: {
          path: PATHS.build,
          filename: minfileName,
          //filename: '[name].[chunkhash].js',
          //chunkFilename: '[chunkhash].js'
        }
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable('process.env.NODE_ENV', 'production'),
      parts.minify()
    );
    break;
  default:
    config = merge(
      common,
      parts.eslint(PATHS.app),
      parts.babel(PATHS.app),
      parts.clean(PATHS.build),
      { devtool: 'eval-source-map' },
      parts.setFreeVariable('process.env.NODE_ENV', 'development')
    );
}

module.exports = validate(config);
