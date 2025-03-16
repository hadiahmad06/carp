// var configure = require('react-figma-webpack-config');
// copy of config with entry points changed
const path  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');

module.exports = {
    entry: {
        ui: './app/ui.html',
        code: './app/code.tsx'
    },
    resolve: {
        extensions: ['.figma.tsx', '.figma.ts', 'figma.jsx', '.figma.js', '.tsx', '.ts', '.jsx', '.js'],
        alias: {
            'react-native$': 'react-figma'
        }
    },
    module: {
        rules: [
            // Converts TypeScript code to JavaScript
            { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

            // Enables including CSS by doing "import './file.css'" in your TypeScript code
            { test: /\.css$/, loader: [{ loader: 'style-loader' }, { loader: 'css-loader' }] },

            // Allows you to use "<%= require('./file.svg') %>" in your HTML code to get a data URI
            { test: /\.(png|jpg|gif|webp|zip)$/, loader: [{ loader: 'url-loader' }] },

            { test: /\.svg$/, loader: [{ loader: 'svg-inline-loader' }] }
        ]
    },

    output: {
        filename: '[name].js',
        path: path.resolve(process.cwd(), 'dist')
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/ui.html',
            filename: 'ui.html',
            inlineSource: '.(js)$',
            chunks: ['ui']
        }),
        new HtmlWebpackInlineSourcePlugin()
    ]
};

// module.exports = configure({
//     entry: {
//         ui: './app/ui.tsx',
//         code: './app/code.tsx'
//     },
//     resolve: {
//         alias: {
//             'react-native$': 'react-figma'
//         }
//     },
    // module: {
    //     rules: [
    //         // Rule for JavaScript files
    //         {
    //           test: /\.(js|jsx)$/,  // Match JavaScript files
    //           use: 'babel-loader',  // Use babel-loader to process them
    //           exclude: /node_modules/,
    //         },
    //         // Rule for TypeScript files
    //         {
    //           test: /\.(ts|tsx)$/,  // Match TypeScript files
    //           use: 'ts-loader',     // Use ts-loader to process them
    //           exclude: /node_modules/,
    //         },
    //         // Rule for CSS files
    //         {
    //           test: /\.css$/,  // Match CSS files
    //           use: ['style-loader', 'css-loader'],  // Use style-loader and css-loader to process them
    //         },
    //         // Additional rules can go here
    //       ],
    // }
// });