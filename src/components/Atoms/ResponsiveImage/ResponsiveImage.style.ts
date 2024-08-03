import { styled } from "styled-components";
import Image from "next/image";

export const Picture = styled.picture`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const StyledImage = styled(Image)`
  max-width: 100%;
  max-height: 100%;
`;
