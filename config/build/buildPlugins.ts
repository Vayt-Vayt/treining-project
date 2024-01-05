import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin";
import ReaactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function bildPlugins(paths: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    const plugin = [
        new HtmlWebpackPlugin({
            template: paths
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        }),
       
    ]

    if (isDev) {
        plugin.push(new webpack.HotModuleReplacementPlugin())
        plugin.push(new ReaactRefreshWebpackPlugin())
        plugin.push( new BundleAnalyzerPlugin({
            openAnalyzer: false
        }),)
    }

    return plugin
}