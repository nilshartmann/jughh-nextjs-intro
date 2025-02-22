import "./ArticleBannerWrapper.css";

import { ReactNode } from "react";

type ArticleBannerWrapperProps = {
  backgroundImageUri?: string;
  children?: ReactNode;
};

export default function ArticleBannerWrapper({
  backgroundImageUri,
  children,
}: ArticleBannerWrapperProps) {
  return (
    <div
      style={{
        "--article-bg-image": `url('${backgroundImageUri}')`,
      }}
    >
      <div className={`ecolify-header-wrap mt-8 px-12 py-8`}>{children}</div>
    </div>
  );
}
