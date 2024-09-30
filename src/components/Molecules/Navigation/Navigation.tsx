'use client';
import { FC, useState } from 'react';
import { Hamburger } from '../../Atoms/SVGs/Hamburger/Hamburger';
import {
  CartButton,
  Container,
  StyledNavLinks,
  StyledOpenCloseButton,
  Wrapper,
} from './Navigation.style';
import { AudioPhileText } from '@/components/Atoms/SVGs/AudioPhileText/AudioPhileText';
import { CartCount } from '../CartCount/CartCount';
import { Close } from '@/components/Atoms/SVGs/Close/Close';
import { NavBar } from '../NavBar/NavBar';
import { CartModal } from '../CartModal/CartModal';
import { useViewPort } from '@/hooks/customViewPort';

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [width] = useViewPort();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const toggleNav = () => {
    setOpen(!open);
  };
  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Wrapper>
      <NavBar toggleNav={toggleNav} setOpen={setOpen} open={open} />
      <StyledOpenCloseButton type="button" onClick={toggleNav}>
        {open ? <Close /> : <Hamburger />}
      </StyledOpenCloseButton>
      <AudioPhileText />
      {width > 990 && <StyledNavLinks />}
      <Container>
        {isModalOpen && <CartModal setModalOpen={setModalOpen} />}
        <CartButton type="button" onClick={toggleModal}>
          <CartCount />
        </CartButton>
      </Container>
    </Wrapper>
  );
};
