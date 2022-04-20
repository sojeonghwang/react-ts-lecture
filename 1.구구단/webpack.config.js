const path = require('path');
const webpack = require('webpack');

module.exports = {
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
            test: /\.tsx?$/, //이 파일 확장자를 만나면 ts-laoder를 이용하여 로드하겠다
            loader: 'ts-loader'
        }],
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist')
    }
};