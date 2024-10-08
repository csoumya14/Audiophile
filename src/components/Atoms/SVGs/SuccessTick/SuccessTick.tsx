import { FC } from "react";
import { CustomSvgIcon, SvgIconProps } from "../CustomSVGIcons/CustomSvgIcons";

type Props = SvgIconProps & {
  primaryColor?: ColorGamut;
  color?: string;
  width?: string;
  height?: string;
};

export const SuccessTick: FC<Props> = ({ color, width, height }) => (
  <CustomSvgIcon viewBox="0 0 100 50" width={width} height={height} fill="none">
    <defs>
      <linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FF6A3A" />
        <stop offset="100%" stopColor="#FF527B" />
      </linearGradient>
    </defs>
    <g fill="none">
      <circle cx="32" cy="32" r="32" fill="url(#a)" />
      <path
        stroke="#FFF"
        strokeWidth="4"
        d="m18.286 34.686 8.334 7.98 19.094-18.285"
      />
    </g>
  </CustomSvgIcon>
);
