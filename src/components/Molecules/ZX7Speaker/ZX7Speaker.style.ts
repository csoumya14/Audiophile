import { Banner } from '@/components/Atoms/Banner/Banner';
import { CustomLink } from '@/components/Atoms/CustomLink/CustomLink';
import speakerImageMobile from '../../../../public/images/home/mobile/image-speaker-zx7.jpg';
import speakerImageTablet from '../../../../public/images/home/tablet/image-speaker-zx7.jpg';
import speakerImageDesktop from '../../../../public/images/home/desktop/image-speaker-zx7.jpg';
import { styled } from 'styled-components';

export const StyledHeading = styled(Banner)`
  font-size: ${props => props.theme.fontSizes.heading2.tablet};
  text-transform: uppercase;
  text-align: center;
  color: ${props => props.theme.palette.neutral.black};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 2rem;
  background: ${props => props.theme.palette.primary.grey};
  background-image: url(${speakerImageMobile.src});
  background-repeat: no-repeat;
  background-size: cover;
  gap: 2rem;
  background-attachment: scroll;
  border-radius: 0.5rem;
  padding: 6rem 1rem;
  align-items: flex-start;
  @media (min-width: ${props => props.theme.mediaSize.md}) {
    background-image: url(${speakerImageTablet.src});
    padding-left: 6rem;
  }
  @media (min-width: ${props => props.theme.mediaSize.lg}) {
    background-image: url(${speakerImageDesktop.src});
    padding-left: 6rem;
    margin: 1rem 7rem;
    background-position: 50% 50%;
  }
`;

export const StyledCustomLink = styled(CustomLink)`
  text-align: center;
  padding: 1rem 2rem;
  background:transparent
  color: ${props => props.theme.palette.neutral.black};
  border: 2px solid black;
  text-decoration: none;
  text-transform: uppercase;
`;
