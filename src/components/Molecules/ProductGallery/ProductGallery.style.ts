import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;

  .child {
    display: flex;
    padding-bottom: 1rem;
    position: relative;
    height: 10rem;
    border-radius: 0.5rem;
  }

  & > :nth-child(3) {
    height: 20rem;
  }
`;

