import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import HtmlWebpackPlugin from "html-webpack-plugin";

export function bildPlugins(paths: string, isDev: boolean): webpack.WebpackPluginInstance[] {
    return [
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
        })
      ]
}