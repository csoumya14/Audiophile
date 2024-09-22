import { styled } from 'styled-components';
import { CustomLink } from '../../Atoms/CustomLink/CustomLink';
import Image from 'next/image';

export const StyledProductBox = styled.div`
  background-color: ${props => props.theme.palette.primary.grey};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  position: relative;
  padding: 1rem 0rem;
  border-radius: 0.5rem;
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  color: ${props => props.theme.palette.neutral.black};
  text-decoration: none;
  text-transform: uppercase;
  font-size: 13px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledSpan = styled.span`
  text-transform: uppercase;
  margin-top: 4rem;
  font-weight: bold;
`;

export const StyledImage = styled(Image)`
  position: absolute;
  transform: translate(0%, -50%);
`;
