import { FC } from "react";
import { CustomSvgIcon, SvgIconProps } from "../CustomSVGIcons/CustomSvgIcons";


type Props = SvgIconProps & {
  primaryColor?: ColorGamut;
  color?: string;
};

export const Hamburger: FC<Props> = () => (
  <CustomSvgIcon viewBox="0 0 40 40" width="40" height="40" fill="none">
    <g id="Group">
      <rect id="Rectangle" width="16" height="3" fill="white" />
      <rect id="Rectangle Copy" y="6" width="16" height="3" fill="white" />
      <rect id="Rectangle Copy 2" y="12" width="16" height="3" fill="white" />
    </g>
  </CustomSvgIcon>
);
