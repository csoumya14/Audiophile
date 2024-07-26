import { Dispatch, FC, SetStateAction, useRef } from "react";
import { StyledMenu, StyledOverlay } from "./NavBar.style";

import { useOnClickOutside } from "@/hooks/useOnClickOutside";
import { ProductLinkList } from "../ProductLinksList/ProductLinksList";



interface NavBarProps {
  toggleNav: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}

export const NavBar: FC<NavBarProps> = ({ setOpen, open, toggleNav }) => {
 
  const node = useRef<HTMLDivElement>(null);
  useOnClickOutside(node, () => setOpen(false));
  return (
    <>
    {open &&<StyledOverlay></StyledOverlay> }
    <StyledMenu open={open} ref={node}>
      <ProductLinkList toggleNav={toggleNav} />
    </StyledMenu>
    </>
  );
};