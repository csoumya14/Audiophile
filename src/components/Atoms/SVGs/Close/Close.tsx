import { FC } from "react";
import { CustomSvgIcon, SvgIconProps } from "../CustomSVGIcons/CustomSvgIcons";

type Props = SvgIconProps & {
  primaryColor?: ColorGamut;
  color?: string;
};

export const Close: FC<Props> = () => (
  <CustomSvgIcon viewBox="0 0 40 40" width="40" height="40" fill="none">
    <g fill="#D0D6F9" fillRule="evenodd">
      <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
      <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
    </g>
  </CustomSvgIcon>
);
