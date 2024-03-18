declare module "*.scss" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

// declare module '*.module.scss' {
//   const styles: { [className: string]: string };
//   export default styles;
// }
// declare module "*.module.css";
// declare module "*.module.scss";

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
// declare module "*.svg" {
//   import type React from "react";

//   const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
//   export default SVG;
// }

declare module "*.svg" {
  const content: string;
  export default content;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;


type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;