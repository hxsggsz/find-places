import { forwardRef, InputHTMLAttributes, ReactNode, RefAttributes, RefObject } from "react"
import { StyledError, StyledInputContent, StyledInputRoot, StyledLabel } from "."

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  children: ReactNode
}

interface InputContentProps extends InputHTMLAttributes<HTMLInputElement> { }

const InputContent = forwardRef<HTMLInputElement, InputContentProps>(function InputContent({ ...props }: InputContentProps, ref) {
  return (
    <StyledInputContent {...props} ref={ref} />
  );
});
const InputRoot: React.FC<InputProps> = ({ children }: InputProps) => {
  return (
    <StyledInputRoot>{children}</StyledInputRoot>
  )
}

// const InputContent: React.FC<InputContentProps> = ({ ...props }: InputContentProps) => {
//   return (
//     <StyledInputContent {...props} />
//   )
// }

const InputLabel: React.FC<InputProps> = ({ children }: InputProps) => {
  return (
    <StyledLabel>{children}</StyledLabel>
  )
}

const ErrorMessage: React.FC<InputProps> = ({ children }: InputProps) => {
  return (
    <StyledError>{children}</StyledError>
  )
}

export const Input = {
  Root: InputRoot,
  Content: InputContent,
  Label: InputLabel,
  Error: ErrorMessage
}