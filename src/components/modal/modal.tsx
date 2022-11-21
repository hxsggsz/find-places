import { ReactNode } from "react";
import { StyledBody, StyledContainer, StyledIcon, StyledRoot, StyledTitle } from ".";

interface modalProps {
  children: ReactNode
}
// interface IconProps {
//   children: ReactNode
//   title: string
// }

const modalRoot: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledRoot>{children}</StyledRoot>
)

const modalContainer: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledContainer>{children}</StyledContainer>
)

const modalTitle: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledTitle>{children}</StyledTitle>
)

const modalIcon: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledIcon>{children}</StyledIcon>
)

const modalBody: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledBody>{children}</StyledBody>
)

export const Modal = {
  Root: modalRoot,
  Container: modalContainer,
  Title: modalTitle,
  Icon: modalIcon,
  Body: modalBody,
}