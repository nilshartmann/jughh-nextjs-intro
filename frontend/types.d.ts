import "react";

declare module "react" {
  export interface CSSProperties {
    "--global-header-bg-image"?: string;
    "--article-bg-image"?: string;
  }
}
