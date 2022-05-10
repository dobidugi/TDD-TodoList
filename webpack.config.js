const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/render/index.js",
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,                          // .js, .jsx로 끝나는 babel이 컴파일하게 할 모든 파일
                exclude: /node_module/,                 // node module 폴더는 babel 컴파일에서 제외
                use:[
                
                    {
                        loader: "babel-loader"				// babel loader가 파이프를 통해 js 코드를 불러옴
                    }
                ],
                
            },
            // CSS Module ([filename].module.css)
            {
                test: /\.module\.css$/i,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
            // style-loader, css-loader 구성
            {
                test: /\.css$/i,
                exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
                use: ["style-loader", "css-loader"],
            },
            // 이미지 파일 로더
            {
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[contenthash].[ext]",
                    },
                },
            },
        ]
    },
    resolve: {
        extensions: [ ".js", ".jsx"],  // import할때 확장자를 안붙여줘도됨 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"              
        }),
        new MiniCssExtractPlugin({
            filename: "app.css",
        }),
    ]

};