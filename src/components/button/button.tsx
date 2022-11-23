import { StyledButton, StyledSubmit } from "."
import { ButtonHTMLAttributes, ReactNode } from "react"

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  children: ReactNode
}

export const Button: React.FC<buttonProps> = ({ children, ...props }: buttonProps) => (
  <StyledButton{...props}>{children}</StyledButton>
)

export const Submit: React.FC<buttonProps> = ({ children, ...props }: buttonProps) => (
  <StyledSubmit{...props}>{children}</StyledSubmit>
)