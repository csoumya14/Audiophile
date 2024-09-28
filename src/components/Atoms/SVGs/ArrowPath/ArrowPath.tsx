import { FC } from 'react';
import { CustomSvgIcon, SvgIconProps } from '../CustomSVGIcons/CustomSvgIcons';

type Props = SvgIconProps & {
  primaryColor?: ColorGamut;
  color?: string;
};

export const ArrowPath: FC<Props> = ({ color }) => (
  <CustomSvgIcon viewBox="0 0 16 13" width="16" height="16" fill="none">
    <path id="Path 2" d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" strokeWidth="2" />
  </CustomSvgIcon>
);
