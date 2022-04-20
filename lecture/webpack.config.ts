const path = require('path');
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
    mode: 'development', //production
    devtool: 'eval', //hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js', '.tsx', '.ts']
    },

    entry: {
        app: './client'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            options: { plugins: ['react-refresh/babel'] }
        }, {
            test: /\.tsx?$/, //이 파일 확장자를 만나면 ts-laoder를 이용하여 로드하겠다
            loader: 'ts-loader',
            exclude: path.join(__dirname, 'node_modules')
        }],
    },
    plugins: [
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin()
    ],
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
};

export default config;