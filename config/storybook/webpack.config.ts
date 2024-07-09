import path  from "path";
import webpack, { DefinePlugin, RuleSetRule } from "webpack"
import  {BuildPath } from "../build/types/config";
import { buildCSSLoaders } from "../build/loaders/buildCSSLoaders";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }

    // if (config!.resolve!.modules) {
    //     config!.resolve!.modules = [
    //         path.resolve(__dirname, '../../src'),
    //         'node_modules',
    //     ];
    // }

    // if (config.resolve) {
    //     config.resolve.modules = [ paths.src, "node_modules" ]
    // }
    
    // config!.resolve!.modules!.push(paths.src)
    // config!.resolve!.modules!.push('node_modules')
    // config!.resolve!.extensions!.push('.ts', '.tsx');
  
    // config.module?.rules?.push({
    //     test: /\.svg$/,
    //     use: ['@svgr/webpack'],
    // });
    // config.module?.rules?.push(buildCSSLoaders(true))
    
    // config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule | '...') => {
    //     if (rule === '...' && /svg/.test(rule.test as string)) {
    //         return { ...rule, exclude: /\.svg$/i };
    //     }
        
    //     return rule;
    // })
 
    // config.plugins?.push(
    //     new DefinePlugin({
    //         __IS_DEV__: true,
    //         __API__: ""

    //     })
    // );
     
    
    
    // return config;


    if (config.resolve) {
        config.resolve.modules = [ paths.src, "node_modules" ]
    }
    
    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
        
            return rule;
        });
    } 
    
    // config.resolve?.modules?.push(paths.src)
    // config.resolve?.modules?.push('node_modules')
    config.plugins?.push(
        new DefinePlugin({
            __IS_DEV__: true,
            __API__: ""

        })
    );
    config.resolve?.extensions?.push("ts", "tsx")
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCSSLoaders(true))
    
    return config;

}