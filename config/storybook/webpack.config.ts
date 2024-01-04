import webpack, { RuleSetRule } from "webpack"
import  {BuildPath } from "../build/types/config";
import path from "path";
import { buildCSSLoaders } from "../build/loaders/buildCSSLoaders";

export default ({config}: {config: webpack.Configuration}) => {
    const paths: BuildPath = {
        build: "",
        entry: "",
        html: "",
        src: path.resolve(__dirname, "..", "..", "src")
    }

    if (config.module?.rules) {
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule | "...") => {
            if (rule !== "..." && /svg/.test(rule.test as string)) {
                return { ...rule, exclude: /\.svg$/i };
            }
        
            return rule;
        });
    } 
    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push("ts", "tsx")
    config.module?.rules?.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });
    config.module?.rules?.push(buildCSSLoaders(true))
    
    return config;

}