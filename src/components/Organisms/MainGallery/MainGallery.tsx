import { FC } from "react";
import { Container } from "./MainGallery.style";
import { ZX9Speaker } from "@/components/Molecules/ZX9Speaker/ZX9Speaker";
import { ZX7Speaker } from "@/components/Molecules/ZX7Speaker/ZX7Speaker";
import { YX1Earphones } from "@/components/Molecules/YX1Earphones/YX1Earphones";

interface MainGalleryProps {}
export const MainGallery: FC<MainGalleryProps> = () => {
  return (
    <Container>
      <ZX9Speaker />
      <ZX7Speaker />
      <YX1Earphones />
    </Container>
  );
};
