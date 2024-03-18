import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { buildCSSLoaders } from "./loaders/buildCSSLoaders";





export function buildLoaders(isDev: boolean): webpack.RuleSetRule[] {
    const typeScriptLoader = {
        test: /\.tsx?$/,
        use: [
            {
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
        exclude: /node_modules/,
    };

    const sacssLoader = buildCSSLoaders(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }

    const babelLoader = {
        test: /\.(js?x|ts?x)$/,
        exclude: /node_modules/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }

    return [
        svgLoader, 
        fileLoader,
        babelLoader,
        typeScriptLoader, 
        sacssLoader, 
    ];
}
