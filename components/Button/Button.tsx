import * as React from "react"
import Link from "next/link"
import { Button as ShadcnButton, ButtonProps as ShadcnButtonProps } from "../ui/button"

export interface ButtonProps extends ShadcnButtonProps {
  href?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ href, ...props }, ref) => {
    if (href) {
      return (
        <Link href={href}>
          <ShadcnButton ref={ref} {...props} />
        </Link>
      )
    }
    
    return <ShadcnButton ref={ref} {...props} />
  }
)
Button.displayName = "Button"

export { Button }