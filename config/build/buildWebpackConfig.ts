import webpack from 'webpack'

import { BuildOptions } from "./types/config";
import { buildLoaders } from './builLoaders';
import { buildResolvers } from './buildResolvers';
import { bildPlugins } from './buildPlugins';
import { buildDevServer } from './buildDevAerver';



export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options

    return {
        mode,
        module: {
            rules: buildLoaders(isDev),
        },
        resolve: buildResolvers(options),
        entry: paths.entry,
        output: {
            filename: '[name].[contenthash].js',
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? 'inline-source-map' : undefined,
        plugins: bildPlugins(paths.html, isDev),
        devServer: isDev ? buildDevServer(options) : undefined
      }
}