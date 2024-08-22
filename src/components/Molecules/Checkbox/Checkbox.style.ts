import { styled } from "styled-components";
import { Banner } from "../../Atoms/Banner/Banner";
import { Input } from "@/components/Atoms/Forms/Input/Input";

export const StyledLabel = styled.label`
  color: ${(props) => props.theme.palette.neutral.black};
  font-size: 12px;
  font-weight: bold;
  display: flex;
  gap: 1rem;
`;

export const StyledOptionWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  border: solid;
  border-width: ${(props) => (props.selected ? "2px" : "1px")};
  border-color: ${(props) => (props.selected ? "#d87d4a" : "#cfcfcf")};
  border-radius: 5px;
  padding: 1rem;
`;

export const StyledText = styled(Banner)`
  color: ${(props) => props.theme.palette.neutral.black};
  font-size: 12px;
  font-weight: bold;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const StyledRadioInput = styled(Input)<{ selected: boolean }>`
  border: 2px solid ${(props) => (props.selected ? "#d87d4a" : "#cfcfcf")};
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: grid;
  place-content: center;
  &:checked::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #d87d4a; /* Color of the dot */
  }
`;
