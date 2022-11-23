import { ReactNode, ButtonHTMLAttributes } from "react"

export interface modalProps {
  children: ReactNode
}
export interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}