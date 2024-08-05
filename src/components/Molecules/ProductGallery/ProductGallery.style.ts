import { styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr
  grid-template-rows: 1fr 1fr 2fr;
  gap: 16px;
  width: 100%;
  @media (min-width: ${(props) => props.theme.mediaSize.md}) {
    grid-template-columns: 1f 1f;
    grid-template-rows: repeat(2,1fr);
    gap: 16px;
    width: 100%;
  }
`;

export const ImageContainer = styled.div`
  &:nth-child(1) {
    position: relative;
    grid-row: 1/2;
    height: 10rem;
    max-width: 100%;
    max-height: 100%;
    @media (min-width: ${(props) => props.theme.mediaSize.md}) {
      grid-column: 1;
      height: 15rem;
    }
  }
  &:nth-child(2) {
    position: relative;
    grid-row: 2/3;
    height: 10rem;
    max-width: 100%;
    max-height: 100%;
    @media (min-width: ${(props) => props.theme.mediaSize.md}) {
      grid-column: 1;
      height: 15rem;
    }
  }

  &:nth-child(3) {
    position: relative;
    grid-row: 3/4;
    max-width: 100%;
    max-height: 100%;
    min-height: 20rem;
    @media (min-width: ${(props) => props.theme.mediaSize.md}) {
      position: relative;
      grid-column: 2/3;
      grid-row: 1/3;
    }
  }
`;
