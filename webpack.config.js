import  webpack from 'webpack';
import path from 'path';

let BUILD_DIR = path.resolve(__dirname, 'public/js');
let APP_DIR = path.resolve(__dirname, 'src');

let config = {

    entry : APP_DIR + '/main.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'main.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                exclude : /node_modules/,
                loader : 'babel'
            }
            
        ]
    }
};

module.exports = config;