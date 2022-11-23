import { modalProps, IconProps } from "./types";
import { StyledBody, StyledContainer, StyledIcon, StyledRoot, StyledTitle } from ".";

const modalRoot: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledRoot>{children}</StyledRoot>
)

const modalContainer: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledContainer>{children}</StyledContainer>
) 

const modalTitle: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledTitle>{children}</StyledTitle>
)

export const ModalIcon: React.FC<IconProps> = ({ children, ...props }: IconProps) => (
  <StyledIcon{...props}>{children}</StyledIcon>
)

const modalBody: React.FC<modalProps> = ({ children }: modalProps) => (
  <StyledBody>{children}</StyledBody>
)

export const Modal = {
  Root: modalRoot,
  Container: modalContainer,
  Title: modalTitle,
  Icon: ModalIcon,
  Body: modalBody,
}